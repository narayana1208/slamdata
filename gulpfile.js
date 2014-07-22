var gulp = require('gulp')
  , compass = require('gulp-compass')
  , concat = require('gulp-concat')
  , es = require('event-stream')
  , fs = require('fs')
  , nwBuilder = require('node-webkit-builder')
  , path = require('path')
  , purescript = require('gulp-purescript')
  , rimraf = require('rimraf')
  , runSequence = require('run-sequence')
  ;

// Configuration.
paths = {
    src: [ 'src/**/*.purs'
         , 'bower_components/purescript-*/src/**/*.purs'
         , 'bower_components/purescript-*/src/**/*.purs.hs'
         ],
    dest: 'js',
    style: 'style/**/*.scss',
    css: 'css',
    imgs: 'imgs/*',
    build: {
        browser: {
            css: 'bin/browser/css',
            dest: 'bin/browser',
            fonts: 'bin/browser/fonts',
            imgs: 'bin/browser/imgs',
            index: 'bin/browser',
            js: 'bin/browser/js'
        },
        'node-webkit': {
            css: 'bin/node-webkit/css',
            dest: 'bin/node-webkit',
            fonts: 'bin/node-webkit/fonts',
            imgs: 'bin/node-webkit/imgs',
            index: 'bin/node-webkit',
            jar: 'bin/node-webkit/jar',
            js: 'bin/node-webkit/js'
        }
    },
    concat: {
        css: [ 'bower_components/c3/c3.css'
             , 'bower_components/entypo/font/entypo.css'
             , 'bower_components/fontawesome/css/font-awesome.css'
             ],
        entypo: [ 'bower_components/entypo/font/entypo.eot'
                , 'bower_components/entypo/font/entypo.svg'
                , 'bower_components/entypo/font/entypo.ttf'
                , 'bower_components/entypo/font/entypo.woff'
                ],
        fonts: ['bower_components/fontawesome/fonts/*'],
        js: [ 'bower_components/jquery/dist/jquery.js'
            , 'bower_components/c3/c3.js'
            , 'bower_components/d3/d3.js'
            , 'bower_components/fastclick/lib/fastclick.js'
            , 'bower_components/foundation/js/foundation.js'
            , 'bower_components/modernizr/modernizr.js'
            , 'bower_components/node-uuid/uuid.js'
            , 'bower_components/oboe/dist/oboe-browser.js'
            , 'bower_components/react/react-with-addons.js'
            , 'bower_components/showdown/src/showdown.js'
            , 'js/slamdata.js'
            ]
    },
    copy : {
        browser: ['lib/browser/index.html'],
        'node-webkit': [ 'lib/node-webkit/js/**/*'
                       , 'lib/node-webkit/index.html'
                       , 'lib/node-webkit/package.json'
                       ]
    },
    lib: {
        'node-webkit': {
            js: 'lib/node-webkit/js',
            src: [ 'lib/node-webkit/src/**/*.purs'
                 , 'lib/node-webkit/bower_components/purescript-*/src/**/*.purs'
                 ]
        }
    }
}

options = {
    build: {
        css: 'slamdata.css',
        index: 'index.html',
        js: 'slamdata.js',
        main: 'SlamData'
    },
    compile: {
        main: 'SlamData',
        output: 'slamdata.js'
    },
    copy: {
        browser: {
            base: 'lib/browser'
        },
        'node-webkit': {
            base: 'lib/node-webkit'
        }
    },
    lib: {
        'node-webkit': {
            main: 'SlamData.SlamEngine',
            output: 'slamengine.js'
        }
    }
}

// Functions.
function clean(path) {
    return function(done) {
        rimraf(path, done);
    }
}

function concatJs(target) {
    return function() {
        return gulp.src(paths.concat.js)
            .pipe(concat(options.build.js))
            .pipe(gulp.dest(paths.build[target].js));
    }
};

function concatCss(target) {
    var fa = gulp.src(paths.concat.css);
    var styles = gulp.src(paths.style)
        .pipe(compass({
            import_path: '.',
            project: __dirname,
            sass: 'style'
        }));

    return function() {
        return es.concat(fa, styles)
            .pipe(concat(options.build.css))
            .pipe(gulp.dest(paths.build[target].css));
    }
};

function copy(target) {
    return function() {
        return gulp.src(paths.copy[target], options.copy[target])
            .pipe(gulp.dest(paths.build[target].dest));
    }
}

function fonts(target) {
    return function() {
        return gulp.src(paths.concat.fonts)
            .pipe(gulp.dest(paths.build[target].fonts));
    }
};

function entypo(target) {
    return function() {
        return gulp.src(paths.concat.entypo)
            .pipe(gulp.dest(paths.build[target].css));
    }
};

function imgs(target) {
    return function() {
        return gulp.src(paths.imgs)
            .pipe(gulp.dest(paths.build[target].imgs));
    }
};

function sequence () {
    var args = [].slice.call(arguments);
    return function(done) {
        runSequence.apply(null, args.concat(done));
    }
}

// Workhorse tasks.
gulp.task('clean-build', clean('bin'));
gulp.task('clean-dist', clean('dist'));
gulp.task('clean-sass', clean(paths.css));

gulp.task('compile', function() {
    // We need this hack for now until gulp does something about
    // https://github.com/gulpjs/gulp/issues/71
    var psc = purescript.psc(options.compile);
    psc.on('error', function(e) {
        console.error(e.message);
        psc.end();
    });
    return gulp.src(paths.src)
        .pipe(purescript.psc(options.compile))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('compile-node-webkit', function() {
    return gulp.src(paths.lib['node-webkit'].src)
        .pipe(purescript.psc(options.lib['node-webkit']))
        .pipe(gulp.dest(paths.lib['node-webkit'].js));
});

gulp.task('sass', ['clean-sass'], function() {
    return gulp.src(paths.style)
        .pipe(compass({
            import_path: '.',
            project: __dirname,
            sass: 'style'
        }))
        .pipe(gulp.dest(paths.css));
});

gulp.task('slamengine-jar', function() {
    return gulp.src('../slamengine/target/scala-2.10/slamengine_2.10-0.1-SNAPSHOT-one-jar.jar')
        .pipe(gulp.dest(paths.build['node-webkit'].jar));
});

gulp.task('concat-css-browser', concatCss('browser'));
gulp.task('concat-js-browser', concatJs('browser'));
gulp.task('copy-browser', copy('browser'));
gulp.task('entypo-browser', entypo('browser'));
gulp.task('fonts-browser', fonts('browser'));
gulp.task('imgs-browser', imgs('browser'));

gulp.task('concat-css-node-webkit', concatCss('node-webkit'));
gulp.task('concat-js-node-webkit', concatJs('node-webkit'));
gulp.task('copy-node-webkit', copy('node-webkit'));
gulp.task('entypo-node-webkit', entypo('node-webkit'));
gulp.task('fonts-node-webkit', fonts('node-webkit'));
gulp.task('imgs-node-webkit', imgs('node-webkit'));

gulp.task('build-browser', [ 'concat-css-browser'
                           , 'concat-js-browser'
                           , 'copy-browser'
                           , 'entypo-browser'
                           , 'fonts-browser'
                           , 'imgs-browser'
                           ]);
gulp.task('build-node-webkit', sequence( 'compile-node-webkit'
                                       , [ 'concat-css-node-webkit'
                                         , 'concat-js-node-webkit'
                                         , 'copy-node-webkit'
                                         , 'entypo-node-webkit'
                                         , 'fonts-node-webkit'
                                         , 'imgs-node-webkit'
                                         , 'slamengine-jar'
                                         ]
                                       ));

gulp.task('dist-node-webkit', function() {
    nw = new nwBuilder({
        buildDir: 'dist',
        files: 'bin/node-webkit/**',
        macIcns: 'imgs/slamdata.icns',
        platforms: ['linux64', 'osx', 'win'],
        winIco: 'imgs/slamdata.ico'
    });
    return nw.build().then(function() {
        fs.renameSync(
            'dist/SlamData/linux64/nw',
            'dist/SlamData/linux64/SlamData'
        );
        fs.renameSync(
            'dist/SlamData/osx/node-webkit.app',
            'dist/SlamData/osx/SlamData.app'
        );
        fs.renameSync(
            'dist/SlamData/win/nw.exe',
            'dist/SlamData/win/SlamData.exe'
        );
    });
});

// Main tasks.
gulp.task('build', sequence( ['clean-build', 'compile']
                           , ['build-browser', 'build-node-webkit']
                           ));
gulp.task('default', ['compile', 'sass']);
gulp.task('dist', sequence(['build', 'clean-dist'], 'dist-node-webkit'));
gulp.task('test', ['build']);
gulp.task('watch', function() {
    gulp.watch(paths.src, ['compile']);
    gulp.watch(paths.style, ['sass']);
});
