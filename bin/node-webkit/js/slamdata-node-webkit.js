var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    var Unit = {
        create: function (value) {
            return value;
        }
    };
    function LT() {

    };
    LT.value = new LT();
    function GT() {

    };
    GT.value = new GT();
    function EQ() {

    };
    EQ.value = new EQ();
    function Semigroupoid($less$less$less) {
        this["<<<"] = $less$less$less;
    };
    function Category(__superclass_Prelude$dotSemigroupoid_0, id) {
        this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
        this.id = id;
    };
    function Show(show) {
        this.show = show;
    };
    function Functor($less$dollar$greater) {
        this["<$>"] = $less$dollar$greater;
    };
    function Apply($less$times$greater, __superclass_Prelude$dotFunctor_0) {
        this["<*>"] = $less$times$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    function Applicative(__superclass_Prelude$dotApply_0, pure) {
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
        this.pure = pure;
    };
    function Alternative($less$bar$greater, empty) {
        this["<|>"] = $less$bar$greater;
        this.empty = empty;
    };
    function Bind($greater$greater$eq, __superclass_Prelude$dotApply_0) {
        this[">>="] = $greater$greater$eq;
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    };
    function Monad(__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
        this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
        this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
    };
    function Num($percent, $times, $plus, $minus, $div, negate) {
        this["%"] = $percent;
        this["*"] = $times;
        this["+"] = $plus;
        this["-"] = $minus;
        this["/"] = $div;
        this.negate = negate;
    };
    function Eq($div$eq, $eq$eq) {
        this["/="] = $div$eq;
        this["=="] = $eq$eq;
    };
    function Ord(__superclass_Prelude$dotEq_0, compare) {
        this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
        this.compare = compare;
    };
    function Bits($amp, $up, complement, shl, shr, zshr, $bar) {
        this["&"] = $amp;
        this["^"] = $up;
        this.complement = complement;
        this.shl = shl;
        this.shr = shr;
        this.zshr = zshr;
        this["|"] = $bar;
    };
    function BoolLike($amp$amp, not, $bar$bar) {
        this["&&"] = $amp$amp;
        this.not = not;
        this["||"] = $bar$bar;
    };
    function Semigroup($less$greater) {
        this["<>"] = $less$greater;
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function showStringImpl(s) {  return JSON.stringify(s);};
    function showNumberImpl(n) {  return n.toString();};
    function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
    function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
    function eqArrayImpl(f) {  return function(xs) {    return function(ys) {      if (xs.length !== ys.length) return false;      for (var i = 0; i < xs.length; i++) {        if (!f(xs[i])(ys[i])) return false;      }      return true;    };  };};
    function unsafeCompareImpl(lt) {  return function (eq) {    return function (gt) {      return function (x) {        return function (y) {          return x < y ? lt : x > y ? gt : eq;        };      };    };  };};
    function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
    function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
    function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
    function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
    function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
    function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
    function numComplement(n) {  return ~n;};
    function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
    function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
    function boolNot(b) {  return !b;};
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
    var $bar$bar = function (dict) {
        return dict["||"];
    };
    var $bar = function (dict) {
        return dict["|"];
    };
    var $up = function (dict) {
        return dict["^"];
    };
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $eq$eq = function (dict) {
        return dict["=="];
    };
    var $less$bar$greater = function (dict) {
        return dict["<|>"];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $greater$greater$greater = function (__dict_Semigroupoid_0) {
        return function (f) {
            return function (g) {
                return $less$less$less(__dict_Semigroupoid_0)(g)(f);
            };
        };
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    var $colon = cons;
    var $div$eq = function (dict) {
        return dict["/="];
    };
    var $div = function (dict) {
        return dict["/"];
    };
    var $minus = function (dict) {
        return dict["-"];
    };
    var $plus$plus = function (__dict_Semigroup_1) {
        return $less$greater(__dict_Semigroup_1);
    };
    var $plus = function (dict) {
        return dict["+"];
    };
    var $times = function (dict) {
        return dict["*"];
    };
    var $amp$amp = function (dict) {
        return dict["&&"];
    };
    var $amp = function (dict) {
        return dict["&"];
    };
    var $percent = function (dict) {
        return dict["%"];
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var $hash = function (x) {
        return function (f) {
            return f(x);
        };
    };
    var zshr = function (dict) {
        return dict.zshr;
    };
    var unsafeCompare = unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
    var unit = {};
    var shr = function (dict) {
        return dict.shr;
    };
    var showUnit = function (_) {
        return new Show(function (_198) {
            return "Unit {}";
        });
    };
    var showString = function (_) {
        return new Show(showStringImpl);
    };
    var showOrdering = function (_) {
        return new Show(function (_206) {
            if (_206 instanceof LT) {
                return "LT";
            };
            if (_206 instanceof GT) {
                return "GT";
            };
            if (_206 instanceof EQ) {
                return "EQ";
            };
            throw new Error("Failed pattern match");
        });
    };
    var showNumber = function (_) {
        return new Show(showNumberImpl);
    };
    var showBoolean = function (_) {
        return new Show(function (_199) {
            if (_199) {
                return "true";
            };
            if (!_199) {
                return "false";
            };
            throw new Error("Failed pattern match");
        });
    };
    var show = function (dict) {
        return dict.show;
    };
    var showArray = function (__dict_Show_2) {
        return new Show(showArrayImpl(show(__dict_Show_2)));
    };
    var shl = function (dict) {
        return dict.shl;
    };
    var semigroupoidArr = function (_) {
        return new Semigroupoid(function (f) {
            return function (g) {
                return function (x) {
                    return f(g(x));
                };
            };
        });
    };
    var semigroupUnit = function (_) {
        return new Semigroup(function (_213) {
            return function (_214) {
                return {};
            };
        });
    };
    var semigroupString = function (_) {
        return new Semigroup(concatString);
    };
    var semigroupArr = function (__dict_Semigroup_3) {
        return new Semigroup(function (f) {
            return function (g) {
                return function (x) {
                    return $less$greater(__dict_Semigroup_3)(f(x))(g(x));
                };
            };
        });
    };
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_4) {
        return pure(__dict_Monad_4["__superclass_Prelude.Applicative_0"]({}));
    };
    var numNumber = function (_) {
        return new Num(numMod, numMul, numAdd, numSub, numDiv, numNegate);
    };
    var not = function (dict) {
        return dict.not;
    };
    var negate = function (dict) {
        return dict.negate;
    };
    var liftM1 = function (__dict_Monad_5) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_5["__superclass_Prelude.Bind_1"]({}))(a)(function (_0) {
                    return $$return(__dict_Monad_5)(f(_0));
                });
            };
        };
    };
    var liftA1 = function (__dict_Applicative_6) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_6["__superclass_Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
            };
        };
    };
    var id = function (dict) {
        return dict.id;
    };
    var functorArr = function (_) {
        return new Functor($less$less$less(semigroupoidArr({})));
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var eqUnit = function (_) {
        return new Eq(function (_202) {
            return function (_203) {
                return false;
            };
        }, function (_200) {
            return function (_201) {
                return true;
            };
        });
    };
    var ordUnit = function (_) {
        return new Ord(function (__1) {
            return eqUnit({});
        }, function (_207) {
            return function (_208) {
                return EQ.value;
            };
        });
    };
    var eqString = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordString = function (_) {
        return new Ord(function (__1) {
            return eqString({});
        }, unsafeCompare);
    };
    var eqNumber = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordNumber = function (_) {
        return new Ord(function (__1) {
            return eqNumber({});
        }, unsafeCompare);
    };
    var eqBoolean = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordBoolean = function (_) {
        return new Ord(function (__1) {
            return eqBoolean({});
        }, function (_209) {
            return function (_210) {
                if (!_209 && !_210) {
                    return EQ.value;
                };
                if (!_209 && _210) {
                    return LT.value;
                };
                if (_209 && _210) {
                    return EQ.value;
                };
                if (_209 && !_210) {
                    return GT.value;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var empty = function (dict) {
        return dict.empty;
    };
    var $$const = function (_194) {
        return function (_195) {
            return _194;
        };
    };
    var $$void = function (__dict_Functor_8) {
        return function (fa) {
            return $less$dollar$greater(__dict_Functor_8)($$const(unit))(fa);
        };
    };
    var complement = function (dict) {
        return dict.complement;
    };
    var compare = function (dict) {
        return dict.compare;
    };
    var $less = function (__dict_Ord_10) {
        return function (a1) {
            return function (a2) {
                return (function (_848) {
                    if (_848 instanceof LT) {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_10)(a1)(a2));
            };
        };
    };
    var $less$eq = function (__dict_Ord_11) {
        return function (a1) {
            return function (a2) {
                return (function (_849) {
                    if (_849 instanceof GT) {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_11)(a1)(a2));
            };
        };
    };
    var $greater = function (__dict_Ord_12) {
        return function (a1) {
            return function (a2) {
                return (function (_850) {
                    if (_850 instanceof GT) {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_12)(a1)(a2));
            };
        };
    };
    var $greater$eq = function (__dict_Ord_13) {
        return function (a1) {
            return function (a2) {
                return (function (_851) {
                    if (_851 instanceof LT) {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_13)(a1)(a2));
            };
        };
    };
    var categoryArr = function (_) {
        return new Category(function (__1) {
            return semigroupoidArr({});
        }, function (x) {
            return x;
        });
    };
    var boolLikeBoolean = function (_) {
        return new BoolLike(boolAnd, boolNot, boolOr);
    };
    var eqArray = function (__dict_Eq_7) {
        return new Eq(function (xs) {
            return function (ys) {
                return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_7))(xs)(ys));
            };
        }, function (xs) {
            return function (ys) {
                return eqArrayImpl($eq$eq(__dict_Eq_7))(xs)(ys);
            };
        });
    };
    var ordArray = function (__dict_Ord_9) {
        return new Ord(function (_) {
            return eqArray(__dict_Ord_9["__superclass_Prelude.Eq_0"]({}));
        }, function (_211) {
            return function (_212) {
                if (_211.length === 0 && _212.length === 0) {
                    return EQ.value;
                };
                if (_211.length === 0) {
                    return LT.value;
                };
                if (_212.length === 0) {
                    return GT.value;
                };
                if (_211.length > 0) {
                    var _858 = _211.slice(1);
                    if (_212.length > 0) {
                        var _856 = _212.slice(1);
                        return (function (_854) {
                            if (_854 instanceof EQ) {
                                return compare(ordArray(__dict_Ord_9))(_858)(_856);
                            };
                            return _854;
                        })(compare(__dict_Ord_9)(_211[0])(_212[0]));
                    };
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var eqOrdering = function (_) {
        return new Eq(function (x) {
            return function (y) {
                return not(boolLikeBoolean({}))($eq$eq(eqOrdering({}))(x)(y));
            };
        }, function (_204) {
            return function (_205) {
                if (_204 instanceof LT && _205 instanceof LT) {
                    return true;
                };
                if (_204 instanceof GT && _205 instanceof GT) {
                    return true;
                };
                if (_204 instanceof EQ && _205 instanceof EQ) {
                    return true;
                };
                return false;
            };
        });
    };
    var bitsNumber = function (_) {
        return new Bits(numAnd, numXor, numComplement, numShl, numShr, numZshr, numOr);
    };
    var asTypeOf = function (_196) {
        return function (_197) {
            return _196;
        };
    };
    var applyArr = function (_) {
        return new Apply(function (f) {
            return function (g) {
                return function (x) {
                    return f(x)(g(x));
                };
            };
        }, function (__1) {
            return functorArr({});
        });
    };
    var bindArr = function (_) {
        return new Bind(function (m) {
            return function (f) {
                return function (x) {
                    return f(m(x))(x);
                };
            };
        }, function (__1) {
            return applyArr({});
        });
    };
    var applicativeArr = function (_) {
        return new Applicative(function (__1) {
            return applyArr({});
        }, $$const);
    };
    var monadArr = function (_) {
        return new Monad(function (__1) {
            return applicativeArr({});
        }, function (__1) {
            return bindArr({});
        });
    };
    var ap = function (__dict_Monad_14) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_14)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        Unit: Unit, 
        LT: LT, 
        GT: GT, 
        EQ: EQ, 
        Semigroup: Semigroup, 
        BoolLike: BoolLike, 
        Bits: Bits, 
        Ord: Ord, 
        Eq: Eq, 
        Num: Num, 
        Monad: Monad, 
        Bind: Bind, 
        Alternative: Alternative, 
        Applicative: Applicative, 
        Apply: Apply, 
        Functor: Functor, 
        Show: Show, 
        Category: Category, 
        Semigroupoid: Semigroupoid, 
        unit: unit, 
        "++": $plus$plus, 
        "<>": $less$greater, 
        not: not, 
        "||": $bar$bar, 
        "&&": $amp$amp, 
        complement: complement, 
        zshr: zshr, 
        shr: shr, 
        shl: shl, 
        "^": $up, 
        "|": $bar, 
        "&": $amp, 
        ">=": $greater$eq, 
        "<=": $less$eq, 
        ">": $greater, 
        "<": $less, 
        compare: compare, 
        refIneq: refIneq, 
        refEq: refEq, 
        "/=": $div$eq, 
        "==": $eq$eq, 
        negate: negate, 
        "%": $percent, 
        "/": $div, 
        "*": $times, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
        liftM1: liftM1, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        "<|>": $less$bar$greater, 
        empty: empty, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "void": $$void, 
        "<$>": $less$dollar$greater, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "#": $hash, 
        "$": $dollar, 
        id: id, 
        ">>>": $greater$greater$greater, 
        "<<<": $less$less$less, 
        asTypeOf: asTypeOf, 
        "const": $$const, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showUnit: showUnit, 
        showString: showString, 
        showBoolean: showBoolean, 
        showNumber: showNumber, 
        showArray: showArray, 
        functorArr: functorArr, 
        applyArr: applyArr, 
        applicativeArr: applicativeArr, 
        bindArr: bindArr, 
        monadArr: monadArr, 
        numNumber: numNumber, 
        eqUnit: eqUnit, 
        eqString: eqString, 
        eqNumber: eqNumber, 
        eqBoolean: eqBoolean, 
        eqArray: eqArray, 
        eqOrdering: eqOrdering, 
        showOrdering: showOrdering, 
        ordUnit: ordUnit, 
        ordBoolean: ordBoolean, 
        ordNumber: ordNumber, 
        ordString: ordString, 
        ordArray: ordArray, 
        bitsNumber: bitsNumber, 
        boolLikeBoolean: boolLikeBoolean, 
        semigroupUnit: semigroupUnit, 
        semigroupString: semigroupString, 
        semigroupArr: semigroupArr
    };
})();
var PS = PS || {};
PS.Prelude_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
    return {
        unsafeIndex: unsafeIndex
    };
})();
var PS = PS || {};
PS.Showdown = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function converter(options) {  return function(markdown) {    var converter = new Showdown.converter(options);    return converter.makeHtml(markdown);  };};
    var makeHtml = converter({});
    return {
        converter: converter, 
        makeHtml: makeHtml
    };
})();
var PS = PS || {};
PS.Node_Path = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var normalize = require('path').normalize;;
    var join = function (segments) {   return require('path').join.apply(this, segments); };
    var resolve = function (from) {   return function (to) {     return require('path').resolve.apply(this, from.concat([to]));   }; };;
    var relative = function (from) {   return function (to) {     return require('path').relative(from, to);   }; };
    var dirname = function (path) {   var p = require('path');   return p.normalize(p.dirname(path)); };
    var basename = require('path').basename;;
    var basenameWithoutExt = function (path) {   return function (ext) {     return require('path').basename(path, ext);   }; };
    var extname = require('path').extname;;
    var sep = require('path').sep;;
    var delimiter = require('path').delimiter;;
    return {
        delimiter: delimiter, 
        sep: sep, 
        extname: extname, 
        basenameWithoutExt: basenameWithoutExt, 
        basename: basename, 
        dirname: dirname, 
        relative: relative, 
        resolve: resolve, 
        join: join, 
        normalize: normalize
    };
})();
var PS = PS || {};
PS.Node_FS = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function FileLink() {

    };
    FileLink.value = new FileLink();
    function DirLink() {

    };
    DirLink.value = new DirLink();
    function JunctionLink() {

    };
    JunctionLink.value = new JunctionLink();
    var showSymlinkType = function (_) {
        return new Prelude.Show(function (_215) {
            if (_215 instanceof FileLink) {
                return "file";
            };
            if (_215 instanceof DirLink) {
                return "dir";
            };
            if (_215 instanceof JunctionLink) {
                return "junction";
            };
            throw new Error("Failed pattern match");
        });
    };
    var eqSymlinkType = function (_) {
        return new Prelude.Eq(function (x) {
            return function (y) {
                return !Prelude["=="](eqSymlinkType({}))(x)(y);
            };
        }, function (_216) {
            return function (_217) {
                if (_216 instanceof FileLink && _217 instanceof FileLink) {
                    return true;
                };
                if (_216 instanceof DirLink && _217 instanceof DirLink) {
                    return true;
                };
                if (_216 instanceof JunctionLink && _217 instanceof JunctionLink) {
                    return true;
                };
                return false;
            };
        });
    };
    return {
        FileLink: FileLink, 
        DirLink: DirLink, 
        JunctionLink: JunctionLink, 
        showSymlinkType: showSymlinkType, 
        eqSymlinkType: eqSymlinkType
    };
})();
var PS = PS || {};
PS.Node_Encoding = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function ASCII() {

    };
    ASCII.value = new ASCII();
    function UTF8() {

    };
    UTF8.value = new UTF8();
    function UTF16LE() {

    };
    UTF16LE.value = new UTF16LE();
    function UCS2() {

    };
    UCS2.value = new UCS2();
    function Base64() {

    };
    Base64.value = new Base64();
    function Binary() {

    };
    Binary.value = new Binary();
    function Hex() {

    };
    Hex.value = new Hex();
    function byteLength (str) {   return function (enc) {     return Buffer.byteLength(str, enc);   } };
    var showEncoding = function (_) {
        return new Prelude.Show(function (_218) {
            if (_218 instanceof ASCII) {
                return "ascii";
            };
            if (_218 instanceof UTF8) {
                return "utf8";
            };
            if (_218 instanceof UTF16LE) {
                return "utf16le";
            };
            if (_218 instanceof UCS2) {
                return "ucs2";
            };
            if (_218 instanceof Base64) {
                return "base64";
            };
            if (_218 instanceof Binary) {
                return "binary";
            };
            if (_218 instanceof Hex) {
                return "hex";
            };
            throw new Error("Failed pattern match");
        });
    };
    var byteLength = function (str) {
        return function (enc) {
            return byteLengthImpl(str)(Prelude.show(showEncoding({}))(enc));
        };
    };
    return {
        ASCII: ASCII, 
        UTF8: UTF8, 
        UTF16LE: UTF16LE, 
        UCS2: UCS2, 
        Base64: Base64, 
        Binary: Binary, 
        Hex: Hex, 
        byteLength: byteLength, 
        showEncoding: showEncoding
    };
})();
var PS = PS || {};
PS.Node_ChildProcess_Signal = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Signal = {
        create: function (value) {
            return value;
        }
    };
    var sigxfsz = "SIGXFSZ";
    var sigxcpu = "SIGXCPU";
    var sigwinch = "SIGWINCH";
    var sigvtalrm = "SIGVTALRM";
    var sigusr2 = "SIGUSR2";
    var sigusr1 = "SIGUSR1";
    var sigurg = "SIGURG";
    var sigunused = "SIGUNUSED";
    var sigttou = "SIGTTOU";
    var sigttin = "SIGTTIN";
    var sigtstp = "SIGTSTP";
    var sigtrap = "SIGTRAP";
    var sigterm = "SIGTERM";
    var sigsys = "SIGSYS";
    var sigstop = "SIGSTOP";
    var sigstkflt = "SIGSTKFLT";
    var sigsegv = "SIGSEGV";
    var sigquit = "SIGQUIT";
    var sigpwr = "SIGPWR";
    var sigprof = "SIGPROF";
    var sigpoll = "SIGPOLL";
    var sigpipe = "SIGPIPE";
    var siglost = "SIGLOST";
    var sigkill = "SIGKILL";
    var sigiot = "SIGIOT";
    var sigio = "SIGIO";
    var sigint = "SIGINT";
    var siginfo = "SIGINFO";
    var sigill = "SIGILL";
    var sighup = "SIGHUP";
    var sigfpe = "SIGFPE";
    var sigemt = "SIGEMT";
    var sigcont = "SIGCONT";
    var sigcld = "SIGCLD";
    var sigchld = "SIGCHLD";
    var sigbus = "SIGBUS";
    var sigalrm = "SIGALRM";
    var sigabrt = "SIGABRT";
    var showSignal = function (_) {
        return new Prelude.Show(function (_219) {
            return _219;
        });
    };
    return {
        sigxfsz: sigxfsz, 
        sigxcpu: sigxcpu, 
        sigwinch: sigwinch, 
        sigvtalrm: sigvtalrm, 
        sigusr2: sigusr2, 
        sigusr1: sigusr1, 
        sigurg: sigurg, 
        sigunused: sigunused, 
        sigttou: sigttou, 
        sigttin: sigttin, 
        sigtstp: sigtstp, 
        sigtrap: sigtrap, 
        sigterm: sigterm, 
        sigsys: sigsys, 
        sigstop: sigstop, 
        sigstkflt: sigstkflt, 
        sigsegv: sigsegv, 
        sigquit: sigquit, 
        sigpwr: sigpwr, 
        sigprof: sigprof, 
        sigpoll: sigpoll, 
        sigpipe: sigpipe, 
        siglost: siglost, 
        sigkill: sigkill, 
        sigiot: sigiot, 
        sigio: sigio, 
        sigint: sigint, 
        siginfo: siginfo, 
        sigill: sigill, 
        sighup: sighup, 
        sigfpe: sigfpe, 
        sigemt: sigemt, 
        sigcont: sigcont, 
        sigcld: sigcld, 
        sigchld: sigchld, 
        sigbus: sigbus, 
        sigalrm: sigalrm, 
        sigabrt: sigabrt, 
        showSignal: showSignal
    };
})();
var PS = PS || {};
PS.Math = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var abs = Math.abs;;
    var acos = Math.acos;;
    var asin = Math.asin;;
    var atan = Math.atan;;
    function atan2(y){  return function (x) {    return Math.atan2(y, x);  };};
    var ceil = Math.ceil;;
    var cos = Math.cos;;
    var exp = Math.exp;;
    var floor = Math.floor;;
    var log = Math.log;;
    function max(n1){  return function(n2) {    return Math.max(n1, n2);  }};
    function min(n1){  return function(n2) {    return Math.min(n1, n2);  }};
    function pow(n){  return function(p) {    return Math.pow(n, p);  }};
    var round = Math.round;;
    var sin = Math.sin;;
    var sqrt = Math.sqrt;;
    var tan = Math.tan;;
    var e       = Math.E;;
    var ln2     = Math.LN2;;
    var ln10    = Math.LN10;;
    var log2e   = Math.LOG2E;;
    var log10e  = Math.LOG10E;;
    var pi      = Math.PI;;
    var sqrt1_2 = Math.SQRT1_2;;
    var sqrt2   = Math.SQRT2;;
    return {
        sqrt2: sqrt2, 
        sqrt1_2: sqrt1_2, 
        pi: pi, 
        log10e: log10e, 
        log2e: log2e, 
        ln10: ln10, 
        ln2: ln2, 
        e: e, 
        tan: tan, 
        sqrt: sqrt, 
        sin: sin, 
        round: round, 
        pow: pow, 
        min: min, 
        max: max, 
        log: log, 
        floor: floor, 
        exp: exp, 
        cos: cos, 
        ceil: ceil, 
        atan2: atan2, 
        atan: atan, 
        asin: asin, 
        acos: acos, 
        abs: abs
    };
})();
var PS = PS || {};
PS.Global = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var nan = NaN;;
    var infinity = Infinity;;
    function readInt(radix) {  return function(n) {    return parseInt(n, radix);  };};
    var readFloat = parseFloat;;
    return {
        readFloat: readFloat, 
        readInt: readInt, 
        isFinite: isFinite, 
        infinity: infinity, 
        isNaN: isNaN, 
        nan: nan
    };
})();
var PS = PS || {};
PS.Data_String_Regex = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function regex(s1) {  return function(s2) {    return new RegExp(s1, s2);  };};
    function test(r) {  return function (s) {    return r.test(s);  };};
    function match(r) {  return function (s) {    return s.match(r);   };};
    function replace(r) {  return function(s1) {    return function(s2) {      return s2.replace(r, s1);    };  };};
    function replace$prime(r) {  return function(f) {    return function(s2) {      return s2.replace(r, function (match) {        return f(match)(Array.prototype.splice.call(arguments, 1, arguments.length - 3));      });    };  };};
    function search(r) {  return function (s) {    return s.search(r);  };};
    return {
        search: search, 
        "replace'": replace$prime, 
        replace: replace, 
        match: match, 
        test: test, 
        regex: regex
    };
})();
var PS = PS || {};
PS.Data_String = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function charAt(i) {  return function(s) {    return s.charAt(i);   };};
    function charCodeAt(i) {  return function(s) {    return s.charCodeAt(i);   };};
    function fromCharCode(n) {  return String.fromCharCode(n);};
    function indexOf(x) {  return function(s) {    return s.indexOf(x);  }; };
    function indexOf$prime(x) {  return function(startAt) {    return function(s) {      return s.indexOf(x, startAt);    };   }; };
    function lastIndexOf(x) {  return function(s) {    return s.lastIndexOf(x);  };};
    function lastIndexOf$prime(x) {  return function(startAt) {    return function(s) {      return s.lastIndexOf(x, startAt);    };   }; };
    function length(s) {  return s.length;};
    function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
    function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
    function take(n) {  return function(s) {    return s.substr(0, n);  };};
    function drop(n) {  return function(s) {    return s.substr(n);  };};
    function split(sep) {  return function(s) {    return s.split(sep);  };};
    function toLower(s) {  return s.toLowerCase();};
    function toUpper(s) {  return s.toUpperCase();};
    function trim(s) {  return s.trim();};
    function joinWith (s) {  return function (xs) {    return xs.join(s);  };};
    return {
        joinWith: joinWith, 
        trim: trim, 
        toUpper: toUpper, 
        toLower: toLower, 
        split: split, 
        drop: drop, 
        take: take, 
        replace: replace, 
        localeCompare: localeCompare, 
        length: length, 
        "lastIndexOf'": lastIndexOf$prime, 
        lastIndexOf: lastIndexOf, 
        "indexOf'": indexOf$prime, 
        indexOf: indexOf, 
        fromCharCode: fromCharCode, 
        charCodeAt: charCodeAt, 
        charAt: charAt
    };
})();
var PS = PS || {};
PS.Data_Profunctor = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Profunctor(dimap) {
        this.dimap = dimap;
    };
    var profunctorArr = function (_) {
        return new Profunctor(function (a2b) {
            return function (c2d) {
                return function (b2c) {
                    return Prelude[">>>"](Prelude.semigroupoidArr({}))(a2b)(Prelude[">>>"](Prelude.semigroupoidArr({}))(b2c)(c2d));
                };
            };
        });
    };
    var dimap = function (dict) {
        return dict.dimap;
    };
    var lmap = function (__dict_Profunctor_15) {
        return function (a2b) {
            return dimap(__dict_Profunctor_15)(a2b)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var rmap = function (__dict_Profunctor_16) {
        return function (b2c) {
            return dimap(__dict_Profunctor_16)(Prelude.id(Prelude.categoryArr({})))(b2c);
        };
    };
    return {
        Profunctor: Profunctor, 
        rmap: rmap, 
        lmap: lmap, 
        dimap: dimap, 
        profunctorArr: profunctorArr
    };
})();
var PS = PS || {};
PS.Data_Maybe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Nothing() {

    };
    Nothing.value = new Nothing();
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    var showMaybe = function (__dict_Show_17) {
        return new Prelude.Show(function (_231) {
            if (_231 instanceof Just) {
                return "Just (" + Prelude.show(__dict_Show_17)(_231.value0) + ")";
            };
            if (_231 instanceof Nothing) {
                return "Nothing";
            };
            throw new Error("Failed pattern match");
        });
    };
    var maybe = function (_220) {
        return function (_221) {
            return function (_222) {
                if (_222 instanceof Nothing) {
                    return _220;
                };
                if (_222 instanceof Just) {
                    return _221(_222.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var isNothing = maybe(true)(Prelude["const"](false));
    var isJust = maybe(false)(Prelude["const"](true));
    var functorMaybe = function (_) {
        return new Prelude.Functor(function (_223) {
            return function (_224) {
                if (_224 instanceof Just) {
                    return new Just(_223(_224.value0));
                };
                return Nothing.value;
            };
        });
    };
    var fromMaybe = function (a) {
        return maybe(a)(Prelude.id(Prelude.categoryArr({})));
    };
    var eqMaybe = function (__dict_Eq_19) {
        return new Prelude.Eq(function (a) {
            return function (b) {
                return !Prelude["=="](eqMaybe(__dict_Eq_19))(a)(b);
            };
        }, function (_232) {
            return function (_233) {
                if (_232 instanceof Nothing && _233 instanceof Nothing) {
                    return true;
                };
                if (_232 instanceof Just && _233 instanceof Just) {
                    return Prelude["=="](__dict_Eq_19)(_232.value0)(_233.value0);
                };
                return false;
            };
        });
    };
    var ordMaybe = function (__dict_Ord_18) {
        return new Prelude.Ord(function (_) {
            return eqMaybe(__dict_Ord_18["__superclass_Prelude.Eq_0"]({}));
        }, function (_234) {
            return function (_235) {
                if (_234 instanceof Just && _235 instanceof Just) {
                    return Prelude.compare(__dict_Ord_18)(_234.value0)(_235.value0);
                };
                if (_234 instanceof Nothing && _235 instanceof Nothing) {
                    return Prelude.EQ.value;
                };
                if (_234 instanceof Nothing) {
                    return Prelude.LT.value;
                };
                if (_235 instanceof Nothing) {
                    return Prelude.GT.value;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var applyMaybe = function (_) {
        return new Prelude.Apply(function (_225) {
            return function (_226) {
                if (_225 instanceof Just) {
                    return Prelude["<$>"](functorMaybe({}))(_225.value0)(_226);
                };
                if (_225 instanceof Nothing) {
                    return Nothing.value;
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return functorMaybe({});
        });
    };
    var bindMaybe = function (_) {
        return new Prelude.Bind(function (_229) {
            return function (_230) {
                if (_229 instanceof Just) {
                    return _230(_229.value0);
                };
                if (_229 instanceof Nothing) {
                    return Nothing.value;
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return applyMaybe({});
        });
    };
    var applicativeMaybe = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyMaybe({});
        }, Just.create);
    };
    var monadMaybe = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeMaybe({});
        }, function (__1) {
            return bindMaybe({});
        });
    };
    var alternativeMaybe = function (_) {
        return new Prelude.Alternative(function (_227) {
            return function (_228) {
                if (_227 instanceof Nothing) {
                    return _228;
                };
                return _227;
            };
        }, Nothing.value);
    };
    return {
        Nothing: Nothing, 
        Just: Just, 
        isNothing: isNothing, 
        isJust: isJust, 
        fromMaybe: fromMaybe, 
        maybe: maybe, 
        functorMaybe: functorMaybe, 
        applyMaybe: applyMaybe, 
        applicativeMaybe: applicativeMaybe, 
        alternativeMaybe: alternativeMaybe, 
        bindMaybe: bindMaybe, 
        monadMaybe: monadMaybe, 
        showMaybe: showMaybe, 
        eqMaybe: eqMaybe, 
        ordMaybe: ordMaybe
    };
})();
var PS = PS || {};
PS.Data_Maybe_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var fromJust = function (_236) {
        if (_236 instanceof Data_Maybe.Just) {
            return _236.value0;
        };
        throw new Error("Failed pattern match");
    };
    return {
        fromJust: fromJust
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function mkFn0(fn) {  return function() {    return fn({});  };};
    function mkFn1(fn) {  return function(a) {    return fn(a);  };};
    function mkFn2(fn) {  return function(a, b) {    return fn(a)(b);  };};
    function mkFn3(fn) {  return function(a, b, c) {    return fn(a)(b)(c);  };};
    function mkFn4(fn) {  return function(a, b, c, d) {    return fn(a)(b)(c)(d);  };};
    function mkFn5(fn) {  return function(a, b, c, d, e) {    return fn(a)(b)(c)(d)(e);  };};
    function mkFn6(fn) {  return function(a, b, c, d, e, f) {    return fn(a)(b)(c)(d)(e)(f);  };};
    function mkFn7(fn) {  return function(a, b, c, d, e, f, g) {    return fn(a)(b)(c)(d)(e)(f)(g);  };};
    function mkFn8(fn) {  return function(a, b, c, d, e, f, g, h) {    return fn(a)(b)(c)(d)(e)(f)(g)(h);  };};
    function mkFn9(fn) {  return function(a, b, c, d, e, f, g, h, i) {    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i);  };};
    function mkFn10(fn) {  return function(a, b, c, d, e, f, g, h, i, j) {    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)(j);  };};
    function runFn0(fn) {  return fn();};
    function runFn1(fn) {  return function(a) {    return fn(a);  };};
    function runFn2(fn) {  return function(a) {    return function(b) {      return fn(a, b);    };  };};
    function runFn3(fn) {  return function(a) {    return function(b) {      return function(c) {        return fn(a, b, c);      };    };  };};
    function runFn4(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return fn(a, b, c, d);        };      };    };  };};
    function runFn5(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return fn(a, b, c, d, e);          };        };      };    };  };};
    function runFn6(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return fn(a, b, c, d, e, f);            };          };        };      };    };  };};
    function runFn7(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return fn(a, b, c, d, e, f, g);              };            };          };        };      };    };  };};
    function runFn8(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return fn(a, b, c, d, e, f, g, h);                };              };            };          };        };      };    };  };};
    function runFn9(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return function(i) {                    return fn(a, b, c, d, e, f, g, h, i);                  };                };              };            };          };        };      };    };  };};
    function runFn10(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return function(i) {                    return function(j) {                      return fn(a, b, c, d, e, f, g, h, i, j);                    };                  };                };              };            };          };        };      };    };  };};
    var on = function (f) {
        return function (g) {
            return function (x) {
                return function (y) {
                    return f(g(x))(g(y));
                };
            };
        };
    };
    return {
        runFn10: runFn10, 
        runFn9: runFn9, 
        runFn8: runFn8, 
        runFn7: runFn7, 
        runFn6: runFn6, 
        runFn5: runFn5, 
        runFn4: runFn4, 
        runFn3: runFn3, 
        runFn2: runFn2, 
        runFn1: runFn1, 
        runFn0: runFn0, 
        mkFn10: mkFn10, 
        mkFn9: mkFn9, 
        mkFn8: mkFn8, 
        mkFn7: mkFn7, 
        mkFn6: mkFn6, 
        mkFn5: mkFn5, 
        mkFn4: mkFn4, 
        mkFn3: mkFn3, 
        mkFn2: mkFn2, 
        mkFn1: mkFn1, 
        mkFn0: mkFn0, 
        on: on
    };
})();
var PS = PS || {};
PS.Data_Eq = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Ref = {
        create: function (value) {
            return value;
        }
    };
    var liftRef = function (_237) {
        return function (_238) {
            return function (_239) {
                return _237(_238)(_239);
            };
        };
    };
    var functorRef = function (_) {
        return new Prelude.Functor(function (_240) {
            return function (_241) {
                return _240(_241);
            };
        });
    };
    var eqRef = function (_) {
        return new Prelude.Eq(liftRef(Prelude.refIneq), liftRef(Prelude.refEq));
    };
    return {
        Ref: Ref, 
        liftRef: liftRef, 
        eqRef: eqRef, 
        functorRef: functorRef
    };
})();
var PS = PS || {};
PS.Data_Enum = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Enum(fromEnum, toEnum) {
        this.fromEnum = fromEnum;
        this.toEnum = toEnum;
    };
    var toEnum = function (dict) {
        return dict.toEnum;
    };
    var fromEnum = function (dict) {
        return dict.fromEnum;
    };
    var pred = function (__dict_Enum_20) {
        return function (x) {
            return toEnum(__dict_Enum_20)(fromEnum(__dict_Enum_20)(x) - 1);
        };
    };
    var succ = function (__dict_Enum_21) {
        return function (x) {
            return toEnum(__dict_Enum_21)(fromEnum(__dict_Enum_21)(x) + 1);
        };
    };
    return {
        Enum: Enum, 
        pred: pred, 
        succ: succ, 
        fromEnum: fromEnum, 
        toEnum: toEnum
    };
})();
var PS = PS || {};
PS.Data_Either = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Left(value0) {
        this.value0 = value0;
    };
    Left.create = function (value0) {
        return new Left(value0);
    };
    function Right(value0) {
        this.value0 = value0;
    };
    Right.create = function (value0) {
        return new Right(value0);
    };
    var showEither = function (__dict_Show_22) {
        return function (__dict_Show_23) {
            return new Prelude.Show(function (_249) {
                if (_249 instanceof Left) {
                    return "Left (" + Prelude.show(__dict_Show_22)(_249.value0) + ")";
                };
                if (_249 instanceof Right) {
                    return "Right (" + Prelude.show(__dict_Show_23)(_249.value0) + ")";
                };
                throw new Error("Failed pattern match");
            });
        };
    };
    var functorEither = function (_) {
        return new Prelude.Functor(function (_245) {
            return function (_246) {
                if (_246 instanceof Left) {
                    return new Left(_246.value0);
                };
                if (_246 instanceof Right) {
                    return new Right(_245(_246.value0));
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var eqEither = function (__dict_Eq_26) {
        return function (__dict_Eq_27) {
            return new Prelude.Eq(function (a) {
                return function (b) {
                    return !Prelude["=="](eqEither(__dict_Eq_26)(__dict_Eq_27))(a)(b);
                };
            }, function (_250) {
                return function (_251) {
                    if (_250 instanceof Left && _251 instanceof Left) {
                        return Prelude["=="](__dict_Eq_26)(_250.value0)(_251.value0);
                    };
                    if (_250 instanceof Right && _251 instanceof Right) {
                        return Prelude["=="](__dict_Eq_27)(_250.value0)(_251.value0);
                    };
                    return false;
                };
            });
        };
    };
    var ordEither = function (__dict_Ord_24) {
        return function (__dict_Ord_25) {
            return new Prelude.Ord(function (_) {
                return eqEither(__dict_Ord_24["__superclass_Prelude.Eq_0"]({}))(__dict_Ord_25["__superclass_Prelude.Eq_0"]({}));
            }, function (_252) {
                return function (_253) {
                    if (_252 instanceof Left && _253 instanceof Left) {
                        return Prelude.compare(__dict_Ord_24)(_252.value0)(_253.value0);
                    };
                    if (_252 instanceof Right && _253 instanceof Right) {
                        return Prelude.compare(__dict_Ord_25)(_252.value0)(_253.value0);
                    };
                    if (_252 instanceof Left) {
                        return Prelude.LT.value;
                    };
                    if (_253 instanceof Left) {
                        return Prelude.GT.value;
                    };
                    throw new Error("Failed pattern match");
                };
            });
        };
    };
    var either = function (_242) {
        return function (_243) {
            return function (_244) {
                if (_244 instanceof Left) {
                    return _242(_244.value0);
                };
                if (_244 instanceof Right) {
                    return _243(_244.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var isLeft = either(Prelude["const"](true))(Prelude["const"](false));
    var isRight = either(Prelude["const"](false))(Prelude["const"](true));
    var applyEither = function (_) {
        return new Prelude.Apply(function (_247) {
            return function (_248) {
                if (_247 instanceof Left) {
                    return new Left(_247.value0);
                };
                if (_247 instanceof Right) {
                    return Prelude["<$>"](functorEither({}))(_247.value0)(_248);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return functorEither({});
        });
    };
    var bindEither = function (_) {
        return new Prelude.Bind(either(function (e) {
            return function (__1) {
                return new Left(e);
            };
        })(function (a) {
            return function (f) {
                return f(a);
            };
        }), function (__1) {
            return applyEither({});
        });
    };
    var applicativeEither = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyEither({});
        }, Right.create);
    };
    var monadEither = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeEither({});
        }, function (__1) {
            return bindEither({});
        });
    };
    return {
        Left: Left, 
        Right: Right, 
        isRight: isRight, 
        isLeft: isLeft, 
        either: either, 
        functorEither: functorEither, 
        applyEither: applyEither, 
        applicativeEither: applicativeEither, 
        bindEither: bindEither, 
        monadEither: monadEither, 
        showEither: showEither, 
        eqEither: eqEither, 
        ordEither: ordEither
    };
})();
var PS = PS || {};
PS.Data_Profunctor_Choice = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Data_Profunctor = PS.Data_Profunctor;
    function Choice(__superclass_Data$dotProfunctor$dotProfunctor_0, left$prime, right$prime) {
        this["__superclass_Data.Profunctor.Profunctor_0"] = __superclass_Data$dotProfunctor$dotProfunctor_0;
        this["left'"] = left$prime;
        this["right'"] = right$prime;
    };
    var right$prime = function (dict) {
        return dict["right'"];
    };
    var left$prime = function (dict) {
        return dict["left'"];
    };
    var choiceArr = function (_) {
        return new Choice(function (__1) {
            return Data_Profunctor.profunctorArr({});
        }, function (_254) {
            return function (_255) {
                if (_255 instanceof Data_Either.Left) {
                    return Data_Either.Left.create(_254(_255.value0));
                };
                if (_255 instanceof Data_Either.Right) {
                    return new Data_Either.Right(_255.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, Prelude["<$>"](Data_Either.functorEither({})));
    };
    return {
        Choice: Choice, 
        "right'": right$prime, 
        "left'": left$prime, 
        choiceArr: choiceArr
    };
})();
var PS = PS || {};
PS.Data_Contravariant = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Contravariant($greater$dollar$less) {
        this[">$<"] = $greater$dollar$less;
    };
    var $greater$dollar$less = function (dict) {
        return dict[">$<"];
    };
    return {
        Contravariant: Contravariant, 
        ">$<": $greater$dollar$less
    };
})();
var PS = PS || {};
PS.Data_Const = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Contravariant = PS.Data_Contravariant;
    function Const(value0) {
        this.value0 = value0;
    };
    Const.create = function (value0) {
        return new Const(value0);
    };
    var showConst = function (__dict_Show_28) {
        return new Prelude.Show(function (_259) {
            return Prelude.show(__dict_Show_28)(_259.value0);
        });
    };
    var getConst = function (_256) {
        return _256.value0;
    };
    var functorConst = function (_) {
        return new Prelude.Functor(function (_262) {
            return function (_263) {
                return new Const(_263.value0);
            };
        });
    };
    var eqConst = function (__dict_Eq_30) {
        return new Prelude.Eq(function (c) {
            return function (c$prime) {
                return !Prelude["=="](eqConst(__dict_Eq_30))(c)(c$prime);
            };
        }, function (_257) {
            return function (_258) {
                return Prelude["=="](__dict_Eq_30)(_257.value0)(_258.value0);
            };
        });
    };
    var ordConst = function (__dict_Ord_29) {
        return new Prelude.Ord(function (_) {
            return eqConst(__dict_Ord_29["__superclass_Prelude.Eq_0"]({}));
        }, function (_260) {
            return function (_261) {
                return Prelude.compare(__dict_Ord_29)(_260.value0)(_261.value0);
            };
        });
    };
    var contravariantConst = function (_) {
        return new Data_Contravariant.Contravariant(function (_264) {
            return function (_265) {
                return new Const(_265.value0);
            };
        });
    };
    return {
        Const: Const, 
        getConst: getConst, 
        eqConst: eqConst, 
        showConst: showConst, 
        ordConst: ordConst, 
        functorConst: functorConst, 
        contravariantConst: contravariantConst
    };
})();
var PS = PS || {};
PS.Data_Array = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    function snoc(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
    function length (xs) {  return xs.length;};
    function findIndex (f) {  return function (arr) {    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function findLastIndex (f) {  return function (arr) {    for (var i = arr.length - 1; i >= 0; i--) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function append (l1) {  return function (l2) {    return l1.concat(l2);  };};
    function concat (xss) {  var result = [];  for (var i = 0, l = xss.length; i < l; i++) {    result.push.apply(result, xss[i]);  }  return result;};
    function reverse (l) {  return l.slice().reverse();};
    function drop (n) {  return function (l) {    return l.slice(n);  };};
    function slice (s) {  return function (e) {    return function (l) {      return l.slice(s, e);    };  };};
    function insertAt (index) {  return function (a) {    return function (l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
    function deleteAt (index) {  return function (n) {    return function (l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
    function updateAt (index) {  return function (a) {    return function (l) {      var i = ~~index;      if (i < 0 || i >= l.length) return l;      var l1 = l.slice();      l1[i] = a;      return l1;    };   };};
    function concatMap (f) {  return function (arr) {    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      Array.prototype.push.apply(result, f(arr[i]));    }    return result;  };};
    function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
    function filter (f) {  return function (arr) {    var n = 0;    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        result[n++] = arr[i];      }    }    return result;  };};
    function range (start) {  return function (end) {    var i = ~~start, e = ~~end;    var step = i > e ? -1 : 1;    var result = [i], n = 1;    while (i !== e) {      i += step;      result[n++] = i;    }    return result;  };};
    function zipWith (f) {  return function (xs) {    return function (ys) {      var l = xs.length < ys.length ? xs.length : ys.length;      var result = new Array(l);      for (var i = 0; i < l; i++) {        result[i] = f(xs[i])(ys[i]);      }      return result;    };  };};
    function sortJS (f) {  return function (l) {    return l.slice().sort(function (x, y) {      return f(x)(y);    });  };};
    var $bang$bang = function (xs) {
        return function (n) {
            var isInt = function (n_1) {
                return n_1 !== ~~n_1;
            };
            return n < 0 || n >= length(xs) || isInt(n) ? Data_Maybe.Nothing.value : new Data_Maybe.Just(xs[n]);
        };
    };
    var take = function (n) {
        return slice(0)(n);
    };
    var tail = function (_268) {
        if (_268.length > 0) {
            var _956 = _268.slice(1);
            return new Data_Maybe.Just(_956);
        };
        return Data_Maybe.Nothing.value;
    };
    var span = (function () {
        var go = function (__copy__284) {
            return function (__copy__285) {
                return function (__copy__286) {
                    var _284 = __copy__284;
                    var _285 = __copy__285;
                    var _286 = __copy__286;
                    tco: while (true) {
                        if (_286.length > 0) {
                            var _961 = _286.slice(1);
                            if (_285(_286[0])) {
                                var __tco__284 = Prelude[":"](_286[0])(_284);
                                var __tco__285 = _285;
                                _284 = __tco__284;
                                _285 = __tco__285;
                                _286 = _961;
                                continue tco;
                            };
                        };
                        return {
                            init: reverse(_284), 
                            rest: _286
                        };
                    };
                };
            };
        };
        return go([  ]);
    })();
    var sortBy = function (comp) {
        return function (xs) {
            var comp$prime = function (x) {
                return function (y) {
                    return (function (_962) {
                        if (_962 instanceof Prelude.GT) {
                            return 1;
                        };
                        if (_962 instanceof Prelude.EQ) {
                            return 0;
                        };
                        if (_962 instanceof Prelude.LT) {
                            return -1;
                        };
                        throw new Error("Failed pattern match");
                    })(comp(x)(y));
                };
            };
            return sortJS(comp$prime)(xs);
        };
    };
    var sort = function (__dict_Ord_31) {
        return function (xs) {
            return sortBy(Prelude.compare(__dict_Ord_31))(xs);
        };
    };
    var singleton = function (a) {
        return [ a ];
    };
    var semigroupArray = function (_) {
        return new Prelude.Semigroup(append);
    };
    var $$null = function (_270) {
        if (_270.length === 0) {
            return true;
        };
        return false;
    };
    var nubBy = function (_277) {
        return function (_278) {
            if (_278.length === 0) {
                return [  ];
            };
            if (_278.length > 0) {
                var _967 = _278.slice(1);
                return Prelude[":"](_278[0])(nubBy(_277)(filter(function (y) {
                    return !_277(_278[0])(y);
                })(_967)));
            };
            throw new Error("Failed pattern match");
        };
    };
    var nub = function (__dict_Eq_32) {
        return nubBy(Prelude["=="](__dict_Eq_32));
    };
    var mapMaybe = function (f) {
        return concatMap(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe.maybe([  ])(singleton))(f));
    };
    var last = function (__copy__267) {
        var _267 = __copy__267;
        tco: while (true) {
            if (_267.length > 0) {
                var _970 = _267.slice(1);
                if (_970.length === 0) {
                    return new Data_Maybe.Just(_267[0]);
                };
            };
            if (_267.length > 0) {
                var _972 = _267.slice(1);
                _267 = _972;
                continue tco;
            };
            return Data_Maybe.Nothing.value;
        };
    };
    var intersectBy = function (_274) {
        return function (_275) {
            return function (_276) {
                if (_275.length === 0) {
                    return [  ];
                };
                if (_276.length === 0) {
                    return [  ];
                };
                var el = function (x) {
                    return findIndex(_274(x))(_276) >= 0;
                };
                return filter(el)(_275);
            };
        };
    };
    var intersect = function (__dict_Eq_33) {
        return intersectBy(Prelude["=="](__dict_Eq_33));
    };
    var init = function (_269) {
        if (_269.length === 0) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(slice(0)(length(_269) - 1)(_269));
    };
    var head = function (_266) {
        if (_266.length > 0) {
            var _979 = _266.slice(1);
            return new Data_Maybe.Just(_266[0]);
        };
        return Data_Maybe.Nothing.value;
    };
    var groupBy = (function () {
        var go = function (__copy__281) {
            return function (__copy__282) {
                return function (__copy__283) {
                    var _281 = __copy__281;
                    var _282 = __copy__282;
                    var _283 = __copy__283;
                    tco: while (true) {
                        if (_283.length === 0) {
                            return reverse(_281);
                        };
                        if (_283.length > 0) {
                            var _984 = _283.slice(1);
                            var sp = span(_282(_283[0]))(_984);
                            var __tco__281 = Prelude[":"](Prelude[":"](_283[0])(sp.init))(_281);
                            var __tco__282 = _282;
                            _281 = __tco__281;
                            _282 = __tco__282;
                            _283 = sp.rest;
                            continue tco;
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        return go([  ]);
    })();
    var group = function (__dict_Eq_34) {
        return function (xs) {
            return groupBy(Prelude["=="](__dict_Eq_34))(xs);
        };
    };
    var group$prime = function (__dict_Ord_35) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(group(__dict_Ord_35["__superclass_Prelude.Eq_0"]({})))(sort(__dict_Ord_35));
    };
    var functorArray = function (_) {
        return new Prelude.Functor(map);
    };
    var elemLastIndex = function (__dict_Eq_36) {
        return function (x) {
            return findLastIndex(Prelude["=="](__dict_Eq_36)(x));
        };
    };
    var elemIndex = function (__dict_Eq_37) {
        return function (x) {
            return findIndex(Prelude["=="](__dict_Eq_37)(x));
        };
    };
    var deleteBy = function (_271) {
        return function (_272) {
            return function (_273) {
                if (_273.length === 0) {
                    return [  ];
                };
                return (function (_988) {
                    if (_988 < 0) {
                        return _273;
                    };
                    return deleteAt(_988)(1)(_273);
                })(findIndex(_271(_272))(_273));
            };
        };
    };
    var $$delete = function (__dict_Eq_38) {
        return deleteBy(Prelude["=="](__dict_Eq_38));
    };
    var $bslash$bslash = function (__dict_Eq_39) {
        return function (xs) {
            return function (ys) {
                var go = function (__copy__279) {
                    return function (__copy__280) {
                        var _279 = __copy__279;
                        var _280 = __copy__280;
                        tco: while (true) {
                            if (_280.length === 0) {
                                return _279;
                            };
                            if (_279.length === 0) {
                                return [  ];
                            };
                            if (_280.length > 0) {
                                var _992 = _280.slice(1);
                                var __tco__279 = $$delete(__dict_Eq_39)(_280[0])(_279);
                                _279 = __tco__279;
                                _280 = _992;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
                return go(xs)(ys);
            };
        };
    };
    var catMaybes = concatMap(Data_Maybe.maybe([  ])(singleton));
    var applicativeArray = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyArray({});
        }, singleton);
    };
    var applyArray = function (_) {
        return new Prelude.Apply(Prelude.ap(monadArray({})), function (__1) {
            return functorArray({});
        });
    };
    var monadArray = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeArray({});
        }, function (__1) {
            return bindArray({});
        });
    };
    var bindArray = function (_) {
        return new Prelude.Bind(Prelude.flip(concatMap), function (__1) {
            return applyArray({});
        });
    };
    var alternativeArray = function (_) {
        return new Prelude.Alternative(append, [  ]);
    };
    return {
        span: span, 
        groupBy: groupBy, 
        "group'": group$prime, 
        group: group, 
        sortBy: sortBy, 
        sort: sort, 
        nubBy: nubBy, 
        nub: nub, 
        zipWith: zipWith, 
        range: range, 
        filter: filter, 
        concatMap: concatMap, 
        intersect: intersect, 
        intersectBy: intersectBy, 
        "\\\\": $bslash$bslash, 
        "delete": $$delete, 
        deleteBy: deleteBy, 
        updateAt: updateAt, 
        deleteAt: deleteAt, 
        insertAt: insertAt, 
        take: take, 
        drop: drop, 
        reverse: reverse, 
        concat: concat, 
        append: append, 
        elemLastIndex: elemLastIndex, 
        elemIndex: elemIndex, 
        findLastIndex: findLastIndex, 
        findIndex: findIndex, 
        length: length, 
        catMaybes: catMaybes, 
        mapMaybe: mapMaybe, 
        map: map, 
        "null": $$null, 
        init: init, 
        tail: tail, 
        last: last, 
        head: head, 
        singleton: singleton, 
        snoc: snoc, 
        "!!": $bang$bang, 
        functorArray: functorArray, 
        applyArray: applyArray, 
        applicativeArray: applicativeArray, 
        bindArray: bindArray, 
        monadArray: monadArray, 
        semigroupArray: semigroupArray, 
        alternativeArray: alternativeArray
    };
})();
var PS = PS || {};
PS.Data_Array_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    var Data_Array = PS.Data_Array;
    var Data_Maybe_Unsafe = PS.Data_Maybe_Unsafe;
    var tail = function (_288) {
        if (_288.length > 0) {
            var _995 = _288.slice(1);
            return _995;
        };
        throw new Error("Failed pattern match");
    };
    var last = function (xs) {
        return xs[Data_Array.length(xs) - 1];
    };
    var init = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe_Unsafe.fromJust)(Data_Array.init);
    var head = function (_287) {
        if (_287.length > 0) {
            var _998 = _287.slice(1);
            return _287[0];
        };
        throw new Error("Failed pattern match");
    };
    return {
        init: init, 
        last: last, 
        tail: tail, 
        head: head
    };
})();
var PS = PS || {};
PS.Data_Monoid = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    function Monoid(__superclass_Prelude$dotSemigroup_0, mempty) {
        this["__superclass_Prelude.Semigroup_0"] = __superclass_Prelude$dotSemigroup_0;
        this.mempty = mempty;
    };
    var monoidString = function (_) {
        return new Monoid(function (__1) {
            return Prelude.semigroupString({});
        }, "");
    };
    var monoidArray = function (_) {
        return new Monoid(function (__1) {
            return Data_Array.semigroupArray({});
        }, [  ]);
    };
    var mempty = function (dict) {
        return dict.mempty;
    };
    return {
        Monoid: Monoid, 
        mempty: mempty, 
        monoidString: monoidString, 
        monoidArray: monoidArray
    };
})();
var PS = PS || {};
PS.Data_Monoid_All = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function All(value0) {
        this.value0 = value0;
    };
    All.create = function (value0) {
        return new All(value0);
    };
    var showAll = function (_) {
        return new Prelude.Show(function (_294) {
            return "All " + Prelude.show(Prelude.showBoolean({}))(_294.value0);
        });
    };
    var semigroupAll = function (_) {
        return new Prelude.Semigroup(function (_295) {
            return function (_296) {
                return new All(_295.value0 && _296.value0);
            };
        });
    };
    var runAll = function (_289) {
        return _289.value0;
    };
    var monoidAll = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupAll({});
        }, new All(true));
    };
    var eqAll = function (_) {
        return new Prelude.Eq(function (_292) {
            return function (_293) {
                return _292.value0 !== _293.value0;
            };
        }, function (_290) {
            return function (_291) {
                return _290.value0 === _291.value0;
            };
        });
    };
    return {
        All: All, 
        runAll: runAll, 
        eqAll: eqAll, 
        showAll: showAll, 
        semigroupAll: semigroupAll, 
        monoidAll: monoidAll
    };
})();
var PS = PS || {};
PS.Data_Monoid_Any = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Any(value0) {
        this.value0 = value0;
    };
    Any.create = function (value0) {
        return new Any(value0);
    };
    var showAny = function (_) {
        return new Prelude.Show(function (_302) {
            return "Any " + Prelude.show(Prelude.showBoolean({}))(_302.value0);
        });
    };
    var semigroupAny = function (_) {
        return new Prelude.Semigroup(function (_303) {
            return function (_304) {
                return new Any(_303.value0 || _304.value0);
            };
        });
    };
    var runAny = function (_297) {
        return _297.value0;
    };
    var monoidAny = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupAny({});
        }, new Any(false));
    };
    var eqAny = function (_) {
        return new Prelude.Eq(function (_300) {
            return function (_301) {
                return _300.value0 !== _301.value0;
            };
        }, function (_298) {
            return function (_299) {
                return _298.value0 === _299.value0;
            };
        });
    };
    return {
        Any: Any, 
        runAny: runAny, 
        eqAny: eqAny, 
        showAny: showAny, 
        semigroupAny: semigroupAny, 
        monoidAny: monoidAny
    };
})();
var PS = PS || {};
PS.Data_Monoid_Dual = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Dual(value0) {
        this.value0 = value0;
    };
    Dual.create = function (value0) {
        return new Dual(value0);
    };
    var showDual = function (__dict_Show_40) {
        return new Prelude.Show(function (_312) {
            return "Dual " + Prelude.show(__dict_Show_40)(_312.value0);
        });
    };
    var semigroupDual = function (__dict_Semigroup_41) {
        return new Prelude.Semigroup(function (_313) {
            return function (_314) {
                return new Dual(Prelude["<>"](__dict_Semigroup_41)(_314.value0)(_313.value0));
            };
        });
    };
    var runDual = function (_305) {
        return _305.value0;
    };
    var monoidDual = function (__dict_Monoid_43) {
        return new Data_Monoid.Monoid(function (_) {
            return semigroupDual(__dict_Monoid_43["__superclass_Prelude.Semigroup_0"]({}));
        }, new Dual(Data_Monoid.mempty(__dict_Monoid_43)));
    };
    var eqDual = function (__dict_Eq_44) {
        return new Prelude.Eq(function (_308) {
            return function (_309) {
                return Prelude["/="](__dict_Eq_44)(_308.value0)(_309.value0);
            };
        }, function (_306) {
            return function (_307) {
                return Prelude["=="](__dict_Eq_44)(_306.value0)(_307.value0);
            };
        });
    };
    var ordDual = function (__dict_Ord_42) {
        return new Prelude.Ord(function (_) {
            return eqDual(__dict_Ord_42["__superclass_Prelude.Eq_0"]({}));
        }, function (_310) {
            return function (_311) {
                return Prelude.compare(__dict_Ord_42)(_310.value0)(_311.value0);
            };
        });
    };
    return {
        Dual: Dual, 
        runDual: runDual, 
        eqDual: eqDual, 
        ordDual: ordDual, 
        showDual: showDual, 
        semigroupDual: semigroupDual, 
        monoidDual: monoidDual
    };
})();
var PS = PS || {};
PS.Data_Monoid_Endo = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Endo(value0) {
        this.value0 = value0;
    };
    Endo.create = function (value0) {
        return new Endo(value0);
    };
    var semigroupEndo = function (_) {
        return new Prelude.Semigroup(function (_316) {
            return function (_317) {
                return new Endo(Prelude["<<<"](Prelude.semigroupoidArr({}))(_316.value0)(_317.value0));
            };
        });
    };
    var runEndo = function (_315) {
        return _315.value0;
    };
    var monoidEndo = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupEndo({});
        }, new Endo(Prelude.id(Prelude.categoryArr({}))));
    };
    return {
        Endo: Endo, 
        runEndo: runEndo, 
        semigroupEndo: semigroupEndo, 
        monoidEndo: monoidEndo
    };
})();
var PS = PS || {};
PS.Data_Monoid_First = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Monoid = PS.Data_Monoid;
    function First(value0) {
        this.value0 = value0;
    };
    First.create = function (value0) {
        return new First(value0);
    };
    var showFirst = function (__dict_Show_45) {
        return new Prelude.Show(function (_325) {
            return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_45))(_325.value0) + ")";
        });
    };
    var semigroupFirst = function (_) {
        return new Prelude.Semigroup(function (_326) {
            return function (_327) {
                if (_326.value0 instanceof Data_Maybe.Just) {
                    return _326;
                };
                return _327;
            };
        });
    };
    var runFirst = function (_318) {
        return _318.value0;
    };
    var monoidFirst = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupFirst({});
        }, new First(Data_Maybe.Nothing.value));
    };
    var eqFirst = function (__dict_Eq_47) {
        return new Prelude.Eq(function (_321) {
            return function (_322) {
                return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_47))(_321.value0)(_322.value0);
            };
        }, function (_319) {
            return function (_320) {
                return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_47))(_319.value0)(_320.value0);
            };
        });
    };
    var ordFirst = function (__dict_Ord_46) {
        return new Prelude.Ord(function (_) {
            return eqFirst(__dict_Ord_46["__superclass_Prelude.Eq_0"]({}));
        }, function (_323) {
            return function (_324) {
                return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_46))(_323.value0)(_324.value0);
            };
        });
    };
    return {
        First: First, 
        runFirst: runFirst, 
        eqFirst: eqFirst, 
        ordFirst: ordFirst, 
        showFirst: showFirst, 
        semigroupFirst: semigroupFirst, 
        monoidFirst: monoidFirst
    };
})();
var PS = PS || {};
PS.Data_Monoid_Last = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Monoid = PS.Data_Monoid;
    function Last(value0) {
        this.value0 = value0;
    };
    Last.create = function (value0) {
        return new Last(value0);
    };
    var showLast = function (__dict_Show_48) {
        return new Prelude.Show(function (_335) {
            return "Last (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_48))(_335.value0) + ")";
        });
    };
    var semigroupLast = function (_) {
        return new Prelude.Semigroup(function (_336) {
            return function (_337) {
                if (_337.value0 instanceof Data_Maybe.Just) {
                    return _337;
                };
                if (_337.value0 instanceof Data_Maybe.Nothing) {
                    return _336;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var runLast = function (_328) {
        return _328.value0;
    };
    var monoidLast = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupLast({});
        }, new Last(Data_Maybe.Nothing.value));
    };
    var eqLast = function (__dict_Eq_50) {
        return new Prelude.Eq(function (_331) {
            return function (_332) {
                return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_50))(_331.value0)(_332.value0);
            };
        }, function (_329) {
            return function (_330) {
                return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_50))(_329.value0)(_330.value0);
            };
        });
    };
    var ordLast = function (__dict_Ord_49) {
        return new Prelude.Ord(function (_) {
            return eqLast(__dict_Ord_49["__superclass_Prelude.Eq_0"]({}));
        }, function (_333) {
            return function (_334) {
                return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_49))(_333.value0)(_334.value0);
            };
        });
    };
    return {
        Last: Last, 
        runLast: runLast, 
        eqLast: eqLast, 
        ordLast: ordLast, 
        showLast: showLast, 
        semigroupLast: semigroupLast, 
        monoidLast: monoidLast
    };
})();
var PS = PS || {};
PS.Data_Monoid_Product = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Product(value0) {
        this.value0 = value0;
    };
    Product.create = function (value0) {
        return new Product(value0);
    };
    var showProduct = function (_) {
        return new Prelude.Show(function (_345) {
            return "Product " + Prelude.show(Prelude.showNumber({}))(_345.value0);
        });
    };
    var semigroupProduct = function (_) {
        return new Prelude.Semigroup(function (_346) {
            return function (_347) {
                return new Product(_346.value0 * _347.value0);
            };
        });
    };
    var runProduct = function (_338) {
        return _338.value0;
    };
    var monoidProduct = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupProduct({});
        }, new Product(1));
    };
    var eqProduct = function (_) {
        return new Prelude.Eq(function (_341) {
            return function (_342) {
                return _341.value0 !== _342.value0;
            };
        }, function (_339) {
            return function (_340) {
                return _339.value0 === _340.value0;
            };
        });
    };
    var ordProduct = function (_) {
        return new Prelude.Ord(function (__1) {
            return eqProduct({});
        }, function (_343) {
            return function (_344) {
                return Prelude.compare(Prelude.ordNumber({}))(_343.value0)(_344.value0);
            };
        });
    };
    return {
        Product: Product, 
        runProduct: runProduct, 
        eqProduct: eqProduct, 
        ordProduct: ordProduct, 
        showProduct: showProduct, 
        semigroupProduct: semigroupProduct, 
        monoidProduct: monoidProduct
    };
})();
var PS = PS || {};
PS.Data_Monoid_Sum = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Sum(value0) {
        this.value0 = value0;
    };
    Sum.create = function (value0) {
        return new Sum(value0);
    };
    var showSum = function (_) {
        return new Prelude.Show(function (_355) {
            return "Sum " + Prelude.show(Prelude.showNumber({}))(_355.value0);
        });
    };
    var semigroupSum = function (_) {
        return new Prelude.Semigroup(function (_356) {
            return function (_357) {
                return new Sum(_356.value0 + _357.value0);
            };
        });
    };
    var runSum = function (_348) {
        return _348.value0;
    };
    var monoidSum = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupSum({});
        }, new Sum(0));
    };
    var eqSum = function (_) {
        return new Prelude.Eq(function (_351) {
            return function (_352) {
                return _351.value0 !== _352.value0;
            };
        }, function (_349) {
            return function (_350) {
                return _349.value0 === _350.value0;
            };
        });
    };
    var ordSum = function (_) {
        return new Prelude.Ord(function (__1) {
            return eqSum({});
        }, function (_353) {
            return function (_354) {
                return Prelude.compare(Prelude.ordNumber({}))(_353.value0)(_354.value0);
            };
        });
    };
    return {
        Sum: Sum, 
        runSum: runSum, 
        eqSum: eqSum, 
        ordSum: ordSum, 
        showSum: showSum, 
        semigroupSum: semigroupSum, 
        monoidSum: monoidSum
    };
})();
var PS = PS || {};
PS.Data_Tuple = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Monoid = PS.Data_Monoid;
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    var zip = Data_Array.zipWith(Tuple.create);
    var unzip = function (_362) {
        if (_362.length > 0) {
            var _1143 = _362.slice(1);
            return (function (_1139) {
                return new Tuple(Prelude[":"]((_362[0]).value0)(_1139.value0), Prelude[":"]((_362[0]).value1)(_1139.value1));
            })(unzip(_1143));
        };
        if (_362.length === 0) {
            return new Tuple([  ], [  ]);
        };
        throw new Error("Failed pattern match");
    };
    var uncurry = function (_360) {
        return function (_361) {
            return _360(_361.value0)(_361.value1);
        };
    };
    var swap = function (_363) {
        return new Tuple(_363.value1, _363.value0);
    };
    var snd = function (_359) {
        return _359.value1;
    };
    var showTuple = function (__dict_Show_51) {
        return function (__dict_Show_52) {
            return new Prelude.Show(function (_364) {
                return "Tuple (" + Prelude.show(__dict_Show_51)(_364.value0) + ") (" + Prelude.show(__dict_Show_52)(_364.value1) + ")";
            });
        };
    };
    var functorTuple = function (_) {
        return new Prelude.Functor(function (_369) {
            return function (_370) {
                return new Tuple(_370.value0, _369(_370.value1));
            };
        });
    };
    var fst = function (_358) {
        return _358.value0;
    };
    var eqTuple = function (__dict_Eq_56) {
        return function (__dict_Eq_57) {
            return new Prelude.Eq(function (t1) {
                return function (t2) {
                    return !Prelude["=="](eqTuple(__dict_Eq_56)(__dict_Eq_57))(t1)(t2);
                };
            }, function (_365) {
                return function (_366) {
                    return Prelude["=="](__dict_Eq_56)(_365.value0)(_366.value0) && Prelude["=="](__dict_Eq_57)(_365.value1)(_366.value1);
                };
            });
        };
    };
    var ordTuple = function (__dict_Ord_53) {
        return function (__dict_Ord_54) {
            return new Prelude.Ord(function (_) {
                return eqTuple(__dict_Ord_53["__superclass_Prelude.Eq_0"]({}))(__dict_Ord_54["__superclass_Prelude.Eq_0"]({}));
            }, function (_367) {
                return function (_368) {
                    return (function (_1174) {
                        if (_1174 instanceof Prelude.EQ) {
                            return Prelude.compare(__dict_Ord_54)(_367.value1)(_368.value1);
                        };
                        return _1174;
                    })(Prelude.compare(__dict_Ord_53)(_367.value0)(_368.value0));
                };
            });
        };
    };
    var curry = function (f) {
        return function (a) {
            return function (b) {
                return f(new Tuple(a, b));
            };
        };
    };
    var applyTuple = function (__dict_Semigroup_59) {
        return new Prelude.Apply(function (_371) {
            return function (_372) {
                return new Tuple(Prelude["<>"](__dict_Semigroup_59)(_371.value0)(_372.value0), _371.value1(_372.value1));
            };
        }, functorTuple);
    };
    var bindTuple = function (__dict_Semigroup_58) {
        return new Prelude.Bind(function (_373) {
            return function (_374) {
                return (function (_1187) {
                    return new Tuple(Prelude["<>"](__dict_Semigroup_58)(_373.value0)(_1187.value0), _1187.value1);
                })(_374(_373.value1));
            };
        }, function (_) {
            return applyTuple(__dict_Semigroup_58);
        });
    };
    var applicativeTuple = function (__dict_Monoid_60) {
        return new Prelude.Applicative(function (_) {
            return applyTuple(__dict_Monoid_60["__superclass_Prelude.Semigroup_0"]({}));
        }, Tuple.create(Data_Monoid.mempty(__dict_Monoid_60)));
    };
    var monadTuple = function (__dict_Monoid_55) {
        return new Prelude.Monad(function (_) {
            return applicativeTuple(__dict_Monoid_55);
        }, function (_) {
            return bindTuple(__dict_Monoid_55["__superclass_Prelude.Semigroup_0"]({}));
        });
    };
    return {
        Tuple: Tuple, 
        swap: swap, 
        unzip: unzip, 
        zip: zip, 
        uncurry: uncurry, 
        curry: curry, 
        snd: snd, 
        fst: fst, 
        showTuple: showTuple, 
        eqTuple: eqTuple, 
        ordTuple: ordTuple, 
        functorTuple: functorTuple, 
        applyTuple: applyTuple, 
        applicativeTuple: applicativeTuple, 
        bindTuple: bindTuple, 
        monadTuple: monadTuple
    };
})();
var PS = PS || {};
PS.Data_Profunctor_Strong = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Profunctor = PS.Data_Profunctor;
    function Strong(__superclass_Data$dotProfunctor$dotProfunctor_0, first$prime, second$prime) {
        this["__superclass_Data.Profunctor.Profunctor_0"] = __superclass_Data$dotProfunctor$dotProfunctor_0;
        this["first'"] = first$prime;
        this["second'"] = second$prime;
    };
    var strongArr = function (_) {
        return new Strong(function (__1) {
            return Data_Profunctor.profunctorArr({});
        }, function (_375) {
            return function (_376) {
                return new Data_Tuple.Tuple(_375(_376.value0), _376.value1);
            };
        }, Prelude["<$>"](Data_Tuple.functorTuple({})));
    };
    var second$prime = function (dict) {
        return dict["second'"];
    };
    var first$prime = function (dict) {
        return dict["first'"];
    };
    return {
        Strong: Strong, 
        "second'": second$prime, 
        "first'": first$prime, 
        strongArr: strongArr
    };
})();
var PS = PS || {};
PS.Control_Monad_Trans = (function () {
    "use strict";
    function MonadTrans(lift) {
        this.lift = lift;
    };
    var lift = function (dict) {
        return dict.lift;
    };
    return {
        MonadTrans: MonadTrans, 
        lift: lift
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer_Trans = (function () {
    "use strict";
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Monoid = PS.Data_Monoid;
    var WriterT = {
        create: function (value) {
            return value;
        }
    };
    var runWriterT = function (_378) {
        return _378;
    };
    var monadTransWriterT = function (__dict_Monoid_63) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_64) {
            return function (m) {
                return WriterT.create(Prelude[">>="](__dict_Monad_64["__superclass_Prelude.Bind_1"]({}))(m)(function (_5) {
                    return Prelude["return"](__dict_Monad_64)(new Data_Tuple.Tuple(_5, Data_Monoid.mempty(__dict_Monoid_63)));
                }));
            };
        });
    };
    var mapWriterT = function (f) {
        return function (m) {
            return WriterT.create(f(runWriterT(m)));
        };
    };
    var liftCatchWriter = function ($$catch) {
        return function (m) {
            return function (h) {
                return WriterT.create($$catch(runWriterT(m))(function (e) {
                    return runWriterT(h(e));
                }));
            };
        };
    };
    var liftCallCCWriter = function (__dict_Monoid_65) {
        return function (callCC) {
            return function (f) {
                return WriterT.create(callCC(function (c) {
                    return runWriterT(f(function (a) {
                        return WriterT.create(c(new Data_Tuple.Tuple(a, Data_Monoid.mempty(__dict_Monoid_65))));
                    }));
                }));
            };
        };
    };
    var functorWriterT = function (__dict_Functor_66) {
        return new Prelude.Functor(function (f) {
            return mapWriterT(Prelude["<$>"](__dict_Functor_66)(function (_377) {
                return new Data_Tuple.Tuple(f(_377.value0), _377.value1);
            }));
        });
    };
    var applyWriterT = function (__dict_Monoid_69) {
        return function (__dict_Functor_70) {
            return function (__dict_Applicative_71) {
                return new Prelude.Apply(function (f) {
                    return function (v) {
                        return WriterT.create((function () {
                            var k = function (_379) {
                                return function (_380) {
                                    return new Data_Tuple.Tuple(_379.value0(_380.value0), Prelude["<>"](__dict_Monoid_69["__superclass_Prelude.Semigroup_0"]({}))(_379.value1)(_380.value1));
                                };
                            };
                            return Prelude["<*>"](__dict_Applicative_71["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_70)(k)(runWriterT(f)))(runWriterT(v));
                        })());
                    };
                }, function (_) {
                    return functorWriterT(__dict_Functor_70);
                });
            };
        };
    };
    var bindWriterT = function (__dict_Monoid_67) {
        return function (__dict_Monad_68) {
            return new Prelude.Bind(function (m) {
                return function (k) {
                    return WriterT.create(Prelude[">>="](__dict_Monad_68["__superclass_Prelude.Bind_1"]({}))(runWriterT(m))(function (_4) {
                        return Prelude[">>="](__dict_Monad_68["__superclass_Prelude.Bind_1"]({}))(runWriterT(k(_4.value0)))(function (_3) {
                            return Prelude["return"](__dict_Monad_68)(new Data_Tuple.Tuple(_3.value0, Prelude["<>"](__dict_Monoid_67["__superclass_Prelude.Semigroup_0"]({}))(_4.value1)(_3.value1)));
                        });
                    }));
                };
            }, function (_) {
                return applyWriterT(__dict_Monoid_67)(((__dict_Monad_68["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_68["__superclass_Prelude.Applicative_0"]({}));
            });
        };
    };
    var applicativeWriterT = function (__dict_Monoid_72) {
        return function (__dict_Functor_73) {
            return function (__dict_Applicative_74) {
                return new Prelude.Applicative(function (_) {
                    return applyWriterT(__dict_Monoid_72)(__dict_Functor_73)(__dict_Applicative_74);
                }, function (a) {
                    return WriterT.create(Prelude.pure(__dict_Applicative_74)(new Data_Tuple.Tuple(a, Data_Monoid.mempty(__dict_Monoid_72))));
                });
            };
        };
    };
    var monadWriterT = function (__dict_Monoid_61) {
        return function (__dict_Monad_62) {
            return new Prelude.Monad(function (_) {
                return applicativeWriterT(__dict_Monoid_61)(((__dict_Monad_62["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_62["__superclass_Prelude.Applicative_0"]({}));
            }, function (_) {
                return bindWriterT(__dict_Monoid_61)(__dict_Monad_62);
            });
        };
    };
    var alternativeWriterT = function (__dict_Monoid_75) {
        return function (__dict_Alternative_76) {
            return new Prelude.Alternative(function (m) {
                return function (n) {
                    return WriterT.create(Prelude["<|>"](__dict_Alternative_76)(runWriterT(m))(runWriterT(n)));
                };
            }, Prelude.empty(__dict_Alternative_76));
        };
    };
    return {
        WriterT: WriterT, 
        liftCallCCWriter: liftCallCCWriter, 
        liftCatchWriter: liftCatchWriter, 
        mapWriterT: mapWriterT, 
        runWriterT: runWriterT, 
        functorWriterT: functorWriterT, 
        applyWriterT: applyWriterT, 
        applicativeWriterT: applicativeWriterT, 
        alternativeWriterT: alternativeWriterT, 
        bindWriterT: bindWriterT, 
        monadWriterT: monadWriterT, 
        monadTransWriterT: monadTransWriterT
    };
})();
var PS = PS || {};
PS.Control_Monad_State_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Tuple = PS.Data_Tuple;
    var StateT = {
        create: function (value) {
            return value;
        }
    };
    var runStateT = function (_383) {
        return _383;
    };
    var withStateT = function (f) {
        return function (s) {
            return StateT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(runStateT(s))(f));
        };
    };
    var monadTransStateT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_77) {
            return function (m) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_77["__superclass_Prelude.Bind_1"]({}))(m)(function (_7) {
                        return Prelude["return"](__dict_Monad_77)(new Data_Tuple.Tuple(_7, s));
                    });
                };
            };
        });
    };
    var mapStateT = function (f) {
        return function (m) {
            return StateT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runStateT(m)));
        };
    };
    var liftPassState = function (__dict_Monad_79) {
        return function (pass) {
            return function (m) {
                return StateT.create(function (s) {
                    return pass(Prelude[">>="](__dict_Monad_79["__superclass_Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_9) {
                        return Prelude["return"](__dict_Monad_79)(new Data_Tuple.Tuple(new Data_Tuple.Tuple(_9.value0.value0, _9.value1), _9.value0.value1));
                    }));
                });
            };
        };
    };
    var liftListenState = function (__dict_Monad_80) {
        return function (listen) {
            return function (m) {
                return StateT.create(function (s) {
                    return Prelude[">>="](__dict_Monad_80["__superclass_Prelude.Bind_1"]({}))(listen(runStateT(m)(s)))(function (_8) {
                        return Prelude["return"](__dict_Monad_80)(new Data_Tuple.Tuple(new Data_Tuple.Tuple(_8.value0.value0, _8.value1), _8.value0.value1));
                    });
                });
            };
        };
    };
    var liftCatchState = function ($$catch) {
        return function (m) {
            return function (h) {
                return StateT.create(function (s) {
                    return $$catch(runStateT(m)(s))(function (e) {
                        return runStateT(h(e))(s);
                    });
                });
            };
        };
    };
    var liftCallCCState$prime = function (callCC) {
        return function (f) {
            return StateT.create(function (s) {
                return callCC(function (c) {
                    return runStateT(f(function (a) {
                        return StateT.create(function (s$prime) {
                            return c(new Data_Tuple.Tuple(a, s$prime));
                        });
                    }))(s);
                });
            });
        };
    };
    var liftCallCCState = function (callCC) {
        return function (f) {
            return StateT.create(function (s) {
                return callCC(function (c) {
                    return runStateT(f(function (a) {
                        return StateT.create(function (_) {
                            return c(new Data_Tuple.Tuple(a, s));
                        });
                    }))(s);
                });
            });
        };
    };
    var execStateT = function (__dict_Monad_82) {
        return function (m) {
            return function (s) {
                return Prelude[">>="](__dict_Monad_82["__superclass_Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_382) {
                    return Prelude["return"](__dict_Monad_82)(_382.value1);
                });
            };
        };
    };
    var evalStateT = function (__dict_Monad_83) {
        return function (m) {
            return function (s) {
                return Prelude[">>="](__dict_Monad_83["__superclass_Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_381) {
                    return Prelude["return"](__dict_Monad_83)(_381.value0);
                });
            };
        };
    };
    var applicativeStateT = function (__dict_Monad_86) {
        return new Prelude.Applicative(function (_) {
            return applyStateT(__dict_Monad_86);
        }, function (a) {
            return StateT.create(function (s) {
                return Prelude["return"](__dict_Monad_86)(new Data_Tuple.Tuple(a, s));
            });
        });
    };
    var applyStateT = function (__dict_Monad_85) {
        return new Prelude.Apply(Prelude.ap(monadStateT(__dict_Monad_85)), function (_) {
            return functorStateT(__dict_Monad_85);
        });
    };
    var monadStateT = function (__dict_Monad_78) {
        return new Prelude.Monad(function (_) {
            return applicativeStateT(__dict_Monad_78);
        }, function (_) {
            return bindStateT(__dict_Monad_78);
        });
    };
    var bindStateT = function (__dict_Monad_84) {
        return new Prelude.Bind(function (_384) {
            return function (_385) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_84["__superclass_Prelude.Bind_1"]({}))(_384(s))(function (_6) {
                        return runStateT(_385(_6.value0))(_6.value1);
                    });
                };
            };
        }, function (_) {
            return applyStateT(__dict_Monad_84);
        });
    };
    var functorStateT = function (__dict_Monad_81) {
        return new Prelude.Functor(Prelude.liftM1(monadStateT(__dict_Monad_81)));
    };
    var alternativeStateT = function (__dict_Alternative_87) {
        return new Prelude.Alternative(function (x) {
            return function (y) {
                return StateT.create(function (s) {
                    return Prelude["<|>"](__dict_Alternative_87)(runStateT(x)(s))(runStateT(y)(s));
                });
            };
        }, StateT.create(function (_) {
            return Prelude.empty(__dict_Alternative_87);
        }));
    };
    return {
        StateT: StateT, 
        "liftCallCCState'": liftCallCCState$prime, 
        liftCallCCState: liftCallCCState, 
        liftPassState: liftPassState, 
        liftListenState: liftListenState, 
        liftCatchState: liftCatchState, 
        withStateT: withStateT, 
        mapStateT: mapStateT, 
        execStateT: execStateT, 
        evalStateT: evalStateT, 
        runStateT: runStateT, 
        functorStateT: functorStateT, 
        applyStateT: applyStateT, 
        applicativeStateT: applicativeStateT, 
        alternativeStateT: alternativeStateT, 
        bindStateT: bindStateT, 
        monadStateT: monadStateT, 
        monadTransStateT: monadTransStateT
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var ReaderT = {
        create: function (value) {
            return value;
        }
    };
    var runReaderT = function (_386) {
        return _386;
    };
    var withReaderT = function (f) {
        return function (m) {
            return ReaderT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(runReaderT(m))(f));
        };
    };
    var mapReaderT = function (f) {
        return function (m) {
            return ReaderT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runReaderT(m)));
        };
    };
    var liftReaderT = function (m) {
        return Prelude["const"](m);
    };
    var monadTransReaderT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_89) {
            return liftReaderT;
        });
    };
    var liftCatchReader = function ($$catch) {
        return function (m) {
            return function (h) {
                return ReaderT.create(function (r) {
                    return $$catch(runReaderT(m)(r))(function (e) {
                        return runReaderT(h(e))(r);
                    });
                });
            };
        };
    };
    var liftCallCCReader = function (callCC) {
        return function (f) {
            return ReaderT.create(function (r) {
                return callCC(function (c) {
                    return runReaderT(f(function (a) {
                        return ReaderT.create(Prelude["const"](c(a)));
                    }))(r);
                });
            });
        };
    };
    var functorReaderT = function (__dict_Functor_90) {
        return new Prelude.Functor(function (f) {
            return mapReaderT(Prelude["<$>"](__dict_Functor_90)(f));
        });
    };
    var applyReaderT = function (__dict_Applicative_92) {
        return new Prelude.Apply(function (f) {
            return function (v) {
                return function (r) {
                    return Prelude["<*>"](__dict_Applicative_92["__superclass_Prelude.Apply_0"]({}))(runReaderT(f)(r))(runReaderT(v)(r));
                };
            };
        }, function (_) {
            return functorReaderT((__dict_Applicative_92["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}));
        });
    };
    var bindReaderT = function (__dict_Monad_91) {
        return new Prelude.Bind(function (m) {
            return function (k) {
                return function (r) {
                    return Prelude[">>="](__dict_Monad_91["__superclass_Prelude.Bind_1"]({}))(runReaderT(m)(r))(function (_10) {
                        return runReaderT(k(_10))(r);
                    });
                };
            };
        }, function (_) {
            return applyReaderT(__dict_Monad_91["__superclass_Prelude.Applicative_0"]({}));
        });
    };
    var applicativeReaderT = function (__dict_Applicative_93) {
        return new Prelude.Applicative(function (_) {
            return applyReaderT(__dict_Applicative_93);
        }, Prelude["<<<"](Prelude.semigroupoidArr({}))(liftReaderT)(Prelude.pure(__dict_Applicative_93)));
    };
    var monadReaderT = function (__dict_Monad_88) {
        return new Prelude.Monad(function (_) {
            return applicativeReaderT(__dict_Monad_88["__superclass_Prelude.Applicative_0"]({}));
        }, function (_) {
            return bindReaderT(__dict_Monad_88);
        });
    };
    var alternativeReaderT = function (__dict_Alternative_94) {
        return new Prelude.Alternative(function (m) {
            return function (n) {
                return function (r) {
                    return Prelude["<|>"](__dict_Alternative_94)(runReaderT(m)(r))(runReaderT(n)(r));
                };
            };
        }, liftReaderT(Prelude.empty(__dict_Alternative_94)));
    };
    return {
        ReaderT: ReaderT, 
        liftCallCCReader: liftCallCCReader, 
        liftCatchReader: liftCatchReader, 
        liftReaderT: liftReaderT, 
        mapReaderT: mapReaderT, 
        withReaderT: withReaderT, 
        runReaderT: runReaderT, 
        functorReaderT: functorReaderT, 
        applyReaderT: applyReaderT, 
        applicativeReaderT: applicativeReaderT, 
        alternativeReaderT: alternativeReaderT, 
        bindReaderT: bindReaderT, 
        monadReaderT: monadReaderT, 
        monadTransReaderT: monadTransReaderT
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Monoid = PS.Data_Monoid;
    var RWST = {
        create: function (value) {
            return value;
        }
    };
    var runRWST = function (_389) {
        return _389;
    };
    var withRWST = function (f) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Data_Tuple.uncurry(runRWST(m))(f(r)(s));
                };
            };
        };
    };
    var mkSee = function (__dict_Monoid_97) {
        return function (s) {
            return function (a) {
                return function (w) {
                    return {
                        state: s, 
                        result: a, 
                        log: w
                    };
                };
            };
        };
    };
    var monadTransRWST = function (__dict_Monoid_98) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_99) {
            return function (m) {
                return function (_) {
                    return function (s) {
                        return Prelude[">>="](__dict_Monad_99["__superclass_Prelude.Bind_1"]({}))(m)(function (a) {
                            return Prelude["return"](__dict_Monad_99)(mkSee(__dict_Monoid_98)(s)(a)(Data_Monoid.mempty(__dict_Monoid_98)));
                        });
                    };
                };
            };
        });
    };
    var mapRWST = function (f) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return f(runRWST(m)(r)(s));
                };
            };
        };
    };
    var functorRWST = function (__dict_Functor_100) {
        return new Prelude.Functor(function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude["<$>"](__dict_Functor_100)(function (see) {
                            var _1239 = {};
                            for (var _1240 in see) {
                                if (see.hasOwnProperty(_1240)) {
                                    _1239[_1240] = see[_1240];
                                };
                            };
                            _1239.result = f(see.result);
                            return _1239;
                        })(runRWST(m)(r)(s));
                    };
                };
            };
        });
    };
    var execRWST = function (__dict_Monad_101) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_101["__superclass_Prelude.Bind_1"]({}))(runRWST(m)(r)(s))(function (see) {
                        return Prelude["return"](__dict_Monad_101)(new Data_Tuple.Tuple(see.state, see.log));
                    });
                };
            };
        };
    };
    var evalRWST = function (__dict_Monad_102) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_102["__superclass_Prelude.Bind_1"]({}))(runRWST(m)(r)(s))(function (see) {
                        return Prelude["return"](__dict_Monad_102)(new Data_Tuple.Tuple(see.result, see.log));
                    });
                };
            };
        };
    };
    var applyRWST = function (__dict_Apply_105) {
        return function (__dict_Semigroup_106) {
            return new Prelude.Apply(function (f) {
                return function (m) {
                    return function (r) {
                        return function (s) {
                            return Prelude["<*>"](__dict_Apply_105)(Prelude["<$>"](__dict_Apply_105["__superclass_Prelude.Functor_0"]({}))(function (_387) {
                                return function (see) {
                                    var _1242 = {};
                                    for (var _1243 in see) {
                                        if (see.hasOwnProperty(_1243)) {
                                            _1242[_1243] = see[_1243];
                                        };
                                    };
                                    _1242.result = _387.result(see.result);
                                    _1242.log = Prelude["<>"](__dict_Semigroup_106)(_387.log)(see.log);
                                    return _1242;
                                };
                            })(runRWST(f)(r)(s)))(runRWST(m)(r)(s));
                        };
                    };
                };
            }, function (_) {
                return functorRWST(__dict_Apply_105["__superclass_Prelude.Functor_0"]({}));
            });
        };
    };
    var bindRWST = function (__dict_Bind_103) {
        return function (__dict_Semigroup_104) {
            return new Prelude.Bind(function (m) {
                return function (f) {
                    return function (r) {
                        return function (s) {
                            return Prelude[">>="](__dict_Bind_103)(runRWST(m)(r)(s))(function (_388) {
                                return Prelude["<$>"]((__dict_Bind_103["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(function (see$prime) {
                                    var _1247 = {};
                                    for (var _1248 in see$prime) {
                                        if (see$prime.hasOwnProperty(_1248)) {
                                            _1247[_1248] = see$prime[_1248];
                                        };
                                    };
                                    _1247.log = Prelude["<>"](__dict_Semigroup_104)(_388.log)(see$prime.log);
                                    return _1247;
                                })(runRWST(f(_388.result))(r)(_388.state));
                            });
                        };
                    };
                };
            }, function (_) {
                return applyRWST(__dict_Bind_103["__superclass_Prelude.Apply_0"]({}))(__dict_Semigroup_104);
            });
        };
    };
    var applicativeRWST = function (__dict_Applicative_107) {
        return function (__dict_Monoid_108) {
            return new Prelude.Applicative(function (_) {
                return applyRWST(__dict_Applicative_107["__superclass_Prelude.Apply_0"]({}))(__dict_Monoid_108["__superclass_Prelude.Semigroup_0"]({}));
            }, function (a) {
                return function (_) {
                    return function (s) {
                        return Prelude.pure(__dict_Applicative_107)(mkSee(__dict_Monoid_108)(s)(a)(Data_Monoid.mempty(__dict_Monoid_108)));
                    };
                };
            });
        };
    };
    var monadRWST = function (__dict_Monad_95) {
        return function (__dict_Monoid_96) {
            return new Prelude.Monad(function (_) {
                return applicativeRWST(__dict_Monad_95["__superclass_Prelude.Applicative_0"]({}))(__dict_Monoid_96);
            }, function (_) {
                return bindRWST(__dict_Monad_95["__superclass_Prelude.Bind_1"]({}))(__dict_Monoid_96["__superclass_Prelude.Semigroup_0"]({}));
            });
        };
    };
    return {
        RWST: RWST, 
        withRWST: withRWST, 
        mapRWST: mapRWST, 
        execRWST: execRWST, 
        evalRWST: evalRWST, 
        runRWST: runRWST, 
        mkSee: mkSee, 
        functorRWST: functorRWST, 
        applyRWST: applyRWST, 
        bindRWST: bindRWST, 
        applicativeRWST: applicativeRWST, 
        monadRWST: monadRWST, 
        monadTransRWST: monadTransRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_Identity = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Identity = {
        create: function (value) {
            return value;
        }
    };
    var runIdentity = function (_390) {
        return _390;
    };
    var functorIdentity = function (_) {
        return new Prelude.Functor(function (f) {
            return function (m) {
                return Identity.create(f(runIdentity(m)));
            };
        });
    };
    var applyIdentity = function (_) {
        return new Prelude.Apply(function (_391) {
            return function (_392) {
                return Identity.create(_391(_392));
            };
        }, function (__1) {
            return functorIdentity({});
        });
    };
    var bindIdentity = function (_) {
        return new Prelude.Bind(function (m) {
            return function (f) {
                return f(runIdentity(m));
            };
        }, function (__1) {
            return applyIdentity({});
        });
    };
    var applicativeIdentity = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyIdentity({});
        }, Identity.create);
    };
    var monadIdentity = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeIdentity({});
        }, function (__1) {
            return bindIdentity({});
        });
    };
    return {
        Identity: Identity, 
        runIdentity: runIdentity, 
        functorIdentity: functorIdentity, 
        applyIdentity: applyIdentity, 
        applicativeIdentity: applicativeIdentity, 
        bindIdentity: bindIdentity, 
        monadIdentity: monadIdentity
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    var Data_Monoid = PS.Data_Monoid;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var writer = function (__dict_Applicative_109) {
        return function (_396) {
            return function (_) {
                return function (s) {
                    return Prelude.pure(__dict_Applicative_109)({
                        state: s, 
                        result: _396.value0, 
                        log: _396.value1
                    });
                };
            };
        };
    };
    var withRWS = Control_Monad_RWS_Trans.withRWST;
    var tell = function (__dict_Applicative_110) {
        return function (w) {
            return writer(__dict_Applicative_110)(new Data_Tuple.Tuple(Prelude.unit, w));
        };
    };
    var state = function (__dict_Applicative_111) {
        return function (__dict_Monoid_112) {
            return function (f) {
                return function (_) {
                    return function (s) {
                        return (function (_1258) {
                            return Prelude.pure(__dict_Applicative_111)(Control_Monad_RWS_Trans.mkSee(__dict_Monoid_112)(_1258.value1)(_1258.value0)(Data_Monoid.mempty(__dict_Monoid_112)));
                        })(f(s));
                    };
                };
            };
        };
    };
    var rws = function (f) {
        return function (r) {
            return function (s) {
                return Prelude["return"](Control_Monad_Identity.monadIdentity({}))(f(r)(s));
            };
        };
    };
    var runRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.runRWST(m)(r)(s));
            };
        };
    };
    var reader = function (__dict_Applicative_113) {
        return function (__dict_Monoid_114) {
            return function (f) {
                return function (r) {
                    return function (s) {
                        return Prelude.pure(__dict_Applicative_113)(Control_Monad_RWS_Trans.mkSee(__dict_Monoid_114)(s)(f(r))(Data_Monoid.mempty(__dict_Monoid_114)));
                    };
                };
            };
        };
    };
    var put = function (__dict_Applicative_115) {
        return function (__dict_Monoid_116) {
            return function (s) {
                return state(__dict_Applicative_115)(__dict_Monoid_116)(function (_) {
                    return new Data_Tuple.Tuple(Prelude.unit, s);
                });
            };
        };
    };
    var pass = function (__dict_Monad_117) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_117["__superclass_Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_394) {
                        return Prelude.pure(__dict_Monad_117["__superclass_Prelude.Applicative_0"]({}))({
                            state: _394.state, 
                            result: _394.result.value0, 
                            log: _394.result.value1(_394.log)
                        });
                    });
                };
            };
        };
    };
    var modify = function (__dict_Applicative_118) {
        return function (__dict_Monoid_119) {
            return function (f) {
                return state(__dict_Applicative_118)(__dict_Monoid_119)(function (s) {
                    return new Data_Tuple.Tuple(Prelude.unit, f(s));
                });
            };
        };
    };
    var mapRWS = function (f) {
        return Control_Monad_RWS_Trans.mapRWST(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.Identity.create)));
    };
    var local = function (f) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Control_Monad_RWS_Trans.runRWST(m)(f(r))(s);
                };
            };
        };
    };
    var listens = function (__dict_Monad_120) {
        return function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude[">>="](__dict_Monad_120["__superclass_Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_395) {
                            return Prelude.pure(__dict_Monad_120["__superclass_Prelude.Applicative_0"]({}))({
                                state: _395.state, 
                                result: new Data_Tuple.Tuple(_395.result, f(_395.log)), 
                                log: _395.log
                            });
                        });
                    };
                };
            };
        };
    };
    var listen = function (__dict_Monad_121) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_121["__superclass_Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_393) {
                        return Prelude.pure(__dict_Monad_121["__superclass_Prelude.Applicative_0"]({}))({
                            state: _393.state, 
                            result: new Data_Tuple.Tuple(_393.result, _393.log), 
                            log: _393.log
                        });
                    });
                };
            };
        };
    };
    var gets = function (__dict_Applicative_122) {
        return function (__dict_Monoid_123) {
            return function (f) {
                return state(__dict_Applicative_122)(__dict_Monoid_123)(function (s) {
                    return new Data_Tuple.Tuple(f(s), s);
                });
            };
        };
    };
    var get = function (__dict_Applicative_124) {
        return function (__dict_Monoid_125) {
            return state(__dict_Applicative_124)(__dict_Monoid_125)(function (s) {
                return new Data_Tuple.Tuple(s, s);
            });
        };
    };
    var execRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.execRWST(Control_Monad_Identity.monadIdentity({}))(m)(r)(s));
            };
        };
    };
    var evalRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.evalRWST(Control_Monad_Identity.monadIdentity({}))(m)(r)(s));
            };
        };
    };
    var censor = function (__dict_Monad_126) {
        return function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude[">>="](__dict_Monad_126["__superclass_Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (see) {
                            return Prelude.pure(__dict_Monad_126["__superclass_Prelude.Applicative_0"]({}))((function () {
                                var _1275 = {};
                                for (var _1276 in see) {
                                    if (see.hasOwnProperty(_1276)) {
                                        _1275[_1276] = see[_1276];
                                    };
                                };
                                _1275.log = f(see.log);
                                return _1275;
                            })());
                        });
                    };
                };
            };
        };
    };
    var ask = function (__dict_Applicative_127) {
        return function (__dict_Monoid_128) {
            return function (r) {
                return function (s) {
                    return Prelude.pure(__dict_Applicative_127)(Control_Monad_RWS_Trans.mkSee(__dict_Monoid_128)(s)(r)(Data_Monoid.mempty(__dict_Monoid_128)));
                };
            };
        };
    };
    return {
        modify: modify, 
        put: put, 
        gets: gets, 
        get: get, 
        state: state, 
        censor: censor, 
        listens: listens, 
        tell: tell, 
        pass: pass, 
        listen: listen, 
        writer: writer, 
        reader: reader, 
        local: local, 
        ask: ask, 
        withRWS: withRWS, 
        mapRWS: mapRWS, 
        execRWS: execRWS, 
        evalRWS: evalRWS, 
        runRWS: runRWS, 
        rws: rws
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader = (function () {
    "use strict";
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var withReader = Control_Monad_Reader_Trans.withReaderT;
    var runReader = function (m) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_Reader_Trans.runReaderT(m));
    };
    var mapReader = function (f) {
        return Control_Monad_Reader_Trans.mapReaderT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    return {
        mapReader: mapReader, 
        withReader: withReader, 
        runReader: runReader
    };
})();
var PS = PS || {};
PS.Control_Monad_State = (function () {
    "use strict";
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Tuple = PS.Data_Tuple;
    var withState = Control_Monad_State_Trans.withStateT;
    var runState = function (s) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_State_Trans.runStateT(s));
    };
    var mapState = function (f) {
        return Control_Monad_State_Trans.mapStateT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    var execState = function (m) {
        return function (s) {
            return Data_Tuple.snd(runState(m)(s));
        };
    };
    var evalState = function (m) {
        return function (s) {
            return Data_Tuple.fst(runState(m)(s));
        };
    };
    return {
        withState: withState, 
        mapState: mapState, 
        execState: execState, 
        evalState: evalState, 
        runState: runState
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Data_Tuple = PS.Data_Tuple;
    var runWriter = Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_Writer_Trans.runWriterT);
    var mapWriter = function (f) {
        return Control_Monad_Writer_Trans.mapWriterT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    var execWriter = function (m) {
        return Data_Tuple.snd(runWriter(m));
    };
    return {
        mapWriter: mapWriter, 
        execWriter: execWriter, 
        runWriter: runWriter
    };
})();
var PS = PS || {};
PS.Data_Distributive = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    function Distributive(__superclass_Prelude$dotFunctor_0, collect, distribute) {
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.collect = collect;
        this.distribute = distribute;
    };
    var distributiveIdentity = function (_) {
        return new Distributive(function (__1) {
            return Control_Monad_Identity.functorIdentity({});
        }, function (__dict_Functor_130) {
            return function (a2Idb) {
                return function (ga) {
                    return Prelude["<$>"](__dict_Functor_130)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(a2Idb))(ga);
                };
            };
        }, function (__dict_Functor_129) {
            return function (gIdb) {
                return Prelude["<$>"](__dict_Functor_129)(Control_Monad_Identity.runIdentity)(gIdb);
            };
        });
    };
    var distribute = function (dict) {
        return dict.distribute;
    };
    var cotraverse = function (__dict_Distributive_131) {
        return function (__dict_Functor_132) {
            return function (ga2b) {
                return function (gfa) {
                    return Prelude["<$>"](__dict_Distributive_131["__superclass_Prelude.Functor_0"]({}))(ga2b)(distribute(__dict_Distributive_131)(__dict_Functor_132)(gfa));
                };
            };
        };
    };
    var collect = function (dict) {
        return dict.collect;
    };
    return {
        Distributive: Distributive, 
        cotraverse: cotraverse, 
        collect: collect, 
        distribute: distribute, 
        distributiveIdentity: distributiveIdentity
    };
})();
var PS = PS || {};
PS.Data_Profunctor_Rep = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Profunctor = PS.Data_Profunctor;
    function Representable(__superclass_Data$dotProfunctor$dotProfunctor_1, __superclass_Prelude$dotFunctor_0, rep, tabulate) {
        this["__superclass_Data.Profunctor.Profunctor_1"] = __superclass_Data$dotProfunctor$dotProfunctor_1;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.rep = rep;
        this.tabulate = tabulate;
    };
    function Corepresentable(__superclass_Data$dotProfunctor$dotProfunctor_1, __superclass_Prelude$dotFunctor_0, corep, cotabulate) {
        this["__superclass_Data.Profunctor.Profunctor_1"] = __superclass_Data$dotProfunctor$dotProfunctor_1;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.corep = corep;
        this.cotabulate = cotabulate;
    };
    var tabulate = function (dict) {
        return dict.tabulate;
    };
    var representableArrIdentity = function (_) {
        return new Representable(function (__1) {
            return Data_Profunctor.profunctorArr({});
        }, function (__1) {
            return Control_Monad_Identity.functorIdentity({});
        }, function (d2c) {
            return Prelude[">>>"](Prelude.semigroupoidArr({}))(d2c)(Control_Monad_Identity.Identity.create);
        }, function (d2Ic) {
            return Prelude[">>>"](Prelude.semigroupoidArr({}))(d2Ic)(Control_Monad_Identity.runIdentity);
        });
    };
    var rep = function (dict) {
        return dict.rep;
    };
    var cotabulate = function (dict) {
        return dict.cotabulate;
    };
    var corepresentableArrIdentity = function (_) {
        return new Corepresentable(function (__1) {
            return Data_Profunctor.profunctorArr({});
        }, function (__1) {
            return Control_Monad_Identity.functorIdentity({});
        }, function (d2c) {
            return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(d2c);
        }, function (id2c) {
            return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(id2c);
        });
    };
    var corep = function (dict) {
        return dict.corep;
    };
    return {
        Corepresentable: Corepresentable, 
        Representable: Representable, 
        corep: corep, 
        cotabulate: cotabulate, 
        rep: rep, 
        tabulate: tabulate, 
        representableArrIdentity: representableArrIdentity, 
        corepresentableArrIdentity: corepresentableArrIdentity
    };
})();
var PS = PS || {};
PS.Control_Monad_Error = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    function Error(noMsg, strMsg) {
        this.noMsg = noMsg;
        this.strMsg = strMsg;
    };
    var strMsg = function (dict) {
        return dict.strMsg;
    };
    var noMsg = function (dict) {
        return dict.noMsg;
    };
    var errorString = function (_) {
        return new Error("", Prelude.id(Prelude.categoryArr({})));
    };
    var errorEitherAlternative = function (__dict_Error_133) {
        return new Prelude.Alternative(function (_397) {
            return function (_398) {
                if (_397 instanceof Data_Either.Left) {
                    return _398;
                };
                return _397;
            };
        }, new Data_Either.Left(noMsg(__dict_Error_133)));
    };
    return {
        Error: Error, 
        strMsg: strMsg, 
        noMsg: noMsg, 
        errorString: errorString, 
        errorEitherAlternative: errorEitherAlternative
    };
})();
var PS = PS || {};
PS.Control_Monad_Error_Trans = (function () {
    "use strict";
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Error = PS.Control_Monad_Error;
    var ErrorT = {
        create: function (value) {
            return value;
        }
    };
    var runErrorT = function (_399) {
        return _399;
    };
    var monadTransErrorT = function (__dict_Error_134) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_135) {
            return function (m) {
                return ErrorT.create(Prelude[">>="](__dict_Monad_135["__superclass_Prelude.Bind_1"]({}))(m)(function (_14) {
                    return Prelude["return"](__dict_Monad_135)(new Data_Either.Right(_14));
                }));
            };
        });
    };
    var mapErrorT = function (f) {
        return function (m) {
            return ErrorT.create(f(runErrorT(m)));
        };
    };
    var liftPassError = function (__dict_Monad_138) {
        return function (pass) {
            return mapErrorT(function (m) {
                return pass(Prelude[">>="](__dict_Monad_138["__superclass_Prelude.Bind_1"]({}))(m)(function (_16) {
                    return Prelude["return"](__dict_Monad_138)((function (_1283) {
                        if (_1283 instanceof Data_Either.Left) {
                            return new Data_Tuple.Tuple(new Data_Either.Left(_1283.value0), Prelude.id(Prelude.categoryArr({})));
                        };
                        if (_1283 instanceof Data_Either.Right) {
                            return new Data_Tuple.Tuple(new Data_Either.Right(_1283.value0.value0), _1283.value0.value1);
                        };
                        throw new Error("Failed pattern match");
                    })(_16));
                }));
            });
        };
    };
    var liftListenError = function (__dict_Monad_139) {
        return function (listen) {
            return mapErrorT(function (m) {
                return Prelude[">>="](__dict_Monad_139["__superclass_Prelude.Bind_1"]({}))(listen(m))(function (_15) {
                    return Prelude["return"](__dict_Monad_139)(Prelude["<$>"](Data_Either.functorEither({}))(function (r) {
                        return new Data_Tuple.Tuple(r, _15.value1);
                    })(_15.value0));
                });
            });
        };
    };
    var liftCallCCError = function (callCC) {
        return function (f) {
            return ErrorT.create(callCC(function (c) {
                return runErrorT(f(function (a) {
                    return ErrorT.create(c(new Data_Either.Right(a)));
                }));
            }));
        };
    };
    var functorErrorT = function (__dict_Functor_140) {
        return new Prelude.Functor(function (f) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(ErrorT.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["<$>"](__dict_Functor_140)(Prelude["<$>"](Data_Either.functorEither({}))(f)))(runErrorT));
        });
    };
    var applyErrorT = function (__dict_Functor_143) {
        return function (__dict_Monad_144) {
            return new Prelude.Apply(function (f) {
                return function (v) {
                    return ErrorT.create(Prelude[">>="](__dict_Monad_144["__superclass_Prelude.Bind_1"]({}))(runErrorT(f))(function (_12) {
                        if (_12 instanceof Data_Either.Left) {
                            return Prelude["return"](__dict_Monad_144)(new Data_Either.Left(_12.value0));
                        };
                        if (_12 instanceof Data_Either.Right) {
                            return Prelude[">>="](__dict_Monad_144["__superclass_Prelude.Bind_1"]({}))(runErrorT(v))(function (_11) {
                                return Prelude["return"](__dict_Monad_144)((function (_1295) {
                                    if (_1295 instanceof Data_Either.Left) {
                                        return new Data_Either.Left(_1295.value0);
                                    };
                                    if (_1295 instanceof Data_Either.Right) {
                                        return new Data_Either.Right(_12.value0(_1295.value0));
                                    };
                                    throw new Error("Failed pattern match");
                                })(_11));
                            });
                        };
                        throw new Error("Failed pattern match");
                    }));
                };
            }, function (_) {
                return functorErrorT(__dict_Functor_143);
            });
        };
    };
    var bindErrorT = function (__dict_Monad_141) {
        return function (__dict_Error_142) {
            return new Prelude.Bind(function (m) {
                return function (f) {
                    return ErrorT.create(Prelude[">>="](__dict_Monad_141["__superclass_Prelude.Bind_1"]({}))(runErrorT(m))(function (_13) {
                        if (_13 instanceof Data_Either.Left) {
                            return Prelude["return"](__dict_Monad_141)(new Data_Either.Left(_13.value0));
                        };
                        if (_13 instanceof Data_Either.Right) {
                            return runErrorT(f(_13.value0));
                        };
                        throw new Error("Failed pattern match");
                    }));
                };
            }, function (_) {
                return applyErrorT(((__dict_Monad_141["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_141);
            });
        };
    };
    var applicativeErrorT = function (__dict_Functor_145) {
        return function (__dict_Monad_146) {
            return new Prelude.Applicative(function (_) {
                return applyErrorT(__dict_Functor_145)(__dict_Monad_146);
            }, function (a) {
                return ErrorT.create(Prelude.pure(__dict_Monad_146["__superclass_Prelude.Applicative_0"]({}))(new Data_Either.Right(a)));
            });
        };
    };
    var monadErrorT = function (__dict_Monad_136) {
        return function (__dict_Error_137) {
            return new Prelude.Monad(function (_) {
                return applicativeErrorT(((__dict_Monad_136["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_136);
            }, function (_) {
                return bindErrorT(__dict_Monad_136)(__dict_Error_137);
            });
        };
    };
    var alternativeErrorT = function (__dict_Monad_147) {
        return function (__dict_Error_148) {
            return new Prelude.Alternative(function (x) {
                return function (y) {
                    return ErrorT.create(Prelude[">>="](__dict_Monad_147["__superclass_Prelude.Bind_1"]({}))(runErrorT(x))(function (e) {
                        if (e instanceof Data_Either.Left) {
                            return runErrorT(y);
                        };
                        return Prelude["return"](__dict_Monad_147)(e);
                    }));
                };
            }, Prelude["return"](__dict_Monad_147)(Data_Either.Left.create(Control_Monad_Error.strMsg(__dict_Error_148)("No alternative"))));
        };
    };
    return {
        ErrorT: ErrorT, 
        liftCallCCError: liftCallCCError, 
        liftPassError: liftPassError, 
        liftListenError: liftListenError, 
        mapErrorT: mapErrorT, 
        runErrorT: runErrorT, 
        functorErrorT: functorErrorT, 
        applyErrorT: applyErrorT, 
        applicativeErrorT: applicativeErrorT, 
        alternativeErrorT: alternativeErrorT, 
        bindErrorT: bindErrorT, 
        monadErrorT: monadErrorT, 
        monadTransErrorT: monadTransErrorT
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    function runPure(f) {  return f();};
    function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
    function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
    function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
    function foreachE(as) {  return function(f) {    return function() {      for (var i = 0; i < as.length; i++) {        f(as[i])();      }    };  };};
    var applicativeEff = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyEff({});
        }, returnE);
    };
    var applyEff = function (_) {
        return new Prelude.Apply(Prelude.ap(monadEff({})), function (__1) {
            return functorEff({});
        });
    };
    var monadEff = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeEff({});
        }, function (__1) {
            return bindEff({});
        });
    };
    var bindEff = function (_) {
        return new Prelude.Bind(bindE, function (__1) {
            return applyEff({});
        });
    };
    var functorEff = function (_) {
        return new Prelude.Functor(Prelude.liftA1(applicativeEff({})));
    };
    return {
        foreachE: foreachE, 
        forE: forE, 
        whileE: whileE, 
        untilE: untilE, 
        runPure: runPure, 
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Exception = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function showErrorImpl(err) {  return err.stack ? err.stack : err.toString();};
    function error(msg) {  return new Error(msg);};;
    function message(e) {  return e.message;};
    function throwException(e) {  return function() {    throw e;  };};
    function catchException(c) {  return function(t) {    return function() {      try {        return t();      } catch(e) {        if (e instanceof Error) {          return c(e)();        } else {          throw e;        }      }    };  };};
    var showError = function (_) {
        return new Prelude.Show(showErrorImpl);
    };
    return {
        catchException: catchException, 
        throwException: throwException, 
        message: message, 
        error: error, 
        showErrorImpl: showErrorImpl, 
        showError: showError
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function unsafeInterleaveEff(f) {  return f;};
    return {
        unsafeInterleaveEff: unsafeInterleaveEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Free = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Function = PS.Data_Function;
    function Pure(value0) {
        this.value0 = value0;
    };
    Pure.create = function (value0) {
        return new Pure(value0);
    };
    function Free(value0) {
        this.value0 = value0;
    };
    Free.create = function (value0) {
        return new Free(value0);
    };
    function Gosub(value0) {
        this.value0 = value0;
    };
    Gosub.create = function (value0) {
        return new Gosub(value0);
    };
    function MonadFree(wrap) {
        this.wrap = wrap;
    };
    function resumeImpl(isGosub, isLeft, toEither, fromRight, resumeGosub, value) {  while (true) {    if (!isGosub(value)) return toEither(value);    var x = resumeGosub(value);    if (isLeft(x)) return x;    else value = fromRight(x);  }};
    function goImpl(resume, isRight, fromLeft, fromRight, fn, value) {  while (true) {    var r = resume(value);    if (isRight(r)) return fromRight(r);    value = fn(fromLeft(r));  }};
    function goEffImpl(resume, isRight, fromLeft, fromRight, fn, value) {  return function(){    while (true) {      var r = resume(value);      if (isRight(r)) {        var x = fromRight(r);        return function() { return x; };      }      value = fn(fromLeft(r))();    }  };};
    var wrap = function (dict) {
        return dict.wrap;
    };
    var unsafeRight = function (_406) {
        if (_406 instanceof Data_Either.Right) {
            return _406.value0;
        };
        throw new Error("Failed pattern match");
    };
    var unsafeLeft = function (_405) {
        if (_405 instanceof Data_Either.Left) {
            return _405.value0;
        };
        throw new Error("Failed pattern match");
    };
    var unsafeFreeToEither = function (_404) {
        if (_404 instanceof Pure) {
            return new Data_Either.Right(_404.value0);
        };
        if (_404 instanceof Free) {
            return new Data_Either.Left(_404.value0);
        };
        throw new Error("Failed pattern match");
    };
    var pureF = function (__dict_Applicative_150) {
        return function (a) {
            return new Free(Prelude.pure(__dict_Applicative_150)(new Pure(a)));
        };
    };
    var monadTransFree = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_151) {
            return function (f) {
                return Free.create(Prelude[">>="](__dict_Monad_151["__superclass_Prelude.Bind_1"]({}))(f)(function (_17) {
                    return Prelude["return"](__dict_Monad_151)(new Pure(_17));
                }));
            };
        });
    };
    var monadFreeFree = function (__dict_Functor_152) {
        return new MonadFree(Free.create);
    };
    var liftF = function (__dict_Functor_154) {
        return function (__dict_Monad_155) {
            return function (__dict_MonadFree_156) {
                return function (fa) {
                    return wrap(__dict_MonadFree_156)(Prelude["<$>"](__dict_Functor_154)(Prelude["return"](__dict_Monad_155))(fa));
                };
            };
        };
    };
    var iterM = function (__dict_Functor_157) {
        return function (__dict_Monad_158) {
            return function (_400) {
                return function (_401) {
                    if (_401 instanceof Pure) {
                        return Prelude["return"](__dict_Monad_158)(_401.value0);
                    };
                    if (_401 instanceof Free) {
                        return _400(Prelude["<$>"](__dict_Functor_157)(iterM(__dict_Functor_157)(__dict_Monad_158)(_400))(_401.value0));
                    };
                    if (_401 instanceof Gosub) {
                        return _401.value0(function (req) {
                            return function (recv) {
                                return Prelude[">>="](__dict_Monad_158["__superclass_Prelude.Bind_1"]({}))(iterM(__dict_Functor_157)(__dict_Monad_158)(_400)(req(Prelude.unit)))(Prelude["<<<"](Prelude.semigroupoidArr({}))(iterM(__dict_Functor_157)(__dict_Monad_158)(_400))(recv));
                            };
                        });
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    var isGosub = function (_403) {
        if (_403 instanceof Gosub) {
            return true;
        };
        return false;
    };
    var applicativeFree = function (__dict_Functor_167) {
        return new Prelude.Applicative(function (_) {
            return applyFree(__dict_Functor_167);
        }, Pure.create);
    };
    var applyFree = function (__dict_Functor_166) {
        return new Prelude.Apply(Prelude.ap(monadFree(__dict_Functor_166)), function (_) {
            return functorFree(__dict_Functor_166);
        });
    };
    var monadFree = function (__dict_Functor_153) {
        return new Prelude.Monad(function (_) {
            return applicativeFree(__dict_Functor_153);
        }, function (_) {
            return bindFree(__dict_Functor_153);
        });
    };
    var bindFree = function (__dict_Functor_165) {
        return new Prelude.Bind(function (_409) {
            return function (_410) {
                if (_409 instanceof Gosub) {
                    return new Gosub(function (h) {
                        return _409.value0(function (a) {
                            return function (i) {
                                return h(a)(function (x) {
                                    return new Gosub(function (j) {
                                        return j(Prelude["const"](i(x)))(_410);
                                    });
                                });
                            };
                        });
                    });
                };
                return new Gosub(function (h) {
                    return h(Prelude["const"](_409))(_410);
                });
            };
        }, function (_) {
            return applyFree(__dict_Functor_165);
        });
    };
    var functorFree = function (__dict_Functor_164) {
        return new Prelude.Functor(function (_407) {
            return function (_408) {
                if (_408 instanceof Pure) {
                    return new Pure(_407(_408.value0));
                };
                return Prelude.liftA1(applicativeFree(__dict_Functor_164))(_407)(_408);
            };
        });
    };
    var resumeGosub = function (__dict_Functor_149) {
        return function (_402) {
            if (_402 instanceof Gosub) {
                return _402.value0(function (a) {
                    return function (g) {
                        return (function (_1327) {
                            if (_1327 instanceof Pure) {
                                return new Data_Either.Right(g(_1327.value0));
                            };
                            if (_1327 instanceof Free) {
                                return new Data_Either.Left(Prelude["<$>"](__dict_Functor_149)(function (h) {
                                    return Prelude[">>="](bindFree(__dict_Functor_149))(h)(g);
                                })(_1327.value0));
                            };
                            if (_1327 instanceof Gosub) {
                                return new Data_Either.Right(_1327.value0(function (b) {
                                    return function (i) {
                                        return Prelude[">>="](bindFree(__dict_Functor_149))(b(Prelude.unit))(function (x) {
                                            return Prelude[">>="](bindFree(__dict_Functor_149))(i(x))(g);
                                        });
                                    };
                                }));
                            };
                            throw new Error("Failed pattern match");
                        })(a(Prelude.unit));
                    };
                });
            };
            throw new Error("Failed pattern match");
        };
    };
    var resume = function (__dict_Functor_159) {
        return function (f) {
            return resumeImpl(isGosub, Data_Either.isLeft, unsafeFreeToEither, unsafeRight, resumeGosub(__dict_Functor_159), f);
        };
    };
    var go = function (__dict_Functor_163) {
        return function (fn) {
            return function (f) {
                return goImpl(resume(__dict_Functor_163), Data_Either.isRight, unsafeLeft, unsafeRight, fn, f);
            };
        };
    };
    var goEff = function (__dict_Functor_162) {
        return function (fn) {
            return function (f) {
                return goEffImpl(resume(__dict_Functor_162), Data_Either.isRight, unsafeLeft, unsafeRight, fn, f);
            };
        };
    };
    var goM = function (__dict_Functor_160) {
        return function (__dict_Monad_161) {
            return function (k) {
                return function (f) {
                    return (function (_1332) {
                        if (_1332 instanceof Data_Either.Left) {
                            return Prelude[">>="](__dict_Monad_161["__superclass_Prelude.Bind_1"]({}))(k(_1332.value0))(goM(__dict_Functor_160)(__dict_Monad_161)(k));
                        };
                        if (_1332 instanceof Data_Either.Right) {
                            return Prelude["return"](__dict_Monad_161)(_1332.value0);
                        };
                        throw new Error("Failed pattern match");
                    })(resume(__dict_Functor_160)(f));
                };
            };
        };
    };
    return {
        Pure: Pure, 
        Free: Free, 
        Gosub: Gosub, 
        MonadFree: MonadFree, 
        goEff: goEff, 
        go: go, 
        goM: goM, 
        iterM: iterM, 
        pureF: pureF, 
        liftF: liftF, 
        wrap: wrap, 
        functorFree: functorFree, 
        applyFree: applyFree, 
        applicativeFree: applicativeFree, 
        bindFree: bindFree, 
        monadFree: monadFree, 
        monadTransFree: monadTransFree, 
        monadFreeFree: monadFreeFree
    };
})();
var PS = PS || {};
PS.Control_Monad_Trampoline = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Free = PS.Control_Monad_Free;
    var Delay = {
        create: function (value) {
            return value;
        }
    };
    var suspend = function (a) {
        return new Control_Monad_Free.Free(Prelude["const"](a));
    };
    var done = Control_Monad_Free.Pure.create;
    var delayFunctor = function (_) {
        return new Prelude.Functor(function (_412) {
            return function (_413) {
                return Prelude["const"](_412(_413(Prelude.unit)));
            };
        });
    };
    var runTrampoline = Control_Monad_Free.go(delayFunctor({}))(function (_411) {
        return _411(Prelude.unit);
    });
    var delayApply = function (_) {
        return new Prelude.Apply(function (_414) {
            return function (_415) {
                return function (__1) {
                    return _414(Prelude.unit)(_415(Prelude.unit));
                };
            };
        }, function (__1) {
            return delayFunctor({});
        });
    };
    var delayApplicative = function (_) {
        return new Prelude.Applicative(function (__1) {
            return delayApply({});
        }, function (a) {
            return Prelude["const"](a);
        });
    };
    var delay = function (a) {
        return new Control_Monad_Free.Free(Prelude["<$>"](delayFunctor({}))(done)(a));
    };
    return {
        Delay: Delay, 
        runTrampoline: runTrampoline, 
        delay: delay, 
        suspend: suspend, 
        done: done, 
        delayFunctor: delayFunctor, 
        delayApply: delayApply, 
        delayApplicative: delayApplicative
    };
})();
var PS = PS || {};
PS.Control_Monad_ST = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function newSTRef(val) {  return function () {    return { value: val };  };};
    function readSTRef(ref) {  return function() {    return ref.value;  };};
    function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
    function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
    function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
    function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
    function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
    function runST(f) {  return f;};
    function runSTArray(f) {  return f;};
    return {
        runSTArray: runSTArray, 
        runST: runST, 
        pokeSTArray: pokeSTArray, 
        peekSTArray: peekSTArray, 
        newSTArray: newSTArray, 
        writeSTRef: writeSTRef, 
        modifySTRef: modifySTRef, 
        readSTRef: readSTRef, 
        newSTRef: newSTRef
    };
})();
var PS = PS || {};
PS.Data_Date = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Global = PS.Global;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Enum = PS.Data_Enum;
    var Data_Maybe_Unsafe = PS.Data_Maybe_Unsafe;
    function January() {

    };
    January.value = new January();
    function February() {

    };
    February.value = new February();
    function March() {

    };
    March.value = new March();
    function April() {

    };
    April.value = new April();
    function May() {

    };
    May.value = new May();
    function June() {

    };
    June.value = new June();
    function July() {

    };
    July.value = new July();
    function August() {

    };
    August.value = new August();
    function September() {

    };
    September.value = new September();
    function October() {

    };
    October.value = new October();
    function November() {

    };
    November.value = new November();
    function December() {

    };
    December.value = new December();
    function Sunday() {

    };
    Sunday.value = new Sunday();
    function Monday() {

    };
    Monday.value = new Monday();
    function Tuesday() {

    };
    Tuesday.value = new Tuesday();
    function Wednesday() {

    };
    Wednesday.value = new Wednesday();
    function Thursday() {

    };
    Thursday.value = new Thursday();
    function Friday() {

    };
    Friday.value = new Friday();
    function Saturday() {

    };
    Saturday.value = new Saturday();
    function DateTime(value0) {
        this.value0 = value0;
    };
    DateTime.create = function (value0) {
        return new DateTime(value0);
    };
    function jsDateMethod(method) {   return function(date) {     return date[method]();   }; };
    function jsDateConstructor(x) {   return new Date(x); };
    function jsDateFromRecord(r) {  return new Date(r.year, r.month, r.day, r.hours, r.minutes, r.seconds, r.milliseconds); };
    function nowImpl(f) {   return f(new Date()); };
    var toJSDate = function (_416) {
        return _416.value0;
    };
    var showMonth = function (_) {
        return new Prelude.Show(function (_421) {
            if (_421 instanceof January) {
                return "January";
            };
            if (_421 instanceof February) {
                return "February";
            };
            if (_421 instanceof March) {
                return "March";
            };
            if (_421 instanceof April) {
                return "April";
            };
            if (_421 instanceof May) {
                return "May";
            };
            if (_421 instanceof June) {
                return "June";
            };
            if (_421 instanceof July) {
                return "July";
            };
            if (_421 instanceof August) {
                return "August";
            };
            if (_421 instanceof September) {
                return "September";
            };
            if (_421 instanceof October) {
                return "October";
            };
            if (_421 instanceof November) {
                return "November";
            };
            if (_421 instanceof December) {
                return "December";
            };
            throw new Error("Failed pattern match");
        });
    };
    var showDayOfWeek = function (_) {
        return new Prelude.Show(function (_424) {
            if (_424 instanceof Sunday) {
                return "Sunday";
            };
            if (_424 instanceof Monday) {
                return "Monday";
            };
            if (_424 instanceof Tuesday) {
                return "Tuesday";
            };
            if (_424 instanceof Wednesday) {
                return "Wednesday";
            };
            if (_424 instanceof Thursday) {
                return "Thursday";
            };
            if (_424 instanceof Friday) {
                return "Friday";
            };
            if (_424 instanceof Saturday) {
                return "Saturday";
            };
            throw new Error("Failed pattern match");
        });
    };
    var now = nowImpl(DateTime.create);
    var liftDate = function (_417) {
        return function (_418) {
            return _417(_418.value0);
        };
    };
    var millisecond = liftDate(jsDateMethod("getMilliseconds"));
    var millisecondUTC = liftDate(jsDateMethod("getUTCMilliseconds"));
    var minute = liftDate(jsDateMethod("getMinutes"));
    var minuteUTC = liftDate(jsDateMethod("getUTCMinutes"));
    var second = liftDate(jsDateMethod("getSeconds"));
    var secondUTC = liftDate(jsDateMethod("getUTCSeconds"));
    var showDate = function (_) {
        return new Prelude.Show(liftDate(jsDateMethod("toString")));
    };
    var timezoneOffset = liftDate(jsDateMethod("getTimezoneOffset"));
    var toEpochMilliseconds = liftDate(jsDateMethod("getTime"));
    var liftOp = function (op) {
        return function (x) {
            return function (y) {
                return op(toEpochMilliseconds(x))(toEpochMilliseconds(y));
            };
        };
    };
    var year = liftDate(jsDateMethod("getFullYear"));
    var yearUTC = liftDate(jsDateMethod("getUTCFullYear"));
    var hourUTC = liftDate(jsDateMethod("getUTCHours"));
    var hour = liftDate(jsDateMethod("getHours"));
    var fromJSDate = function (d) {
        return Global.isNaN(jsDateMethod("getTime")(d)) ? Data_Maybe.Nothing.value : Data_Maybe.Just.create(new DateTime(d));
    };
    var fromString = Prelude["<<<"](Prelude.semigroupoidArr({}))(fromJSDate)(jsDateConstructor);
    var fromEpochMilliseconds = Prelude["<<<"](Prelude.semigroupoidArr({}))(fromJSDate)(jsDateConstructor);
    var eqDate = function (_) {
        return new Prelude.Eq(liftOp(Prelude["/="](Prelude.eqNumber({}))), liftOp(Prelude["=="](Prelude.eqNumber({}))));
    };
    var ordDate = function (_) {
        return new Prelude.Ord(function (__1) {
            return eqDate({});
        }, liftOp(Prelude.compare(Prelude.ordNumber({}))));
    };
    var enumMonth = function (_) {
        return new Data_Enum.Enum(function (_420) {
            if (_420 instanceof January) {
                return 0;
            };
            if (_420 instanceof February) {
                return 1;
            };
            if (_420 instanceof March) {
                return 2;
            };
            if (_420 instanceof April) {
                return 3;
            };
            if (_420 instanceof May) {
                return 4;
            };
            if (_420 instanceof June) {
                return 5;
            };
            if (_420 instanceof July) {
                return 6;
            };
            if (_420 instanceof August) {
                return 7;
            };
            if (_420 instanceof September) {
                return 8;
            };
            if (_420 instanceof October) {
                return 9;
            };
            if (_420 instanceof November) {
                return 10;
            };
            if (_420 instanceof December) {
                return 11;
            };
            throw new Error("Failed pattern match");
        }, function (_419) {
            if (_419 === 0) {
                return new Data_Maybe.Just(January.value);
            };
            if (_419 === 1) {
                return new Data_Maybe.Just(February.value);
            };
            if (_419 === 2) {
                return new Data_Maybe.Just(March.value);
            };
            if (_419 === 3) {
                return new Data_Maybe.Just(April.value);
            };
            if (_419 === 4) {
                return new Data_Maybe.Just(May.value);
            };
            if (_419 === 5) {
                return new Data_Maybe.Just(June.value);
            };
            if (_419 === 6) {
                return new Data_Maybe.Just(July.value);
            };
            if (_419 === 7) {
                return new Data_Maybe.Just(August.value);
            };
            if (_419 === 8) {
                return new Data_Maybe.Just(September.value);
            };
            if (_419 === 8) {
                return new Data_Maybe.Just(October.value);
            };
            if (_419 === 10) {
                return new Data_Maybe.Just(November.value);
            };
            if (_419 === 11) {
                return new Data_Maybe.Just(December.value);
            };
            return Data_Maybe.Nothing.value;
        });
    };
    var month = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe_Unsafe.fromJust)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Enum.toEnum(enumMonth({})))(liftDate(jsDateMethod("getMonth"))));
    var monthUTC = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe_Unsafe.fromJust)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Enum.toEnum(enumMonth({})))(liftDate(jsDateMethod("getUTCMonth"))));
    var enumDayOfWeek = function (_) {
        return new Data_Enum.Enum(function (_423) {
            if (_423 instanceof Sunday) {
                return 0;
            };
            if (_423 instanceof Monday) {
                return 1;
            };
            if (_423 instanceof Tuesday) {
                return 2;
            };
            if (_423 instanceof Wednesday) {
                return 3;
            };
            if (_423 instanceof Thursday) {
                return 4;
            };
            if (_423 instanceof Friday) {
                return 5;
            };
            if (_423 instanceof Saturday) {
                return 6;
            };
            throw new Error("Failed pattern match");
        }, function (_422) {
            if (_422 === 0) {
                return new Data_Maybe.Just(Sunday.value);
            };
            if (_422 === 1) {
                return new Data_Maybe.Just(Monday.value);
            };
            if (_422 === 2) {
                return new Data_Maybe.Just(Tuesday.value);
            };
            if (_422 === 3) {
                return new Data_Maybe.Just(Wednesday.value);
            };
            if (_422 === 4) {
                return new Data_Maybe.Just(Thursday.value);
            };
            if (_422 === 5) {
                return new Data_Maybe.Just(Friday.value);
            };
            if (_422 === 6) {
                return new Data_Maybe.Just(Saturday.value);
            };
            return Data_Maybe.Nothing.value;
        });
    };
    var dayUTC = liftDate(jsDateMethod("getUTCDate"));
    var dayOfWeekUTC = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe_Unsafe.fromJust)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Enum.toEnum(enumDayOfWeek({})))(liftDate(jsDateMethod("getUTCDay"))));
    var dayOfWeek = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe_Unsafe.fromJust)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Enum.toEnum(enumDayOfWeek({})))(liftDate(jsDateMethod("getDay"))));
    var day = liftDate(jsDateMethod("getDate"));
    var dateTime = function (y) {
        return function (m) {
            return function (d) {
                return function (h) {
                    return function (n) {
                        return function (s) {
                            return function (ms) {
                                return fromJSDate(jsDateFromRecord({
                                    year: y, 
                                    month: Data_Enum.fromEnum(enumMonth({}))(m), 
                                    day: d, 
                                    hours: h, 
                                    minutes: n, 
                                    seconds: s, 
                                    milliseconds: ms
                                }));
                            };
                        };
                    };
                };
            };
        };
    };
    var date = function (y) {
        return function (m) {
            return function (d) {
                return dateTime(y)(m)(d)(0)(0)(0)(0);
            };
        };
    };
    return {
        January: January, 
        February: February, 
        March: March, 
        April: April, 
        May: May, 
        June: June, 
        July: July, 
        August: August, 
        September: September, 
        October: October, 
        November: November, 
        December: December, 
        fromString: fromString, 
        fromEpochMilliseconds: fromEpochMilliseconds, 
        toEpochMilliseconds: toEpochMilliseconds, 
        timezoneOffset: timezoneOffset, 
        millisecondUTC: millisecondUTC, 
        millisecond: millisecond, 
        secondUTC: secondUTC, 
        second: second, 
        minuteUTC: minuteUTC, 
        minute: minute, 
        hourUTC: hourUTC, 
        hour: hour, 
        dayOfWeekUTC: dayOfWeekUTC, 
        dayOfWeek: dayOfWeek, 
        dayUTC: dayUTC, 
        day: day, 
        monthUTC: monthUTC, 
        month: month, 
        yearUTC: yearUTC, 
        year: year, 
        date: date, 
        dateTime: dateTime, 
        now: now, 
        toJSDate: toJSDate, 
        fromJSDate: fromJSDate, 
        eqDate: eqDate, 
        ordDate: ordDate, 
        enumMonth: enumMonth, 
        showMonth: showMonth, 
        enumDayOfWeek: enumDayOfWeek, 
        showDayOfWeek: showDayOfWeek, 
        showDate: showDate
    };
})();
var PS = PS || {};
PS.Node_FS_Stats = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe_Unsafe = PS.Data_Maybe_Unsafe;
    var Data_Date = PS.Data_Date;
    var Data_Function = PS.Data_Function;
    function Stats(value0) {
        this.value0 = value0;
    };
    Stats.create = function (value0) {
        return new Stats(value0);
    };
    function showStatsObj (obj) {  return require('util').inspect(obj);};
    function statsMethod(m, s) {  return s[m]();};
    var statusChangedTime = function (_434) {
        return Data_Maybe_Unsafe.fromJust(Data_Date.fromJSDate(_434.value0.ctime));
    };
    var showStats = function (_) {
        return new Prelude.Show(function (_435) {
            return "Stats " + showStatsObj(_435.value0);
        });
    };
    var modifiedTime = function (_433) {
        return Data_Maybe_Unsafe.fromJust(Data_Date.fromJSDate(_433.value0.mtime));
    };
    var isSymbolicLink = function (_431) {
        return statsMethod("isSymbolicLink", _431.value0);
    };
    var isSocket = function (_430) {
        return statsMethod("isSocket", _430.value0);
    };
    var isFile = function (_425) {
        return statsMethod("isFile", _425.value0);
    };
    var isFIFO = function (_429) {
        return statsMethod("isFIFO", _429.value0);
    };
    var isDirectory = function (_426) {
        return statsMethod("isDirectory", _426.value0);
    };
    var isCharacterDevice = function (_428) {
        return statsMethod("isCharacterDevice", _428.value0);
    };
    var isBlockDevice = function (_427) {
        return statsMethod("isBlockDevice", _427.value0);
    };
    var accessedTime = function (_432) {
        return Data_Maybe_Unsafe.fromJust(Data_Date.fromJSDate(_432.value0.atime));
    };
    return {
        Stats: Stats, 
        statusChangedTime: statusChangedTime, 
        modifiedTime: modifiedTime, 
        accessedTime: accessedTime, 
        isSymbolicLink: isSymbolicLink, 
        isSocket: isSocket, 
        isFIFO: isFIFO, 
        isCharacterDevice: isCharacterDevice, 
        isBlockDevice: isBlockDevice, 
        isDirectory: isDirectory, 
        isFile: isFile, 
        showStats: showStats
    };
})();
var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function trace(s) {  return function() {    console.log(s);    return {};  };};
    var print = function (__dict_Show_168) {
        return function (o) {
            return trace(Prelude.show(__dict_Show_168)(o));
        };
    };
    return {
        print: print, 
        trace: trace
    };
})();
var PS = PS || {};
PS.Graphics_C3 = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function YDim() {

    };
    YDim.value = new YDim();
    function XDim() {

    };
    XDim.value = new XDim();
    function Bar() {

    };
    Bar.value = new Bar();
    function Line() {

    };
    Line.value = new Line();
    function Pie() {

    };
    Pie.value = new Pie();
    function Axis(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Axis.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Axis(value0, value1, value2);
            };
        };
    };
    function generate(opts) {  return function() {    return c3.generate(actualOptions(opts));  }};
    function actualOptions(opts) {  var obj = {};  obj.bindto = opts.bindto;  obj.data = {    columns: opts.c3Data.map(function(d) {      return [d.name].concat(d.values);    }),    types: c3Types(opts)  };  if (axisName(opts.xAxis) !== '') {    obj = insertAxis(obj)(opts.xAxis);  }  if (axisName(opts.yAxis) !== '') {    obj = insertAxis(obj)(opts.yAxis);  }  return obj;};
    function insertAxis(opts) {  return function(axis) {    var xData = axisData(axis);    opts.data.x = axisName(axis);    opts.data.columns.unshift([opts.data.x].concat(xData));    opts.axis = opts.axis || {};    opts.axis.x = {      type: 'category',      tick: {        format: function(i) {          return xData[i];        }      }    };    return opts;  }};
    function c3Types(opts) {  var obj = {};  opts.c3Data.forEach(function(d) {    obj[d.name] = showC3Type_(d.c3Type);  });  return obj;};
    var yAxis = Axis.create("y");
    var xAxis = Axis.create("x");
    var showC3Type = function (_) {
        return new Prelude.Show(function (_438) {
            if (_438 instanceof Bar) {
                return "bar";
            };
            if (_438 instanceof Line) {
                return "line";
            };
            if (_438 instanceof Pie) {
                return "pie";
            };
            throw new Error("Failed pattern match");
        });
    };
    var showC3Type_ = Prelude.show(showC3Type({}));
    var options = {
        bindto: "", 
        c3Data: [  ], 
        xAxis: xAxis("")([  ]), 
        yAxis: yAxis("")([  ])
    };
    var eqC3Type = function (_) {
        return new Prelude.Eq(function (t) {
            return function (t$prime) {
                return !Prelude["=="](eqC3Type({}))(t)(t$prime);
            };
        }, function (_439) {
            return function (_440) {
                if (_439 instanceof Bar && _440 instanceof Bar) {
                    return true;
                };
                if (_439 instanceof Line && _440 instanceof Line) {
                    return true;
                };
                if (_439 instanceof Pie && _440 instanceof Pie) {
                    return true;
                };
                return false;
            };
        });
    };
    var c3Data = {
        c3Type: Bar.value, 
        name: "", 
        values: [  ]
    };
    var axisName = function (_436) {
        return _436.value1;
    };
    var axisData = function (_437) {
        return _437.value2;
    };
    return {
        Bar: Bar, 
        Line: Line, 
        Pie: Pie, 
        yAxis: yAxis, 
        xAxis: xAxis, 
        options: options, 
        c3Data: c3Data, 
        generate: generate, 
        showC3Type: showC3Type, 
        eqC3Type: eqC3Type
    };
})();
var PS = PS || {};
PS.Node_Buffer = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Node_Encoding = PS.Node_Encoding;
    function UInt8() {

    };
    UInt8.value = new UInt8();
    function UInt16LE() {

    };
    UInt16LE.value = new UInt16LE();
    function UInt16BE() {

    };
    UInt16BE.value = new UInt16BE();
    function UInt32LE() {

    };
    UInt32LE.value = new UInt32LE();
    function UInt32BE() {

    };
    UInt32BE.value = new UInt32BE();
    function Int8() {

    };
    Int8.value = new Int8();
    function Int16LE() {

    };
    Int16LE.value = new Int16LE();
    function Int16BE() {

    };
    Int16BE.value = new Int16BE();
    function Int32LE() {

    };
    Int32LE.value = new Int32LE();
    function Int32BE() {

    };
    Int32BE.value = new Int32BE();
    function FloatLE() {

    };
    FloatLE.value = new FloatLE();
    function FloatBE() {

    };
    FloatBE.value = new FloatBE();
    function DoubleLE() {

    };
    DoubleLE.value = new DoubleLE();
    function DoubleBE() {

    };
    DoubleBE.value = new DoubleBE();
    var showImpl = require('util').inspect;;
    function create (size) {   return new Buffer(size); };
    function fromArray (octets) {   return new Buffer(octets); };
    function fromStringImpl (str) {   return function (encoding) {     return new Buffer(str, encoding);   }; };
    function readImpl (ty) {   return function (offset) {     return function (buf) {       return buf['read' + ty](offset);     };   }; };
    function readStringImpl (enc) {   return function (start) {     return function (end) {       return function (buff) {         return buff.toString(enc, start, end);       }     }   } };
    function toStringImpl (enc) {   return function (buff) {     return buff.toString(enc);   } };
    function writeImpl (ty) {   return function (value) {     return function (offset) {       return function (buf) {         buf['write' + ty](value, offset);         return {};       };     };   }; };
    function writeStringImpl (enc) {   return function (offset) {       return function (length) {         return function (value) {           return function (buff) {             return buff.write(value, offset, length, encoding);           };         };       };   }; };
    function toArray (buff) {   return buff.toJSON(); };
    function getAtOffset (buff) {   return function (offset) {     var octet = buff[offset];     return octet == null ? _ps.Data_Maybe.Nothing                          : _ps.Data_Maybe.Just(buff[i]);   } };
    function setAtOffset (value) {   return function (offset) {     return function (buff) {       buff[offset] = value;       return {};     }   } };
    function size (buff) {   return buff.length; };
    function concat (buffs) {   return Buffer.concat(buffs); };
    function concat$prime (buffs) {   return function (totalLength) {     return Buffer.concat(buffs, totalLength);   } };
    function copy (srcStart) {   return function (srcEnd) {     return function (src) {       return function (targStart) {         return function (targ) {           return src.copy(targ, targStart, srcStart, strcEnd);         }       }     }   } };
    function fill (buff) {   return function (octet) {     return function (start) {       return function (end) {         buff.fill(octet, start, end);         return {};       }     }   } };
    var writeString = Prelude["<<<"](Prelude.semigroupoidArr({}))(writeStringImpl)(Prelude.show(Node_Encoding.showEncoding({})));
    var toString = Prelude["<<<"](Prelude.semigroupoidArr({}))(toStringImpl)(Prelude.show(Node_Encoding.showEncoding({})));
    var showBufferValueType = function (_) {
        return new Prelude.Show(function (_441) {
            if (_441 instanceof UInt8) {
                return "UInt8";
            };
            if (_441 instanceof UInt16LE) {
                return "UInt16LE";
            };
            if (_441 instanceof UInt16BE) {
                return "UInt16BE";
            };
            if (_441 instanceof UInt32LE) {
                return "UInt32LE";
            };
            if (_441 instanceof UInt32BE) {
                return "UInt32BE";
            };
            if (_441 instanceof Int8) {
                return "Int8";
            };
            if (_441 instanceof Int16LE) {
                return "Int16LE";
            };
            if (_441 instanceof Int16BE) {
                return "Int16BE";
            };
            if (_441 instanceof Int32LE) {
                return "Int32LE";
            };
            if (_441 instanceof Int32BE) {
                return "Int32BE";
            };
            if (_441 instanceof FloatLE) {
                return "FloatLE";
            };
            if (_441 instanceof FloatBE) {
                return "FloatBE";
            };
            if (_441 instanceof DoubleLE) {
                return "DoubleLE";
            };
            if (_441 instanceof DoubleBE) {
                return "DoubleBE";
            };
            throw new Error("Failed pattern match");
        });
    };
    var write = Prelude["<<<"](Prelude.semigroupoidArr({}))(writeImpl)(Prelude.show(showBufferValueType({})));
    var showBuffer = function (_) {
        return new Prelude.Show(showImpl);
    };
    var readString = Prelude["<<<"](Prelude.semigroupoidArr({}))(readStringImpl)(Prelude.show(Node_Encoding.showEncoding({})));
    var read = Prelude["<<<"](Prelude.semigroupoidArr({}))(readImpl)(Prelude.show(showBufferValueType({})));
    var fromString = function (str) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(fromStringImpl(str))(Prelude.show(Node_Encoding.showEncoding({})));
    };
    return {
        UInt8: UInt8, 
        UInt16LE: UInt16LE, 
        UInt16BE: UInt16BE, 
        UInt32LE: UInt32LE, 
        UInt32BE: UInt32BE, 
        Int8: Int8, 
        Int16LE: Int16LE, 
        Int16BE: Int16BE, 
        Int32LE: Int32LE, 
        Int32BE: Int32BE, 
        FloatLE: FloatLE, 
        FloatBE: FloatBE, 
        DoubleLE: DoubleLE, 
        DoubleBE: DoubleBE, 
        fill: fill, 
        copy: copy, 
        "concat'": concat$prime, 
        concat: concat, 
        size: size, 
        setAtOffset: setAtOffset, 
        getAtOffset: getAtOffset, 
        toArray: toArray, 
        writeString: writeString, 
        write: write, 
        toString: toString, 
        readString: readString, 
        read: read, 
        fromString: fromString, 
        fromArray: fromArray, 
        create: create, 
        showBuffer: showBuffer, 
        showBufferValueType: showBufferValueType
    };
})();
var PS = PS || {};
PS.Node_Buffer_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function slice (start) {   return function (end) {     return function (buff) {       return buff.slice(start, end);     }   } };
    return {
        slice: slice
    };
})();
var PS = PS || {};
PS.Node_Events = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Event = {
        create: function (value) {
            return value;
        }
    };
    function EventEmitter() {

    };
    function Variadic() {

    };
    function emitter () {  var EE = require('events').EventEmitter;  return new EE()};
    function emitterHelper1(__dict) {  return function(method) {    return function(event) {      return function(emitter) {        return function() {          return emitter[method](event);        }      }    }  }};
    function emitterHelper2(__emitter) {  return function(__variadic) {    return function(method) {      return function(event) {        return function(cb) {          return function(emitter) {            return function() {              return emitter[method](event, function() {                return cb.apply(this, arguments)();              }.bind(this));            }          }        }      }    }  }};
    var variadicFn9 = function (_) {
        return new Variadic();
    };
    var variadicFn8 = function (_) {
        return new Variadic();
    };
    var variadicFn7 = function (_) {
        return new Variadic();
    };
    var variadicFn6 = function (_) {
        return new Variadic();
    };
    var variadicFn5 = function (_) {
        return new Variadic();
    };
    var variadicFn4 = function (_) {
        return new Variadic();
    };
    var variadicFn3 = function (_) {
        return new Variadic();
    };
    var variadicFn2 = function (_) {
        return new Variadic();
    };
    var variadicFn10 = function (_) {
        return new Variadic();
    };
    var variadicFn1 = function (_) {
        return new Variadic();
    };
    var variadicFn0 = function (_) {
        return new Variadic();
    };
    var variadicArr = function (_) {
        return new Variadic();
    };
    var setMaxListeners = function (__dict_EventEmitter_169) {
        return emitterHelper1(__dict_EventEmitter_169)("setMaxListeners");
    };
    var removeListenerEvent = "removeListener";
    var removeListener = function (__dict_EventEmitter_170) {
        return function (__dict_Variadic_171) {
            return emitterHelper2(__dict_EventEmitter_170)(__dict_Variadic_171)("removeListener");
        };
    };
    var removeAllListeners = function (__dict_EventEmitter_172) {
        return emitterHelper1(__dict_EventEmitter_172)("removeAllListeners");
    };
    var once = function (__dict_EventEmitter_173) {
        return function (__dict_Variadic_174) {
            return emitterHelper2(__dict_EventEmitter_173)(__dict_Variadic_174)("once");
        };
    };
    var on = function (__dict_EventEmitter_175) {
        return function (__dict_Variadic_176) {
            return emitterHelper2(__dict_EventEmitter_175)(__dict_Variadic_176)("on");
        };
    };
    var newListenerEvent = "newListener";
    var listeners = function (__dict_EventEmitter_177) {
        return emitterHelper1(__dict_EventEmitter_177)("listeners");
    };
    var eventEmitterEmitter = function (_) {
        return new EventEmitter();
    };
    var addListener = function (__dict_EventEmitter_178) {
        return function (__dict_Variadic_179) {
            return emitterHelper2(__dict_EventEmitter_178)(__dict_Variadic_179)("addListener");
        };
    };
    return {
        Event: Event, 
        Variadic: Variadic, 
        EventEmitter: EventEmitter, 
        removeListenerEvent: removeListenerEvent, 
        newListenerEvent: newListenerEvent, 
        setMaxListeners: setMaxListeners, 
        removeListener: removeListener, 
        removeAllListeners: removeAllListeners, 
        once: once, 
        on: on, 
        listeners: listeners, 
        addListener: addListener, 
        emitter: emitter, 
        eventEmitterEmitter: eventEmitterEmitter, 
        variadicArr: variadicArr, 
        variadicFn0: variadicFn0, 
        variadicFn1: variadicFn1, 
        variadicFn2: variadicFn2, 
        variadicFn3: variadicFn3, 
        variadicFn4: variadicFn4, 
        variadicFn5: variadicFn5, 
        variadicFn6: variadicFn6, 
        variadicFn7: variadicFn7, 
        variadicFn8: variadicFn8, 
        variadicFn9: variadicFn9, 
        variadicFn10: variadicFn10
    };
})();
var PS = PS || {};
PS.Node_ChildProcess = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Node_Events = PS.Node_Events;
    var ChildProcess = {
        create: function (value) {
            return value;
        }
    };
    function spawn(command) {  return function(args) {    return function(opts) {      return function() {        return require('child_process').spawn(command, args, opts);      }    }  }};
    var messageEvent = "message";
    var exitEvent = "exit";
    var eventEmitterStreamStdout = function (_) {
        return new Node_Events.EventEmitter();
    };
    var eventEmitterStreamStdin = function (_) {
        return new Node_Events.EventEmitter();
    };
    var eventEmitterStreamStderr = function (_) {
        return new Node_Events.EventEmitter();
    };
    var eventEmitterChildProcess = function (_) {
        return new Node_Events.EventEmitter();
    };
    var errorEvent = "error";
    var disconnectEvent = "disconnect";
    var defaultSpawnOptions = {
        cwd: undefined, 
        stdio: [ "pipe", "pipe", "pipe" ], 
        env: process.env, 
        detached: false, 
        uid: undefined, 
        gid: undefined
    };
    var closeEvent = "close";
    return {
        ChildProcess: ChildProcess, 
        process: process, 
        undefined: undefined, 
        defaultSpawnOptions: defaultSpawnOptions, 
        spawn: spawn, 
        messageEvent: messageEvent, 
        exitEvent: exitEvent, 
        errorEvent: errorEvent, 
        disconnectEvent: disconnectEvent, 
        closeEvent: closeEvent, 
        eventEmitterStreamStderr: eventEmitterStreamStderr, 
        eventEmitterStreamStdin: eventEmitterStreamStdin, 
        eventEmitterStreamStdout: eventEmitterStreamStdout, 
        eventEmitterChildProcess: eventEmitterChildProcess
    };
})();
var PS = PS || {};
PS.Node_FS_Sync = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Data_Function = PS.Data_Function;
    var Node_Encoding = PS.Node_Encoding;
    var Data_Date = PS.Data_Date;
    var Node_FS = PS.Node_FS;
    var Node_FS_Stats = PS.Node_FS_Stats;
    var fs = require('fs');;
    function mkFSAction(fail) {  return function (success) {    return function (f) {      return function () {        try {          return success(f());        } catch (e) {          return fail(e);        }      };    };  };};
    var writeTextFile = function (encoding) {
        return function (file) {
            return function (buff) {
                return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                    return fs.writeFileSync(file, buff, {
                        encoding: Prelude.show(Node_Encoding.showEncoding({}))(encoding)
                    });
                });
            };
        };
    };
    var writeFile = function (file) {
        return function (buff) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.writeFileSync(file, buff, {});
            });
        };
    };
    var utimes = function (file) {
        return function (atime) {
            return function (mtime) {
                return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                    return fs.utimesSync(file, Data_Date.toEpochMilliseconds(atime) / 1000, Data_Date.toEpochMilliseconds(mtime) / 1000);
                });
            };
        };
    };
    var unlink = function (file) {
        return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
            return fs.unlinkSync(file);
        });
    };
    var truncate = function (file) {
        return function (len) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.truncateSync(file, len);
            });
        };
    };
    var symlink = function (src) {
        return function (dst) {
            return function (ty) {
                return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                    return fs.symlinkSync(src, dst, Prelude.show(Node_FS.showSymlinkType({}))(ty));
                });
            };
        };
    };
    var stat = function (file) {
        return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
            return Node_FS_Stats.Stats.create(fs.statSync(file));
        });
    };
    var rmdir = function (file) {
        return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
            return fs.rmdirSync(file);
        });
    };
    var rename = function (oldFile) {
        return function (newFile) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.renameSync(oldFile, newFile);
            });
        };
    };
    var realpath$prime = function (path) {
        return function (cache) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.realpathSync(path, cache);
            });
        };
    };
    var realpath = function (path) {
        return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
            return fs.realpathSync(path, {});
        });
    };
    var readlink = function (path) {
        return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
            return fs.readlinkSync(path);
        });
    };
    var readdir = function (file) {
        return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
            return fs.readdirSync(file);
        });
    };
    var readTextFile = function (encoding) {
        return function (file) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.readFileSync(file, {
                    encoding: Prelude.show(Node_Encoding.showEncoding({}))(encoding)
                });
            });
        };
    };
    var readFile = function (file) {
        return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
            return fs.readFileSync(file, {});
        });
    };
    var mkdir$prime = function (file) {
        return function (mode) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.mkdirSync(file, mode);
            });
        };
    };
    var mkdir = Prelude.flip(mkdir$prime)(777);
    var link = function (src) {
        return function (dst) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.linkSync(src, dst);
            });
        };
    };
    var chown = function (file) {
        return function (uid) {
            return function (gid) {
                return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                    return fs.chownSync(file, uid, gid);
                });
            };
        };
    };
    var chmod = function (file) {
        return function (mode) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.chmodSync(file, mode);
            });
        };
    };
    var appendTextFile = function (encoding) {
        return function (file) {
            return function (buff) {
                return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                    return fs.appendFileSync(file, buff, {
                        encoding: Prelude.show(Node_Encoding.showEncoding({}))(encoding)
                    });
                });
            };
        };
    };
    var appendFile = function (file) {
        return function (buff) {
            return mkFSAction(Data_Either.Left.create)(Data_Either.Right.create)(function (_) {
                return fs.appendFileSync(file, buff, {});
            });
        };
    };
    return {
        appendTextFile: appendTextFile, 
        appendFile: appendFile, 
        writeTextFile: writeTextFile, 
        writeFile: writeFile, 
        readTextFile: readTextFile, 
        readFile: readFile, 
        utimes: utimes, 
        readdir: readdir, 
        "mkdir'": mkdir$prime, 
        mkdir: mkdir, 
        rmdir: rmdir, 
        unlink: unlink, 
        "realpath'": realpath$prime, 
        realpath: realpath, 
        readlink: readlink, 
        symlink: symlink, 
        link: link, 
        stat: stat, 
        chmod: chmod, 
        chown: chown, 
        truncate: truncate, 
        rename: rename
    };
})();
var PS = PS || {};
PS.Node_Webkit = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Node_Events = PS.Node_Events;
    function nwShell() {  return require('nw.gui').Shell;};
    function nwWindow() {  return require('nw.gui').Window;};
    function get(win) {  return function() {    return win.get();  }};
    function open(url) {  return function(opts) {    return function(win) {      return function() {        return win.open(url, opts);      }    }  }};
    function shellOpen(method) {  return function(url) {    return function(shell) {      return function() {        return shell[method](url);      }    }  }};
    function showDevTools(win) {  return function() {    return win.showDevTools();  }};
    function closeWindow(win) {  return function() {    return win.close(true);  }};
    function windowPolicy(method) {  return function(policy) {    return function() {      return policy[method]();    }  }};
    var showItemInFolder = shellOpen("showItemInFolder");
    var openItem = shellOpen("openItem");
    var openExternal = shellOpen("openExternal");
    var ignore = windowPolicy("ignore");
    var forceNewWindow = windowPolicy("forceNewWindow");
    var forceNewPopup = windowPolicy("forceNewPopup");
    var forceDownload = windowPolicy("forceDownload");
    var forceCurrent = windowPolicy("forceCurrent");
    var eventEmitterNWWindow = function (_) {
        return new Node_Events.EventEmitter();
    };
    var onBlur = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("blur");
    var onCapturepagedone = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn1({}))("capturepagedone");
    var onClose = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("close");
    var onClosed = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("closed");
    var onDevtoolsClosed = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("devtools-closed");
    var onDevtoolsOpened = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn1({}))("devtools-opened");
    var onDocumentEnd = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn1({}))("document-end");
    var onDocumentStart = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn1({}))("document-start");
    var onEnterFullscreen = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("enter-fullscreen");
    var onFocus = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("focus");
    var onLeaveFullscreen = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("leave-fullscreen");
    var onLoaded = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("loaded");
    var onLoading = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("loading");
    var onMaximize = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("maximize");
    var onMinimize = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("minimize");
    var onMove = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn2({}))("move");
    var onNewWinPolicy = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn3({}))("new-win-policy");
    var onResize = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn2({}))("resize");
    var onRestore = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("restore");
    var onUnmaximize = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn0({}))("unmaximize");
    var onZoom = Node_Events.on(eventEmitterNWWindow({}))(Node_Events.variadicFn1({}))("zoom");
    var defaultManifestWindow = {
        title: "", 
        width: 800, 
        height: 600, 
        toolbar: true, 
        icon: "", 
        position: "center", 
        min_width: 800, 
        min_height: 600, 
        max_width: 800, 
        max_height: 600, 
        as_desktop: false, 
        resizable: true, 
        "always-on-top": false, 
        fullscreen: false, 
        show_in_taskbar: true, 
        frame: true, 
        show: true, 
        kiosk: false
    };
    return {
        onZoom: onZoom, 
        onUnmaximize: onUnmaximize, 
        onRestore: onRestore, 
        onResize: onResize, 
        onNewWinPolicy: onNewWinPolicy, 
        onMove: onMove, 
        onMinimize: onMinimize, 
        onMaximize: onMaximize, 
        onLoading: onLoading, 
        onLoaded: onLoaded, 
        onLeaveFullscreen: onLeaveFullscreen, 
        onFocus: onFocus, 
        onEnterFullscreen: onEnterFullscreen, 
        onDocumentStart: onDocumentStart, 
        onDocumentEnd: onDocumentEnd, 
        onDevtoolsOpened: onDevtoolsOpened, 
        onDevtoolsClosed: onDevtoolsClosed, 
        onClosed: onClosed, 
        onClose: onClose, 
        onCapturepagedone: onCapturepagedone, 
        onBlur: onBlur, 
        forceNewPopup: forceNewPopup, 
        forceNewWindow: forceNewWindow, 
        forceDownload: forceDownload, 
        forceCurrent: forceCurrent, 
        ignore: ignore, 
        windowPolicy: windowPolicy, 
        closeWindow: closeWindow, 
        showDevTools: showDevTools, 
        showItemInFolder: showItemInFolder, 
        openItem: openItem, 
        openExternal: openExternal, 
        shellOpen: shellOpen, 
        open: open, 
        get: get, 
        nwWindow: nwWindow, 
        nwShell: nwShell, 
        defaultManifestWindow: defaultManifestWindow, 
        eventEmitterNWWindow: eventEmitterNWWindow
    };
})();
var PS = PS || {};
PS.React = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Data_Function = PS.Data_Function;
    function noop0() { return null; };
    var noop1 = noop0;
    var noop2 = noop0;
    function noop2_(_) { return function(_) { return noop0; }; };
     function getProps() {        return __current.props;  };
     function getRefs() {        return __current.refs;  };
     function writeState(state) {                      __current.replaceState(state);         return function() { return state; }           };
     function readState() {             return __current.state;  };
     function getSelf() {    return __current;   };
     function runUI(ref) {            return function(action) {        return function() {              if (ref.isMounted()) {           __current = ref;               try {                            return action();             } finally {                      __current = null;            }                            }                            }                            }                            };
     var __current;                                     function mkUI(ss) {                                  return function(render) {                            var specs = {};                                    for (var s in ss) {                                  if (ss.hasOwnProperty(s)) {                          specs[s] = (function(impl) {                         return function() {                                  __current = this;                                  try {                                                return impl.apply(this, arguments);              } finally {                                          __current = null;                                }                                                }                                                })(ss[s]);                                       }                                                }                                                  specs.getInitialState= function() {                  __current = this;                                  try {                                                return ss.getInitialState();            } finally {                                          __current = null;                                }                                                };                                                 specs.render = function() {                          __current = this;                                  try {                                                var ui = render.call(this);                      } finally {                                          __current = null;                                }                                                  return ui;                                       };                                                 return React.createClass(specs);                 }                                                };
     function handle(f) {                       var component = __current;               return function(e) {                       __current = component;                   try {                                      var res = f.call(__current, e)();      } finally {                                __current = null;                      }                                        return res;                            }                                      };
    var renderToString = React.renderComponentToString;
     function renderToBody(component) {                             return function() {                                            return React.renderComponent(component, document.body);    }                                                          };
     function renderToElementById(id) {                                             return function(component) {                                                   return function() {                                                            return React.renderComponent(component, document.getElementById(id));      }                                                                          }                                                                          };
    function deferred(action) {  var component = __current;  return function() {    __current = component;    try {      return action();    } finally {      __current = null;    }  };};
    var transformState = function (f) {
        return function __do() {
            var _18 = readState();
            return writeState(f(_18))();
        };
    };
    var spec = (function () {
        var updateAlways = function (props) {
            return function (state) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(true);
            };
        };
        return {
            getInitialState: noop0, 
            componentWillMount: noop0, 
            componentDidMount: noop0, 
            componentWillReceiveProps: noop1, 
            shouldComponentUpdate: Data_Function.mkFn2(noop2_), 
            componentWillUpdate: Data_Function.mkFn2(noop2_), 
            componentDidUpdate: Data_Function.mkFn2(noop2_), 
            componentWillUnmount: noop0
        };
    })();
    return {
        deferred: deferred, 
        renderToElementById: renderToElementById, 
        renderToBody: renderToBody, 
        renderToString: renderToString, 
        handle: handle, 
        mkUI: mkUI, 
        runUI: runUI, 
        getSelf: getSelf, 
        transformState: transformState, 
        readState: readState, 
        writeState: writeState, 
        getRefs: getRefs, 
        getProps: getProps, 
        spec: spec, 
        noop2_: noop2_, 
        noop2: noop2, 
        noop1: noop1, 
        noop0: noop0
    };
})();
var PS = PS || {};
PS.React_DOM = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var React = PS.React;
    function Accept(value0) {
        this.value0 = value0;
    };
    Accept.create = function (value0) {
        return new Accept(value0);
    };
    function AccessKey(value0) {
        this.value0 = value0;
    };
    AccessKey.create = function (value0) {
        return new AccessKey(value0);
    };
    function Action(value0) {
        this.value0 = value0;
    };
    Action.create = function (value0) {
        return new Action(value0);
    };
    function AllowFullScreen(value0) {
        this.value0 = value0;
    };
    AllowFullScreen.create = function (value0) {
        return new AllowFullScreen(value0);
    };
    function AllowTransparency(value0) {
        this.value0 = value0;
    };
    AllowTransparency.create = function (value0) {
        return new AllowTransparency(value0);
    };
    function Alt(value0) {
        this.value0 = value0;
    };
    Alt.create = function (value0) {
        return new Alt(value0);
    };
    function Aria(value0) {
        this.value0 = value0;
    };
    Aria.create = function (value0) {
        return new Aria(value0);
    };
    function Async(value0) {
        this.value0 = value0;
    };
    Async.create = function (value0) {
        return new Async(value0);
    };
    function AutoComplete(value0) {
        this.value0 = value0;
    };
    AutoComplete.create = function (value0) {
        return new AutoComplete(value0);
    };
    function AutoFocus(value0) {
        this.value0 = value0;
    };
    AutoFocus.create = function (value0) {
        return new AutoFocus(value0);
    };
    function AutoPlay(value0) {
        this.value0 = value0;
    };
    AutoPlay.create = function (value0) {
        return new AutoPlay(value0);
    };
    function CellPadding(value0) {
        this.value0 = value0;
    };
    CellPadding.create = function (value0) {
        return new CellPadding(value0);
    };
    function CellSpacing(value0) {
        this.value0 = value0;
    };
    CellSpacing.create = function (value0) {
        return new CellSpacing(value0);
    };
    function CharSet(value0) {
        this.value0 = value0;
    };
    CharSet.create = function (value0) {
        return new CharSet(value0);
    };
    function Checked(value0) {
        this.value0 = value0;
    };
    Checked.create = function (value0) {
        return new Checked(value0);
    };
    function ClassName(value0) {
        this.value0 = value0;
    };
    ClassName.create = function (value0) {
        return new ClassName(value0);
    };
    function Cols(value0) {
        this.value0 = value0;
    };
    Cols.create = function (value0) {
        return new Cols(value0);
    };
    function ColSpan(value0) {
        this.value0 = value0;
    };
    ColSpan.create = function (value0) {
        return new ColSpan(value0);
    };
    function Content(value0) {
        this.value0 = value0;
    };
    Content.create = function (value0) {
        return new Content(value0);
    };
    function ContentEditable(value0) {
        this.value0 = value0;
    };
    ContentEditable.create = function (value0) {
        return new ContentEditable(value0);
    };
    function ContextMenu(value0) {
        this.value0 = value0;
    };
    ContextMenu.create = function (value0) {
        return new ContextMenu(value0);
    };
    function Controls(value0) {
        this.value0 = value0;
    };
    Controls.create = function (value0) {
        return new Controls(value0);
    };
    function CrossOrigin(value0) {
        this.value0 = value0;
    };
    CrossOrigin.create = function (value0) {
        return new CrossOrigin(value0);
    };
    function Data(value0) {
        this.value0 = value0;
    };
    Data.create = function (value0) {
        return new Data(value0);
    };
    function DateTime(value0) {
        this.value0 = value0;
    };
    DateTime.create = function (value0) {
        return new DateTime(value0);
    };
    function Defer(value0) {
        this.value0 = value0;
    };
    Defer.create = function (value0) {
        return new Defer(value0);
    };
    function Dir(value0) {
        this.value0 = value0;
    };
    Dir.create = function (value0) {
        return new Dir(value0);
    };
    function Disabled(value0) {
        this.value0 = value0;
    };
    Disabled.create = function (value0) {
        return new Disabled(value0);
    };
    function Download(value0) {
        this.value0 = value0;
    };
    Download.create = function (value0) {
        return new Download(value0);
    };
    function Draggable(value0) {
        this.value0 = value0;
    };
    Draggable.create = function (value0) {
        return new Draggable(value0);
    };
    function EncType(value0) {
        this.value0 = value0;
    };
    EncType.create = function (value0) {
        return new EncType(value0);
    };
    function Form(value0) {
        this.value0 = value0;
    };
    Form.create = function (value0) {
        return new Form(value0);
    };
    function FormNoValidate(value0) {
        this.value0 = value0;
    };
    FormNoValidate.create = function (value0) {
        return new FormNoValidate(value0);
    };
    function FrameBorder(value0) {
        this.value0 = value0;
    };
    FrameBorder.create = function (value0) {
        return new FrameBorder(value0);
    };
    function Height(value0) {
        this.value0 = value0;
    };
    Height.create = function (value0) {
        return new Height(value0);
    };
    function Hidden(value0) {
        this.value0 = value0;
    };
    Hidden.create = function (value0) {
        return new Hidden(value0);
    };
    function Href(value0) {
        this.value0 = value0;
    };
    Href.create = function (value0) {
        return new Href(value0);
    };
    function HrefLang(value0) {
        this.value0 = value0;
    };
    HrefLang.create = function (value0) {
        return new HrefLang(value0);
    };
    function HtmlFor(value0) {
        this.value0 = value0;
    };
    HtmlFor.create = function (value0) {
        return new HtmlFor(value0);
    };
    function HttpEquiv(value0) {
        this.value0 = value0;
    };
    HttpEquiv.create = function (value0) {
        return new HttpEquiv(value0);
    };
    function Icon(value0) {
        this.value0 = value0;
    };
    Icon.create = function (value0) {
        return new Icon(value0);
    };
    function Id(value0) {
        this.value0 = value0;
    };
    Id.create = function (value0) {
        return new Id(value0);
    };
    function Label(value0) {
        this.value0 = value0;
    };
    Label.create = function (value0) {
        return new Label(value0);
    };
    function Lang(value0) {
        this.value0 = value0;
    };
    Lang.create = function (value0) {
        return new Lang(value0);
    };
    function List(value0) {
        this.value0 = value0;
    };
    List.create = function (value0) {
        return new List(value0);
    };
    function Loop(value0) {
        this.value0 = value0;
    };
    Loop.create = function (value0) {
        return new Loop(value0);
    };
    function Max(value0) {
        this.value0 = value0;
    };
    Max.create = function (value0) {
        return new Max(value0);
    };
    function MaxLength(value0) {
        this.value0 = value0;
    };
    MaxLength.create = function (value0) {
        return new MaxLength(value0);
    };
    function MediaGroup(value0) {
        this.value0 = value0;
    };
    MediaGroup.create = function (value0) {
        return new MediaGroup(value0);
    };
    function Method(value0) {
        this.value0 = value0;
    };
    Method.create = function (value0) {
        return new Method(value0);
    };
    function Min(value0) {
        this.value0 = value0;
    };
    Min.create = function (value0) {
        return new Min(value0);
    };
    function Multiple(value0) {
        this.value0 = value0;
    };
    Multiple.create = function (value0) {
        return new Multiple(value0);
    };
    function Muted(value0) {
        this.value0 = value0;
    };
    Muted.create = function (value0) {
        return new Muted(value0);
    };
    function Name(value0) {
        this.value0 = value0;
    };
    Name.create = function (value0) {
        return new Name(value0);
    };
    function NoValidate(value0) {
        this.value0 = value0;
    };
    NoValidate.create = function (value0) {
        return new NoValidate(value0);
    };
    function Pattern(value0) {
        this.value0 = value0;
    };
    Pattern.create = function (value0) {
        return new Pattern(value0);
    };
    function Placeholder(value0) {
        this.value0 = value0;
    };
    Placeholder.create = function (value0) {
        return new Placeholder(value0);
    };
    function Poster(value0) {
        this.value0 = value0;
    };
    Poster.create = function (value0) {
        return new Poster(value0);
    };
    function Preload(value0) {
        this.value0 = value0;
    };
    Preload.create = function (value0) {
        return new Preload(value0);
    };
    function RadioGroup(value0) {
        this.value0 = value0;
    };
    RadioGroup.create = function (value0) {
        return new RadioGroup(value0);
    };
    function ReadOnly(value0) {
        this.value0 = value0;
    };
    ReadOnly.create = function (value0) {
        return new ReadOnly(value0);
    };
    function Rel(value0) {
        this.value0 = value0;
    };
    Rel.create = function (value0) {
        return new Rel(value0);
    };
    function Required(value0) {
        this.value0 = value0;
    };
    Required.create = function (value0) {
        return new Required(value0);
    };
    function Role(value0) {
        this.value0 = value0;
    };
    Role.create = function (value0) {
        return new Role(value0);
    };
    function Rows(value0) {
        this.value0 = value0;
    };
    Rows.create = function (value0) {
        return new Rows(value0);
    };
    function RowSpan(value0) {
        this.value0 = value0;
    };
    RowSpan.create = function (value0) {
        return new RowSpan(value0);
    };
    function Sandbox(value0) {
        this.value0 = value0;
    };
    Sandbox.create = function (value0) {
        return new Sandbox(value0);
    };
    function Scope(value0) {
        this.value0 = value0;
    };
    Scope.create = function (value0) {
        return new Scope(value0);
    };
    function ScrollLeft(value0) {
        this.value0 = value0;
    };
    ScrollLeft.create = function (value0) {
        return new ScrollLeft(value0);
    };
    function Scrolling(value0) {
        this.value0 = value0;
    };
    Scrolling.create = function (value0) {
        return new Scrolling(value0);
    };
    function ScrollTop(value0) {
        this.value0 = value0;
    };
    ScrollTop.create = function (value0) {
        return new ScrollTop(value0);
    };
    function Seamless(value0) {
        this.value0 = value0;
    };
    Seamless.create = function (value0) {
        return new Seamless(value0);
    };
    function Selected(value0) {
        this.value0 = value0;
    };
    Selected.create = function (value0) {
        return new Selected(value0);
    };
    function Size(value0) {
        this.value0 = value0;
    };
    Size.create = function (value0) {
        return new Size(value0);
    };
    function Span(value0) {
        this.value0 = value0;
    };
    Span.create = function (value0) {
        return new Span(value0);
    };
    function SpellCheck(value0) {
        this.value0 = value0;
    };
    SpellCheck.create = function (value0) {
        return new SpellCheck(value0);
    };
    function Src(value0) {
        this.value0 = value0;
    };
    Src.create = function (value0) {
        return new Src(value0);
    };
    function SrcDoc(value0) {
        this.value0 = value0;
    };
    SrcDoc.create = function (value0) {
        return new SrcDoc(value0);
    };
    function SrcSet(value0) {
        this.value0 = value0;
    };
    SrcSet.create = function (value0) {
        return new SrcSet(value0);
    };
    function Start(value0) {
        this.value0 = value0;
    };
    Start.create = function (value0) {
        return new Start(value0);
    };
    function Step(value0) {
        this.value0 = value0;
    };
    Step.create = function (value0) {
        return new Step(value0);
    };
    function Style(value0) {
        this.value0 = value0;
    };
    Style.create = function (value0) {
        return new Style(value0);
    };
    function TabIndex(value0) {
        this.value0 = value0;
    };
    TabIndex.create = function (value0) {
        return new TabIndex(value0);
    };
    function Target(value0) {
        this.value0 = value0;
    };
    Target.create = function (value0) {
        return new Target(value0);
    };
    function Title(value0) {
        this.value0 = value0;
    };
    Title.create = function (value0) {
        return new Title(value0);
    };
    function Type(value0) {
        this.value0 = value0;
    };
    Type.create = function (value0) {
        return new Type(value0);
    };
    function Value(value0) {
        this.value0 = value0;
    };
    Value.create = function (value0) {
        return new Value(value0);
    };
    function Width(value0) {
        this.value0 = value0;
    };
    Width.create = function (value0) {
        return new Width(value0);
    };
    function Wmode(value0) {
        this.value0 = value0;
    };
    Wmode.create = function (value0) {
        return new Wmode(value0);
    };
    function AutoCapitalize(value0) {
        this.value0 = value0;
    };
    AutoCapitalize.create = function (value0) {
        return new AutoCapitalize(value0);
    };
    function AutoCorrect(value0) {
        this.value0 = value0;
    };
    AutoCorrect.create = function (value0) {
        return new AutoCorrect(value0);
    };
    function Property(value0) {
        this.value0 = value0;
    };
    Property.create = function (value0) {
        return new Property(value0);
    };
    function Ref(value0) {
        this.value0 = value0;
    };
    Ref.create = function (value0) {
        return new Ref(value0);
    };
    function Key(value0) {
        this.value0 = value0;
    };
    Key.create = function (value0) {
        return new Key(value0);
    };
    function DangerouslySetInnerHTML(value0) {
        this.value0 = value0;
    };
    DangerouslySetInnerHTML.create = function (value0) {
        return new DangerouslySetInnerHTML(value0);
    };
    function OnBlur(value0) {
        this.value0 = value0;
    };
    OnBlur.create = function (value0) {
        return new OnBlur(value0);
    };
    function OnChange(value0) {
        this.value0 = value0;
    };
    OnChange.create = function (value0) {
        return new OnChange(value0);
    };
    function OnContextMenu(value0) {
        this.value0 = value0;
    };
    OnContextMenu.create = function (value0) {
        return new OnContextMenu(value0);
    };
    function OnCopy(value0) {
        this.value0 = value0;
    };
    OnCopy.create = function (value0) {
        return new OnCopy(value0);
    };
    function OnCut(value0) {
        this.value0 = value0;
    };
    OnCut.create = function (value0) {
        return new OnCut(value0);
    };
    function OnClick(value0) {
        this.value0 = value0;
    };
    OnClick.create = function (value0) {
        return new OnClick(value0);
    };
    function OnDoubleClick(value0) {
        this.value0 = value0;
    };
    OnDoubleClick.create = function (value0) {
        return new OnDoubleClick(value0);
    };
    function OnDrag(value0) {
        this.value0 = value0;
    };
    OnDrag.create = function (value0) {
        return new OnDrag(value0);
    };
    function OnDragEnd(value0) {
        this.value0 = value0;
    };
    OnDragEnd.create = function (value0) {
        return new OnDragEnd(value0);
    };
    function OnDragEnter(value0) {
        this.value0 = value0;
    };
    OnDragEnter.create = function (value0) {
        return new OnDragEnter(value0);
    };
    function OnDragExit(value0) {
        this.value0 = value0;
    };
    OnDragExit.create = function (value0) {
        return new OnDragExit(value0);
    };
    function OnDragLeave(value0) {
        this.value0 = value0;
    };
    OnDragLeave.create = function (value0) {
        return new OnDragLeave(value0);
    };
    function OnDragOver(value0) {
        this.value0 = value0;
    };
    OnDragOver.create = function (value0) {
        return new OnDragOver(value0);
    };
    function OnDragStart(value0) {
        this.value0 = value0;
    };
    OnDragStart.create = function (value0) {
        return new OnDragStart(value0);
    };
    function OnDrop(value0) {
        this.value0 = value0;
    };
    OnDrop.create = function (value0) {
        return new OnDrop(value0);
    };
    function OnError(value0) {
        this.value0 = value0;
    };
    OnError.create = function (value0) {
        return new OnError(value0);
    };
    function OnFocus(value0) {
        this.value0 = value0;
    };
    OnFocus.create = function (value0) {
        return new OnFocus(value0);
    };
    function OnInput(value0) {
        this.value0 = value0;
    };
    OnInput.create = function (value0) {
        return new OnInput(value0);
    };
    function OnKeyDown(value0) {
        this.value0 = value0;
    };
    OnKeyDown.create = function (value0) {
        return new OnKeyDown(value0);
    };
    function OnKeyPress(value0) {
        this.value0 = value0;
    };
    OnKeyPress.create = function (value0) {
        return new OnKeyPress(value0);
    };
    function OnKeyUp(value0) {
        this.value0 = value0;
    };
    OnKeyUp.create = function (value0) {
        return new OnKeyUp(value0);
    };
    function OnLoad(value0) {
        this.value0 = value0;
    };
    OnLoad.create = function (value0) {
        return new OnLoad(value0);
    };
    function OnMouseEnter(value0) {
        this.value0 = value0;
    };
    OnMouseEnter.create = function (value0) {
        return new OnMouseEnter(value0);
    };
    function OnMouseLeave(value0) {
        this.value0 = value0;
    };
    OnMouseLeave.create = function (value0) {
        return new OnMouseLeave(value0);
    };
    function OnMouseDown(value0) {
        this.value0 = value0;
    };
    OnMouseDown.create = function (value0) {
        return new OnMouseDown(value0);
    };
    function OnMouseMove(value0) {
        this.value0 = value0;
    };
    OnMouseMove.create = function (value0) {
        return new OnMouseMove(value0);
    };
    function OnMouseOut(value0) {
        this.value0 = value0;
    };
    OnMouseOut.create = function (value0) {
        return new OnMouseOut(value0);
    };
    function OnMouseOver(value0) {
        this.value0 = value0;
    };
    OnMouseOver.create = function (value0) {
        return new OnMouseOver(value0);
    };
    function OnMouseUp(value0) {
        this.value0 = value0;
    };
    OnMouseUp.create = function (value0) {
        return new OnMouseUp(value0);
    };
    function OnPaste(value0) {
        this.value0 = value0;
    };
    OnPaste.create = function (value0) {
        return new OnPaste(value0);
    };
    function OnReset(value0) {
        this.value0 = value0;
    };
    OnReset.create = function (value0) {
        return new OnReset(value0);
    };
    function OnScroll(value0) {
        this.value0 = value0;
    };
    OnScroll.create = function (value0) {
        return new OnScroll(value0);
    };
    function OnSubmit(value0) {
        this.value0 = value0;
    };
    OnSubmit.create = function (value0) {
        return new OnSubmit(value0);
    };
    function OnTouchCancel(value0) {
        this.value0 = value0;
    };
    OnTouchCancel.create = function (value0) {
        return new OnTouchCancel(value0);
    };
    function OnTouchEnd(value0) {
        this.value0 = value0;
    };
    OnTouchEnd.create = function (value0) {
        return new OnTouchEnd(value0);
    };
    function OnTouchMove(value0) {
        this.value0 = value0;
    };
    OnTouchMove.create = function (value0) {
        return new OnTouchMove(value0);
    };
    function OnTouchStart(value0) {
        this.value0 = value0;
    };
    OnTouchStart.create = function (value0) {
        return new OnTouchStart(value0);
    };
    function OnWheel(value0) {
        this.value0 = value0;
    };
    OnWheel.create = function (value0) {
        return new OnWheel(value0);
    };
     function mkProps(props) {                                   var result = {};                                          for (var i = 0, len = props.length; i < len; i++) {         var prop = props[i];                                      var name = prop.constructor.name;                         name = name[0].toLowerCase() + name.substring(1);         var val = prop.value0;                                    /* Until React.js handles data and aria like style*/      /* we have to unload the properties.*/                    if (name === 'data' || name === 'aria') {                   for (var subprop in val) {                                  if (val.hasOwnProperty(subprop)) {                          result[name + '-' + subprop] = val[subprop];            }                                                       }                                                       } else {                                                    result[name] = val;                                     }                                                       }                                                         return result;                                          }                                                         function mkDOM(tagName) {                                   var ctor = window.React.DOM[tagName];                     return function(props) {                                    return function(children) {                                 var p = props.length > 0 ? mkProps(props) : null;         return ctor.apply(ctor, [p].concat(children));          }                                                       }                                                       };
    function text(text) {   return text;        };
    var wmode = Wmode.create;
    var width = Width.create;
    var wbr = mkDOM("wbr");
    var wbr$prime = wbr([  ]);
    var video = mkDOM("video");
    var video$prime = video([  ]);
    var $$var = mkDOM("var");
    var var$prime = $$var([  ]);
    var value = Value.create;
    var ul = mkDOM("ul");
    var ul$prime = ul([  ]);
    var u = mkDOM("u");
    var u$prime = u([  ]);
    var typeProp = Type.create;
    var track = mkDOM("track");
    var track$prime = track([  ]);
    var tr = mkDOM("tr");
    var tr$prime = tr([  ]);
    var titleProp = Title.create;
    var title = mkDOM("title");
    var title$prime = title([  ]);
    var time = mkDOM("time");
    var time$prime = time([  ]);
    var thead = mkDOM("thead");
    var thead$prime = thead([  ]);
    var th = mkDOM("th");
    var th$prime = th([  ]);
    var tfoot = mkDOM("tfoot");
    var tfoot$prime = tfoot([  ]);
    var textarea = mkDOM("textarea");
    var textarea$prime = textarea([  ]);
    var td = mkDOM("td");
    var td$prime = td([  ]);
    var tbody = mkDOM("tbody");
    var tbody$prime = tbody([  ]);
    var target = Target.create;
    var table = mkDOM("table");
    var table$prime = table([  ]);
    var tabIndex = TabIndex.create;
    var svg = mkDOM("svg");
    var svg$prime = svg([  ]);
    var sup = mkDOM("sup");
    var sup$prime = sup([  ]);
    var summary = mkDOM("summary");
    var summary$prime = summary([  ]);
    var sub = mkDOM("sub");
    var sub$prime = sub([  ]);
    var styleDOM = mkDOM("style");
    var styleDOM$prime = styleDOM([  ]);
    var style = Style.create;
    var strong = mkDOM("strong");
    var strong$prime = strong([  ]);
    var stop = mkDOM("stop");
    var stop$prime = stop([  ]);
    var step = Step.create;
    var start = Start.create;
    var srcSet = SrcSet.create;
    var srcDoc = SrcDoc.create;
    var src = Src.create;
    var spellCheck = SpellCheck.create;
    var spanProp = Span.create;
    var span = mkDOM("span");
    var span$prime = span([  ]);
    var source = mkDOM("source");
    var source$prime = source([  ]);
    var small = mkDOM("small");
    var small$prime = small([  ]);
    var size = Size.create;
    var selected = Selected.create;
    var select = mkDOM("select");
    var select$prime = select([  ]);
    var section = mkDOM("section");
    var section$prime = section([  ]);
    var seamless = Seamless.create;
    var scrolling = Scrolling.create;
    var scrollTop = ScrollTop.create;
    var scrollLeft = ScrollLeft.create;
    var script = mkDOM("script");
    var script$prime = script([  ]);
    var scope = Scope.create;
    var sandbox = Sandbox.create;
    var samp = mkDOM("samp");
    var samp$prime = samp([  ]);
    var s = mkDOM("s");
    var s$prime = s([  ]);
    var ruby = mkDOM("ruby");
    var ruby$prime = ruby([  ]);
    var rt = mkDOM("rt");
    var rt$prime = rt([  ]);
    var rp = mkDOM("rp");
    var rp$prime = rp([  ]);
    var rows = Rows.create;
    var rowSpan = RowSpan.create;
    var role = Role.create;
    var required = Required.create;
    var rel = Rel.create;
    var ref = Ref.create;
    var rect = mkDOM("rect");
    var rect$prime = rect([  ]);
    var readOnly = ReadOnly.create;
    var radioGroup = RadioGroup.create;
    var radialGradient = mkDOM("radialGradient");
    var radialGradient$prime = radialGradient([  ]);
    var q = mkDOM("q");
    var q$prime = q([  ]);
    var property = Property.create;
    var progress = mkDOM("progress");
    var progress$prime = progress([  ]);
    var preload = Preload.create;
    var pre = mkDOM("pre");
    var pre$prime = pre([  ]);
    var poster = Poster.create;
    var polyline = mkDOM("polyline");
    var polyline$prime = polyline([  ]);
    var polygon = mkDOM("polygon");
    var polygon$prime = polygon([  ]);
    var placeholder = Placeholder.create;
    var pattern = Pattern.create;
    var path = mkDOM("path");
    var path$prime = path([  ]);
    var param = mkDOM("param");
    var param$prime = param([  ]);
    var p = mkDOM("p");
    var p$prime = p([  ]);
    var output = mkDOM("output");
    var output$prime = output([  ]);
    var option = mkDOM("option");
    var option$prime = option([  ]);
    var optgroup = mkDOM("optgroup");
    var optgroup$prime = optgroup([  ]);
    var onWheel = function (f) {
        return OnWheel.create(React.handle(f));
    };
    var onTouchStart = function (f) {
        return OnTouchStart.create(React.handle(f));
    };
    var onTouchMove = function (f) {
        return OnTouchMove.create(React.handle(f));
    };
    var onTouchEnd = function (f) {
        return OnTouchEnd.create(React.handle(f));
    };
    var onTouchCancel = function (f) {
        return OnTouchCancel.create(React.handle(f));
    };
    var onSubmit = function (f) {
        return OnSubmit.create(React.handle(f));
    };
    var onScroll = function (f) {
        return OnScroll.create(React.handle(f));
    };
    var onReset = function (f) {
        return OnReset.create(React.handle(f));
    };
    var onPaste = function (f) {
        return OnPaste.create(React.handle(f));
    };
    var onMouseUp = function (f) {
        return OnMouseUp.create(React.handle(f));
    };
    var onMouseOver = function (f) {
        return OnMouseOver.create(React.handle(f));
    };
    var onMouseOut = function (f) {
        return OnMouseOut.create(React.handle(f));
    };
    var onMouseMove = function (f) {
        return OnMouseMove.create(React.handle(f));
    };
    var onMouseLeave = function (f) {
        return OnMouseLeave.create(React.handle(f));
    };
    var onMouseEnter = function (f) {
        return OnMouseEnter.create(React.handle(f));
    };
    var onMouseDown = function (f) {
        return OnMouseDown.create(React.handle(f));
    };
    var onLoad = function (f) {
        return OnLoad.create(React.handle(f));
    };
    var onKeyUp = function (f) {
        return OnKeyUp.create(React.handle(f));
    };
    var onKeyPress = function (f) {
        return OnKeyPress.create(React.handle(f));
    };
    var onKeyDown = function (f) {
        return OnKeyDown.create(React.handle(f));
    };
    var onInput = function (f) {
        return OnInput.create(React.handle(f));
    };
    var onFocus = function (f) {
        return OnFocus.create(React.handle(f));
    };
    var onError = function (f) {
        return OnError.create(React.handle(f));
    };
    var onDrop = function (f) {
        return OnDrop.create(React.handle(f));
    };
    var onDragStart = function (f) {
        return OnDragStart.create(React.handle(f));
    };
    var onDragOver = function (f) {
        return OnDragOver.create(React.handle(f));
    };
    var onDragLeave = function (f) {
        return OnDragLeave.create(React.handle(f));
    };
    var onDragExit = function (f) {
        return OnDragExit.create(React.handle(f));
    };
    var onDragEnter = function (f) {
        return OnDragEnter.create(React.handle(f));
    };
    var onDragEnd = function (f) {
        return OnDragEnd.create(React.handle(f));
    };
    var onDrag = function (f) {
        return OnDrag.create(React.handle(f));
    };
    var onDoubleClick = function (f) {
        return OnDoubleClick.create(React.handle(f));
    };
    var onCut = function (f) {
        return OnCut.create(React.handle(f));
    };
    var onCopy = function (f) {
        return OnCopy.create(React.handle(f));
    };
    var onContextMenu = function (f) {
        return OnContextMenu.create(React.handle(f));
    };
    var onClick = function (f) {
        return OnClick.create(React.handle(f));
    };
    var onChange = function (f) {
        return OnChange.create(React.handle(f));
    };
    var onBlur = function (f) {
        return OnBlur.create(React.handle(f));
    };
    var ol = mkDOM("ol");
    var ol$prime = ol([  ]);
    var object = mkDOM("object");
    var object$prime = object([  ]);
    var noscript = mkDOM("noscript");
    var noscript$prime = noscript([  ]);
    var noValidate = NoValidate.create;
    var nav = mkDOM("nav");
    var nav$prime = nav([  ]);
    var name = Name.create;
    var muted = Muted.create;
    var multiple = Multiple.create;
    var min = Min.create;
    var method = Method.create;
    var meter = mkDOM("meter");
    var meter$prime = meter([  ]);
    var meta = mkDOM("meta");
    var meta$prime = meta([  ]);
    var menuitem = mkDOM("menuitem");
    var menuitem$prime = menuitem([  ]);
    var menu = mkDOM("menu");
    var menu$prime = menu([  ]);
    var mediaGroup = MediaGroup.create;
    var maxLength = MaxLength.create;
    var max = Max.create;
    var mark = mkDOM("mark");
    var mark$prime = mark([  ]);
    var mapDOM = mkDOM("map");
    var mapDOM$prime = mapDOM([  ]);
    var mainDOM = mkDOM("main");
    var mainDOM$prime = mainDOM([  ]);
    var loop = Loop.create;
    var list = List.create;
    var link = mkDOM("link");
    var link$prime = link([  ]);
    var linearGradient = mkDOM("linearGradient");
    var linearGradient$prime = linearGradient([  ]);
    var line = mkDOM("line");
    var line$prime = line([  ]);
    var li = mkDOM("li");
    var li$prime = li([  ]);
    var legend = mkDOM("legend");
    var legend$prime = legend([  ]);
    var lang = Lang.create;
    var labelProp = Label.create;
    var label = mkDOM("label");
    var label$prime = label([  ]);
    var keygen = mkDOM("keygen");
    var keygen$prime = keygen([  ]);
    var key = Key.create;
    var kbd = mkDOM("kbd");
    var kbd$prime = kbd([  ]);
    var ins = mkDOM("ins");
    var ins$prime = ins([  ]);
    var input = mkDOM("input");
    var input$prime = input([  ]);
    var img = mkDOM("img");
    var img$prime = img([  ]);
    var iframe = mkDOM("iframe");
    var iframe$prime = iframe([  ]);
    var idProp = Id.create;
    var icon = Icon.create;
    var i = mkDOM("i");
    var i$prime = i([  ]);
    var httpEquiv = HttpEquiv.create;
    var htmlFor = HtmlFor.create;
    var html = mkDOM("html");
    var html$prime = html([  ]);
    var hrefLang = HrefLang.create;
    var href = Href.create;
    var hr = mkDOM("hr");
    var hr$prime = hr([  ]);
    var hidden = Hidden.create;
    var height = Height.create;
    var header = mkDOM("header");
    var header$prime = header([  ]);
    var headDOM = mkDOM("head");
    var headDOM$prime = headDOM([  ]);
    var h6 = mkDOM("h6");
    var h6$prime = h6([  ]);
    var h5 = mkDOM("h5");
    var h5$prime = h5([  ]);
    var h4 = mkDOM("h4");
    var h4$prime = h4([  ]);
    var h3 = mkDOM("h3");
    var h3$prime = h3([  ]);
    var h2 = mkDOM("h2");
    var h2$prime = h2([  ]);
    var h1 = mkDOM("h1");
    var h1$prime = h1([  ]);
    var g = mkDOM("g");
    var g$prime = g([  ]);
    var frameBorder = FrameBorder.create;
    var formProp = Form.create;
    var formNoValidate = FormNoValidate.create;
    var form = mkDOM("form");
    var form$prime = form([  ]);
    var footer = mkDOM("footer");
    var footer$prime = footer([  ]);
    var figure = mkDOM("figure");
    var figure$prime = figure([  ]);
    var figcaption = mkDOM("figcaption");
    var figcaption$prime = figcaption([  ]);
    var fieldset = mkDOM("fieldset");
    var fieldset$prime = fieldset([  ]);
    var encType = EncType.create;
    var embed = mkDOM("embed");
    var embed$prime = embed([  ]);
    var em = mkDOM("em");
    var em$prime = em([  ]);
    var dt = mkDOM("dt");
    var dt$prime = dt([  ]);
    var draggable = Draggable.create;
    var download = Download.create;
    var dl = mkDOM("dl");
    var dl$prime = dl([  ]);
    var div = mkDOM("div");
    var div$prime = div([  ]);
    var disabled = Disabled.create;
    var dir = Dir.create;
    var dfn = mkDOM("dfn");
    var dfn$prime = dfn([  ]);
    var details = mkDOM("details");
    var details$prime = details([  ]);
    var del = mkDOM("del");
    var del$prime = del([  ]);
    var defs = mkDOM("defs");
    var defs$prime = defs([  ]);
    var defer = Defer.create;
    var dd = mkDOM("dd");
    var dd$prime = dd([  ]);
    var dateTime = DateTime.create;
    var dataSet = Data.create;
    var dangerouslySetInnerHTML = function (v) {
        return new DangerouslySetInnerHTML({
            __html: v
        });
    };
    var crossOrigin = CrossOrigin.create;
    var controls = Controls.create;
    var contextMenu = ContextMenu.create;
    var contentEditable = ContentEditable.create;
    var content = Content.create;
    var cols = Cols.create;
    var colgroup = mkDOM("colgroup");
    var colgroup$prime = colgroup([  ]);
    var colSpan = ColSpan.create;
    var col = mkDOM("col");
    var col$prime = col([  ]);
    var code = mkDOM("code");
    var code$prime = code([  ]);
    var className = ClassName.create;
    var cite = mkDOM("cite");
    var cite$prime = cite([  ]);
    var circle = mkDOM("circle");
    var circle$prime = circle([  ]);
    var checked = Checked.create;
    var charSet = CharSet.create;
    var cellSpacing = CellSpacing.create;
    var cellPadding = CellPadding.create;
    var caption = mkDOM("caption");
    var caption$prime = caption([  ]);
    var canvas = mkDOM("canvas");
    var canvas$prime = canvas([  ]);
    var button = mkDOM("button");
    var button$prime = button([  ]);
    var br = mkDOM("br");
    var br$prime = br([  ]);
    var body = mkDOM("body");
    var body$prime = body([  ]);
    var blockquote = mkDOM("blockquote");
    var blockquote$prime = blockquote([  ]);
    var big = mkDOM("big");
    var big$prime = big([  ]);
    var bdo = mkDOM("bdo");
    var bdo$prime = bdo([  ]);
    var bdi = mkDOM("bdi");
    var bdi$prime = bdi([  ]);
    var base = mkDOM("base");
    var base$prime = base([  ]);
    var b = mkDOM("b");
    var b$prime = b([  ]);
    var autoPlay = AutoPlay.create;
    var autoFocus = AutoFocus.create;
    var autoCorrect = AutoCorrect.create;
    var autoComplete = AutoComplete.create;
    var autoCapitalize = AutoCapitalize.create;
    var audio = mkDOM("audio");
    var audio$prime = audio([  ]);
    var async = Async.create;
    var aside = mkDOM("aside");
    var aside$prime = aside([  ]);
    var article = mkDOM("article");
    var article$prime = article([  ]);
    var ariaSet = Aria.create;
    var area = mkDOM("area");
    var area$prime = area([  ]);
    var alue = Value.create;
    var alt = Alt.create;
    var allowTransparency = AllowTransparency.create;
    var allowFullScreen = AllowFullScreen.create;
    var address = mkDOM("address");
    var address$prime = address([  ]);
    var action = Action.create;
    var accessKey = AccessKey.create;
    var accept = Accept.create;
    var abbr = mkDOM("abbr");
    var abbr$prime = abbr([  ]);
    var a = mkDOM("a");
    var a$prime = a([  ]);
    return {
        Accept: Accept, 
        AccessKey: AccessKey, 
        Action: Action, 
        AllowFullScreen: AllowFullScreen, 
        AllowTransparency: AllowTransparency, 
        Alt: Alt, 
        Aria: Aria, 
        Async: Async, 
        AutoComplete: AutoComplete, 
        AutoFocus: AutoFocus, 
        AutoPlay: AutoPlay, 
        CellPadding: CellPadding, 
        CellSpacing: CellSpacing, 
        CharSet: CharSet, 
        Checked: Checked, 
        ClassName: ClassName, 
        Cols: Cols, 
        ColSpan: ColSpan, 
        Content: Content, 
        ContentEditable: ContentEditable, 
        ContextMenu: ContextMenu, 
        Controls: Controls, 
        CrossOrigin: CrossOrigin, 
        Data: Data, 
        DateTime: DateTime, 
        Defer: Defer, 
        Dir: Dir, 
        Disabled: Disabled, 
        Download: Download, 
        Draggable: Draggable, 
        EncType: EncType, 
        Form: Form, 
        FormNoValidate: FormNoValidate, 
        FrameBorder: FrameBorder, 
        Height: Height, 
        Hidden: Hidden, 
        Href: Href, 
        HrefLang: HrefLang, 
        HtmlFor: HtmlFor, 
        HttpEquiv: HttpEquiv, 
        Icon: Icon, 
        Id: Id, 
        Label: Label, 
        Lang: Lang, 
        List: List, 
        Loop: Loop, 
        Max: Max, 
        MaxLength: MaxLength, 
        MediaGroup: MediaGroup, 
        Method: Method, 
        Min: Min, 
        Multiple: Multiple, 
        Muted: Muted, 
        Name: Name, 
        NoValidate: NoValidate, 
        Pattern: Pattern, 
        Placeholder: Placeholder, 
        Poster: Poster, 
        Preload: Preload, 
        RadioGroup: RadioGroup, 
        ReadOnly: ReadOnly, 
        Rel: Rel, 
        Required: Required, 
        Role: Role, 
        Rows: Rows, 
        RowSpan: RowSpan, 
        Sandbox: Sandbox, 
        Scope: Scope, 
        ScrollLeft: ScrollLeft, 
        Scrolling: Scrolling, 
        ScrollTop: ScrollTop, 
        Seamless: Seamless, 
        Selected: Selected, 
        Size: Size, 
        Span: Span, 
        SpellCheck: SpellCheck, 
        Src: Src, 
        SrcDoc: SrcDoc, 
        SrcSet: SrcSet, 
        Start: Start, 
        Step: Step, 
        Style: Style, 
        TabIndex: TabIndex, 
        Target: Target, 
        Title: Title, 
        Type: Type, 
        Value: Value, 
        Width: Width, 
        Wmode: Wmode, 
        AutoCapitalize: AutoCapitalize, 
        AutoCorrect: AutoCorrect, 
        Property: Property, 
        Ref: Ref, 
        Key: Key, 
        DangerouslySetInnerHTML: DangerouslySetInnerHTML, 
        OnBlur: OnBlur, 
        OnChange: OnChange, 
        OnContextMenu: OnContextMenu, 
        OnCopy: OnCopy, 
        OnCut: OnCut, 
        OnClick: OnClick, 
        OnDoubleClick: OnDoubleClick, 
        OnDrag: OnDrag, 
        OnDragEnd: OnDragEnd, 
        OnDragEnter: OnDragEnter, 
        OnDragExit: OnDragExit, 
        OnDragLeave: OnDragLeave, 
        OnDragOver: OnDragOver, 
        OnDragStart: OnDragStart, 
        OnDrop: OnDrop, 
        OnError: OnError, 
        OnFocus: OnFocus, 
        OnInput: OnInput, 
        OnKeyDown: OnKeyDown, 
        OnKeyPress: OnKeyPress, 
        OnKeyUp: OnKeyUp, 
        OnLoad: OnLoad, 
        OnMouseEnter: OnMouseEnter, 
        OnMouseLeave: OnMouseLeave, 
        OnMouseDown: OnMouseDown, 
        OnMouseMove: OnMouseMove, 
        OnMouseOut: OnMouseOut, 
        OnMouseOver: OnMouseOver, 
        OnMouseUp: OnMouseUp, 
        OnPaste: OnPaste, 
        OnReset: OnReset, 
        OnScroll: OnScroll, 
        OnSubmit: OnSubmit, 
        OnTouchCancel: OnTouchCancel, 
        OnTouchEnd: OnTouchEnd, 
        OnTouchMove: OnTouchMove, 
        OnTouchStart: OnTouchStart, 
        OnWheel: OnWheel, 
        "svg'": svg$prime, 
        "stop'": stop$prime, 
        "rect'": rect$prime, 
        "radialGradient'": radialGradient$prime, 
        "polyline'": polyline$prime, 
        "polygon'": polygon$prime, 
        "path'": path$prime, 
        "linearGradient'": linearGradient$prime, 
        "line'": line$prime, 
        "g'": g$prime, 
        "defs'": defs$prime, 
        "circle'": circle$prime, 
        "wbr'": wbr$prime, 
        "video'": video$prime, 
        "var'": var$prime, 
        "ul'": ul$prime, 
        "u'": u$prime, 
        "track'": track$prime, 
        "tr'": tr$prime, 
        "title'": title$prime, 
        "time'": time$prime, 
        "thead'": thead$prime, 
        "th'": th$prime, 
        "tfoot'": tfoot$prime, 
        "textarea'": textarea$prime, 
        "td'": td$prime, 
        "tbody'": tbody$prime, 
        "table'": table$prime, 
        "sup'": sup$prime, 
        "summary'": summary$prime, 
        "sub'": sub$prime, 
        "styleDOM'": styleDOM$prime, 
        "strong'": strong$prime, 
        "span'": span$prime, 
        "source'": source$prime, 
        "small'": small$prime, 
        "select'": select$prime, 
        "section'": section$prime, 
        "script'": script$prime, 
        "samp'": samp$prime, 
        "s'": s$prime, 
        "ruby'": ruby$prime, 
        "rt'": rt$prime, 
        "rp'": rp$prime, 
        "q'": q$prime, 
        "progress'": progress$prime, 
        "pre'": pre$prime, 
        "param'": param$prime, 
        "p'": p$prime, 
        "output'": output$prime, 
        "option'": option$prime, 
        "optgroup'": optgroup$prime, 
        "ol'": ol$prime, 
        "object'": object$prime, 
        "noscript'": noscript$prime, 
        "nav'": nav$prime, 
        "meter'": meter$prime, 
        "meta'": meta$prime, 
        "menuitem'": menuitem$prime, 
        "menu'": menu$prime, 
        "mark'": mark$prime, 
        "mapDOM'": mapDOM$prime, 
        "mainDOM'": mainDOM$prime, 
        "link'": link$prime, 
        "li'": li$prime, 
        "legend'": legend$prime, 
        "label'": label$prime, 
        "keygen'": keygen$prime, 
        "kbd'": kbd$prime, 
        "ins'": ins$prime, 
        "input'": input$prime, 
        "img'": img$prime, 
        "iframe'": iframe$prime, 
        "i'": i$prime, 
        "html'": html$prime, 
        "hr'": hr$prime, 
        "header'": header$prime, 
        "headDOM'": headDOM$prime, 
        "h6'": h6$prime, 
        "h5'": h5$prime, 
        "h4'": h4$prime, 
        "h3'": h3$prime, 
        "h2'": h2$prime, 
        "h1'": h1$prime, 
        "form'": form$prime, 
        "footer'": footer$prime, 
        "figure'": figure$prime, 
        "figcaption'": figcaption$prime, 
        "fieldset'": fieldset$prime, 
        "embed'": embed$prime, 
        "em'": em$prime, 
        "dt'": dt$prime, 
        "dl'": dl$prime, 
        "div'": div$prime, 
        "dfn'": dfn$prime, 
        "details'": details$prime, 
        "del'": del$prime, 
        "dd'": dd$prime, 
        "colgroup'": colgroup$prime, 
        "col'": col$prime, 
        "code'": code$prime, 
        "cite'": cite$prime, 
        "caption'": caption$prime, 
        "canvas'": canvas$prime, 
        "button'": button$prime, 
        "br'": br$prime, 
        "body'": body$prime, 
        "blockquote'": blockquote$prime, 
        "big'": big$prime, 
        "bdo'": bdo$prime, 
        "bdi'": bdi$prime, 
        "base'": base$prime, 
        "b'": b$prime, 
        "audio'": audio$prime, 
        "aside'": aside$prime, 
        "article'": article$prime, 
        "area'": area$prime, 
        "address'": address$prime, 
        "abbr'": abbr$prime, 
        "a'": a$prime, 
        svg: svg, 
        stop: stop, 
        rect: rect, 
        radialGradient: radialGradient, 
        polyline: polyline, 
        polygon: polygon, 
        path: path, 
        linearGradient: linearGradient, 
        line: line, 
        g: g, 
        defs: defs, 
        circle: circle, 
        wbr: wbr, 
        video: video, 
        "var": $$var, 
        ul: ul, 
        u: u, 
        track: track, 
        tr: tr, 
        title: title, 
        time: time, 
        thead: thead, 
        th: th, 
        tfoot: tfoot, 
        textarea: textarea, 
        td: td, 
        tbody: tbody, 
        table: table, 
        sup: sup, 
        summary: summary, 
        sub: sub, 
        styleDOM: styleDOM, 
        strong: strong, 
        span: span, 
        source: source, 
        small: small, 
        select: select, 
        section: section, 
        script: script, 
        samp: samp, 
        s: s, 
        ruby: ruby, 
        rt: rt, 
        rp: rp, 
        q: q, 
        progress: progress, 
        pre: pre, 
        param: param, 
        p: p, 
        output: output, 
        option: option, 
        optgroup: optgroup, 
        ol: ol, 
        object: object, 
        noscript: noscript, 
        nav: nav, 
        meter: meter, 
        meta: meta, 
        menuitem: menuitem, 
        menu: menu, 
        mark: mark, 
        mapDOM: mapDOM, 
        mainDOM: mainDOM, 
        link: link, 
        li: li, 
        legend: legend, 
        label: label, 
        keygen: keygen, 
        kbd: kbd, 
        ins: ins, 
        input: input, 
        img: img, 
        iframe: iframe, 
        i: i, 
        html: html, 
        hr: hr, 
        header: header, 
        headDOM: headDOM, 
        h6: h6, 
        h5: h5, 
        h4: h4, 
        h3: h3, 
        h2: h2, 
        h1: h1, 
        form: form, 
        footer: footer, 
        figure: figure, 
        figcaption: figcaption, 
        fieldset: fieldset, 
        embed: embed, 
        em: em, 
        dt: dt, 
        dl: dl, 
        div: div, 
        dfn: dfn, 
        details: details, 
        del: del, 
        dd: dd, 
        colgroup: colgroup, 
        col: col, 
        code: code, 
        cite: cite, 
        caption: caption, 
        canvas: canvas, 
        button: button, 
        br: br, 
        body: body, 
        blockquote: blockquote, 
        big: big, 
        bdo: bdo, 
        bdi: bdi, 
        base: base, 
        b: b, 
        audio: audio, 
        aside: aside, 
        article: article, 
        area: area, 
        address: address, 
        abbr: abbr, 
        a: a, 
        text: text, 
        mkDOM: mkDOM, 
        onWheel: onWheel, 
        onTouchStart: onTouchStart, 
        onTouchMove: onTouchMove, 
        onTouchEnd: onTouchEnd, 
        onTouchCancel: onTouchCancel, 
        onSubmit: onSubmit, 
        onScroll: onScroll, 
        onReset: onReset, 
        onPaste: onPaste, 
        onMouseUp: onMouseUp, 
        onMouseOver: onMouseOver, 
        onMouseOut: onMouseOut, 
        onMouseMove: onMouseMove, 
        onMouseDown: onMouseDown, 
        onMouseLeave: onMouseLeave, 
        onMouseEnter: onMouseEnter, 
        onLoad: onLoad, 
        onKeyUp: onKeyUp, 
        onKeyPress: onKeyPress, 
        onKeyDown: onKeyDown, 
        onInput: onInput, 
        onFocus: onFocus, 
        onError: onError, 
        onDrop: onDrop, 
        onDragStart: onDragStart, 
        onDragOver: onDragOver, 
        onDragLeave: onDragLeave, 
        onDragExit: onDragExit, 
        onDragEnter: onDragEnter, 
        onDragEnd: onDragEnd, 
        onDrag: onDrag, 
        onDoubleClick: onDoubleClick, 
        onCut: onCut, 
        onCopy: onCopy, 
        onContextMenu: onContextMenu, 
        onClick: onClick, 
        onChange: onChange, 
        onBlur: onBlur, 
        value: value, 
        dangerouslySetInnerHTML: dangerouslySetInnerHTML, 
        key: key, 
        ref: ref, 
        property: property, 
        autoCorrect: autoCorrect, 
        autoCapitalize: autoCapitalize, 
        wmode: wmode, 
        width: width, 
        alue: alue, 
        typeProp: typeProp, 
        titleProp: titleProp, 
        target: target, 
        tabIndex: tabIndex, 
        style: style, 
        step: step, 
        start: start, 
        srcSet: srcSet, 
        srcDoc: srcDoc, 
        src: src, 
        spellCheck: spellCheck, 
        spanProp: spanProp, 
        size: size, 
        selected: selected, 
        seamless: seamless, 
        scrollTop: scrollTop, 
        scrolling: scrolling, 
        scrollLeft: scrollLeft, 
        scope: scope, 
        sandbox: sandbox, 
        rowSpan: rowSpan, 
        rows: rows, 
        role: role, 
        required: required, 
        rel: rel, 
        readOnly: readOnly, 
        radioGroup: radioGroup, 
        preload: preload, 
        poster: poster, 
        placeholder: placeholder, 
        pattern: pattern, 
        noValidate: noValidate, 
        name: name, 
        muted: muted, 
        multiple: multiple, 
        min: min, 
        method: method, 
        mediaGroup: mediaGroup, 
        maxLength: maxLength, 
        max: max, 
        loop: loop, 
        list: list, 
        lang: lang, 
        labelProp: labelProp, 
        idProp: idProp, 
        icon: icon, 
        httpEquiv: httpEquiv, 
        htmlFor: htmlFor, 
        hrefLang: hrefLang, 
        href: href, 
        hidden: hidden, 
        height: height, 
        frameBorder: frameBorder, 
        formNoValidate: formNoValidate, 
        formProp: formProp, 
        encType: encType, 
        draggable: draggable, 
        download: download, 
        disabled: disabled, 
        dir: dir, 
        defer: defer, 
        dateTime: dateTime, 
        dataSet: dataSet, 
        crossOrigin: crossOrigin, 
        controls: controls, 
        contextMenu: contextMenu, 
        contentEditable: contentEditable, 
        content: content, 
        colSpan: colSpan, 
        cols: cols, 
        className: className, 
        checked: checked, 
        charSet: charSet, 
        cellSpacing: cellSpacing, 
        cellPadding: cellPadding, 
        autoPlay: autoPlay, 
        autoFocus: autoFocus, 
        ariaSet: ariaSet, 
        autoComplete: autoComplete, 
        async: async, 
        alt: alt, 
        allowTransparency: allowTransparency, 
        allowFullScreen: allowFullScreen, 
        action: action, 
        accessKey: accessKey, 
        accept: accept
    };
})();
var PS = PS || {};
PS.SlamData_App_Menu = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var React_DOM = PS.React_DOM;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Array = PS.Data_Array;
    var React = PS.React;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var command2UI = function (_442) {
        if (_442.name === "divider") {
            return React_DOM.li([ React_DOM.className("divider") ])([  ]);
        };
        if (_442.action instanceof Data_Maybe.Nothing) {
            return React_DOM["li'"]([ React_DOM.a([ React_DOM.idProp("menu-command-" + _442.name) ])([ React_DOM.text(_442.name) ]) ]);
        };
        if (_442.action instanceof Data_Maybe.Just) {
            return React_DOM["li'"]([ React_DOM.a([ React_DOM.idProp("menu-command-" + _442.name), React_DOM.onClick(function (_) {
                return _442.action.value0;
            }) ])([ React_DOM.text(_442.name) ]) ]);
        };
        throw new Error("Failed pattern match");
    };
    var menuButton = function (name) {
        return function (commands) {
            return React_DOM.li([ React_DOM.className("has-dropdown") ])([ React_DOM.a([ React_DOM.idProp("menu-button-" + name) ])([ React_DOM.text(name) ]), React_DOM.ul([ React_DOM.className("dropdown") ])(Prelude["<$>"](Data_Array.functorArray({}))(command2UI)(commands)) ]);
        };
    };
    var editMenu = function (showSettings) {
        return menuButton("Edit")([ {
            name: "Settings", 
            action: new Data_Maybe.Just(showSettings)
        } ]);
    };
    var menu = React.mkUI(React.spec)(function __do() {
        var _19 = React.getProps();
        return React_DOM.nav([ React_DOM.className("top-bar"), new React_DOM.Data({
            options: "is_hover: false", 
            topbar: true
        }) ])([ React_DOM.ul([ React_DOM.className("title-area") ])([ React_DOM["li'"]([  ]) ]), React_DOM.section([ React_DOM.className("top-bar-section") ])([ React_DOM.ul([ React_DOM.className("left") ])([ editMenu(_19.showSettings), command2UI({
            name: "divider", 
            action: Data_Maybe.Nothing.value
        }) ]), React_DOM.ul([ React_DOM.className("right") ])([ React_DOM["li'"]([ React_DOM.a([ React_DOM.href("http://slamdata.com/"), React_DOM.idProp("slamdata-logo"), React_DOM.target("_blank") ])([ React_DOM.img([ React_DOM.alt("SlamData home page"), React_DOM.src("imgs/slamdata-logo.png") ])([  ]) ]) ]) ]) ]) ]);
    });
    var fileMenu = menuButton("File")([ {
        name: "New", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Open...", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Open recent", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Revert to...", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Browse history...", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "divider", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Import...", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Export...", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "divider", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Close", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Save as...", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Save a copy as...", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "divider", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Print", 
        action: Data_Maybe.Nothing.value
    } ]);
    var helpMenu = menuButton("Help")([ {
        name: "Lookup symbol...", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "divider", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Support forum", 
        action: Data_Maybe.Nothing.value
    }, {
        name: "Support email", 
        action: Data_Maybe.Nothing.value
    } ]);
    return {
        menu: menu
    };
})();
var PS = PS || {};
PS.Control_Monad_Cont_Trans = (function () {
    "use strict";
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Prelude = PS.Prelude;
    var ContT = {
        create: function (value) {
            return value;
        }
    };
    var runContT = function (_443) {
        return function (_444) {
            return _443(_444);
        };
    };
    var withContT = function (f) {
        return function (m) {
            return function (k) {
                return runContT(m)(f(k));
            };
        };
    };
    var monadTransContT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_180) {
            return function (m) {
                return function (k) {
                    return Prelude[">>="](__dict_Monad_180["__superclass_Prelude.Bind_1"]({}))(m)(k);
                };
            };
        });
    };
    var mapContT = function (f) {
        return function (m) {
            return function (k) {
                return f(runContT(m)(k));
            };
        };
    };
    var functorContT = function (__dict_Monad_182) {
        return new Prelude.Functor(function (f) {
            return function (m) {
                return function (k) {
                    return runContT(m)(function (a) {
                        return k(f(a));
                    });
                };
            };
        });
    };
    var callCC = function (f) {
        return function (k) {
            return runContT(f(function (a) {
                return function (_) {
                    return k(a);
                };
            }))(k);
        };
    };
    var appluContT = function (__dict_Functor_184) {
        return function (__dict_Monad_185) {
            return new Prelude.Apply(function (f) {
                return function (v) {
                    return function (k) {
                        return runContT(f)(function (g) {
                            return runContT(v)(function (a) {
                                return k(g(a));
                            });
                        });
                    };
                };
            }, function (_) {
                return functorContT(__dict_Monad_185);
            });
        };
    };
    var bindContT = function (__dict_Monad_183) {
        return new Prelude.Bind(function (m) {
            return function (k) {
                return function (k$prime) {
                    return runContT(m)(function (a) {
                        return runContT(k(a))(k$prime);
                    });
                };
            };
        }, function (_) {
            return appluContT(((__dict_Monad_183["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_183);
        });
    };
    var applicativeContT = function (__dict_Functor_186) {
        return function (__dict_Monad_187) {
            return new Prelude.Applicative(function (_) {
                return appluContT(__dict_Functor_186)(__dict_Monad_187);
            }, function (a) {
                return function (k) {
                    return k(a);
                };
            });
        };
    };
    var monadContT = function (__dict_Monad_181) {
        return new Prelude.Monad(function (_) {
            return applicativeContT(((__dict_Monad_181["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_181);
        }, function (_) {
            return bindContT(__dict_Monad_181);
        });
    };
    return {
        ContT: ContT, 
        callCC: callCC, 
        withContT: withContT, 
        mapContT: mapContT, 
        runContT: runContT, 
        functorContT: functorContT, 
        appluContT: appluContT, 
        applicativeContT: applicativeContT, 
        bindContT: bindContT, 
        monadContT: monadContT, 
        monadTransContT: monadTransContT
    };
})();
var PS = PS || {};
PS.Control_Monad = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var when = function (__dict_Monad_188) {
        return function (_450) {
            return function (_451) {
                if (_450) {
                    return _451;
                };
                if (!_450) {
                    return Prelude["return"](__dict_Monad_188)(Prelude.unit);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var unless = function (__dict_Monad_189) {
        return function (_452) {
            return function (_453) {
                if (!_452) {
                    return _453;
                };
                if (_452) {
                    return Prelude["return"](__dict_Monad_189)(Prelude.unit);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var replicateM = function (__dict_Monad_190) {
        return function (_445) {
            return function (_446) {
                if (_445 === 0) {
                    return Prelude["return"](__dict_Monad_190)([  ]);
                };
                return Prelude[">>="](__dict_Monad_190["__superclass_Prelude.Bind_1"]({}))(_446)(function (_21) {
                    return Prelude[">>="](__dict_Monad_190["__superclass_Prelude.Bind_1"]({}))(replicateM(__dict_Monad_190)(_445 - 1)(_446))(function (_20) {
                        return Prelude["return"](__dict_Monad_190)(Prelude[":"](_21)(_20));
                    });
                });
            };
        };
    };
    var foldM = function (__dict_Monad_191) {
        return function (_447) {
            return function (_448) {
                return function (_449) {
                    if (_449.length === 0) {
                        return Prelude["return"](__dict_Monad_191)(_448);
                    };
                    if (_449.length > 0) {
                        var _1408 = _449.slice(1);
                        return Prelude[">>="](__dict_Monad_191["__superclass_Prelude.Bind_1"]({}))(_447(_448)(_449[0]))(function (a$prime) {
                            return foldM(__dict_Monad_191)(_447)(a$prime)(_1408);
                        });
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    return {
        unless: unless, 
        when: when, 
        foldM: foldM, 
        replicateM: replicateM
    };
})();
var PS = PS || {};
PS.Control_Monad_Maybe_Trans = (function () {
    "use strict";
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var MaybeT = {
        create: function (value) {
            return value;
        }
    };
    var runMaybeT = function (_454) {
        return _454;
    };
    var monadTransMaybeT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_192) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT.create)(Prelude.liftM1(__dict_Monad_192)(Data_Maybe.Just.create));
        });
    };
    var mapMaybeT = function (f) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runMaybeT));
    };
    var liftPassMaybe = function (__dict_Monad_194) {
        return function (pass) {
            return mapMaybeT(function (m) {
                return pass(Prelude[">>="](__dict_Monad_194["__superclass_Prelude.Bind_1"]({}))(m)(function (_24) {
                    return Prelude["return"](__dict_Monad_194)((function (_1411) {
                        if (_1411 instanceof Data_Maybe.Nothing) {
                            return new Data_Tuple.Tuple(Data_Maybe.Nothing.value, Prelude.id(Prelude.categoryArr({})));
                        };
                        if (_1411 instanceof Data_Maybe.Just) {
                            return new Data_Tuple.Tuple(new Data_Maybe.Just(_1411.value0.value0), _1411.value0.value1);
                        };
                        throw new Error("Failed pattern match");
                    })(_24));
                }));
            });
        };
    };
    var liftListenMaybe = function (__dict_Monad_195) {
        return function (listen) {
            return mapMaybeT(function (m) {
                return Prelude[">>="](__dict_Monad_195["__superclass_Prelude.Bind_1"]({}))(listen(m))(function (_23) {
                    return Prelude["return"](__dict_Monad_195)(Prelude["<$>"](Data_Maybe.functorMaybe({}))(function (r) {
                        return new Data_Tuple.Tuple(r, _23.value1);
                    })(_23.value0));
                });
            });
        };
    };
    var liftCatchMaybe = function ($$catch) {
        return function (m) {
            return function (h) {
                return MaybeT.create($$catch(runMaybeT(m))(Prelude["<<<"](Prelude.semigroupoidArr({}))(runMaybeT)(h)));
            };
        };
    };
    var liftCallCCMaybe = function (callCC) {
        return function (f) {
            return MaybeT.create(callCC(function (c) {
                return runMaybeT(f(function (a) {
                    return MaybeT.create(c(new Data_Maybe.Just(a)));
                }));
            }));
        };
    };
    var applicativeMaybeT = function (__dict_Monad_199) {
        return new Prelude.Applicative(function (_) {
            return applyMaybeT(__dict_Monad_199);
        }, Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.pure(__dict_Monad_199["__superclass_Prelude.Applicative_0"]({})))(Data_Maybe.Just.create)));
    };
    var applyMaybeT = function (__dict_Monad_198) {
        return new Prelude.Apply(Prelude.ap(monadMaybeT(__dict_Monad_198)), function (_) {
            return functorMaybeT(__dict_Monad_198);
        });
    };
    var monadMaybeT = function (__dict_Monad_193) {
        return new Prelude.Monad(function (_) {
            return applicativeMaybeT(__dict_Monad_193);
        }, function (_) {
            return bindMaybeT(__dict_Monad_193);
        });
    };
    var bindMaybeT = function (__dict_Monad_197) {
        return new Prelude.Bind(function (x) {
            return function (f) {
                return MaybeT.create(Prelude[">>="](__dict_Monad_197["__superclass_Prelude.Bind_1"]({}))(runMaybeT(x))(function (_22) {
                    if (_22 instanceof Data_Maybe.Nothing) {
                        return Prelude["return"](__dict_Monad_197)(Data_Maybe.Nothing.value);
                    };
                    if (_22 instanceof Data_Maybe.Just) {
                        return runMaybeT(f(_22.value0));
                    };
                    throw new Error("Failed pattern match");
                }));
            };
        }, function (_) {
            return applyMaybeT(__dict_Monad_197);
        });
    };
    var functorMaybeT = function (__dict_Monad_196) {
        return new Prelude.Functor(Prelude.liftA1(applicativeMaybeT(__dict_Monad_196)));
    };
    return {
        MaybeT: MaybeT, 
        liftCallCCMaybe: liftCallCCMaybe, 
        liftPassMaybe: liftPassMaybe, 
        liftListenMaybe: liftListenMaybe, 
        liftCatchMaybe: liftCatchMaybe, 
        mapMaybeT: mapMaybeT, 
        runMaybeT: runMaybeT, 
        functorMaybeT: functorMaybeT, 
        applyMaybeT: applyMaybeT, 
        applicativeMaybeT: applicativeMaybeT, 
        bindMaybeT: bindMaybeT, 
        monadMaybeT: monadMaybeT, 
        monadTransMaybeT: monadTransMaybeT
    };
})();
var PS = PS || {};
PS.Control_Monad_Cont_Class = (function () {
    "use strict";
    var Control_Monad_Cont_Trans = PS.Control_Monad_Cont_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    function MonadCont(callCC) {
        this.callCC = callCC;
    };
    var monadContContT = function (__dict_Monad_200) {
        return new MonadCont(Control_Monad_Cont_Trans.callCC);
    };
    var callCC = function (dict) {
        return dict.callCC;
    };
    var monadContErrorT = function (__dict_Error_201) {
        return function (__dict_MonadCont_202) {
            return new MonadCont(Control_Monad_Error_Trans.liftCallCCError(callCC(__dict_MonadCont_202)));
        };
    };
    var monadContMaybeT = function (__dict_MonadCont_203) {
        return new MonadCont(Control_Monad_Maybe_Trans.liftCallCCMaybe(callCC(__dict_MonadCont_203)));
    };
    var monadContReaderT = function (__dict_MonadCont_204) {
        return new MonadCont(Control_Monad_Reader_Trans.liftCallCCReader(callCC(__dict_MonadCont_204)));
    };
    var monadContStateT = function (__dict_MonadCont_205) {
        return new MonadCont(Control_Monad_State_Trans["liftCallCCState'"](callCC(__dict_MonadCont_205)));
    };
    var monadWriterT = function (__dict_Monoid_206) {
        return function (__dict_MonadCont_207) {
            return new MonadCont(Control_Monad_Writer_Trans.liftCallCCWriter(__dict_Monoid_206)(callCC(__dict_MonadCont_207)));
        };
    };
    return {
        MonadCont: MonadCont, 
        callCC: callCC, 
        monadContContT: monadContContT, 
        monadContErrorT: monadContErrorT, 
        monadContMaybeT: monadContMaybeT, 
        monadContReaderT: monadContReaderT, 
        monadContStateT: monadContStateT, 
        monadWriterT: monadWriterT
    };
})();
var PS = PS || {};
PS.Control_Monad_Error_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    function MonadError(catchError, throwError) {
        this.catchError = catchError;
        this.throwError = throwError;
    };
    var throwError = function (dict) {
        return dict.throwError;
    };
    var monadErrorErrorT = function (__dict_Monad_208) {
        return function (__dict_Error_209) {
            return new MonadError(function (m) {
                return function (h) {
                    return Control_Monad_Error_Trans.ErrorT.create(Prelude[">>="](__dict_Monad_208["__superclass_Prelude.Bind_1"]({}))(Control_Monad_Error_Trans.runErrorT(m))(function (_25) {
                        if (_25 instanceof Data_Either.Left) {
                            return Control_Monad_Error_Trans.runErrorT(h(_25.value0));
                        };
                        if (_25 instanceof Data_Either.Right) {
                            return Prelude["return"](__dict_Monad_208)(new Data_Either.Right(_25.value0));
                        };
                        throw new Error("Failed pattern match");
                    }));
                };
            }, function (e) {
                return Control_Monad_Error_Trans.ErrorT.create(Prelude["return"](__dict_Monad_208)(new Data_Either.Left(e)));
            });
        };
    };
    var monadErrorError = function (__dict_Error_210) {
        return new MonadError(function (_455) {
            return function (_456) {
                if (_455 instanceof Data_Either.Left) {
                    return _456(_455.value0);
                };
                if (_455 instanceof Data_Either.Right) {
                    return new Data_Either.Right(_455.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, Data_Either.Left.create);
    };
    var catchError = function (dict) {
        return dict.catchError;
    };
    var monadErrorMaybeT = function (__dict_Monad_211) {
        return function (__dict_MonadError_212) {
            return new MonadError(Control_Monad_Maybe_Trans.liftCatchMaybe(catchError(__dict_MonadError_212)), function (e) {
                return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_211)(throwError(__dict_MonadError_212)(e));
            });
        };
    };
    var monadErrorReaderT = function (__dict_Monad_213) {
        return function (__dict_MonadError_214) {
            return new MonadError(Control_Monad_Reader_Trans.liftCatchReader(catchError(__dict_MonadError_214)), function (e) {
                return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_213)(throwError(__dict_MonadError_214)(e));
            });
        };
    };
    var monadErrorStateT = function (__dict_Monad_215) {
        return function (__dict_MonadError_216) {
            return new MonadError(Control_Monad_State_Trans.liftCatchState(catchError(__dict_MonadError_216)), function (e) {
                return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_215)(throwError(__dict_MonadError_216)(e));
            });
        };
    };
    var monadErrorWriterT = function (__dict_Monad_217) {
        return function (__dict_Monoid_218) {
            return function (__dict_MonadError_219) {
                return new MonadError(Control_Monad_Writer_Trans.liftCatchWriter(catchError(__dict_MonadError_219)), function (e) {
                    return Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_218))(__dict_Monad_217)(throwError(__dict_MonadError_219)(e));
                });
            };
        };
    };
    return {
        MonadError: MonadError, 
        catchError: catchError, 
        throwError: throwError, 
        monadErrorError: monadErrorError, 
        monadErrorErrorT: monadErrorErrorT, 
        monadErrorMaybeT: monadErrorMaybeT, 
        monadErrorReaderT: monadErrorReaderT, 
        monadErrorWriterT: monadErrorWriterT, 
        monadErrorStateT: monadErrorStateT
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader_Class = (function () {
    "use strict";
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    function MonadReader(ask, local) {
        this.ask = ask;
        this.local = local;
    };
    var monadReaderReaderT = function (__dict_Monad_220) {
        return new MonadReader(Prelude["return"](__dict_Monad_220), Control_Monad_Reader_Trans.withReaderT);
    };
    var monadReaderRWST = function (__dict_Monad_221) {
        return function (__dict_Monoid_222) {
            return new MonadReader(Control_Monad_RWS.ask(__dict_Monad_221["__superclass_Prelude.Applicative_0"]({}))(__dict_Monoid_222), Control_Monad_RWS.local);
        };
    };
    var monadReaderFun = function (_) {
        return new MonadReader(Prelude.id(Prelude.categoryArr({})), Prelude[">>>"](Prelude.semigroupoidArr({})));
    };
    var local = function (dict) {
        return dict.local;
    };
    var ask = function (dict) {
        return dict.ask;
    };
    var monadReaderErrorT = function (__dict_Monad_223) {
        return function (__dict_Error_224) {
            return function (__dict_MonadReader_225) {
                return new MonadReader(Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_224))(__dict_Monad_223)(ask(__dict_MonadReader_225)), function (f) {
                    return Control_Monad_Error_Trans.mapErrorT(local(__dict_MonadReader_225)(f));
                });
            };
        };
    };
    var monadReaderMaybeT = function (__dict_Monad_226) {
        return function (__dict_MonadReader_227) {
            return new MonadReader(Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_226)(ask(__dict_MonadReader_227)), function (f) {
                return Control_Monad_Maybe_Trans.mapMaybeT(local(__dict_MonadReader_227)(f));
            });
        };
    };
    var monadReaderStateT = function (__dict_Monad_228) {
        return function (__dict_MonadReader_229) {
            return new MonadReader(Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_228)(ask(__dict_MonadReader_229)), function (f) {
                return Control_Monad_State_Trans.mapStateT(local(__dict_MonadReader_229)(f));
            });
        };
    };
    var monadReaderWriterT = function (__dict_Monad_230) {
        return function (__dict_Monoid_231) {
            return function (__dict_MonadReader_232) {
                return new MonadReader(Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_231))(__dict_Monad_230)(ask(__dict_MonadReader_232)), function (f) {
                    return Control_Monad_Writer_Trans.mapWriterT(local(__dict_MonadReader_232)(f));
                });
            };
        };
    };
    var reader = function (__dict_Monad_233) {
        return function (__dict_MonadReader_234) {
            return function (f) {
                return Prelude[">>="](__dict_Monad_233["__superclass_Prelude.Bind_1"]({}))(ask(__dict_MonadReader_234))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](__dict_Monad_233))(f));
            };
        };
    };
    return {
        MonadReader: MonadReader, 
        reader: reader, 
        local: local, 
        ask: ask, 
        monadReaderFun: monadReaderFun, 
        monadReaderReaderT: monadReaderReaderT, 
        monadReaderErrorT: monadReaderErrorT, 
        monadReaderMaybeT: monadReaderMaybeT, 
        monadReaderWriterT: monadReaderWriterT, 
        monadReaderStateT: monadReaderStateT, 
        monadReaderRWST: monadReaderRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_State_Class = (function () {
    "use strict";
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    function MonadState(state) {
        this.state = state;
    };
    var state = function (dict) {
        return dict.state;
    };
    var put = function (__dict_Monad_235) {
        return function (__dict_MonadState_236) {
            return function (s) {
                return state(__dict_MonadState_236)(function (_) {
                    return new Data_Tuple.Tuple(Prelude.unit, s);
                });
            };
        };
    };
    var monadStateWriterT = function (__dict_Monad_237) {
        return function (__dict_Monoid_238) {
            return function (__dict_MonadState_239) {
                return new MonadState(function (f) {
                    return Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_238))(__dict_Monad_237)(state(__dict_MonadState_239)(f));
                });
            };
        };
    };
    var monadStateStateT1 = function (__dict_Monad_240) {
        return function (__dict_MonadState_241) {
            return new MonadState(function (f) {
                return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_240)(state(__dict_MonadState_241)(f));
            });
        };
    };
    var monadStateStateT = function (__dict_Monad_242) {
        return new MonadState(function (f) {
            return Control_Monad_State_Trans.StateT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](__dict_Monad_242))(f));
        });
    };
    var monadStateReaderT = function (__dict_Monad_243) {
        return function (__dict_MonadState_244) {
            return new MonadState(function (f) {
                return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_243)(state(__dict_MonadState_244)(f));
            });
        };
    };
    var monadStateRWST = function (__dict_Monad_245) {
        return function (__dict_Monoid_246) {
            return new MonadState(Control_Monad_RWS.state(__dict_Monad_245["__superclass_Prelude.Applicative_0"]({}))(__dict_Monoid_246));
        };
    };
    var monadStateMaybeT = function (__dict_Monad_247) {
        return function (__dict_MonadState_248) {
            return new MonadState(function (f) {
                return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_247)(state(__dict_MonadState_248)(f));
            });
        };
    };
    var monadStateErrorT = function (__dict_Monad_249) {
        return function (__dict_Error_250) {
            return function (__dict_MonadState_251) {
                return new MonadState(function (f) {
                    return Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_250))(__dict_Monad_249)(state(__dict_MonadState_251)(f));
                });
            };
        };
    };
    var modify = function (__dict_Monad_252) {
        return function (__dict_MonadState_253) {
            return function (f) {
                return state(__dict_MonadState_253)(function (s) {
                    return new Data_Tuple.Tuple(Prelude.unit, f(s));
                });
            };
        };
    };
    var gets = function (__dict_Monad_254) {
        return function (__dict_MonadState_255) {
            return function (f) {
                return state(__dict_MonadState_255)(function (s) {
                    return new Data_Tuple.Tuple(f(s), s);
                });
            };
        };
    };
    var get = function (__dict_Monad_256) {
        return function (__dict_MonadState_257) {
            return state(__dict_MonadState_257)(function (s) {
                return new Data_Tuple.Tuple(s, s);
            });
        };
    };
    return {
        MonadState: MonadState, 
        modify: modify, 
        put: put, 
        gets: gets, 
        get: get, 
        state: state, 
        monadStateStateT: monadStateStateT, 
        monadStateStateT1: monadStateStateT1, 
        monadStateErrorT: monadStateErrorT, 
        monadStateMaybeT: monadStateMaybeT, 
        monadStateReaderT: monadStateReaderT, 
        monadStateWriterT: monadStateWriterT, 
        monadStateRWST: monadStateRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    function MonadWriter(listen, pass, writer) {
        this.listen = listen;
        this.pass = pass;
        this.writer = writer;
    };
    var writer = function (dict) {
        return dict.writer;
    };
    var tell = function (__dict_Monoid_258) {
        return function (__dict_Monad_259) {
            return function (__dict_MonadWriter_260) {
                return function (w) {
                    return writer(__dict_MonadWriter_260)(new Data_Tuple.Tuple(Prelude.unit, w));
                };
            };
        };
    };
    var pass = function (dict) {
        return dict.pass;
    };
    var monadWriterWriterT = function (__dict_Monoid_261) {
        return function (__dict_Monad_262) {
            return new MonadWriter(function (m) {
                return Control_Monad_Writer_Trans.WriterT.create(Prelude[">>="](__dict_Monad_262["__superclass_Prelude.Bind_1"]({}))(Control_Monad_Writer_Trans.runWriterT(m))(function (_28) {
                    return Prelude["return"](__dict_Monad_262)(new Data_Tuple.Tuple(new Data_Tuple.Tuple(_28.value0, _28.value1), _28.value1));
                }));
            }, function (m) {
                return Control_Monad_Writer_Trans.WriterT.create(Prelude[">>="](__dict_Monad_262["__superclass_Prelude.Bind_1"]({}))(Control_Monad_Writer_Trans.runWriterT(m))(function (_29) {
                    return Prelude["return"](__dict_Monad_262)(new Data_Tuple.Tuple(_29.value0.value0, _29.value0.value1(_29.value1)));
                }));
            }, Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Writer_Trans.WriterT.create)(Prelude["return"](__dict_Monad_262)));
        };
    };
    var monadWriterRWST = function (__dict_Monad_263) {
        return function (__dict_Monoid_264) {
            return new MonadWriter(Control_Monad_RWS.listen(__dict_Monad_263), Control_Monad_RWS.pass(__dict_Monad_263), Control_Monad_RWS.writer(__dict_Monad_263["__superclass_Prelude.Applicative_0"]({})));
        };
    };
    var listen = function (dict) {
        return dict.listen;
    };
    var listens = function (__dict_Monoid_265) {
        return function (__dict_Monad_266) {
            return function (__dict_MonadWriter_267) {
                return function (f) {
                    return function (m) {
                        return Prelude[">>="](__dict_Monad_266["__superclass_Prelude.Bind_1"]({}))(listen(__dict_MonadWriter_267)(m))(function (_26) {
                            return Prelude["return"](__dict_Monad_266)(new Data_Tuple.Tuple(_26.value0, f(_26.value1)));
                        });
                    };
                };
            };
        };
    };
    var monadWriterErrorT = function (__dict_Monad_268) {
        return function (__dict_Error_269) {
            return function (__dict_MonadWriter_270) {
                return new MonadWriter(Control_Monad_Error_Trans.liftListenError(__dict_Monad_268)(listen(__dict_MonadWriter_270)), Control_Monad_Error_Trans.liftPassError(__dict_Monad_268)(pass(__dict_MonadWriter_270)), function (wd) {
                    return Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_269))(__dict_Monad_268)(writer(__dict_MonadWriter_270)(wd));
                });
            };
        };
    };
    var monadWriterMaybeT = function (__dict_Monad_271) {
        return function (__dict_MonadWriter_272) {
            return new MonadWriter(Control_Monad_Maybe_Trans.liftListenMaybe(__dict_Monad_271)(listen(__dict_MonadWriter_272)), Control_Monad_Maybe_Trans.liftPassMaybe(__dict_Monad_271)(pass(__dict_MonadWriter_272)), function (wd) {
                return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_271)(writer(__dict_MonadWriter_272)(wd));
            });
        };
    };
    var monadWriterReaderT = function (__dict_Monad_273) {
        return function (__dict_MonadWriter_274) {
            return new MonadWriter(Control_Monad_Reader_Trans.mapReaderT(listen(__dict_MonadWriter_274)), Control_Monad_Reader_Trans.mapReaderT(pass(__dict_MonadWriter_274)), function (wd) {
                return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_273)(writer(__dict_MonadWriter_274)(wd));
            });
        };
    };
    var monadWriterStateT = function (__dict_Monad_275) {
        return function (__dict_MonadWriter_276) {
            return new MonadWriter(Control_Monad_State_Trans.liftListenState(__dict_Monad_275)(listen(__dict_MonadWriter_276)), Control_Monad_State_Trans.liftPassState(__dict_Monad_275)(pass(__dict_MonadWriter_276)), function (wd) {
                return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_275)(writer(__dict_MonadWriter_276)(wd));
            });
        };
    };
    var censor = function (__dict_Monoid_277) {
        return function (__dict_Monad_278) {
            return function (__dict_MonadWriter_279) {
                return function (f) {
                    return function (m) {
                        return pass(__dict_MonadWriter_279)(Prelude[">>="](__dict_Monad_278["__superclass_Prelude.Bind_1"]({}))(m)(function (_27) {
                            return Prelude["return"](__dict_Monad_278)(new Data_Tuple.Tuple(_27, f));
                        }));
                    };
                };
            };
        };
    };
    return {
        MonadWriter: MonadWriter, 
        censor: censor, 
        listens: listens, 
        tell: tell, 
        pass: pass, 
        listen: listen, 
        writer: writer, 
        monadWriterWriterT: monadWriterWriterT, 
        monadWriterErrorT: monadWriterErrorT, 
        monadWriterMaybeT: monadWriterMaybeT, 
        monadWriterStateT: monadWriterStateT, 
        monadWriterReaderT: monadWriterReaderT, 
        monadWriterRWST: monadWriterRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    var Control_Monad_Reader_Class = PS.Control_Monad_Reader_Class;
    var Control_Monad_Writer_Class = PS.Control_Monad_Writer_Class;
    var Control_Monad_State_Class = PS.Control_Monad_State_Class;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    function MonadRWS(__superclass_Control$dotMonad$dotReader$dotClass$dotMonadReader_2, __superclass_Control$dotMonad$dotState$dotClass$dotMonadState_4, __superclass_Control$dotMonad$dotWriter$dotClass$dotMonadWriter_3, __superclass_Data$dotMonoid$dotMonoid_1, __superclass_Prelude$dotMonad_0) {
        this["__superclass_Control.Monad.Reader.Class.MonadReader_2"] = __superclass_Control$dotMonad$dotReader$dotClass$dotMonadReader_2;
        this["__superclass_Control.Monad.State.Class.MonadState_4"] = __superclass_Control$dotMonad$dotState$dotClass$dotMonadState_4;
        this["__superclass_Control.Monad.Writer.Class.MonadWriter_3"] = __superclass_Control$dotMonad$dotWriter$dotClass$dotMonadWriter_3;
        this["__superclass_Data.Monoid.Monoid_1"] = __superclass_Data$dotMonoid$dotMonoid_1;
        this["__superclass_Prelude.Monad_0"] = __superclass_Prelude$dotMonad_0;
    };
    var monadRWSRWST = function (__dict_Monad_280) {
        return function (__dict_Monoid_281) {
            return new MonadRWS(function (_) {
                return Control_Monad_Reader_Class.monadReaderRWST(__dict_Monad_280)(__dict_Monoid_281);
            }, function (_) {
                return Control_Monad_State_Class.monadStateRWST(__dict_Monad_280)(__dict_Monoid_281);
            }, function (_) {
                return Control_Monad_Writer_Class.monadWriterRWST(__dict_Monad_280)(__dict_Monoid_281);
            }, function (_) {
                return __dict_Monoid_281;
            }, function (_) {
                return Control_Monad_RWS_Trans.monadRWST(__dict_Monad_280)(__dict_Monoid_281);
            });
        };
    };
    var monadRWSMaybeT = function (__dict_Monad_282) {
        return function (__dict_Monoid_283) {
            return function (__dict_MonadRWS_284) {
                return function (__dict_MonadReader_285) {
                    return function (__dict_MonadWriter_286) {
                        return function (__dict_MonadState_287) {
                            return new MonadRWS(function (_) {
                                return Control_Monad_Reader_Class.monadReaderMaybeT(__dict_Monad_282)(__dict_MonadReader_285);
                            }, function (_) {
                                return Control_Monad_State_Class.monadStateMaybeT(__dict_Monad_282)(__dict_MonadState_287);
                            }, function (_) {
                                return Control_Monad_Writer_Class.monadWriterMaybeT(__dict_Monad_282)(__dict_MonadWriter_286);
                            }, function (_) {
                                return __dict_Monoid_283;
                            }, function (_) {
                                return Control_Monad_Maybe_Trans.monadMaybeT(__dict_Monad_282);
                            });
                        };
                    };
                };
            };
        };
    };
    var monadRWSErrorT = function (__dict_Monad_288) {
        return function (__dict_Monoid_289) {
            return function (__dict_MonadRWS_290) {
                return function (__dict_MonadReader_291) {
                    return function (__dict_MonadWriter_292) {
                        return function (__dict_MonadState_293) {
                            return function (__dict_Error_294) {
                                return new MonadRWS(function (_) {
                                    return Control_Monad_Reader_Class.monadReaderErrorT(__dict_Monad_288)(__dict_Error_294)(__dict_MonadReader_291);
                                }, function (_) {
                                    return Control_Monad_State_Class.monadStateErrorT(__dict_Monad_288)(__dict_Error_294)(__dict_MonadState_293);
                                }, function (_) {
                                    return Control_Monad_Writer_Class.monadWriterErrorT(__dict_Monad_288)(__dict_Error_294)(__dict_MonadWriter_292);
                                }, function (_) {
                                    return __dict_Monoid_289;
                                }, function (_) {
                                    return Control_Monad_Error_Trans.monadErrorT(__dict_Monad_288)(__dict_Error_294);
                                });
                            };
                        };
                    };
                };
            };
        };
    };
    return {
        MonadRWS: MonadRWS, 
        monadRWSRWST: monadRWSRWST, 
        monadRWSErrorT: monadRWSErrorT, 
        monadRWSMaybeT: monadRWSMaybeT
    };
})();
var PS = PS || {};
PS.Text_Parsing_Parser = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Either = PS.Data_Either;
    var Control_Monad_State_Class = PS.Control_Monad_State_Class;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Error = PS.Control_Monad_Error;
    function ParseError(value0) {
        this.value0 = value0;
    };
    ParseError.create = function (value0) {
        return new ParseError(value0);
    };
    function ParserT(value0) {
        this.value0 = value0;
    };
    ParserT.create = function (value0) {
        return new ParserT(value0);
    };
    var unParserT = function (_457) {
        return _457.value0;
    };
    var runParserT = function (__dict_Monad_295) {
        return function (s) {
            return function (p) {
                return Prelude[">>="](__dict_Monad_295["__superclass_Prelude.Bind_1"]({}))(unParserT(p)(s))(function (_30) {
                    return Prelude["return"](__dict_Monad_295)(_30.result);
                });
            };
        };
    };
    var runParser = function (s) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(runParserT(Control_Monad_Identity.monadIdentity({}))(s));
    };
    var monadTransParserT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_296) {
            return function (m) {
                return ParserT.create(function (s) {
                    return Prelude["<$>"](((__dict_Monad_296["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(function (a) {
                        return {
                            input: s, 
                            consumed: false, 
                            result: new Data_Either.Right(a)
                        };
                    })(m);
                });
            };
        });
    };
    var monadStateParserT = function (__dict_Monad_297) {
        return new Control_Monad_State_Class.MonadState(function (f) {
            return ParserT.create(function (s) {
                return Prelude["return"](__dict_Monad_297)((function (_1444) {
                    return {
                        input: _1444.value1, 
                        consumed: false, 
                        result: new Data_Either.Right(_1444.value0)
                    };
                })(f(s)));
            });
        });
    };
    var functorParserT = function (__dict_Functor_299) {
        return new Prelude.Functor(function (f) {
            return function (p) {
                var f$prime = function (o) {
                    return {
                        input: o.input, 
                        result: Prelude["<$>"](Data_Either.functorEither({}))(f)(o.result), 
                        consumed: o.consumed
                    };
                };
                return ParserT.create(function (s) {
                    return Prelude["<$>"](__dict_Functor_299)(f$prime)(unParserT(p)(s));
                });
            };
        });
    };
    var fail = function (__dict_Monad_300) {
        return function (message) {
            return ParserT.create(function (s) {
                return Prelude["return"](__dict_Monad_300)({
                    input: s, 
                    consumed: false, 
                    result: new Data_Either.Left(new ParseError({
                        message: message
                    }))
                });
            });
        };
    };
    var errorParseError = function (_) {
        return new Control_Monad_Error.Error(new ParseError({
            message: ""
        }), function (msg) {
            return new ParseError({
                message: msg
            });
        });
    };
    var consume = function (__dict_Monad_301) {
        return ParserT.create(function (s) {
            return Prelude["return"](__dict_Monad_301)({
                consumed: true, 
                input: s, 
                result: new Data_Either.Right({})
            });
        });
    };
    var applicativeParserT = function (__dict_Monad_304) {
        return new Prelude.Applicative(function (_) {
            return applyParserT(__dict_Monad_304);
        }, function (a) {
            return ParserT.create(function (s) {
                return Prelude.pure(__dict_Monad_304["__superclass_Prelude.Applicative_0"]({}))({
                    input: s, 
                    result: new Data_Either.Right(a), 
                    consumed: false
                });
            });
        });
    };
    var applyParserT = function (__dict_Monad_303) {
        return new Prelude.Apply(Prelude.ap(monadParserT(__dict_Monad_303)), function (_) {
            return functorParserT(((__dict_Monad_303["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}));
        });
    };
    var monadParserT = function (__dict_Monad_298) {
        return new Prelude.Monad(function (_) {
            return applicativeParserT(__dict_Monad_298);
        }, function (_) {
            return bindParserT(__dict_Monad_298);
        });
    };
    var bindParserT = function (__dict_Monad_302) {
        return new Prelude.Bind(function (p) {
            return function (f) {
                var updateConsumedFlag = function (c) {
                    return function (o) {
                        return {
                            input: o.input, 
                            consumed: c || o.consumed, 
                            result: o.result
                        };
                    };
                };
                return ParserT.create(function (s) {
                    return Prelude[">>="](__dict_Monad_302["__superclass_Prelude.Bind_1"]({}))(unParserT(p)(s))(function (o) {
                        if (o.result instanceof Data_Either.Left) {
                            return Prelude["return"](__dict_Monad_302)({
                                input: o.input, 
                                result: new Data_Either.Left(o.result.value0), 
                                consumed: o.consumed
                            });
                        };
                        if (o.result instanceof Data_Either.Right) {
                            return Prelude["<$>"](((__dict_Monad_302["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(updateConsumedFlag(o.consumed))(unParserT(f(o.result.value0))(o.input));
                        };
                        throw new Error("Failed pattern match");
                    });
                });
            };
        }, function (_) {
            return applyParserT(__dict_Monad_302);
        });
    };
    var alternativeParserT = function (__dict_Monad_305) {
        return new Prelude.Alternative(function (p1) {
            return function (p2) {
                return ParserT.create(function (s) {
                    return Prelude[">>="](__dict_Monad_305["__superclass_Prelude.Bind_1"]({}))(unParserT(p1)(s))(function (o) {
                        if (o.result instanceof Data_Either.Left && !o.consumed) {
                            return unParserT(p2)(s);
                        };
                        return Prelude["return"](__dict_Monad_305)(o);
                    });
                });
            };
        }, fail(__dict_Monad_305)("No alternative"));
    };
    return {
        ParserT: ParserT, 
        ParseError: ParseError, 
        fail: fail, 
        consume: consume, 
        runParser: runParser, 
        runParserT: runParserT, 
        unParserT: unParserT, 
        errorParseError: errorParseError, 
        functorParserT: functorParserT, 
        applyParserT: applyParserT, 
        applicativeParserT: applicativeParserT, 
        alternativeParserT: alternativeParserT, 
        bindParserT: bindParserT, 
        monadParserT: monadParserT, 
        monadTransParserT: monadTransParserT, 
        monadStateParserT: monadStateParserT
    };
})();
var PS = PS || {};
PS.Text_Parsing_Parser_Combinators = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Data_Either = PS.Data_Either;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var $less$qmark$greater = function (__dict_Monad_306) {
        return function (p) {
            return function (msg) {
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_306))(p)(Text_Parsing_Parser.fail(__dict_Monad_306)("Expected " + msg));
            };
        };
    };
    var $$try = function (__dict_Functor_307) {
        return function (p) {
            var try$prime = function (_459) {
                return function (_460) {
                    if (_460.result instanceof Data_Either.Left) {
                        return {
                            input: _459, 
                            result: _460.result, 
                            consumed: false
                        };
                    };
                    return _460;
                };
            };
            return Text_Parsing_Parser.ParserT.create(function (s) {
                return Prelude["<$>"](__dict_Functor_307)(try$prime(s))(Text_Parsing_Parser.unParserT(p)(s));
            });
        };
    };
    var sepEndBy = function (__dict_Monad_308) {
        return function (p) {
            return function (sep) {
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_308))(sepEndBy1(__dict_Monad_308)(p)(sep))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_308))([  ]));
            };
        };
    };
    var sepEndBy1 = function (__dict_Monad_309) {
        return function (p) {
            return function (sep) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_309))(p)(function (_37) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_309))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_309))(sep)(function (_) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_309))(sepEndBy(__dict_Monad_309)(p)(sep))(function (_36) {
                            return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_309))(Prelude[":"](_37)(_36));
                        });
                    }))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_309))([ _37 ]));
                });
            };
        };
    };
    var optional = function (__dict_Monad_310) {
        return function (p) {
            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_310))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_310))(p)(function (_) {
                return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_310))({});
            }))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_310))({}));
        };
    };
    var option = function (__dict_Monad_311) {
        return function (a) {
            return function (p) {
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_311))(p)(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_311))(a));
            };
        };
    };
    var optionMaybe = function (__dict_Functor_312) {
        return function (__dict_Monad_313) {
            return function (p) {
                return option(__dict_Monad_313)(Data_Maybe.Nothing.value)(Prelude["<$>"](Text_Parsing_Parser.functorParserT(__dict_Functor_312))(Data_Maybe.Just.create)(p));
            };
        };
    };
    var many = function (__dict_Monad_314) {
        return function (p) {
            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_314))(many1(__dict_Monad_314)(p))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_314))([  ]));
        };
    };
    var many1 = function (__dict_Monad_315) {
        return function (p) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_315))(p)(function (_32) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_315))(many(__dict_Monad_315)(p))(function (_31) {
                    return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_315))(Prelude[":"](_32)(_31));
                });
            });
        };
    };
    var sepBy1 = function (__dict_Monad_316) {
        return function (p) {
            return function (sep) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_316))(p)(function (_35) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_316))(many(__dict_Monad_316)(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_316))(sep)(function (_) {
                        return p;
                    })))(function (_34) {
                        return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_316))(Prelude[":"](_35)(_34));
                    });
                });
            };
        };
    };
    var sepBy = function (__dict_Monad_317) {
        return function (p) {
            return function (sep) {
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_317))(sepBy1(__dict_Monad_317)(p)(sep))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_317))([  ]));
            };
        };
    };
    var fix2 = function (f) {
        return new Data_Tuple.Tuple(Text_Parsing_Parser.ParserT.create(function (s) {
            return Text_Parsing_Parser.unParserT(Data_Tuple.fst(f(fix2(f))))(s);
        }), Text_Parsing_Parser.ParserT.create(function (s) {
            return Text_Parsing_Parser.unParserT(Data_Tuple.snd(f(fix2(f))))(s);
        }));
    };
    var fix = function (f) {
        return Text_Parsing_Parser.ParserT.create(function (s) {
            return Text_Parsing_Parser.unParserT(f(fix(f)))(s);
        });
    };
    var endBy1 = function (__dict_Monad_318) {
        return function (p) {
            return function (sep) {
                return many1(__dict_Monad_318)(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_318))(p)(function (_38) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_318))(sep)(function (_) {
                        return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_318))(_38);
                    });
                }));
            };
        };
    };
    var endBy = function (__dict_Monad_319) {
        return function (p) {
            return function (sep) {
                return many(__dict_Monad_319)(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_319))(p)(function (_39) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_319))(sep)(function (_) {
                        return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_319))(_39);
                    });
                }));
            };
        };
    };
    var choice = function (__dict_Monad_320) {
        return function (_458) {
            if (_458.length === 0) {
                return Text_Parsing_Parser.fail(__dict_Monad_320)("Nothing to parse");
            };
            if (_458.length === 1) {
                return _458[0];
            };
            if (_458.length > 0) {
                var _1467 = _458.slice(1);
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_320))(_458[0])(choice(__dict_Monad_320)(_1467));
            };
            throw new Error("Failed pattern match");
        };
    };
    var chainr1 = function (__dict_Monad_321) {
        return function (p) {
            return function (f) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_321))(p)(function (_43) {
                    return chainr1$prime(__dict_Monad_321)(p)(f)(_43);
                });
            };
        };
    };
    var chainr1$prime = function (__dict_Monad_322) {
        return function (p) {
            return function (f) {
                return function (a) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_322))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_322))(f)(function (_45) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_322))(chainr1(__dict_Monad_322)(p)(f))(function (_44) {
                            return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_322))(_45(a)(_44));
                        });
                    }))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_322))(a));
                };
            };
        };
    };
    var chainr = function (__dict_Monad_323) {
        return function (p) {
            return function (f) {
                return function (a) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_323))(chainr1(__dict_Monad_323)(p)(f))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_323))(a));
                };
            };
        };
    };
    var chainl1$prime = function (__dict_Monad_324) {
        return function (p) {
            return function (f) {
                return function (a) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_324))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_324))(f)(function (_42) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_324))(p)(function (_41) {
                            return chainl1$prime(__dict_Monad_324)(p)(f)(_42(a)(_41));
                        });
                    }))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_324))(a));
                };
            };
        };
    };
    var chainl1 = function (__dict_Monad_325) {
        return function (p) {
            return function (f) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_325))(p)(function (_40) {
                    return chainl1$prime(__dict_Monad_325)(p)(f)(_40);
                });
            };
        };
    };
    var chainl = function (__dict_Monad_326) {
        return function (p) {
            return function (f) {
                return function (a) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_326))(chainl1(__dict_Monad_326)(p)(f))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_326))(a));
                };
            };
        };
    };
    var between = function (__dict_Monad_327) {
        return function (open) {
            return function (close) {
                return function (p) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_327))(open)(function (_) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_327))(p)(function (_33) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_327))(close)(function (__1) {
                                return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_327))(_33);
                            });
                        });
                    });
                };
            };
        };
    };
    return {
        choice: choice, 
        "chainr1'": chainr1$prime, 
        chainr1: chainr1, 
        "chainl1'": chainl1$prime, 
        chainl1: chainl1, 
        chainl: chainl, 
        chainr: chainr, 
        endBy: endBy, 
        endBy1: endBy1, 
        sepEndBy1: sepEndBy1, 
        sepEndBy: sepEndBy, 
        sepBy1: sepBy1, 
        sepBy: sepBy, 
        "try": $$try, 
        optionMaybe: optionMaybe, 
        optional: optional, 
        option: option, 
        between: between, 
        "<?>": $less$qmark$greater, 
        many1: many1, 
        many: many, 
        fix2: fix2, 
        fix: fix
    };
})();
var PS = PS || {};
PS.Control_Lens_Internal_Prism = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Profunctor = PS.Data_Profunctor;
    var Data_Either = PS.Data_Either;
    var Data_Profunctor_Choice = PS.Data_Profunctor_Choice;
    function Market(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Market.create = function (value0) {
        return function (value1) {
            return new Market(value0, value1);
        };
    };
    var profunctorMarket = function (_) {
        return new Data_Profunctor.Profunctor(function (_463) {
            return function (_464) {
                return function (_465) {
                    return new Market(Prelude[">>>"](Prelude.semigroupoidArr({}))(_465.value0)(_464), Prelude[">>>"](Prelude.semigroupoidArr({}))(_463)(Prelude[">>>"](Prelude.semigroupoidArr({}))(_465.value1)(Data_Either.either(Prelude[">>>"](Prelude.semigroupoidArr({}))(_464)(Data_Either.Left.create))(Data_Either.Right.create))));
                };
            };
        });
    };
    var functorMarket = function (_) {
        return new Prelude.Functor(function (_461) {
            return function (_462) {
                return new Market(Prelude[">>>"](Prelude.semigroupoidArr({}))(_462.value0)(_461), Prelude[">>>"](Prelude.semigroupoidArr({}))(_462.value1)(Data_Either.either(Prelude[">>>"](Prelude.semigroupoidArr({}))(_461)(Data_Either.Left.create))(Data_Either.Right.create)));
            };
        });
    };
    var choiceMarket = function (_) {
        return new Data_Profunctor_Choice.Choice(function (__1) {
            return profunctorMarket({});
        }, function (_466) {
            return new Market(Prelude[">>>"](Prelude.semigroupoidArr({}))(_466.value0)(Data_Either.Left.create), function (thing) {
                if (thing instanceof Data_Either.Left) {
                    return Data_Either.either(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Either.Left.create)(Data_Either.Left.create))(Data_Either.Right.create)(_466.value1(thing.value0));
                };
                if (thing instanceof Data_Either.Right) {
                    return Data_Either.Left.create(new Data_Either.Right(thing.value0));
                };
                throw new Error("Failed pattern match");
            });
        }, function (_467) {
            return new Market(Prelude[">>>"](Prelude.semigroupoidArr({}))(_467.value0)(Data_Either.Right.create), function (thing) {
                if (thing instanceof Data_Either.Left) {
                    return Data_Either.Left.create(new Data_Either.Left(thing.value0));
                };
                if (thing instanceof Data_Either.Right) {
                    return Data_Either.either(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Either.Right.create)(Data_Either.Left.create))(Data_Either.Right.create)(_467.value1(thing.value0));
                };
                throw new Error("Failed pattern match");
            });
        });
    };
    return {
        Market: Market, 
        functorMarket: functorMarket, 
        profunctorMarket: profunctorMarket, 
        choiceMarket: choiceMarket
    };
})();
var PS = PS || {};
PS.Control_Lens_Internal_Iso = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Profunctor = PS.Data_Profunctor;
    function Exchange(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Exchange.create = function (value0) {
        return function (value1) {
            return new Exchange(value0, value1);
        };
    };
    var profunctorExchange = function (_) {
        return new Data_Profunctor.Profunctor(function (_470) {
            return function (_471) {
                return function (_472) {
                    return new Exchange(Prelude[">>>"](Prelude.semigroupoidArr({}))(_470)(_472.value0), Prelude[">>>"](Prelude.semigroupoidArr({}))(_472.value1)(_471));
                };
            };
        });
    };
    var functorExchange = function (_) {
        return new Prelude.Functor(function (_468) {
            return function (_469) {
                return new Exchange(_469.value0, Prelude[">>>"](Prelude.semigroupoidArr({}))(_469.value1)(_468));
            };
        });
    };
    return {
        Exchange: Exchange, 
        functorExchange: functorExchange, 
        profunctorExchange: profunctorExchange
    };
})();
var PS = PS || {};
PS.Control_Lens_Internal_Action = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Effective(__superclass_Data$dotContravariant$dotContravariant_0, __superclass_Prelude$dotFunctor_1, __superclass_Prelude$dotMonad_2, effective, ineffective) {
        this["__superclass_Data.Contravariant.Contravariant_0"] = __superclass_Data$dotContravariant$dotContravariant_0;
        this["__superclass_Prelude.Functor_1"] = __superclass_Prelude$dotFunctor_1;
        this["__superclass_Prelude.Monad_2"] = __superclass_Prelude$dotMonad_2;
        this.effective = effective;
        this.ineffective = ineffective;
    };
    var ineffective = function (dict) {
        return dict.ineffective;
    };
    var effective = function (dict) {
        return dict.effective;
    };
    return {
        Effective: Effective, 
        ineffective: ineffective, 
        effective: effective
    };
})();
var PS = PS || {};
PS.Control_Extend = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    function Extend($eq$greater$greater, __superclass_Prelude$dotFunctor_0) {
        this["=>>"] = $eq$greater$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    var $eq$greater$greater = function (dict) {
        return dict["=>>"];
    };
    var extendIdentity = function (_) {
        return new Extend(function (w) {
            return function (f) {
                return Control_Monad_Identity.Identity.create(f(w));
            };
        }, function (__1) {
            return Control_Monad_Identity.functorIdentity({});
        });
    };
    return {
        Extend: Extend, 
        "=>>": $eq$greater$greater, 
        extendIdentity: extendIdentity
    };
})();
var PS = PS || {};
PS.Control_Comonad = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Control_Extend = PS.Control_Extend;
    function Comonad(__superclass_Control$dotExtend$dotExtend_0, extract) {
        this["__superclass_Control.Extend.Extend_0"] = __superclass_Control$dotExtend$dotExtend_0;
        this.extract = extract;
    };
    var extract = function (dict) {
        return dict.extract;
    };
    var extendComonad = function (_) {
        return new Comonad(function (__1) {
            return Control_Extend.extendIdentity({});
        }, Control_Monad_Identity.runIdentity);
    };
    return {
        Comonad: Comonad, 
        extract: extract, 
        extendComonad: extendComonad
    };
})();
var PS = PS || {};
PS.Control_Bind = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $greater$eq$greater = function (__dict_Bind_328) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return Prelude[">>="](__dict_Bind_328)(f(a))(g);
                };
            };
        };
    };
    var $eq$less$less = function (__dict_Bind_329) {
        return function (f) {
            return function (m) {
                return Prelude[">>="](__dict_Bind_329)(m)(f);
            };
        };
    };
    var $less$eq$less = function (__dict_Bind_330) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return $eq$less$less(__dict_Bind_330)(f)(g(a));
                };
            };
        };
    };
    var join = function (__dict_Bind_331) {
        return function (m) {
            return Prelude[">>="](__dict_Bind_331)(m)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var ifM = function (__dict_Bind_332) {
        return function (cond) {
            return function (t) {
                return function (f) {
                    return Prelude[">>="](__dict_Bind_332)(cond)(function (cond$prime) {
                        return cond$prime ? t : f;
                    });
                };
            };
        };
    };
    return {
        ifM: ifM, 
        join: join, 
        "<=<": $less$eq$less, 
        ">=>": $greater$eq$greater, 
        "=<<": $eq$less$less
    };
})();
var PS = PS || {};
PS.Control_Arrow = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    function Arrow(__superclass_Prelude$dotCategory_0, arr, first) {
        this["__superclass_Prelude.Category_0"] = __superclass_Prelude$dotCategory_0;
        this.arr = arr;
        this.first = first;
    };
    function ArrowZero(azero) {
        this.azero = azero;
    };
    function ArrowPlus($less$plus$greater) {
        this["<+>"] = $less$plus$greater;
    };
    var $less$plus$greater = function (dict) {
        return dict["<+>"];
    };
    var first = function (dict) {
        return dict.first;
    };
    var azero = function (dict) {
        return dict.azero;
    };
    var arrowFunction = function (_) {
        return new Arrow(function (__1) {
            return Prelude.categoryArr({});
        }, function (f) {
            return f;
        }, function (_473) {
            return function (_474) {
                return new Data_Tuple.Tuple(_473(_474.value0), _474.value1);
            };
        });
    };
    var arr = function (dict) {
        return dict.arr;
    };
    var second = function (__dict_Arrow_333) {
        return function (f) {
            return Prelude[">>>"]((__dict_Arrow_333["__superclass_Prelude.Category_0"]({}))["__superclass_Prelude.Semigroupoid_0"]({}))(arr(__dict_Arrow_333)(Data_Tuple.swap))(Prelude[">>>"]((__dict_Arrow_333["__superclass_Prelude.Category_0"]({}))["__superclass_Prelude.Semigroupoid_0"]({}))(first(__dict_Arrow_333)(f))(arr(__dict_Arrow_333)(Data_Tuple.swap)));
        };
    };
    var $times$times$times = function (__dict_Arrow_334) {
        return function (f) {
            return function (g) {
                return Prelude[">>>"]((__dict_Arrow_334["__superclass_Prelude.Category_0"]({}))["__superclass_Prelude.Semigroupoid_0"]({}))(first(__dict_Arrow_334)(f))(second(__dict_Arrow_334)(g));
            };
        };
    };
    var $amp$amp$amp = function (__dict_Arrow_335) {
        return function (f) {
            return function (g) {
                return Prelude[">>>"]((__dict_Arrow_335["__superclass_Prelude.Category_0"]({}))["__superclass_Prelude.Semigroupoid_0"]({}))(arr(__dict_Arrow_335)(function (b) {
                    return new Data_Tuple.Tuple(b, b);
                }))($times$times$times(__dict_Arrow_335)(f)(g));
            };
        };
    };
    return {
        ArrowPlus: ArrowPlus, 
        ArrowZero: ArrowZero, 
        Arrow: Arrow, 
        "<+>": $less$plus$greater, 
        azero: azero, 
        "&&&": $amp$amp$amp, 
        "***": $times$times$times, 
        second: second, 
        first: first, 
        arr: arr, 
        arrowFunction: arrowFunction
    };
})();
var PS = PS || {};
PS.Control_Arrow_ArrowApply = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Arrow = PS.Control_Arrow;
    function ArrowApply(__superclass_Control$dotArrow$dotArrow_0, app) {
        this["__superclass_Control.Arrow.Arrow_0"] = __superclass_Control$dotArrow$dotArrow_0;
        this.app = app;
    };
    var arrowApplyArr = function (_) {
        return new ArrowApply(function (__1) {
            return Control_Arrow.arrowFunction({});
        }, function (_475) {
            return _475.value0(_475.value1);
        });
    };
    var app = function (dict) {
        return dict.app;
    };
    return {
        ArrowApply: ArrowApply, 
        app: app, 
        arrowApplyArr: arrowApplyArr
    };
})();
var PS = PS || {};
PS.Control_Arrow_ArrowChoice = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Control_Arrow = PS.Control_Arrow;
    function ArrowChoice(__superclass_Control$dotArrow$dotArrow_0, left) {
        this["__superclass_Control.Arrow.Arrow_0"] = __superclass_Control$dotArrow$dotArrow_0;
        this.left = left;
    };
    var left = function (dict) {
        return dict.left;
    };
    var arrowChoiceArr = function (_) {
        return new ArrowChoice(function (__1) {
            return Control_Arrow.arrowFunction({});
        }, function (_476) {
            return function (_477) {
                if (_477 instanceof Data_Either.Left) {
                    return Data_Either.Left.create(_476(_477.value0));
                };
                if (_477 instanceof Data_Either.Right) {
                    return new Data_Either.Right(_477.value0);
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    return {
        ArrowChoice: ArrowChoice, 
        left: left, 
        arrowChoiceArr: arrowChoiceArr
    };
})();
var PS = PS || {};
PS.Control_Arrow_ArrowLoop = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function ArrowLoop(__superclass_Control$dotArrow$dotArrow_0, loop) {
        this["__superclass_Control.Arrow.Arrow_0"] = __superclass_Control$dotArrow$dotArrow_0;
        this.loop = loop;
    };
    var loop = function (dict) {
        return dict.loop;
    };
    return {
        ArrowLoop: ArrowLoop, 
        loop: loop
    };
})();
var PS = PS || {};
PS.Control_Arrow_Kleisli = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Arrow = PS.Control_Arrow;
    var Data_Tuple = PS.Data_Tuple;
    function Kleisli(value0) {
        this.value0 = value0;
    };
    Kleisli.create = function (value0) {
        return new Kleisli(value0);
    };
    var semigroupoidKleisli = function (__dict_Monad_336) {
        return new Prelude.Semigroupoid(function (_480) {
            return function (_481) {
                return new Kleisli(function (b) {
                    return Prelude[">>="](__dict_Monad_336["__superclass_Prelude.Bind_1"]({}))(_481.value0(b))(_480.value0);
                });
            };
        });
    };
    var runKleisli = function (_479) {
        return _479.value0;
    };
    var categoryKleisli = function (__dict_Monad_337) {
        return new Prelude.Category(function (_) {
            return semigroupoidKleisli(__dict_Monad_337);
        }, new Kleisli(Prelude["return"](__dict_Monad_337)));
    };
    var arrowKleisli = function (__dict_Monad_338) {
        return new Control_Arrow.Arrow(function (_) {
            return categoryKleisli(__dict_Monad_338);
        }, function (f) {
            return new Kleisli(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](__dict_Monad_338))(f));
        }, function (_482) {
            return new Kleisli(function (_478) {
                return Prelude[">>="](__dict_Monad_338["__superclass_Prelude.Bind_1"]({}))(_482.value0(_478.value0))(function (c) {
                    return Prelude["return"](__dict_Monad_338)(new Data_Tuple.Tuple(c, _478.value1));
                });
            });
        });
    };
    return {
        Kleisli: Kleisli, 
        runKleisli: runKleisli, 
        semigroupoidKleisli: semigroupoidKleisli, 
        categoryKleisli: categoryKleisli, 
        arrowKleisli: arrowKleisli
    };
})();
var PS = PS || {};
PS.Control_Apply = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $less$times = function (__dict_Apply_339) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_339)(Prelude["<$>"](__dict_Apply_339["__superclass_Prelude.Functor_0"]({}))(Prelude["const"])(a))(b);
            };
        };
    };
    var $times$greater = function (__dict_Apply_340) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_340)(Prelude["<$>"](__dict_Apply_340["__superclass_Prelude.Functor_0"]({}))(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(a))(b);
            };
        };
    };
    var lift5 = function (__dict_Apply_341) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return Prelude["<*>"](__dict_Apply_341)(Prelude["<*>"](__dict_Apply_341)(Prelude["<*>"](__dict_Apply_341)(Prelude["<*>"](__dict_Apply_341)(Prelude["<$>"](__dict_Apply_341["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c))(d))(e);
                            };
                        };
                    };
                };
            };
        };
    };
    var lift4 = function (__dict_Apply_342) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return Prelude["<*>"](__dict_Apply_342)(Prelude["<*>"](__dict_Apply_342)(Prelude["<*>"](__dict_Apply_342)(Prelude["<$>"](__dict_Apply_342["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c))(d);
                        };
                    };
                };
            };
        };
    };
    var lift3 = function (__dict_Apply_343) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return Prelude["<*>"](__dict_Apply_343)(Prelude["<*>"](__dict_Apply_343)(Prelude["<$>"](__dict_Apply_343["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c);
                    };
                };
            };
        };
    };
    var lift2 = function (__dict_Apply_344) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return Prelude["<*>"](__dict_Apply_344)(Prelude["<$>"](__dict_Apply_344["__superclass_Prelude.Functor_0"]({}))(f)(a))(b);
                };
            };
        };
    };
    var forever = function (__dict_Apply_345) {
        return function (a) {
            return $times$greater(__dict_Apply_345)(a)(forever(__dict_Apply_345)(a));
        };
    };
    return {
        forever: forever, 
        lift5: lift5, 
        lift4: lift4, 
        lift3: lift3, 
        lift2: lift2, 
        "*>": $times$greater, 
        "<*": $less$times
    };
})();
var PS = PS || {};
PS.Data_Foldable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Apply = PS.Control_Apply;
    var Data_Monoid = PS.Data_Monoid;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Eq = PS.Data_Eq;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Either = PS.Data_Either;
    var Data_Monoid_First = PS.Data_Monoid_First;
    function Foldable(foldMap, foldl, foldr) {
        this.foldMap = foldMap;
        this.foldl = foldl;
        this.foldr = foldr;
    };
    function foldrArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = xs.length - 1; i >= 0; --i) {        acc = f(xs[i])(acc);      }      return acc;    }  }};
    function foldlArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = 0, len = xs.length; i < len; ++i) {        acc = f(acc)(xs[i]);      }      return acc;    }  }};
    var foldr = function (dict) {
        return dict.foldr;
    };
    var traverse_ = function (__dict_Applicative_346) {
        return function (__dict_Foldable_347) {
            return function (f) {
                return foldr(__dict_Foldable_347)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Apply["*>"](__dict_Applicative_346["__superclass_Prelude.Apply_0"]({})))(f))(Prelude.pure(__dict_Applicative_346)(Prelude.unit));
            };
        };
    };
    var for_ = function (__dict_Applicative_348) {
        return function (__dict_Foldable_349) {
            return Prelude.flip(traverse_(__dict_Applicative_348)(__dict_Foldable_349));
        };
    };
    var sequence_ = function (__dict_Applicative_350) {
        return function (__dict_Foldable_351) {
            return traverse_(__dict_Applicative_350)(__dict_Foldable_351)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var foldl = function (dict) {
        return dict.foldl;
    };
    var mconcat = function (__dict_Foldable_352) {
        return function (__dict_Monoid_353) {
            return foldl(__dict_Foldable_352)(Prelude["<>"](__dict_Monoid_353["__superclass_Prelude.Semigroup_0"]({})))(Data_Monoid.mempty(__dict_Monoid_353));
        };
    };
    var or = function (__dict_Foldable_354) {
        return foldl(__dict_Foldable_354)(Prelude["||"](Prelude.boolLikeBoolean({})))(false);
    };
    var product = function (__dict_Foldable_355) {
        return foldl(__dict_Foldable_355)(Prelude["*"](Prelude.numNumber({})))(1);
    };
    var sum = function (__dict_Foldable_356) {
        return foldl(__dict_Foldable_356)(Prelude["+"](Prelude.numNumber({})))(0);
    };
    var foldableTuple = function (_) {
        return new Foldable(function (__dict_Monoid_357) {
            return function (_514) {
                return function (_515) {
                    return _514(_515.value1);
                };
            };
        }, function (_511) {
            return function (_512) {
                return function (_513) {
                    return _511(_512)(_513.value1);
                };
            };
        }, function (_508) {
            return function (_509) {
                return function (_510) {
                    return _508(_510.value1)(_509);
                };
            };
        });
    };
    var foldableRef = function (_) {
        return new Foldable(function (__dict_Monoid_358) {
            return function (_506) {
                return function (_507) {
                    return _506(_507);
                };
            };
        }, function (_503) {
            return function (_504) {
                return function (_505) {
                    return _503(_504)(_505);
                };
            };
        }, function (_500) {
            return function (_501) {
                return function (_502) {
                    return _500(_502)(_501);
                };
            };
        });
    };
    var foldableMaybe = function (_) {
        return new Foldable(function (__dict_Monoid_359) {
            return function (_498) {
                return function (_499) {
                    if (_499 instanceof Data_Maybe.Nothing) {
                        return Data_Monoid.mempty(__dict_Monoid_359);
                    };
                    if (_499 instanceof Data_Maybe.Just) {
                        return _498(_499.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_495) {
            return function (_496) {
                return function (_497) {
                    if (_497 instanceof Data_Maybe.Nothing) {
                        return _496;
                    };
                    if (_497 instanceof Data_Maybe.Just) {
                        return _495(_496)(_497.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_492) {
            return function (_493) {
                return function (_494) {
                    if (_494 instanceof Data_Maybe.Nothing) {
                        return _493;
                    };
                    if (_494 instanceof Data_Maybe.Just) {
                        return _492(_494.value0)(_493);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var foldableEither = function (_) {
        return new Foldable(function (__dict_Monoid_360) {
            return function (_490) {
                return function (_491) {
                    if (_491 instanceof Data_Either.Left) {
                        return Data_Monoid.mempty(__dict_Monoid_360);
                    };
                    if (_491 instanceof Data_Either.Right) {
                        return _490(_491.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_487) {
            return function (_488) {
                return function (_489) {
                    if (_489 instanceof Data_Either.Left) {
                        return _488;
                    };
                    if (_489 instanceof Data_Either.Right) {
                        return _487(_488)(_489.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_484) {
            return function (_485) {
                return function (_486) {
                    if (_486 instanceof Data_Either.Left) {
                        return _485;
                    };
                    if (_486 instanceof Data_Either.Right) {
                        return _484(_486.value0)(_485);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var foldableArray = function (_) {
        return new Foldable(function (__dict_Monoid_361) {
            return function (f) {
                return function (xs) {
                    return foldr(foldableArray({}))(function (x) {
                        return function (acc) {
                            return Prelude["<>"](__dict_Monoid_361["__superclass_Prelude.Semigroup_0"]({}))(f(x))(acc);
                        };
                    })(Data_Monoid.mempty(__dict_Monoid_361))(xs);
                };
            };
        }, function (f) {
            return function (z) {
                return function (xs) {
                    return foldlArray(f)(z)(xs);
                };
            };
        }, function (f) {
            return function (z) {
                return function (xs) {
                    return foldrArray(f)(z)(xs);
                };
            };
        });
    };
    var foldMap = function (dict) {
        return dict.foldMap;
    };
    var lookup = function (__dict_Eq_362) {
        return function (__dict_Foldable_363) {
            return function (a) {
                return function (f) {
                    return Data_Monoid_First.runFirst(foldMap(__dict_Foldable_363)(Data_Monoid_First.monoidFirst({}))(function (_483) {
                        return new Data_Monoid_First.First(Prelude["=="](__dict_Eq_362)(a)(_483.value0) ? new Data_Maybe.Just(_483.value1) : Data_Maybe.Nothing.value);
                    })(f));
                };
            };
        };
    };
    var fold = function (__dict_Foldable_364) {
        return function (__dict_Monoid_365) {
            return foldMap(__dict_Foldable_364)(__dict_Monoid_365)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var find = function (__dict_Foldable_366) {
        return function (p) {
            return function (f) {
                return (function (_1577) {
                    if (_1577.length > 0) {
                        var _1579 = _1577.slice(1);
                        return new Data_Maybe.Just(_1577[0]);
                    };
                    if (_1577.length === 0) {
                        return Data_Maybe.Nothing.value;
                    };
                    throw new Error("Failed pattern match");
                })(foldMap(__dict_Foldable_366)(Data_Monoid.monoidArray({}))(function (x) {
                    return p(x) ? [ x ] : [  ];
                })(f));
            };
        };
    };
    var any = function (__dict_Foldable_367) {
        return function (p) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_367)(Data_Monoid.monoidArray({}))(function (x) {
                return [ p(x) ];
            }));
        };
    };
    var elem = function (__dict_Eq_368) {
        return function (__dict_Foldable_369) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(any(__dict_Foldable_369))(Prelude["=="](__dict_Eq_368));
        };
    };
    var notElem = function (__dict_Eq_370) {
        return function (__dict_Foldable_371) {
            return function (x) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.not(Prelude.boolLikeBoolean({})))(elem(__dict_Eq_370)(__dict_Foldable_371)(x));
            };
        };
    };
    var and = function (__dict_Foldable_372) {
        return foldl(__dict_Foldable_372)(Prelude["&&"](Prelude.boolLikeBoolean({})))(true);
    };
    var all = function (__dict_Foldable_373) {
        return function (p) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_373)(Data_Monoid.monoidArray({}))(function (x) {
                return [ p(x) ];
            }));
        };
    };
    return {
        Foldable: Foldable, 
        foldlArray: foldlArray, 
        foldrArray: foldrArray, 
        lookup: lookup, 
        find: find, 
        notElem: notElem, 
        elem: elem, 
        product: product, 
        sum: sum, 
        all: all, 
        any: any, 
        or: or, 
        and: and, 
        mconcat: mconcat, 
        sequence_: sequence_, 
        for_: for_, 
        traverse_: traverse_, 
        fold: fold, 
        foldMap: foldMap, 
        foldl: foldl, 
        foldr: foldr, 
        foldableArray: foldableArray, 
        foldableEither: foldableEither, 
        foldableMaybe: foldableMaybe, 
        foldableRef: foldableRef, 
        foldableTuple: foldableTuple
    };
})();
var PS = PS || {};
PS.Data_Map = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Foldable = PS.Data_Foldable;
    function Leaf() {

    };
    Leaf.value = new Leaf();
    function Two(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Two.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Two(value0, value1, value2, value3);
                };
            };
        };
    };
    function Three(value0, value1, value2, value3, value4, value5, value6) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
        this.value6 = value6;
    };
    Three.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return function (value6) {
                                return new Three(value0, value1, value2, value3, value4, value5, value6);
                            };
                        };
                    };
                };
            };
        };
    };
    function TwoLeft(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TwoLeft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TwoLeft(value0, value1, value2);
            };
        };
    };
    function TwoRight(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TwoRight.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TwoRight(value0, value1, value2);
            };
        };
    };
    function ThreeLeft(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeLeft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeLeft(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function ThreeMiddle(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeMiddle.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeMiddle(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function ThreeRight(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeRight.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeRight(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function KickUp(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    KickUp.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new KickUp(value0, value1, value2, value3);
                };
            };
        };
    };
    var values = function (_526) {
        if (_526 instanceof Leaf) {
            return [  ];
        };
        if (_526 instanceof Two) {
            return Prelude["++"](Data_Array.semigroupArray({}))(values(_526.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ _526.value2 ])(values(_526.value3)));
        };
        if (_526 instanceof Three) {
            return Prelude["++"](Data_Array.semigroupArray({}))(values(_526.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ _526.value2 ])(Prelude["++"](Data_Array.semigroupArray({}))(values(_526.value3))(Prelude["++"](Data_Array.semigroupArray({}))([ _526.value5 ])(values(_526.value6)))));
        };
        throw new Error("Failed pattern match");
    };
    var toList = function (_524) {
        if (_524 instanceof Leaf) {
            return [  ];
        };
        if (_524 instanceof Two) {
            return Prelude["++"](Data_Array.semigroupArray({}))(toList(_524.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_524.value1, _524.value2) ])(toList(_524.value3)));
        };
        if (_524 instanceof Three) {
            return Prelude["++"](Data_Array.semigroupArray({}))(toList(_524.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_524.value1, _524.value2) ])(Prelude["++"](Data_Array.semigroupArray({}))(toList(_524.value3))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_524.value4, _524.value5) ])(toList(_524.value6)))));
        };
        throw new Error("Failed pattern match");
    };
    var singleton = function (k) {
        return function (v) {
            return new Two(Leaf.value, k, v, Leaf.value);
        };
    };
    var showTree = function (__dict_Show_374) {
        return function (__dict_Show_375) {
            return function (_518) {
                if (_518 instanceof Leaf) {
                    return "Leaf";
                };
                if (_518 instanceof Two) {
                    return "Two (" + showTree(__dict_Show_374)(__dict_Show_375)(_518.value0) + ") (" + Prelude.show(__dict_Show_374)(_518.value1) + ") (" + Prelude.show(__dict_Show_375)(_518.value2) + ") (" + showTree(__dict_Show_374)(__dict_Show_375)(_518.value3) + ")";
                };
                if (_518 instanceof Three) {
                    return "Three (" + showTree(__dict_Show_374)(__dict_Show_375)(_518.value0) + ") (" + Prelude.show(__dict_Show_374)(_518.value1) + ") (" + Prelude.show(__dict_Show_375)(_518.value2) + ") (" + showTree(__dict_Show_374)(__dict_Show_375)(_518.value3) + ") (" + Prelude.show(__dict_Show_374)(_518.value4) + ") (" + Prelude.show(__dict_Show_375)(_518.value5) + ") (" + showTree(__dict_Show_374)(__dict_Show_375)(_518.value6) + ")";
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var showMap = function (__dict_Show_376) {
        return function (__dict_Show_377) {
            return new Prelude.Show(function (m) {
                return "fromList " + Prelude.show(Prelude.showArray(Data_Tuple.showTuple(__dict_Show_376)(__dict_Show_377)))(toList(m));
            });
        };
    };
    var lookup = function (__copy___dict_Ord_378) {
        return function (__copy__520) {
            return function (__copy__521) {
                var __dict_Ord_378 = __copy___dict_Ord_378;
                var _520 = __copy__520;
                var _521 = __copy__521;
                tco: while (true) {
                    if (_521 instanceof Leaf) {
                        return Data_Maybe.Nothing.value;
                    };
                    if (_521 instanceof Two && Prelude["=="](__dict_Ord_378["__superclass_Prelude.Eq_0"]({}))(_520)(_521.value1)) {
                        return new Data_Maybe.Just(_521.value2);
                    };
                    if (_521 instanceof Two && Prelude["<"](__dict_Ord_378)(_520)(_521.value1)) {
                        var __tco___dict_Ord_378 = __dict_Ord_378;
                        var __tco__520 = _520;
                        var __tco__521 = _521.value0;
                        __dict_Ord_378 = __tco___dict_Ord_378;
                        _520 = __tco__520;
                        _521 = __tco__521;
                        continue tco;
                    };
                    if (_521 instanceof Two) {
                        var __tco___dict_Ord_378 = __dict_Ord_378;
                        var __tco__520 = _520;
                        var __tco__521 = _521.value3;
                        __dict_Ord_378 = __tco___dict_Ord_378;
                        _520 = __tco__520;
                        _521 = __tco__521;
                        continue tco;
                    };
                    if (_521 instanceof Three && Prelude["=="](__dict_Ord_378["__superclass_Prelude.Eq_0"]({}))(_520)(_521.value1)) {
                        return new Data_Maybe.Just(_521.value2);
                    };
                    if (_521 instanceof Three && Prelude["=="](__dict_Ord_378["__superclass_Prelude.Eq_0"]({}))(_520)(_521.value4)) {
                        return new Data_Maybe.Just(_521.value5);
                    };
                    if (_521 instanceof Three && Prelude["<"](__dict_Ord_378)(_520)(_521.value1)) {
                        var __tco___dict_Ord_378 = __dict_Ord_378;
                        var __tco__520 = _520;
                        var __tco__521 = _521.value0;
                        __dict_Ord_378 = __tco___dict_Ord_378;
                        _520 = __tco__520;
                        _521 = __tco__521;
                        continue tco;
                    };
                    if (_521 instanceof Three && Prelude["<"](__dict_Ord_378)(_521.value1)(_520) && Prelude["<="](__dict_Ord_378)(_520)(_521.value4)) {
                        var __tco___dict_Ord_378 = __dict_Ord_378;
                        var __tco__520 = _520;
                        var __tco__521 = _521.value3;
                        __dict_Ord_378 = __tco___dict_Ord_378;
                        _520 = __tco__520;
                        _521 = __tco__521;
                        continue tco;
                    };
                    if (_521 instanceof Three) {
                        var __tco___dict_Ord_378 = __dict_Ord_378;
                        var __tco__520 = _520;
                        var __tco__521 = _521.value6;
                        __dict_Ord_378 = __tco___dict_Ord_378;
                        _520 = __tco__520;
                        _521 = __tco__521;
                        continue tco;
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    var member = function (__dict_Ord_379) {
        return function (k) {
            return function (m) {
                return Data_Maybe.isJust(lookup(__dict_Ord_379)(k)(m));
            };
        };
    };
    var keys = function (_525) {
        if (_525 instanceof Leaf) {
            return [  ];
        };
        if (_525 instanceof Two) {
            return Prelude["++"](Data_Array.semigroupArray({}))(keys(_525.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ _525.value1 ])(keys(_525.value3)));
        };
        if (_525 instanceof Three) {
            return Prelude["++"](Data_Array.semigroupArray({}))(keys(_525.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ _525.value1 ])(Prelude["++"](Data_Array.semigroupArray({}))(keys(_525.value3))(Prelude["++"](Data_Array.semigroupArray({}))([ _525.value4 ])(keys(_525.value6)))));
        };
        throw new Error("Failed pattern match");
    };
    var isEmpty = function (_519) {
        if (_519 instanceof Leaf) {
            return true;
        };
        return false;
    };
    var functorMap = function (_) {
        return new Prelude.Functor(function (_527) {
            return function (_528) {
                if (_528 instanceof Leaf) {
                    return Leaf.value;
                };
                if (_528 instanceof Two) {
                    return new Two(Prelude["<$>"](functorMap({}))(_527)(_528.value0), _528.value1, _527(_528.value2), Prelude["<$>"](functorMap({}))(_527)(_528.value3));
                };
                if (_528 instanceof Three) {
                    return new Three(Prelude["<$>"](functorMap({}))(_527)(_528.value0), _528.value1, _527(_528.value2), Prelude["<$>"](functorMap({}))(_527)(_528.value3), _528.value4, _527(_528.value5), Prelude["<$>"](functorMap({}))(_527)(_528.value6));
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var map = Prelude["<$>"](functorMap({}));
    var fromZipper = function (__copy___dict_Ord_380) {
        return function (__copy__522) {
            return function (__copy__523) {
                var __dict_Ord_380 = __copy___dict_Ord_380;
                var _522 = __copy__522;
                var _523 = __copy__523;
                tco: while (true) {
                    if (_522.length === 0) {
                        return _523;
                    };
                    if (_522.length > 0) {
                        var _1694 = _522.slice(1);
                        if (_522[0] instanceof TwoLeft) {
                            var __tco___dict_Ord_380 = __dict_Ord_380;
                            var __tco__523 = new Two(_523, (_522[0]).value0, (_522[0]).value1, (_522[0]).value2);
                            __dict_Ord_380 = __tco___dict_Ord_380;
                            _522 = _1694;
                            _523 = __tco__523;
                            continue tco;
                        };
                    };
                    if (_522.length > 0) {
                        var _1699 = _522.slice(1);
                        if (_522[0] instanceof TwoRight) {
                            var __tco___dict_Ord_380 = __dict_Ord_380;
                            var __tco__523 = new Two((_522[0]).value0, (_522[0]).value1, (_522[0]).value2, _523);
                            __dict_Ord_380 = __tco___dict_Ord_380;
                            _522 = _1699;
                            _523 = __tco__523;
                            continue tco;
                        };
                    };
                    if (_522.length > 0) {
                        var _1704 = _522.slice(1);
                        if (_522[0] instanceof ThreeLeft) {
                            var __tco___dict_Ord_380 = __dict_Ord_380;
                            var __tco__523 = new Three(_523, (_522[0]).value0, (_522[0]).value1, (_522[0]).value2, (_522[0]).value3, (_522[0]).value4, (_522[0]).value5);
                            __dict_Ord_380 = __tco___dict_Ord_380;
                            _522 = _1704;
                            _523 = __tco__523;
                            continue tco;
                        };
                    };
                    if (_522.length > 0) {
                        var _1712 = _522.slice(1);
                        if (_522[0] instanceof ThreeMiddle) {
                            var __tco___dict_Ord_380 = __dict_Ord_380;
                            var __tco__523 = new Three((_522[0]).value0, (_522[0]).value1, (_522[0]).value2, _523, (_522[0]).value3, (_522[0]).value4, (_522[0]).value5);
                            __dict_Ord_380 = __tco___dict_Ord_380;
                            _522 = _1712;
                            _523 = __tco__523;
                            continue tco;
                        };
                    };
                    if (_522.length > 0) {
                        var _1720 = _522.slice(1);
                        if (_522[0] instanceof ThreeRight) {
                            var __tco___dict_Ord_380 = __dict_Ord_380;
                            var __tco__523 = new Three((_522[0]).value0, (_522[0]).value1, (_522[0]).value2, (_522[0]).value3, (_522[0]).value4, (_522[0]).value5, _523);
                            __dict_Ord_380 = __tco___dict_Ord_380;
                            _522 = _1720;
                            _523 = __tco__523;
                            continue tco;
                        };
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    var insert = function (__dict_Ord_381) {
        var up = function (__copy___dict_Ord_382) {
            return function (__copy__534) {
                return function (__copy__535) {
                    var __dict_Ord_382 = __copy___dict_Ord_382;
                    var _534 = __copy__534;
                    var _535 = __copy__535;
                    tco: while (true) {
                        if (_534.length === 0) {
                            return new Two(_535.value0, _535.value1, _535.value2, _535.value3);
                        };
                        if (_534.length > 0) {
                            var _1738 = _534.slice(1);
                            if (_534[0] instanceof TwoLeft) {
                                return fromZipper(__dict_Ord_382)(_1738)(new Three(_535.value0, _535.value1, _535.value2, _535.value3, (_534[0]).value0, (_534[0]).value1, (_534[0]).value2));
                            };
                        };
                        if (_534.length > 0) {
                            var _1747 = _534.slice(1);
                            if (_534[0] instanceof TwoRight) {
                                return fromZipper(__dict_Ord_382)(_1747)(new Three((_534[0]).value0, (_534[0]).value1, (_534[0]).value2, _535.value0, _535.value1, _535.value2, _535.value3));
                            };
                        };
                        if (_534.length > 0) {
                            var _1756 = _534.slice(1);
                            if (_534[0] instanceof ThreeLeft) {
                                var __tco___dict_Ord_382 = __dict_Ord_382;
                                var __tco__535 = new KickUp(new Two(_535.value0, _535.value1, _535.value2, _535.value3), (_534[0]).value0, (_534[0]).value1, new Two((_534[0]).value2, (_534[0]).value3, (_534[0]).value4, (_534[0]).value5));
                                __dict_Ord_382 = __tco___dict_Ord_382;
                                _534 = _1756;
                                _535 = __tco__535;
                                continue tco;
                            };
                        };
                        if (_534.length > 0) {
                            var _1768 = _534.slice(1);
                            if (_534[0] instanceof ThreeMiddle) {
                                var __tco___dict_Ord_382 = __dict_Ord_382;
                                var __tco__535 = new KickUp(new Two((_534[0]).value0, (_534[0]).value1, (_534[0]).value2, _535.value0), _535.value1, _535.value2, new Two(_535.value3, (_534[0]).value3, (_534[0]).value4, (_534[0]).value5));
                                __dict_Ord_382 = __tco___dict_Ord_382;
                                _534 = _1768;
                                _535 = __tco__535;
                                continue tco;
                            };
                        };
                        if (_534.length > 0) {
                            var _1780 = _534.slice(1);
                            if (_534[0] instanceof ThreeRight) {
                                var __tco___dict_Ord_382 = __dict_Ord_382;
                                var __tco__535 = new KickUp(new Two((_534[0]).value0, (_534[0]).value1, (_534[0]).value2, (_534[0]).value3), (_534[0]).value4, (_534[0]).value5, new Two(_535.value0, _535.value1, _535.value2, _535.value3));
                                __dict_Ord_382 = __tco___dict_Ord_382;
                                _534 = _1780;
                                _535 = __tco__535;
                                continue tco;
                            };
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var down = function (__copy___dict_Ord_383) {
            return function (__copy__530) {
                return function (__copy__531) {
                    return function (__copy__532) {
                        return function (__copy__533) {
                            var __dict_Ord_383 = __copy___dict_Ord_383;
                            var _530 = __copy__530;
                            var _531 = __copy__531;
                            var _532 = __copy__532;
                            var _533 = __copy__533;
                            tco: while (true) {
                                if (_533 instanceof Leaf) {
                                    return up(__dict_Ord_383)(_530)(new KickUp(Leaf.value, _531, _532, Leaf.value));
                                };
                                if (_533 instanceof Two && Prelude["=="](__dict_Ord_383["__superclass_Prelude.Eq_0"]({}))(_531)(_533.value1)) {
                                    return fromZipper(__dict_Ord_383)(_530)(new Two(_533.value0, _531, _532, _533.value3));
                                };
                                if (_533 instanceof Two && Prelude["<"](__dict_Ord_383)(_531)(_533.value1)) {
                                    var __tco___dict_Ord_383 = __dict_Ord_383;
                                    var __tco__530 = Prelude[":"](new TwoLeft(_533.value1, _533.value2, _533.value3))(_530);
                                    var __tco__531 = _531;
                                    var __tco__532 = _532;
                                    var __tco__533 = _533.value0;
                                    __dict_Ord_383 = __tco___dict_Ord_383;
                                    _530 = __tco__530;
                                    _531 = __tco__531;
                                    _532 = __tco__532;
                                    _533 = __tco__533;
                                    continue tco;
                                };
                                if (_533 instanceof Two) {
                                    var __tco___dict_Ord_383 = __dict_Ord_383;
                                    var __tco__530 = Prelude[":"](new TwoRight(_533.value0, _533.value1, _533.value2))(_530);
                                    var __tco__531 = _531;
                                    var __tco__532 = _532;
                                    var __tco__533 = _533.value3;
                                    __dict_Ord_383 = __tco___dict_Ord_383;
                                    _530 = __tco__530;
                                    _531 = __tco__531;
                                    _532 = __tco__532;
                                    _533 = __tco__533;
                                    continue tco;
                                };
                                if (_533 instanceof Three && Prelude["=="](__dict_Ord_383["__superclass_Prelude.Eq_0"]({}))(_531)(_533.value1)) {
                                    return fromZipper(__dict_Ord_383)(_530)(new Three(_533.value0, _531, _532, _533.value3, _533.value4, _533.value5, _533.value6));
                                };
                                if (_533 instanceof Three && Prelude["=="](__dict_Ord_383["__superclass_Prelude.Eq_0"]({}))(_531)(_533.value4)) {
                                    return fromZipper(__dict_Ord_383)(_530)(new Three(_533.value0, _533.value1, _533.value2, _533.value3, _531, _532, _533.value6));
                                };
                                if (_533 instanceof Three && Prelude["<"](__dict_Ord_383)(_531)(_533.value1)) {
                                    var __tco___dict_Ord_383 = __dict_Ord_383;
                                    var __tco__530 = Prelude[":"](new ThreeLeft(_533.value1, _533.value2, _533.value3, _533.value4, _533.value5, _533.value6))(_530);
                                    var __tco__531 = _531;
                                    var __tco__532 = _532;
                                    var __tco__533 = _533.value0;
                                    __dict_Ord_383 = __tco___dict_Ord_383;
                                    _530 = __tco__530;
                                    _531 = __tco__531;
                                    _532 = __tco__532;
                                    _533 = __tco__533;
                                    continue tco;
                                };
                                if (_533 instanceof Three && Prelude["<"](__dict_Ord_383)(_533.value1)(_531) && Prelude["<="](__dict_Ord_383)(_531)(_533.value4)) {
                                    var __tco___dict_Ord_383 = __dict_Ord_383;
                                    var __tco__530 = Prelude[":"](new ThreeMiddle(_533.value0, _533.value1, _533.value2, _533.value4, _533.value5, _533.value6))(_530);
                                    var __tco__531 = _531;
                                    var __tco__532 = _532;
                                    var __tco__533 = _533.value3;
                                    __dict_Ord_383 = __tco___dict_Ord_383;
                                    _530 = __tco__530;
                                    _531 = __tco__531;
                                    _532 = __tco__532;
                                    _533 = __tco__533;
                                    continue tco;
                                };
                                if (_533 instanceof Three) {
                                    var __tco___dict_Ord_383 = __dict_Ord_383;
                                    var __tco__530 = Prelude[":"](new ThreeRight(_533.value0, _533.value1, _533.value2, _533.value3, _533.value4, _533.value5))(_530);
                                    var __tco__531 = _531;
                                    var __tco__532 = _532;
                                    var __tco__533 = _533.value6;
                                    __dict_Ord_383 = __tco___dict_Ord_383;
                                    _530 = __tco__530;
                                    _531 = __tco__531;
                                    _532 = __tco__532;
                                    _533 = __tco__533;
                                    continue tco;
                                };
                                throw new Error("Failed pattern match");
                            };
                        };
                    };
                };
            };
        };
        return down(__dict_Ord_381)([  ]);
    };
    var union = function (__dict_Ord_384) {
        return function (m1) {
            return function (m2) {
                return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
                    return function (_517) {
                        return insert(__dict_Ord_384)(_517.value0)(_517.value1)(m);
                    };
                })(m2)(toList(m1));
            };
        };
    };
    var eqMap = function (__dict_Eq_385) {
        return function (__dict_Eq_386) {
            return new Prelude.Eq(function (m1) {
                return function (m2) {
                    return !Prelude["=="](eqMap(__dict_Eq_385)(__dict_Eq_386))(m1)(m2);
                };
            }, function (m1) {
                return function (m2) {
                    return Prelude["=="](Prelude.eqArray(Data_Tuple.eqTuple(__dict_Eq_385)(__dict_Eq_386)))(toList(m1))(toList(m2));
                };
            });
        };
    };
    var empty = Leaf.value;
    var fromList = function (__dict_Ord_387) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
            return function (_516) {
                return insert(__dict_Ord_387)(_516.value0)(_516.value1)(m);
            };
        })(empty);
    };
    var unions = function (__dict_Ord_388) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(union(__dict_Ord_388))(empty);
    };
    var $$delete = function (__dict_Ord_389) {
        var up = function (__copy___dict_Ord_390) {
            return function (__copy__539) {
                return function (__copy__540) {
                    var __dict_Ord_390 = __copy___dict_Ord_390;
                    var _539 = __copy__539;
                    var _540 = __copy__540;
                    tco: while (true) {
                        if (_539.length === 0) {
                            return _540;
                        };
                        if (_539.length > 0) {
                            var _1847 = _539.slice(1);
                            if (_539[0] instanceof TwoLeft && (_539[0]).value2 instanceof Leaf && _540 instanceof Leaf) {
                                return fromZipper(__dict_Ord_390)(_1847)(new Two(Leaf.value, (_539[0]).value0, (_539[0]).value1, Leaf.value));
                            };
                        };
                        if (_539.length > 0) {
                            var _1852 = _539.slice(1);
                            if (_539[0] instanceof TwoRight && (_539[0]).value0 instanceof Leaf && _540 instanceof Leaf) {
                                return fromZipper(__dict_Ord_390)(_1852)(new Two(Leaf.value, (_539[0]).value1, (_539[0]).value2, Leaf.value));
                            };
                        };
                        if (_539.length > 0) {
                            var _1857 = _539.slice(1);
                            if (_539[0] instanceof TwoLeft && (_539[0]).value2 instanceof Two) {
                                var __tco___dict_Ord_390 = __dict_Ord_390;
                                var __tco__540 = new Three(_540, (_539[0]).value0, (_539[0]).value1, (_539[0]).value2.value0, (_539[0]).value2.value1, (_539[0]).value2.value2, (_539[0]).value2.value3);
                                __dict_Ord_390 = __tco___dict_Ord_390;
                                _539 = _1857;
                                _540 = __tco__540;
                                continue tco;
                            };
                        };
                        if (_539.length > 0) {
                            var _1866 = _539.slice(1);
                            if (_539[0] instanceof TwoRight && (_539[0]).value0 instanceof Two) {
                                var __tco___dict_Ord_390 = __dict_Ord_390;
                                var __tco__540 = new Three((_539[0]).value0.value0, (_539[0]).value0.value1, (_539[0]).value0.value2, (_539[0]).value0.value3, (_539[0]).value1, (_539[0]).value2, _540);
                                __dict_Ord_390 = __tco___dict_Ord_390;
                                _539 = _1866;
                                _540 = __tco__540;
                                continue tco;
                            };
                        };
                        if (_539.length > 0) {
                            var _1875 = _539.slice(1);
                            if (_539[0] instanceof TwoLeft && (_539[0]).value2 instanceof Three) {
                                return fromZipper(__dict_Ord_390)(_1875)(new Two(new Two(_540, (_539[0]).value0, (_539[0]).value1, (_539[0]).value2.value0), (_539[0]).value2.value1, (_539[0]).value2.value2, new Two((_539[0]).value2.value3, (_539[0]).value2.value4, (_539[0]).value2.value5, (_539[0]).value2.value6)));
                            };
                        };
                        if (_539.length > 0) {
                            var _1887 = _539.slice(1);
                            if (_539[0] instanceof TwoRight && (_539[0]).value0 instanceof Three) {
                                return fromZipper(__dict_Ord_390)(_1887)(new Two(new Two((_539[0]).value0.value0, (_539[0]).value0.value1, (_539[0]).value0.value2, (_539[0]).value0.value3), (_539[0]).value0.value4, (_539[0]).value0.value5, new Two((_539[0]).value0.value6, (_539[0]).value1, (_539[0]).value2, _540)));
                            };
                        };
                        if (_539.length > 0) {
                            var _1899 = _539.slice(1);
                            if (_539[0] instanceof ThreeLeft && (_539[0]).value2 instanceof Leaf && (_539[0]).value5 instanceof Leaf && _540 instanceof Leaf) {
                                return fromZipper(__dict_Ord_390)(_1899)(new Three(Leaf.value, (_539[0]).value0, (_539[0]).value1, Leaf.value, (_539[0]).value3, (_539[0]).value4, Leaf.value));
                            };
                        };
                        if (_539.length > 0) {
                            var _1907 = _539.slice(1);
                            if (_539[0] instanceof ThreeMiddle && (_539[0]).value0 instanceof Leaf && (_539[0]).value5 instanceof Leaf && _540 instanceof Leaf) {
                                return fromZipper(__dict_Ord_390)(_1907)(new Three(Leaf.value, (_539[0]).value1, (_539[0]).value2, Leaf.value, (_539[0]).value3, (_539[0]).value4, Leaf.value));
                            };
                        };
                        if (_539.length > 0) {
                            var _1915 = _539.slice(1);
                            if (_539[0] instanceof ThreeRight && (_539[0]).value0 instanceof Leaf && (_539[0]).value3 instanceof Leaf && _540 instanceof Leaf) {
                                return fromZipper(__dict_Ord_390)(_1915)(new Three(Leaf.value, (_539[0]).value1, (_539[0]).value2, Leaf.value, (_539[0]).value4, (_539[0]).value5, Leaf.value));
                            };
                        };
                        if (_539.length > 0) {
                            var _1923 = _539.slice(1);
                            if (_539[0] instanceof ThreeLeft && (_539[0]).value2 instanceof Two) {
                                return fromZipper(__dict_Ord_390)(_1923)(new Two(new Three(_540, (_539[0]).value0, (_539[0]).value1, (_539[0]).value2.value0, (_539[0]).value2.value1, (_539[0]).value2.value2, (_539[0]).value2.value3), (_539[0]).value3, (_539[0]).value4, (_539[0]).value5));
                            };
                        };
                        if (_539.length > 0) {
                            var _1935 = _539.slice(1);
                            if (_539[0] instanceof ThreeMiddle && (_539[0]).value0 instanceof Two) {
                                return fromZipper(__dict_Ord_390)(_1935)(new Two(new Three((_539[0]).value0.value0, (_539[0]).value0.value1, (_539[0]).value0.value2, (_539[0]).value0.value3, (_539[0]).value1, (_539[0]).value2, _540), (_539[0]).value3, (_539[0]).value4, (_539[0]).value5));
                            };
                        };
                        if (_539.length > 0) {
                            var _1947 = _539.slice(1);
                            if (_539[0] instanceof ThreeMiddle && (_539[0]).value5 instanceof Two) {
                                return fromZipper(__dict_Ord_390)(_1947)(new Two((_539[0]).value0, (_539[0]).value1, (_539[0]).value2, new Three(_540, (_539[0]).value3, (_539[0]).value4, (_539[0]).value5.value0, (_539[0]).value5.value1, (_539[0]).value5.value2, (_539[0]).value5.value3)));
                            };
                        };
                        if (_539.length > 0) {
                            var _1959 = _539.slice(1);
                            if (_539[0] instanceof ThreeRight && (_539[0]).value3 instanceof Two) {
                                return fromZipper(__dict_Ord_390)(_1959)(new Two((_539[0]).value0, (_539[0]).value1, (_539[0]).value2, new Three((_539[0]).value3.value0, (_539[0]).value3.value1, (_539[0]).value3.value2, (_539[0]).value3.value3, (_539[0]).value4, (_539[0]).value5, _540)));
                            };
                        };
                        if (_539.length > 0) {
                            var _1971 = _539.slice(1);
                            if (_539[0] instanceof ThreeLeft && (_539[0]).value2 instanceof Three) {
                                return fromZipper(__dict_Ord_390)(_1971)(new Three(new Two(_540, (_539[0]).value0, (_539[0]).value1, (_539[0]).value2.value0), (_539[0]).value2.value1, (_539[0]).value2.value2, new Two((_539[0]).value2.value3, (_539[0]).value2.value4, (_539[0]).value2.value5, (_539[0]).value2.value6), (_539[0]).value3, (_539[0]).value4, (_539[0]).value5));
                            };
                        };
                        if (_539.length > 0) {
                            var _1986 = _539.slice(1);
                            if (_539[0] instanceof ThreeMiddle && (_539[0]).value0 instanceof Three) {
                                return fromZipper(__dict_Ord_390)(_1986)(new Three(new Two((_539[0]).value0.value0, (_539[0]).value0.value1, (_539[0]).value0.value2, (_539[0]).value0.value3), (_539[0]).value0.value4, (_539[0]).value0.value5, new Two((_539[0]).value0.value6, (_539[0]).value1, (_539[0]).value2, _540), (_539[0]).value3, (_539[0]).value4, (_539[0]).value5));
                            };
                        };
                        if (_539.length > 0) {
                            var _2001 = _539.slice(1);
                            if (_539[0] instanceof ThreeMiddle && (_539[0]).value5 instanceof Three) {
                                return fromZipper(__dict_Ord_390)(_2001)(new Three((_539[0]).value0, (_539[0]).value1, (_539[0]).value2, new Two(_540, (_539[0]).value3, (_539[0]).value4, (_539[0]).value5.value0), (_539[0]).value5.value1, (_539[0]).value5.value2, new Two((_539[0]).value5.value3, (_539[0]).value5.value4, (_539[0]).value5.value5, (_539[0]).value5.value6)));
                            };
                        };
                        if (_539.length > 0) {
                            var _2016 = _539.slice(1);
                            if (_539[0] instanceof ThreeRight && (_539[0]).value3 instanceof Three) {
                                return fromZipper(__dict_Ord_390)(_2016)(new Three((_539[0]).value0, (_539[0]).value1, (_539[0]).value2, new Two((_539[0]).value3.value0, (_539[0]).value3.value1, (_539[0]).value3.value2, (_539[0]).value3.value3), (_539[0]).value3.value4, (_539[0]).value3.value5, new Two((_539[0]).value3.value6, (_539[0]).value4, (_539[0]).value5, _540)));
                            };
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var removeMaxNode = function (__copy___dict_Ord_391) {
            return function (__copy__542) {
                return function (__copy__543) {
                    var __dict_Ord_391 = __copy___dict_Ord_391;
                    var _542 = __copy__542;
                    var _543 = __copy__543;
                    tco: while (true) {
                        if (_543 instanceof Two && _543.value0 instanceof Leaf && _543.value3 instanceof Leaf) {
                            return up(__dict_Ord_391)(_542)(Leaf.value);
                        };
                        if (_543 instanceof Two) {
                            var __tco___dict_Ord_391 = __dict_Ord_391;
                            var __tco__542 = Prelude[":"](new TwoRight(_543.value0, _543.value1, _543.value2))(_542);
                            var __tco__543 = _543.value3;
                            __dict_Ord_391 = __tco___dict_Ord_391;
                            _542 = __tco__542;
                            _543 = __tco__543;
                            continue tco;
                        };
                        if (_543 instanceof Three && _543.value0 instanceof Leaf && _543.value3 instanceof Leaf && _543.value6 instanceof Leaf) {
                            return up(__dict_Ord_391)(Prelude[":"](new TwoRight(Leaf.value, _543.value1, _543.value2))(_542))(Leaf.value);
                        };
                        if (_543 instanceof Three) {
                            var __tco___dict_Ord_391 = __dict_Ord_391;
                            var __tco__542 = Prelude[":"](new ThreeRight(_543.value0, _543.value1, _543.value2, _543.value3, _543.value4, _543.value5))(_542);
                            var __tco__543 = _543.value6;
                            __dict_Ord_391 = __tco___dict_Ord_391;
                            _542 = __tco__542;
                            _543 = __tco__543;
                            continue tco;
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var maxNode = function (__copy___dict_Ord_392) {
            return function (__copy__541) {
                var __dict_Ord_392 = __copy___dict_Ord_392;
                var _541 = __copy__541;
                tco: while (true) {
                    if (_541 instanceof Two && _541.value3 instanceof Leaf) {
                        return {
                            key: _541.value1, 
                            value: _541.value2
                        };
                    };
                    if (_541 instanceof Two) {
                        var __tco___dict_Ord_392 = __dict_Ord_392;
                        var __tco__541 = _541.value3;
                        __dict_Ord_392 = __tco___dict_Ord_392;
                        _541 = __tco__541;
                        continue tco;
                    };
                    if (_541 instanceof Three && _541.value6 instanceof Leaf) {
                        return {
                            key: _541.value4, 
                            value: _541.value5
                        };
                    };
                    if (_541 instanceof Three) {
                        var __tco___dict_Ord_392 = __dict_Ord_392;
                        var __tco__541 = _541.value6;
                        __dict_Ord_392 = __tco___dict_Ord_392;
                        _541 = __tco__541;
                        continue tco;
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
        var down = function (__copy___dict_Ord_393) {
            return function (__copy__536) {
                return function (__copy__537) {
                    return function (__copy__538) {
                        var __dict_Ord_393 = __copy___dict_Ord_393;
                        var _536 = __copy__536;
                        var _537 = __copy__537;
                        var _538 = __copy__538;
                        tco: while (true) {
                            if (_538 instanceof Leaf) {
                                return fromZipper(__dict_Ord_393)(_536)(Leaf.value);
                            };
                            if (_538 instanceof Two && _538.value0 instanceof Leaf && _538.value3 instanceof Leaf && Prelude["=="](__dict_Ord_393["__superclass_Prelude.Eq_0"]({}))(_537)(_538.value1)) {
                                return up(__dict_Ord_393)(_536)(Leaf.value);
                            };
                            if (_538 instanceof Two && Prelude["=="](__dict_Ord_393["__superclass_Prelude.Eq_0"]({}))(_537)(_538.value1)) {
                                var max = maxNode(__dict_Ord_393)(_538.value0);
                                return removeMaxNode(__dict_Ord_393)(Prelude[":"](new TwoLeft(max.key, max.value, _538.value3))(_536))(_538.value0);
                            };
                            if (_538 instanceof Two && Prelude["<"](__dict_Ord_393)(_537)(_538.value1)) {
                                var __tco___dict_Ord_393 = __dict_Ord_393;
                                var __tco__536 = Prelude[":"](new TwoLeft(_538.value1, _538.value2, _538.value3))(_536);
                                var __tco__537 = _537;
                                var __tco__538 = _538.value0;
                                __dict_Ord_393 = __tco___dict_Ord_393;
                                _536 = __tco__536;
                                _537 = __tco__537;
                                _538 = __tco__538;
                                continue tco;
                            };
                            if (_538 instanceof Two) {
                                var __tco___dict_Ord_393 = __dict_Ord_393;
                                var __tco__536 = Prelude[":"](new TwoRight(_538.value0, _538.value1, _538.value2))(_536);
                                var __tco__537 = _537;
                                var __tco__538 = _538.value3;
                                __dict_Ord_393 = __tco___dict_Ord_393;
                                _536 = __tco__536;
                                _537 = __tco__537;
                                _538 = __tco__538;
                                continue tco;
                            };
                            if (_538 instanceof Three && _538.value0 instanceof Leaf && _538.value3 instanceof Leaf && _538.value6 instanceof Leaf && Prelude["=="](__dict_Ord_393["__superclass_Prelude.Eq_0"]({}))(_537)(_538.value1)) {
                                return fromZipper(__dict_Ord_393)(_536)(new Two(Leaf.value, _538.value4, _538.value5, Leaf.value));
                            };
                            if (_538 instanceof Three && _538.value0 instanceof Leaf && _538.value3 instanceof Leaf && _538.value6 instanceof Leaf && Prelude["=="](__dict_Ord_393["__superclass_Prelude.Eq_0"]({}))(_537)(_538.value4)) {
                                return fromZipper(__dict_Ord_393)(_536)(new Two(Leaf.value, _538.value1, _538.value2, Leaf.value));
                            };
                            if (_538 instanceof Three && Prelude["=="](__dict_Ord_393["__superclass_Prelude.Eq_0"]({}))(_537)(_538.value1)) {
                                var max = maxNode(__dict_Ord_393)(_538.value0);
                                return removeMaxNode(__dict_Ord_393)(Prelude[":"](new ThreeLeft(max.key, max.value, _538.value3, _538.value4, _538.value5, _538.value6))(_536))(_538.value0);
                            };
                            if (_538 instanceof Three && Prelude["=="](__dict_Ord_393["__superclass_Prelude.Eq_0"]({}))(_537)(_538.value4)) {
                                var max = maxNode(__dict_Ord_393)(_538.value3);
                                return removeMaxNode(__dict_Ord_393)(Prelude[":"](new ThreeMiddle(_538.value0, _538.value1, _538.value2, max.key, max.value, _538.value6))(_536))(_538.value3);
                            };
                            if (_538 instanceof Three && Prelude["<"](__dict_Ord_393)(_537)(_538.value1)) {
                                var __tco___dict_Ord_393 = __dict_Ord_393;
                                var __tco__536 = Prelude[":"](new ThreeLeft(_538.value1, _538.value2, _538.value3, _538.value4, _538.value5, _538.value6))(_536);
                                var __tco__537 = _537;
                                var __tco__538 = _538.value0;
                                __dict_Ord_393 = __tco___dict_Ord_393;
                                _536 = __tco__536;
                                _537 = __tco__537;
                                _538 = __tco__538;
                                continue tco;
                            };
                            if (_538 instanceof Three && Prelude["<"](__dict_Ord_393)(_538.value1)(_537) && Prelude["<"](__dict_Ord_393)(_537)(_538.value4)) {
                                var __tco___dict_Ord_393 = __dict_Ord_393;
                                var __tco__536 = Prelude[":"](new ThreeMiddle(_538.value0, _538.value1, _538.value2, _538.value4, _538.value5, _538.value6))(_536);
                                var __tco__537 = _537;
                                var __tco__538 = _538.value3;
                                __dict_Ord_393 = __tco___dict_Ord_393;
                                _536 = __tco__536;
                                _537 = __tco__537;
                                _538 = __tco__538;
                                continue tco;
                            };
                            if (_538 instanceof Three) {
                                var __tco___dict_Ord_393 = __dict_Ord_393;
                                var __tco__536 = Prelude[":"](new ThreeRight(_538.value0, _538.value1, _538.value2, _538.value3, _538.value4, _538.value5))(_536);
                                var __tco__537 = _537;
                                var __tco__538 = _538.value6;
                                __dict_Ord_393 = __tco___dict_Ord_393;
                                _536 = __tco__536;
                                _537 = __tco__537;
                                _538 = __tco__538;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
            };
        };
        return down(__dict_Ord_389)([  ]);
    };
    var checkValid = function (tree) {
        var allHeights = function (_529) {
            if (_529 instanceof Leaf) {
                return [ 0 ];
            };
            if (_529 instanceof Two) {
                return Data_Array.map(function (n) {
                    return n + 1;
                })(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_529.value0))(allHeights(_529.value3)));
            };
            if (_529 instanceof Three) {
                return Data_Array.map(function (n) {
                    return n + 1;
                })(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_529.value0))(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_529.value3))(allHeights(_529.value6))));
            };
            throw new Error("Failed pattern match");
        };
        return Data_Array.length(Data_Array.nub(Prelude.eqNumber({}))(allHeights(tree))) === 1;
    };
    var alter = function (__dict_Ord_394) {
        return function (f) {
            return function (k) {
                return function (m) {
                    return (function (_2157) {
                        if (_2157 instanceof Data_Maybe.Nothing) {
                            return $$delete(__dict_Ord_394)(k)(m);
                        };
                        if (_2157 instanceof Data_Maybe.Just) {
                            return insert(__dict_Ord_394)(k)(_2157.value0)(m);
                        };
                        throw new Error("Failed pattern match");
                    })(f(lookup(__dict_Ord_394)(k)(m)));
                };
            };
        };
    };
    var update = function (__dict_Ord_395) {
        return function (f) {
            return function (k) {
                return function (m) {
                    return alter(__dict_Ord_395)(Data_Maybe.maybe(Data_Maybe.Nothing.value)(f))(k)(m);
                };
            };
        };
    };
    return {
        map: map, 
        unions: unions, 
        union: union, 
        values: values, 
        keys: keys, 
        update: update, 
        alter: alter, 
        member: member, 
        "delete": $$delete, 
        fromList: fromList, 
        toList: toList, 
        lookup: lookup, 
        insert: insert, 
        checkValid: checkValid, 
        singleton: singleton, 
        isEmpty: isEmpty, 
        empty: empty, 
        showTree: showTree, 
        eqMap: eqMap, 
        showMap: showMap, 
        functorMap: functorMap
    };
})();
var PS = PS || {};
PS.Data_Set = (function () {
    "use strict";
    var Data_Map = PS.Data_Map;
    var Data_Array = PS.Data_Array;
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Data_Foldable = PS.Data_Foldable;
    function Set(value0) {
        this.value0 = value0;
    };
    Set.create = function (value0) {
        return new Set(value0);
    };
    var union = function (__dict_Ord_396) {
        return function (_553) {
            return function (_554) {
                return new Set(Data_Map.union(__dict_Ord_396)(_553.value0)(_554.value0));
            };
        };
    };
    var toList = function (_552) {
        return Data_Array.map(Data_Tuple.fst)(Data_Map.toList(_552.value0));
    };
    var singleton = function (a) {
        return new Set(Data_Map.singleton(a)(Prelude.unit));
    };
    var showSet = function (__dict_Show_397) {
        return new Prelude.Show(function (s) {
            return "fromList " + Prelude.show(Prelude.showArray(__dict_Show_397))(toList(s));
        });
    };
    var member = function (__dict_Ord_398) {
        return function (_546) {
            return function (_547) {
                return Data_Map.member(__dict_Ord_398)(_546)(_547.value0);
            };
        };
    };
    var isEmpty = function (_544) {
        return Data_Map.isEmpty(_544.value0);
    };
    var insert = function (__dict_Ord_399) {
        return function (_548) {
            return function (_549) {
                return new Set(Data_Map.insert(__dict_Ord_399)(_548)(Prelude.unit)(_549.value0));
            };
        };
    };
    var eqSet = function (__dict_Eq_400) {
        return new Prelude.Eq(function (_557) {
            return function (_558) {
                return Prelude["/="](Data_Map.eqMap(__dict_Eq_400)(Prelude.eqUnit({})))(_557.value0)(_558.value0);
            };
        }, function (_555) {
            return function (_556) {
                return Prelude["=="](Data_Map.eqMap(__dict_Eq_400)(Prelude.eqUnit({})))(_555.value0)(_556.value0);
            };
        });
    };
    var empty = new Set(Data_Map.empty);
    var fromList = function (__dict_Ord_401) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
            return function (a) {
                return insert(__dict_Ord_401)(a)(m);
            };
        })(empty);
    };
    var unions = function (__dict_Ord_402) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(union(__dict_Ord_402))(empty);
    };
    var $$delete = function (__dict_Ord_403) {
        return function (_550) {
            return function (_551) {
                return new Set(Data_Map["delete"](__dict_Ord_403)(_550)(_551.value0));
            };
        };
    };
    var checkValid = function (_545) {
        return Data_Map.checkValid(_545.value0);
    };
    return {
        unions: unions, 
        union: union, 
        fromList: fromList, 
        toList: toList, 
        "delete": $$delete, 
        member: member, 
        insert: insert, 
        checkValid: checkValid, 
        singleton: singleton, 
        isEmpty: isEmpty, 
        empty: empty, 
        eqSet: eqSet, 
        showSet: showSet
    };
})();
var PS = PS || {};
PS.Data_Traversable = (function () {
    "use strict";
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Eq = PS.Data_Eq;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Either = PS.Data_Either;
    var Data_Array = PS.Data_Array;
    function Traversable(__superclass_Data$dotFoldable$dotFoldable_1, __superclass_Prelude$dotFunctor_0, sequence, traverse) {
        this["__superclass_Data.Foldable.Foldable_1"] = __superclass_Data$dotFoldable$dotFoldable_1;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.sequence = sequence;
        this.traverse = traverse;
    };
    var traverse = function (dict) {
        return dict.traverse;
    };
    var traversableTuple = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableTuple({});
        }, function (__1) {
            return Data_Tuple.functorTuple({});
        }, function (__dict_Applicative_405) {
            return function (_573) {
                return Prelude["<$>"]((__dict_Applicative_405["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Tuple.Tuple.create(_573.value0))(_573.value1);
            };
        }, function (__dict_Applicative_404) {
            return function (_571) {
                return function (_572) {
                    return Prelude["<$>"]((__dict_Applicative_404["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Tuple.Tuple.create(_572.value0))(_571(_572.value1));
                };
            };
        });
    };
    var traversableRef = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableRef({});
        }, function (__1) {
            return Data_Eq.functorRef({});
        }, function (__dict_Applicative_407) {
            return function (_567) {
                return Prelude["<$>"]((__dict_Applicative_407["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Eq.Ref.create)(_567);
            };
        }, function (__dict_Applicative_406) {
            return function (_565) {
                return function (_566) {
                    return Prelude["<$>"]((__dict_Applicative_406["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Eq.Ref.create)(_565(_566));
                };
            };
        });
    };
    var traversableMaybe = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableMaybe({});
        }, function (__1) {
            return Data_Maybe.functorMaybe({});
        }, function (__dict_Applicative_409) {
            return function (_570) {
                if (_570 instanceof Data_Maybe.Nothing) {
                    return Prelude.pure(__dict_Applicative_409)(Data_Maybe.Nothing.value);
                };
                if (_570 instanceof Data_Maybe.Just) {
                    return Prelude["<$>"]((__dict_Applicative_409["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Maybe.Just.create)(_570.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_408) {
            return function (_568) {
                return function (_569) {
                    if (_569 instanceof Data_Maybe.Nothing) {
                        return Prelude.pure(__dict_Applicative_408)(Data_Maybe.Nothing.value);
                    };
                    if (_569 instanceof Data_Maybe.Just) {
                        return Prelude["<$>"]((__dict_Applicative_408["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Maybe.Just.create)(_568(_569.value0));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var traversableEither = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableEither({});
        }, function (__1) {
            return Data_Either.functorEither({});
        }, function (__dict_Applicative_411) {
            return function (_564) {
                if (_564 instanceof Data_Either.Left) {
                    return Prelude.pure(__dict_Applicative_411)(new Data_Either.Left(_564.value0));
                };
                if (_564 instanceof Data_Either.Right) {
                    return Prelude["<$>"]((__dict_Applicative_411["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Either.Right.create)(_564.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_410) {
            return function (_562) {
                return function (_563) {
                    if (_563 instanceof Data_Either.Left) {
                        return Prelude.pure(__dict_Applicative_410)(new Data_Either.Left(_563.value0));
                    };
                    if (_563 instanceof Data_Either.Right) {
                        return Prelude["<$>"]((__dict_Applicative_410["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Either.Right.create)(_562(_563.value0));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var sequence = function (dict) {
        return dict.sequence;
    };
    var traversableArray = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableArray({});
        }, function (__1) {
            return Data_Array.functorArray({});
        }, function (__dict_Applicative_413) {
            return function (_561) {
                if (_561.length === 0) {
                    return Prelude.pure(__dict_Applicative_413)([  ]);
                };
                if (_561.length > 0) {
                    var _2210 = _561.slice(1);
                    return Prelude["<*>"](__dict_Applicative_413["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_413["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_561[0]))(sequence(traversableArray({}))(__dict_Applicative_413)(_2210));
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_412) {
            return function (_559) {
                return function (_560) {
                    if (_560.length === 0) {
                        return Prelude.pure(__dict_Applicative_412)([  ]);
                    };
                    if (_560.length > 0) {
                        var _2214 = _560.slice(1);
                        return Prelude["<*>"](__dict_Applicative_412["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_412["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_559(_560[0])))(traverse(traversableArray({}))(__dict_Applicative_412)(_559)(_2214));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var zipWithA = function (__dict_Applicative_414) {
        return function (f) {
            return function (xs) {
                return function (ys) {
                    return sequence(traversableArray({}))(__dict_Applicative_414)(Data_Array.zipWith(f)(xs)(ys));
                };
            };
        };
    };
    var $$for = function (__dict_Applicative_415) {
        return function (__dict_Traversable_416) {
            return function (x) {
                return function (f) {
                    return traverse(__dict_Traversable_416)(__dict_Applicative_415)(f)(x);
                };
            };
        };
    };
    return {
        Traversable: Traversable, 
        zipWithA: zipWithA, 
        "for": $$for, 
        sequence: sequence, 
        traverse: traverse, 
        traversableArray: traversableArray, 
        traversableEither: traversableEither, 
        traversableRef: traversableRef, 
        traversableMaybe: traversableMaybe, 
        traversableTuple: traversableTuple
    };
})();
var PS = PS || {};
PS.Control_Lens_Internal_Indexed = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Foldable = PS.Data_Foldable;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Profunctor_Choice = PS.Data_Profunctor_Choice;
    var Data_Profunctor_Rep = PS.Data_Profunctor_Rep;
    var Control_Comonad = PS.Control_Comonad;
    var Data_Profunctor_Strong = PS.Data_Profunctor_Strong;
    var Data_Distributive = PS.Data_Distributive;
    var Control_Arrow_ArrowChoice = PS.Control_Arrow_ArrowChoice;
    var Control_Arrow_ArrowApply = PS.Control_Arrow_ArrowApply;
    function Indexing(value0) {
        this.value0 = value0;
    };
    Indexing.create = function (value0) {
        return new Indexing(value0);
    };
    function Conjoined(__superclass_Control$dotArrow$dotArrowApply$dotArrowApply_9, __superclass_Control$dotArrow$dotArrowChoice$dotArrowChoice_8, __superclass_Control$dotComonad$dotComonad_2, __superclass_Data$dotDistributive$dotDistributive_7, __superclass_Data$dotProfunctor$dotChoice$dotChoice_0, __superclass_Data$dotProfunctor$dotRep$dotCorepresentable_1, __superclass_Data$dotProfunctor$dotRep$dotRepresentable_5, __superclass_Data$dotProfunctor$dotStrong$dotStrong_4, __superclass_Data$dotTraversable$dotTraversable_3, __superclass_Prelude$dotMonad_6, conjoined, distrib) {
        this["__superclass_Control.Arrow.ArrowApply.ArrowApply_9"] = __superclass_Control$dotArrow$dotArrowApply$dotArrowApply_9;
        this["__superclass_Control.Arrow.ArrowChoice.ArrowChoice_8"] = __superclass_Control$dotArrow$dotArrowChoice$dotArrowChoice_8;
        this["__superclass_Control.Comonad.Comonad_2"] = __superclass_Control$dotComonad$dotComonad_2;
        this["__superclass_Data.Distributive.Distributive_7"] = __superclass_Data$dotDistributive$dotDistributive_7;
        this["__superclass_Data.Profunctor.Choice.Choice_0"] = __superclass_Data$dotProfunctor$dotChoice$dotChoice_0;
        this["__superclass_Data.Profunctor.Rep.Corepresentable_1"] = __superclass_Data$dotProfunctor$dotRep$dotCorepresentable_1;
        this["__superclass_Data.Profunctor.Rep.Representable_5"] = __superclass_Data$dotProfunctor$dotRep$dotRepresentable_5;
        this["__superclass_Data.Profunctor.Strong.Strong_4"] = __superclass_Data$dotProfunctor$dotStrong$dotStrong_4;
        this["__superclass_Data.Traversable.Traversable_3"] = __superclass_Data$dotTraversable$dotTraversable_3;
        this["__superclass_Prelude.Monad_6"] = __superclass_Prelude$dotMonad_6;
        this.conjoined = conjoined;
        this.distrib = distrib;
    };
    function Indexable(__superclass_Control$dotLens$dotInternal$dotIndexed$dotConjoined_0, indexed) {
        this["__superclass_Control.Lens.Internal.Indexed.Conjoined_0"] = __superclass_Control$dotLens$dotInternal$dotIndexed$dotConjoined_0;
        this.indexed = indexed;
    };
    var runIndexing = function (_574) {
        return _574.value0;
    };
    var indexed = function (dict) {
        return dict.indexed;
    };
    var foldableIdentity = function (_) {
        return new Data_Foldable.Foldable(function (__dict_Monoid_419) {
            return function (a2m) {
                return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(a2m);
            };
        }, function (f) {
            return function (z) {
                return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(f(z));
            };
        }, function (f) {
            return function (z) {
                return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude.flip(f)(z));
            };
        });
    };
    var traversableIdentity = function (_) {
        return new Data_Traversable.Traversable(function (__1) {
            return foldableIdentity({});
        }, function (__1) {
            return Control_Monad_Identity.functorIdentity({});
        }, function (__dict_Applicative_418) {
            return function (_581) {
                return Prelude["<$>"]((__dict_Applicative_418["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Control_Monad_Identity.Identity.create)(_581);
            };
        }, function (__dict_Applicative_417) {
            return function (_579) {
                return function (_580) {
                    return Prelude["<$>"]((__dict_Applicative_417["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Control_Monad_Identity.Identity.create)(_579(_580));
                };
            };
        });
    };
    var distrib = function (dict) {
        return dict.distrib;
    };
    var conjoinedArr = function (_) {
        return new Conjoined(function (__1) {
            return Control_Arrow_ArrowApply.arrowApplyArr({});
        }, function (__1) {
            return Control_Arrow_ArrowChoice.arrowChoiceArr({});
        }, function (__1) {
            return Control_Comonad.extendComonad({});
        }, function (__1) {
            return Data_Distributive.distributiveIdentity({});
        }, function (__1) {
            return Data_Profunctor_Choice.choiceArr({});
        }, function (__1) {
            return Data_Profunctor_Rep.corepresentableArrIdentity({});
        }, function (__1) {
            return Data_Profunctor_Rep.representableArrIdentity({});
        }, function (__1) {
            return Data_Profunctor_Strong.strongArr({});
        }, function (__1) {
            return traversableIdentity({});
        }, function (__1) {
            return Control_Monad_Identity.monadIdentity({});
        }, function (_575) {
            return function (_576) {
                return _575;
            };
        }, function (__dict_Functor_420) {
            return Prelude["<$>"](__dict_Functor_420);
        });
    };
    var indexableArr = function (_) {
        return new Indexable(function (__1) {
            return conjoinedArr({});
        }, function (_577) {
            return function (_578) {
                return _577;
            };
        });
    };
    var conjoined = function (dict) {
        return dict.conjoined;
    };
    return {
        Indexing: Indexing, 
        Indexable: Indexable, 
        Conjoined: Conjoined, 
        runIndexing: runIndexing, 
        indexed: indexed, 
        conjoined: conjoined, 
        distrib: distrib, 
        conjoinedArr: conjoinedArr, 
        indexableArr: indexableArr, 
        traversableIdentity: traversableIdentity, 
        foldableIdentity: foldableIdentity
    };
})();
var PS = PS || {};
PS.Control_Lens_Internal_Setter = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Foldable = PS.Data_Foldable;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Profunctor = PS.Data_Profunctor;
    var Data_Distributive = PS.Data_Distributive;
    function Settable(__superclass_Data$dotDistributive$dotDistributive_1, __superclass_Data$dotTraversable$dotTraversable_2, __superclass_Prelude$dotApplicative_0, taintedDot, untainted, untaintedDot) {
        this["__superclass_Data.Distributive.Distributive_1"] = __superclass_Data$dotDistributive$dotDistributive_1;
        this["__superclass_Data.Traversable.Traversable_2"] = __superclass_Data$dotTraversable$dotTraversable_2;
        this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
        this.taintedDot = taintedDot;
        this.untainted = untainted;
        this.untaintedDot = untaintedDot;
    };
    var untaintedDot = function (dict) {
        return dict.untaintedDot;
    };
    var untainted = function (dict) {
        return dict.untainted;
    };
    var taintedDot = function (dict) {
        return dict.taintedDot;
    };
    var foldableIdentity = function (_) {
        return new Data_Foldable.Foldable(function (__dict_Monoid_425) {
            return function (_589) {
                return function (_590) {
                    return _589(_590);
                };
            };
        }, function (_586) {
            return function (_587) {
                return function (_588) {
                    return _586(_587)(_588);
                };
            };
        }, function (_583) {
            return function (_584) {
                return function (_585) {
                    return _583(_585)(_584);
                };
            };
        });
    };
    var traversableIdentity = function (_) {
        return new Data_Traversable.Traversable(function (__1) {
            return foldableIdentity({});
        }, function (__1) {
            return Control_Monad_Identity.functorIdentity({});
        }, function (__dict_Applicative_422) {
            return function (_593) {
                return Prelude["<$>"]((__dict_Applicative_422["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Control_Monad_Identity.Identity.create)(_593);
            };
        }, function (__dict_Applicative_421) {
            return function (_591) {
                return function (_592) {
                    return Prelude["<$>"]((__dict_Applicative_421["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Control_Monad_Identity.Identity.create)(_591(_592));
                };
            };
        });
    };
    var settableIdentity = function (_) {
        return new Settable(function (__1) {
            return Data_Distributive.distributiveIdentity({});
        }, function (__1) {
            return traversableIdentity({});
        }, function (__1) {
            return Control_Monad_Identity.applicativeIdentity({});
        }, function (__dict_Profunctor_424) {
            return Data_Profunctor.rmap(__dict_Profunctor_424)(Control_Monad_Identity.Identity.create);
        }, function (_582) {
            return _582;
        }, function (__dict_Profunctor_423) {
            return Data_Profunctor.rmap(__dict_Profunctor_423)(Control_Monad_Identity.runIdentity);
        });
    };
    return {
        Settable: Settable, 
        taintedDot: taintedDot, 
        untaintedDot: untaintedDot, 
        untainted: untainted, 
        settableIdentity: settableIdentity, 
        foldableIdentity: foldableIdentity, 
        traversableIdentity: traversableIdentity
    };
})();
var PS = PS || {};
PS.Control_Lens_At = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Map = PS.Data_Map;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    function Ixed(ix) {
        this.ix = ix;
    };
    var ixedMaybeUnit = function (_) {
        return new Ixed(function (_594) {
            return function (__dict_Applicative_426) {
                return function (_595) {
                    return function (_596) {
                        if (_596 instanceof Data_Maybe.Nothing) {
                            return Prelude.pure(__dict_Applicative_426)(Data_Maybe.Nothing.value);
                        };
                        if (_596 instanceof Data_Maybe.Just) {
                            return Prelude["<$>"]((__dict_Applicative_426["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Maybe.Just.create)(_595(_596.value0));
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        });
    };
    var ixedMapKV = function (__dict_Ord_427) {
        return new Ixed(function (k) {
            return function (__dict_Applicative_428) {
                return function (v2fv) {
                    return function (mapKV) {
                        return (function (_2240) {
                            if (_2240 instanceof Data_Maybe.Nothing) {
                                return Prelude.pure(__dict_Applicative_428)(mapKV);
                            };
                            if (_2240 instanceof Data_Maybe.Just) {
                                return Prelude["<$>"]((__dict_Applicative_428["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(function (v$prime) {
                                    return Data_Map.insert(__dict_Ord_427)(k)(v$prime)(mapKV);
                                })(v2fv(_2240.value0));
                            };
                            throw new Error("Failed pattern match");
                        })(Data_Map.lookup(__dict_Ord_427)(k)(mapKV));
                    };
                };
            };
        });
    };
    var ixedIdentityAA = function (_) {
        return new Ixed(function (_597) {
            return function (__dict_Applicative_429) {
                return function (_598) {
                    return function (_599) {
                        return Prelude["<$>"]((__dict_Applicative_429["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Control_Monad_Identity.Identity.create)(_598(_599));
                    };
                };
            };
        });
    };
    var ixedArrEA = function (__dict_Eq_430) {
        return new Ixed(function (e) {
            return function (__dict_Applicative_431) {
                return function (a2fa) {
                    return function (e2a) {
                        return Prelude["<$>"]((__dict_Applicative_431["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(function (a) {
                            return function (e$prime) {
                                return Prelude["=="](__dict_Eq_430)(e)(e$prime) ? a : e2a(e$prime);
                            };
                        })(a2fa(e2a(e)));
                    };
                };
            };
        });
    };
    var ix = function (dict) {
        return dict.ix;
    };
    var ixedArrayNumberA = function (_) {
        return new Ixed(function (_600) {
            return function (__dict_Applicative_432) {
                return function (_601) {
                    return function (_602) {
                        if (_600 < 0) {
                            return Prelude.pure(__dict_Applicative_432)(_602);
                        };
                        if (_602.length === 0) {
                            return Prelude.pure(__dict_Applicative_432)([  ]);
                        };
                        if (_600 === 0 && _602.length > 0) {
                            var _2249 = _602.slice(1);
                            return Prelude["<$>"]((__dict_Applicative_432["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude.flip(Prelude[":"])(_2249))(_601(_602[0]));
                        };
                        if (_602.length > 0) {
                            var _2251 = _602.slice(1);
                            return Prelude["<$>"]((__dict_Applicative_432["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"](_602[0]))(ix(ixedArrayNumberA({}))(_600 - 1)(__dict_Applicative_432)(_601)(_2251));
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        });
    };
    return {
        Ixed: Ixed, 
        ix: ix, 
        ixedArrEA: ixedArrEA, 
        ixedMaybeUnit: ixedMaybeUnit, 
        ixedIdentityAA: ixedIdentityAA, 
        ixedArrayNumberA: ixedArrayNumberA, 
        ixedMapKV: ixedMapKV
    };
})();
var PS = PS || {};
PS.Control_Lens_Fold = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Profunctor = PS.Data_Profunctor;
    var Data_Either = PS.Data_Either;
    var Data_Profunctor_Choice = PS.Data_Profunctor_Choice;
    var filtered = function (__dict_Applicative_433) {
        return function (__dict_Choice_434) {
            return function (p) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Profunctor.dimap(__dict_Choice_434["__superclass_Data.Profunctor.Profunctor_0"]({}))(function (x) {
                    return p(x) ? new Data_Either.Right(x) : new Data_Either.Left(x);
                })(Data_Either.either(Prelude.pure(__dict_Applicative_433))(Prelude.id(Prelude.categoryArr({})))))(Data_Profunctor_Choice["right'"](__dict_Choice_434));
            };
        };
    };
    return {
        filtered: filtered
    };
})();
var PS = PS || {};
PS.Control_Lens_Getter = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Const = PS.Data_Const;
    var Control_Monad_Reader_Class = PS.Control_Monad_Reader_Class;
    var Control_Monad_State_Class = PS.Control_Monad_State_Class;
    var $up$dot = function (s) {
        return function (asa) {
            return Data_Const.getConst(asa(Data_Const.Const.create)(s));
        };
    };
    var view = function (__dict_Monad_435) {
        return function (__dict_MonadReader_436) {
            return function (ara) {
                return Control_Monad_Reader_Class.reader(__dict_Monad_435)(__dict_MonadReader_436)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Const.getConst)(ara(Data_Const.Const.create)));
            };
        };
    };
    var use = function (__dict_Monad_437) {
        return function (__dict_MonadState_438) {
            return function (asa) {
                return Control_Monad_State_Class.gets(__dict_Monad_437)(__dict_MonadState_438)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Const.getConst)(asa(Data_Const.Const.create)));
            };
        };
    };
    return {
        view: view, 
        use: use, 
        "^.": $up$dot
    };
})();
var PS = PS || {};
PS.Control_Lens_Indexed = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function FunctorWithIndex(__superclass_Prelude$dotFunctor_0, imap) {
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.imap = imap;
    };
    function FoldableWithIndex(__superclass_Data$dotFoldable$dotFoldable_0, ifoldMap) {
        this["__superclass_Data.Foldable.Foldable_0"] = __superclass_Data$dotFoldable$dotFoldable_0;
        this.ifoldMap = ifoldMap;
    };
    function TraversableWithIndex(__superclass_Control$dotLens$dotIndexed$dotFoldableWithIndex_1, __superclass_Control$dotLens$dotIndexed$dotFunctorWithIndex_0, __superclass_Data$dotTraversable$dotTraversable_2, itraverse, itraversed) {
        this["__superclass_Control.Lens.Indexed.FoldableWithIndex_1"] = __superclass_Control$dotLens$dotIndexed$dotFoldableWithIndex_1;
        this["__superclass_Control.Lens.Indexed.FunctorWithIndex_0"] = __superclass_Control$dotLens$dotIndexed$dotFunctorWithIndex_0;
        this["__superclass_Data.Traversable.Traversable_2"] = __superclass_Data$dotTraversable$dotTraversable_2;
        this.itraverse = itraverse;
        this.itraversed = itraversed;
    };
    var itraversed = function (dict) {
        return dict.itraversed;
    };
    var itraverse = function (dict) {
        return dict.itraverse;
    };
    var imap = function (dict) {
        return dict.imap;
    };
    var ifoldMap = function (dict) {
        return dict.ifoldMap;
    };
    return {
        TraversableWithIndex: TraversableWithIndex, 
        FunctorWithIndex: FunctorWithIndex, 
        FoldableWithIndex: FoldableWithIndex, 
        itraversed: itraversed, 
        itraverse: itraverse, 
        ifoldMap: ifoldMap, 
        imap: imap
    };
})();
var PS = PS || {};
PS.Control_Lens_Lens = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var lens = function (s2a) {
        return function (s2b2t) {
            return function (__dict_Functor_439) {
                return function (a2fb) {
                    return function (s) {
                        return Prelude["<$>"](__dict_Functor_439)(s2b2t(s))(a2fb(s2a(s)));
                    };
                };
            };
        };
    };
    return {
        lens: lens
    };
})();
var PS = PS || {};
PS.Control_Lens_Prism = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Lens_Internal_Prism = PS.Control_Lens_Internal_Prism;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Either = PS.Data_Either;
    var Data_Profunctor = PS.Data_Profunctor;
    var Data_Profunctor_Choice = PS.Data_Profunctor_Choice;
    var Data_Maybe = PS.Data_Maybe;
    var withPrism = function (stab) {
        return function (f) {
            return (function (_2252) {
                return f(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(_2252.value0))(Prelude[">>>"](Prelude.semigroupoidArr({}))(_2252.value1)(Data_Either.either(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Data_Either.Left.create))(Data_Either.Right.create)));
            })(stab(new Control_Lens_Internal_Prism.Market(Control_Monad_Identity.Identity.create, Data_Either.Right.create)));
        };
    };
    var prism = function (__dict_Applicative_440) {
        return function (__dict_Choice_441) {
            return function (b2t) {
                return function (s2Eta) {
                    return function (pafb) {
                        return Data_Profunctor.dimap(__dict_Choice_441["__superclass_Data.Profunctor.Profunctor_0"]({}))(s2Eta)(Data_Either.either(Prelude.pure(__dict_Applicative_440))(Prelude["<$>"]((__dict_Applicative_440["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(b2t)))(Data_Profunctor_Choice["right'"](__dict_Choice_441)(pafb));
                    };
                };
            };
        };
    };
    var prism$prime = function (b2s) {
        return function (s2Ma) {
            return function (__dict_Applicative_442) {
                return function (__dict_Choice_443) {
                    return prism(__dict_Applicative_442)(__dict_Choice_443)(b2s)(function (s) {
                        return Data_Maybe.maybe(new Data_Either.Left(s))(Data_Either.Right.create)(s2Ma(s));
                    });
                };
            };
        };
    };
    var clonePrism = function (__dict_Applicative_444) {
        return function (__dict_Choice_445) {
            return function (stab) {
                return withPrism(stab)(prism(__dict_Applicative_444)(__dict_Choice_445));
            };
        };
    };
    var _Right = function (__dict_Applicative_446) {
        return function (__dict_Choice_447) {
            return prism(__dict_Applicative_446)(__dict_Choice_447)(Data_Either.Right.create)(Data_Either.either(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Either.Left.create)(Data_Either.Left.create))(Data_Either.Right.create));
        };
    };
    var _Nothing = function (__dict_Applicative_448) {
        return function (__dict_Choice_449) {
            return prism$prime(Prelude["const"](Data_Maybe.Nothing.value))(Data_Maybe.maybe(Data_Maybe.Nothing.value)(Prelude["const"](new Data_Maybe.Just(Prelude.unit))))(__dict_Applicative_448)(__dict_Choice_449);
        };
    };
    var _Left = function (__dict_Applicative_450) {
        return function (__dict_Choice_451) {
            return prism(__dict_Applicative_450)(__dict_Choice_451)(Data_Either.Left.create)(Data_Either.either(Data_Either.Right.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Either.Left.create)(Data_Either.Right.create)));
        };
    };
    var _Just = function (__dict_Applicative_452) {
        return function (__dict_Choice_453) {
            return prism(__dict_Applicative_452)(__dict_Choice_453)(Data_Maybe.Just.create)(Data_Maybe.maybe(new Data_Either.Left(Data_Maybe.Nothing.value))(Data_Either.Right.create));
        };
    };
    return {
        _Nothing: _Nothing, 
        _Just: _Just, 
        _Right: _Right, 
        _Left: _Left, 
        withPrism: withPrism, 
        "prism'": prism$prime, 
        prism: prism, 
        clonePrism: clonePrism
    };
})();
var PS = PS || {};
PS.Control_Lens_Iso = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Lens_Internal_Iso = PS.Control_Lens_Internal_Iso;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Profunctor = PS.Data_Profunctor;
    var Data_Enum = PS.Data_Enum;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Monoid = PS.Data_Monoid;
    var withIso = function (stab) {
        return function (f) {
            return (function (_2255) {
                return f(_2255.value0)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(_2255.value1));
            })(stab(new Control_Lens_Internal_Iso.Exchange(Prelude.id(Prelude.categoryArr({})), Control_Monad_Identity.Identity.create)));
        };
    };
    var under = function (stab) {
        return withIso(stab)(function (s2a) {
            return function (b2t) {
                return function (t2s) {
                    return Prelude[">>>"](Prelude.semigroupoidArr({}))(b2t)(Prelude[">>>"](Prelude.semigroupoidArr({}))(t2s)(s2a));
                };
            };
        });
    };
    var iso = function (__dict_Profunctor_454) {
        return function (__dict_Functor_455) {
            return function (s2a) {
                return function (b2t) {
                    return Data_Profunctor.dimap(__dict_Profunctor_454)(s2a)(Prelude["<$>"](__dict_Functor_455)(b2t));
                };
            };
        };
    };
    var mapping = function (__dict_Functor_456) {
        return function (__dict_Functor_457) {
            return function (__dict_Profunctor_458) {
                return function (stab) {
                    return withIso(stab)(function (s2a) {
                        return function (b2t) {
                            return iso(__dict_Profunctor_458)(__dict_Functor_456)(Prelude["<$>"](__dict_Functor_456)(s2a))(Prelude["<$>"](__dict_Functor_457)(b2t));
                        };
                    });
                };
            };
        };
    };
    var from = function (__dict_Profunctor_459) {
        return function (__dict_Functor_460) {
            return function (stab) {
                return withIso(stab)(function (s2a) {
                    return function (b2t) {
                        return iso(__dict_Profunctor_459)(__dict_Functor_460)(b2t)(s2a);
                    };
                });
            };
        };
    };
    var $$enum = function (__dict_Enum_461) {
        return function (__dict_Monoid_462) {
            return function (__dict_Functor_463) {
                return function (__dict_Profunctor_464) {
                    return iso(__dict_Profunctor_464)(__dict_Functor_463)(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Enum.toEnum(__dict_Enum_461))(Data_Maybe.maybe(Data_Monoid.mempty(__dict_Monoid_462))(Prelude.id(Prelude.categoryArr({})))))(Data_Enum.fromEnum(__dict_Enum_461));
                };
            };
        };
    };
    var cloneIso = function (__dict_Profunctor_465) {
        return function (__dict_Functor_466) {
            return function (stab) {
                return withIso(stab)(iso(__dict_Profunctor_465)(__dict_Functor_466));
            };
        };
    };
    var auf = function (__dict_Profunctor_467) {
        return function (stab) {
            return withIso(stab)(function (s2a) {
                return function (b2t) {
                    return function (f) {
                        return function (prs) {
                            return function (e) {
                                return b2t(f(Data_Profunctor.rmap(__dict_Profunctor_467)(s2a)(prs))(e));
                            };
                        };
                    };
                };
            });
        };
    };
    var au = function (stab) {
        return withIso(stab)(function (s2a) {
            return function (b2t) {
                return function (f) {
                    return function (e) {
                        return s2a(f(b2t)(e));
                    };
                };
            };
        });
    };
    return {
        withIso: withIso, 
        under: under, 
        mapping: mapping, 
        iso: iso, 
        from: from, 
        "enum": $$enum, 
        cloneIso: cloneIso, 
        auf: auf, 
        au: au
    };
})();
var PS = PS || {};
PS.Control_Lens_Setter = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Lens_Internal_Setter = PS.Control_Lens_Internal_Setter;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Profunctor = PS.Data_Profunctor;
    var Data_Contravariant = PS.Data_Contravariant;
    var sets = function (__dict_Profunctor_468) {
        return function (__dict_Profunctor_469) {
            return function (__dict_Settable_470) {
                return function (pab2qst) {
                    return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Lens_Internal_Setter.untaintedDot(__dict_Settable_470)(__dict_Profunctor_468))(Prelude[">>>"](Prelude.semigroupoidArr({}))(pab2qst)(Control_Lens_Internal_Setter.taintedDot(__dict_Settable_470)(__dict_Profunctor_469)));
                };
            };
        };
    };
    var set$prime = function (sa) {
        return function (a) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(sa(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude["const"](a))));
        };
    };
    var set = function (stab) {
        return function (b) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(stab(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude["const"](b))));
        };
    };
    var $dot$tilde = set;
    var $qmark$tilde = function (stab) {
        return function (a) {
            return set(stab)(new Data_Maybe.Just(a));
        };
    };
    var over = function (__dict_Profunctor_471) {
        return function (pstab) {
            return function (pab) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(pstab(Data_Profunctor.rmap(__dict_Profunctor_471)(Control_Monad_Identity.Identity.create)(pab)));
            };
        };
    };
    var $percent$tilde = function (__dict_Profunctor_472) {
        return over(__dict_Profunctor_472);
    };
    var $amp$amp$tilde = function (__dict_BoolLike_473) {
        return function (staa) {
            return function (a) {
                return over(Data_Profunctor.profunctorArr({}))(staa)(Prelude["&&"](__dict_BoolLike_473)(a));
            };
        };
    };
    var $times$tilde = function (__dict_Num_474) {
        return function (staa) {
            return function (a) {
                return over(Data_Profunctor.profunctorArr({}))(staa)(Prelude["*"](__dict_Num_474)(a));
            };
        };
    };
    var $plus$plus$tilde = function (__dict_Semigroup_475) {
        return function (staa) {
            return function (a) {
                return over(Data_Profunctor.profunctorArr({}))(staa)(Prelude["++"](__dict_Semigroup_475)(a));
            };
        };
    };
    var $plus$tilde = function (__dict_Num_476) {
        return function (staa) {
            return function (a) {
                return over(Data_Profunctor.profunctorArr({}))(staa)(Prelude["+"](__dict_Num_476)(a));
            };
        };
    };
    var $minus$tilde = function (__dict_Num_477) {
        return function (staa) {
            return function (a) {
                return over(Data_Profunctor.profunctorArr({}))(staa)(Prelude["-"](__dict_Num_477)(a));
            };
        };
    };
    var $div$tilde = function (__dict_Num_478) {
        return function (staa) {
            return function (a) {
                return over(Data_Profunctor.profunctorArr({}))(staa)(Prelude["/"](__dict_Num_478)(a));
            };
        };
    };
    var $less$greater$tilde = function (__dict_Semigroup_479) {
        return function (staa) {
            return function (a) {
                return over(Data_Profunctor.profunctorArr({}))(staa)(Prelude["<>"](__dict_Semigroup_479)(a));
            };
        };
    };
    var $bar$bar$tilde = function (__dict_BoolLike_480) {
        return function (staa) {
            return function (a) {
                return over(Data_Profunctor.profunctorArr({}))(staa)(Prelude["||"](__dict_BoolLike_480)(a));
            };
        };
    };
    var mapped = function (__dict_Functor_481) {
        return function (__dict_Settable_482) {
            return sets(Data_Profunctor.profunctorArr({}))(Data_Profunctor.profunctorArr({}))(__dict_Settable_482)(Prelude["<$>"](__dict_Functor_481));
        };
    };
    var contramapped = function (__dict_Contravariant_483) {
        return function (__dict_Settable_484) {
            return sets(Data_Profunctor.profunctorArr({}))(Data_Profunctor.profunctorArr({}))(__dict_Settable_484)(Data_Contravariant[">$<"](__dict_Contravariant_483));
        };
    };
    var argument = function (__dict_Profunctor_485) {
        return function (__dict_Settable_486) {
            return sets(Data_Profunctor.profunctorArr({}))(Data_Profunctor.profunctorArr({}))(__dict_Settable_486)(Data_Profunctor.lmap(__dict_Profunctor_485));
        };
    };
    return {
        sets: sets, 
        "set'": set$prime, 
        set: set, 
        over: over, 
        mapped: mapped, 
        contramapped: contramapped, 
        argument: argument, 
        "?~": $qmark$tilde, 
        "++~": $plus$plus$tilde, 
        "<>~": $less$greater$tilde, 
        "&&~": $amp$amp$tilde, 
        "||~": $bar$bar$tilde, 
        "/~": $div$tilde, 
        "*~": $times$tilde, 
        "-~": $minus$tilde, 
        "+~": $plus$tilde, 
        ".~": $dot$tilde, 
        "%~": $percent$tilde
    };
})();
var PS = PS || {};
PS.Control_Lens_Tuple = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var $tilde = Data_Tuple.Tuple.create;
    var _2 = function (__dict_Functor_487) {
        return function (_605) {
            return function (_606) {
                return Prelude["<$>"](__dict_Functor_487)(Data_Tuple.Tuple.create(_606.value0))(_605(_606.value1));
            };
        };
    };
    var _1 = function (__dict_Functor_488) {
        return function (_603) {
            return function (_604) {
                return Prelude["<$>"](__dict_Functor_488)(function (b) {
                    return new Data_Tuple.Tuple(b, _604.value1);
                })(_603(_604.value0));
            };
        };
    };
    return {
        _2: _2, 
        _1: _1, 
        "~": $tilde
    };
})();
var PS = PS || {};
PS.Control_Lens = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Lens_Tuple = PS.Control_Lens_Tuple;
    var Control_Lens_Setter = PS.Control_Lens_Setter;
    var Control_Lens_Getter = PS.Control_Lens_Getter;
    var Control_Lens_Prism = PS.Control_Lens_Prism;
    var Control_Lens_Iso = PS.Control_Lens_Iso;
    var Control_Lens_Lens = PS.Control_Lens_Lens;
    var Control_Lens_At = PS.Control_Lens_At;
    var Control_Lens_Indexed = PS.Control_Lens_Indexed;
    var Control_Lens_Fold = PS.Control_Lens_Fold;
    var $tilde = Control_Lens_Tuple["~"];
    var $bar$bar$tilde = Control_Lens_Setter["||~"];
    var $up$dot = Control_Lens_Getter["^."];
    var $qmark$tilde = Control_Lens_Setter["?~"];
    var $less$greater$tilde = Control_Lens_Setter["<>~"];
    var $div$tilde = Control_Lens_Setter["/~"];
    var $dot$tilde = Control_Lens_Setter[".~"];
    var $dot$dot = Prelude["<<<"];
    var $minus$tilde = Control_Lens_Setter["-~"];
    var $plus$tilde = Control_Lens_Setter["+~"];
    var $plus$plus$tilde = Control_Lens_Setter["++~"];
    var $times$tilde = Control_Lens_Setter["*~"];
    var $amp$amp$tilde = Control_Lens_Setter["&&~"];
    var $percent$tilde = Control_Lens_Setter["%~"];
    var withPrism = Control_Lens_Prism.withPrism;
    var withIso = Control_Lens_Iso.withIso;
    var view = Control_Lens_Getter.view;
    var use = Control_Lens_Getter.use;
    var under = Control_Lens_Iso.under;
    var sets = Control_Lens_Setter.sets;
    var set$prime = Control_Lens_Setter["set'"];
    var set = Control_Lens_Setter.set;
    var prism$prime = Control_Lens_Prism["prism'"];
    var prism = Control_Lens_Prism.prism;
    var over = Control_Lens_Setter.over;
    var mapping = Control_Lens_Iso.mapping;
    var mapped = Control_Lens_Setter.mapped;
    var lens = Control_Lens_Lens.lens;
    var ix = Control_Lens_At.ix;
    var itraversed = Control_Lens_Indexed.itraversed;
    var itraverse = Control_Lens_Indexed.itraverse;
    var iso = Control_Lens_Iso.iso;
    var imap = Control_Lens_Indexed.imap;
    var ifoldMap = Control_Lens_Indexed.ifoldMap;
    var from = Control_Lens_Iso.from;
    var filtered = Control_Lens_Fold.filtered;
    var $$enum = Control_Lens_Iso["enum"];
    var contramapped = Control_Lens_Setter.contramapped;
    var clonePrism = Control_Lens_Prism.clonePrism;
    var cloneIso = Control_Lens_Iso.cloneIso;
    var auf = Control_Lens_Iso.auf;
    var au = Control_Lens_Iso.au;
    var argument = Control_Lens_Setter.argument;
    var _Right = Control_Lens_Prism._Right;
    var _Nothing = Control_Lens_Prism._Nothing;
    var _Left = Control_Lens_Prism._Left;
    var _Just = Control_Lens_Prism._Just;
    var _2 = Control_Lens_Tuple._2;
    var _1 = Control_Lens_Tuple._1;
    return {
        _2: _2, 
        _1: _1, 
        "~": $tilde, 
        sets: sets, 
        "set'": set$prime, 
        set: set, 
        over: over, 
        mapped: mapped, 
        contramapped: contramapped, 
        argument: argument, 
        "?~": $qmark$tilde, 
        "++~": $plus$plus$tilde, 
        "<>~": $less$greater$tilde, 
        "&&~": $amp$amp$tilde, 
        "||~": $bar$bar$tilde, 
        "/~": $div$tilde, 
        "*~": $times$tilde, 
        "-~": $minus$tilde, 
        "+~": $plus$tilde, 
        ".~": $dot$tilde, 
        "%~": $percent$tilde, 
        _Nothing: _Nothing, 
        _Just: _Just, 
        _Right: _Right, 
        _Left: _Left, 
        withPrism: withPrism, 
        "prism'": prism$prime, 
        prism: prism, 
        clonePrism: clonePrism, 
        lens: lens, 
        withIso: withIso, 
        under: under, 
        mapping: mapping, 
        iso: iso, 
        from: from, 
        "enum": $$enum, 
        cloneIso: cloneIso, 
        auf: auf, 
        au: au, 
        itraversed: itraversed, 
        itraverse: itraverse, 
        ifoldMap: ifoldMap, 
        imap: imap, 
        view: view, 
        use: use, 
        "^.": $up$dot, 
        filtered: filtered, 
        ix: ix, 
        "..": $dot$dot
    };
})();
var PS = PS || {};
PS.Data_Argonaut_Core = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Map = PS.Data_Map;
    var Control_Lens = PS.Control_Lens;
    var Data_Profunctor_Choice = PS.Data_Profunctor_Choice;
    function JsonNull(value0) {
        this.value0 = value0;
    };
    JsonNull.create = function (value0) {
        return new JsonNull(value0);
    };
    function JsonBoolean(value0) {
        this.value0 = value0;
    };
    JsonBoolean.create = function (value0) {
        return new JsonBoolean(value0);
    };
    function JsonNumber(value0) {
        this.value0 = value0;
    };
    JsonNumber.create = function (value0) {
        return new JsonNumber(value0);
    };
    function JsonString(value0) {
        this.value0 = value0;
    };
    JsonString.create = function (value0) {
        return new JsonString(value0);
    };
    function JsonArray(value0) {
        this.value0 = value0;
    };
    JsonArray.create = function (value0) {
        return new JsonArray(value0);
    };
    function JsonObject(value0) {
        this.value0 = value0;
    };
    JsonObject.create = function (value0) {
        return new JsonObject(value0);
    };
    function Foo(value0) {
        this.value0 = value0;
    };
    Foo.create = function (value0) {
        return new Foo(value0);
    };
    var verbJsonType = function (def) {
        return function (f) {
            return function (fold) {
                return fold(def)(f);
            };
        };
    };
    var toJsonType = verbJsonType(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
    var isJsonType = verbJsonType(false)(Prelude["const"](true));
    var fromString = JsonString.create;
    var jsonEmptyString = fromString("");
    var fromObject = JsonObject.create;
    var jsonEmptyObject = fromObject(Data_Map.empty);
    var jsonSingletonObject = function (key) {
        return function (val) {
            return fromObject(Data_Map.singleton(key)(val));
        };
    };
    var fromNumber = JsonNumber.create;
    var jsonZero = fromNumber(0);
    var fromNull = JsonNull.create;
    var jsonNull = fromNull(Prelude.unit);
    var fromBoolean = JsonBoolean.create;
    var jsonFalse = fromBoolean(false);
    var jsonTrue = fromBoolean(true);
    var fromArray = JsonArray.create;
    var jsonEmptyArray = fromArray([  ]);
    var jsonSingletonArray = function (j) {
        return fromArray([ j ]);
    };
    var foldJsonString = function (_623) {
        return function (_624) {
            return function (_625) {
                if (_625 instanceof JsonString) {
                    return _624(_625.value0);
                };
                return _623;
            };
        };
    };
    var isString = isJsonType(foldJsonString);
    var jsonStringL = function (__dict_Applicative_489) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.id(Prelude.categoryArr({})))(Control_Lens.filtered(__dict_Applicative_489)(Data_Profunctor_Choice.choiceArr({}))(isString));
    };
    var toString = toJsonType(foldJsonString);
    var stringL = function (__dict_Applicative_490) {
        return function (__dict_Choice_491) {
            return Control_Lens["prism'"](fromString)(toString)(__dict_Applicative_490)(__dict_Choice_491);
        };
    };
    var foldJsonObject = function (_629) {
        return function (_630) {
            return function (_631) {
                if (_631 instanceof JsonObject) {
                    return _630(_631.value0);
                };
                return _629;
            };
        };
    };
    var isObject = isJsonType(foldJsonObject);
    var jsonObjectL = function (__dict_Applicative_492) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.id(Prelude.categoryArr({})))(Control_Lens.filtered(__dict_Applicative_492)(Data_Profunctor_Choice.choiceArr({}))(isObject));
    };
    var toObject = toJsonType(foldJsonObject);
    var objectL = function (__dict_Applicative_493) {
        return function (__dict_Choice_494) {
            return Control_Lens["prism'"](fromObject)(toObject)(__dict_Applicative_493)(__dict_Choice_494);
        };
    };
    var foldJsonNumber = function (_620) {
        return function (_621) {
            return function (_622) {
                if (_622 instanceof JsonNumber) {
                    return _621(_622.value0);
                };
                return _620;
            };
        };
    };
    var isNumber = isJsonType(foldJsonNumber);
    var jsonNumberL = function (__dict_Applicative_495) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.id(Prelude.categoryArr({})))(Control_Lens.filtered(__dict_Applicative_495)(Data_Profunctor_Choice.choiceArr({}))(isNumber));
    };
    var toNumber = toJsonType(foldJsonNumber);
    var numberL = function (__dict_Applicative_496) {
        return function (__dict_Choice_497) {
            return Control_Lens["prism'"](fromNumber)(toNumber)(__dict_Applicative_496)(__dict_Choice_497);
        };
    };
    var foldJsonNull = function (_614) {
        return function (_615) {
            return function (_616) {
                if (_616 instanceof JsonNull) {
                    return _615(Prelude.unit);
                };
                return _614;
            };
        };
    };
    var isNull = isJsonType(foldJsonNull);
    var jsonNullL = function (__dict_Applicative_498) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.id(Prelude.categoryArr({})))(Control_Lens.filtered(__dict_Applicative_498)(Data_Profunctor_Choice.choiceArr({}))(isNull));
    };
    var toNull = toJsonType(foldJsonNull);
    var nullL = function (__dict_Applicative_499) {
        return function (__dict_Choice_500) {
            return Control_Lens["prism'"](fromNull)(toNull)(__dict_Applicative_499)(__dict_Choice_500);
        };
    };
    var foldJsonBoolean = function (_617) {
        return function (_618) {
            return function (_619) {
                if (_619 instanceof JsonBoolean) {
                    return _618(_619.value0);
                };
                return _617;
            };
        };
    };
    var isBoolean = isJsonType(foldJsonBoolean);
    var jsonBooleanL = function (__dict_Applicative_501) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.id(Prelude.categoryArr({})))(Control_Lens.filtered(__dict_Applicative_501)(Data_Profunctor_Choice.choiceArr({}))(isBoolean));
    };
    var toBoolean = toJsonType(foldJsonBoolean);
    var foldJsonArray = function (_626) {
        return function (_627) {
            return function (_628) {
                if (_628 instanceof JsonArray) {
                    return _627(_628.value0);
                };
                return _626;
            };
        };
    };
    var isArray = isJsonType(foldJsonArray);
    var jsonArrayL = function (__dict_Applicative_502) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.id(Prelude.categoryArr({})))(Control_Lens.filtered(__dict_Applicative_502)(Data_Profunctor_Choice.choiceArr({}))(isArray));
    };
    var toArray = toJsonType(foldJsonArray);
    var foldJson = function (_607) {
        return function (_608) {
            return function (_609) {
                return function (_610) {
                    return function (_611) {
                        return function (_612) {
                            return function (_613) {
                                if (_613 instanceof JsonNull) {
                                    return _607(Prelude.unit);
                                };
                                if (_613 instanceof JsonBoolean) {
                                    return _608(_613.value0);
                                };
                                if (_613 instanceof JsonNumber) {
                                    return _609(_613.value0);
                                };
                                if (_613 instanceof JsonString) {
                                    return _610(_613.value0);
                                };
                                if (_613 instanceof JsonArray) {
                                    return _611(_613.value0);
                                };
                                if (_613 instanceof JsonObject) {
                                    return _612(_613.value0);
                                };
                                throw new Error("Failed pattern match");
                            };
                        };
                    };
                };
            };
        };
    };
    var eqJson = function (_) {
        return new Prelude.Eq(function (j) {
            return function (j$prime) {
                return !Prelude["=="](eqJson({}))(j)(j$prime);
            };
        }, function (_632) {
            return function (_633) {
                if (_632 instanceof JsonNull && _633 instanceof JsonNull) {
                    return true;
                };
                if (_632 instanceof JsonBoolean && _633 instanceof JsonBoolean) {
                    return _632.value0 === _633.value0;
                };
                if (_632 instanceof JsonNumber && _633 instanceof JsonNumber) {
                    return _632.value0 === _633.value0;
                };
                if (_632 instanceof JsonString && _633 instanceof JsonString) {
                    return _632.value0 === _633.value0;
                };
                if (_632 instanceof JsonArray && _633 instanceof JsonArray) {
                    return Prelude["=="](Prelude.eqArray(eqJson({})))(_632.value0)(_633.value0);
                };
                if (_632 instanceof JsonObject && _633 instanceof JsonObject) {
                    return Prelude["=="](Data_Map.eqMap(Prelude.eqString({}))(eqJson({})))(_632.value0)(_633.value0);
                };
                return false;
            };
        });
    };
    var booleanL = function (__dict_Applicative_503) {
        return function (__dict_Choice_504) {
            return Control_Lens["prism'"](fromBoolean)(toBoolean)(__dict_Applicative_503)(__dict_Choice_504);
        };
    };
    var arrayL = function (__dict_Applicative_505) {
        return function (__dict_Choice_506) {
            return Control_Lens["prism'"](fromArray)(toArray)(__dict_Applicative_505)(__dict_Choice_506);
        };
    };
    return {
        JsonNull: JsonNull, 
        JsonBoolean: JsonBoolean, 
        JsonNumber: JsonNumber, 
        JsonString: JsonString, 
        JsonArray: JsonArray, 
        JsonObject: JsonObject, 
        Foo: Foo, 
        jsonObjectL: jsonObjectL, 
        jsonArrayL: jsonArrayL, 
        jsonStringL: jsonStringL, 
        jsonNumberL: jsonNumberL, 
        jsonBooleanL: jsonBooleanL, 
        jsonNullL: jsonNullL, 
        objectL: objectL, 
        arrayL: arrayL, 
        stringL: stringL, 
        numberL: numberL, 
        booleanL: booleanL, 
        nullL: nullL, 
        jsonSingletonObject: jsonSingletonObject, 
        jsonSingletonArray: jsonSingletonArray, 
        jsonEmptyObject: jsonEmptyObject, 
        jsonEmptyArray: jsonEmptyArray, 
        jsonEmptyString: jsonEmptyString, 
        jsonNull: jsonNull, 
        jsonZero: jsonZero, 
        jsonFalse: jsonFalse, 
        jsonTrue: jsonTrue, 
        fromObject: fromObject, 
        fromArray: fromArray, 
        fromString: fromString, 
        fromNumber: fromNumber, 
        fromBoolean: fromBoolean, 
        fromNull: fromNull, 
        toObject: toObject, 
        toArray: toArray, 
        toString: toString, 
        toNumber: toNumber, 
        toBoolean: toBoolean, 
        toNull: toNull, 
        toJsonType: toJsonType, 
        isObject: isObject, 
        isArray: isArray, 
        isString: isString, 
        isNumber: isNumber, 
        isBoolean: isBoolean, 
        isNull: isNull, 
        isJsonType: isJsonType, 
        verbJsonType: verbJsonType, 
        foldJsonObject: foldJsonObject, 
        foldJsonArray: foldJsonArray, 
        foldJsonString: foldJsonString, 
        foldJsonNumber: foldJsonNumber, 
        foldJsonBoolean: foldJsonBoolean, 
        foldJsonNull: foldJsonNull, 
        foldJson: foldJson, 
        eqJson: eqJson
    };
})();
var PS = PS || {};
PS.Data_Argonaut_Encode = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Argonaut_Core = PS.Data_Argonaut_Core;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Map = PS.Data_Map;
    var Data_Tuple = PS.Data_Tuple;
    function EncodeJson(encodeJson) {
        this.encodeJson = encodeJson;
    };
    var showFoo = function (_) {
        return new Prelude.Show(function (_634) {
            return "Foo(" + Prelude.show(Prelude.showString({}))(_634.value0.foo) + ", " + Prelude.show(Prelude.showNumber({}))(_634.value0.bar) + ")";
        });
    };
    var encodeJsonIdIdJson = function (_) {
        return new EncodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_Identity.Identity.create));
    };
    var encodeJsonIdIdJString = function (_) {
        return new EncodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Argonaut_Core.fromString)(Control_Monad_Identity.Identity.create)));
    };
    var encodeJsonIdIdJObject = function (_) {
        return new EncodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Argonaut_Core.fromObject)(Control_Monad_Identity.Identity.create)));
    };
    var encodeJsonIdIdJNumber = function (_) {
        return new EncodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Argonaut_Core.fromNumber)(Control_Monad_Identity.Identity.create)));
    };
    var encodeJsonIdIdJNull = function (_) {
        return new EncodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Argonaut_Core.fromNull)(Control_Monad_Identity.Identity.create)));
    };
    var encodeJsonIdIdJBoolean = function (_) {
        return new EncodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Argonaut_Core.fromBoolean)(Control_Monad_Identity.Identity.create)));
    };
    var encodeJsonIdIdJArray = function (_) {
        return new EncodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Argonaut_Core.fromArray)(Control_Monad_Identity.Identity.create)));
    };
    var encodeJson = function (dict) {
        return dict.encodeJson;
    };
    var encodeIdentity = function (__dict_EncodeJson_507) {
        return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude[">>>"](Prelude.semigroupoidArr({}))(encodeJson(__dict_EncodeJson_507))(Control_Monad_Identity.runIdentity));
    };
    var encodeFoo = function (_) {
        return new EncodeJson(function (_635) {
            return Control_Monad_Identity.Identity.create(Data_Argonaut_Core.JsonObject.create(Data_Map.fromList(Prelude.ordString({}))([ Data_Tuple.Tuple.create("foo")(new Data_Argonaut_Core.JsonString(_635.value0.foo)), Data_Tuple.Tuple.create("bar")(new Data_Argonaut_Core.JsonNumber(_635.value0.bar)) ])));
        });
    };
    return {
        EncodeJson: EncodeJson, 
        encodeIdentity: encodeIdentity, 
        encodeJson: encodeJson, 
        encodeJsonIdIdJNull: encodeJsonIdIdJNull, 
        encodeJsonIdIdJBoolean: encodeJsonIdIdJBoolean, 
        encodeJsonIdIdJNumber: encodeJsonIdIdJNumber, 
        encodeJsonIdIdJString: encodeJsonIdIdJString, 
        encodeJsonIdIdJArray: encodeJsonIdIdJArray, 
        encodeJsonIdIdJObject: encodeJsonIdIdJObject, 
        encodeJsonIdIdJson: encodeJsonIdIdJson, 
        showFoo: showFoo, 
        encodeFoo: encodeFoo
    };
})();
var PS = PS || {};
PS.Data_Argonaut_Combinators = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Argonaut_Core = PS.Data_Argonaut_Core;
    var Data_Map = PS.Data_Map;
    var Data_Argonaut_Encode = PS.Data_Argonaut_Encode;
    var $tilde$greater = function (_636) {
        return Data_Argonaut_Core.foldJsonObject(Data_Argonaut_Core.jsonSingletonObject(_636.value0)(_636.value1))(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Map.insert(Prelude.ordString({}))(_636.value0)(_636.value1))(Data_Argonaut_Core.fromObject));
    };
    var $colon$eq = function (__dict_EncodeJson_508) {
        return function (key) {
            return function (val) {
                return Data_Tuple.Tuple.create(key)(Data_Argonaut_Encode.encodeIdentity(__dict_EncodeJson_508)(val));
            };
        };
    };
    return {
        "~>": $tilde$greater, 
        ":=": $colon$eq
    };
})();
var PS = PS || {};
PS.Data_Argonaut_Printer = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Argonaut_Core = PS.Data_Argonaut_Core;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Map = PS.Data_Map;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    function Printer(printJson) {
        this.printJson = printJson;
    };
    var stringifyString = Prelude.show(Prelude.showString({}));
    var stringifyNumber = Prelude.show(Prelude.showNumber({}));
    var stringifyNull = function (_637) {
        return "null";
    };
    var stringifyField = Prelude.show(Prelude.showString({}));
    var stringifyBoolean = function (_638) {
        if (_638) {
            return "true";
        };
        if (!_638) {
            return "false";
        };
        throw new Error("Failed pattern match");
    };
    var stringify = function (json) {
        return Data_Argonaut_Core.foldJson(stringifyNull)(stringifyBoolean)(stringifyNumber)(stringifyString)(stringifyArray)(stringifyObject)(json);
    };
    var stringifyArray = function (_639) {
        if (_639.length === 0) {
            return "[]";
        };
        if (_639.length > 0) {
            var _2330 = _639.slice(1);
            var withComma = function (x_1) {
                return function (acc) {
                    return ", " + stringify(x_1) + acc;
                };
            };
            return "[" + stringify(_639[0]) + Data_Foldable.foldr(Data_Foldable.foldableArray({}))(withComma)("]")(_2330);
        };
        throw new Error("Failed pattern match");
    };
    var stringifyObject = function (objMap) {
        var one = function (_640) {
            return Prelude.show(Prelude.showString({}))(_640.value0) + ": " + stringify(_640.value1);
        };
        var withComma = function (x) {
            return function (acc) {
                return ", " + one(x) + acc;
            };
        };
        return (function (_2334) {
            if (_2334.length > 0) {
                var _2336 = _2334.slice(1);
                return "{" + one(_2334[0]) + Data_Foldable.foldr(Data_Foldable.foldableArray({}))(withComma)("}")(_2336);
            };
            return "{}";
        })(Data_Map.toList(objMap));
    };
    var printerIdIdJNull = function (_) {
        return new Printer(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(stringify)(Control_Monad_Identity.Identity.create)));
    };
    var printJson = function (dict) {
        return dict.printJson;
    };
    var printTo = function (__dict_Printer_509) {
        return printJson(__dict_Printer_509);
    };
    var printIdentity = function (__dict_Printer_510) {
        return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude[">>>"](Prelude.semigroupoidArr({}))(printTo(__dict_Printer_510))(Control_Monad_Identity.runIdentity));
    };
    var printToString = printIdentity(printerIdIdJNull({}));
    var showJson = function (_) {
        return new Prelude.Show(printToString);
    };
    return {
        Printer: Printer, 
        stringifyObject: stringifyObject, 
        stringifyArray: stringifyArray, 
        stringifyField: stringifyField, 
        stringifyString: stringifyString, 
        stringifyNumber: stringifyNumber, 
        stringifyBoolean: stringifyBoolean, 
        stringifyNull: stringifyNull, 
        stringify: stringify, 
        printToString: printToString, 
        printIdentity: printIdentity, 
        printTo: printTo, 
        printJson: printJson, 
        printerIdIdJNull: printerIdIdJNull, 
        showJson: showJson
    };
})();
var PS = PS || {};
PS.Data_Argonaut_Decode = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Argonaut_Core = PS.Data_Argonaut_Core;
    var Data_Either = PS.Data_Either;
    var Data_Maybe = PS.Data_Maybe;
    var Control_Lens = PS.Control_Lens;
    var Data_Argonaut_Encode = PS.Data_Argonaut_Encode;
    var Data_Profunctor_Choice = PS.Data_Profunctor_Choice;
    var Control_Lens_At = PS.Control_Lens_At;
    var Data_Map = PS.Data_Map;
    function DecodeJson(decodeJson) {
        this.decodeJson = decodeJson;
    };
    var decodeJsonIdESDRString = function (_) {
        return new DecodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Data_Argonaut_Core.foldJsonString(new Data_Either.Left("Not a String."))(Data_Either.Right.create)));
    };
    var decodeJsonIdESDRObject = function (_) {
        return new DecodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Data_Argonaut_Core.foldJsonObject(new Data_Either.Left("Not a Object."))(Data_Either.Right.create)));
    };
    var decodeJsonIdESDRNumber = function (_) {
        return new DecodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Data_Argonaut_Core.foldJsonNumber(new Data_Either.Left("Not a Number."))(Data_Either.Right.create)));
    };
    var decodeJsonIdESDRNull = function (_) {
        return new DecodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Data_Argonaut_Core.foldJsonNull(new Data_Either.Left("Not null."))(Data_Either.Right.create)));
    };
    var decodeJsonIdESDRJson = function (_) {
        return new DecodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Data_Either.Right.create));
    };
    var decodeJsonIdESDRBoolean = function (_) {
        return new DecodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Data_Argonaut_Core.foldJsonBoolean(new Data_Either.Left("Not a Boolean."))(Data_Either.Right.create)));
    };
    var decodeJsonIdESDRArray = function (_) {
        return new DecodeJson(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Data_Argonaut_Core.foldJsonArray(new Data_Either.Left("Not a Array."))(Data_Either.Right.create)));
    };
    var decodeJson = function (dict) {
        return dict.decodeJson;
    };
    var decodeMaybe = function (__dict_DecodeJson_511) {
        return Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude[">>>"](Prelude.semigroupoidArr({}))(decodeJson(__dict_DecodeJson_511))(Data_Either.either(Prelude["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create)));
    };
    var decodeL = function (__dict_DecodeJson_512) {
        return function (__dict_EncodeJson_513) {
            return function (__dict_Applicative_514) {
                return function (__dict_Choice_515) {
                    return Control_Lens["prism'"](Data_Argonaut_Encode.encodeIdentity(__dict_EncodeJson_513))(decodeMaybe(__dict_DecodeJson_512))(__dict_Applicative_514)(__dict_Choice_515);
                };
            };
        };
    };
    var objectFieldL = function (__dict_DecodeJson_516) {
        return function (__dict_EncodeJson_517) {
            return function (key) {
                return function (__dict_Applicative_518) {
                    return Prelude[">>>"](Prelude.semigroupoidArr({}))(decodeL(__dict_DecodeJson_516)(__dict_EncodeJson_517)(__dict_Applicative_518)(Data_Profunctor_Choice.choiceArr({})))(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Lens.ix(Control_Lens_At.ixedMapKV(Prelude.ordString({})))(key)(__dict_Applicative_518))(Data_Argonaut_Core.objectL(__dict_Applicative_518)(Data_Profunctor_Choice.choiceArr({}))));
                };
            };
        };
    };
    var decodeFoo = function (_) {
        return new DecodeJson(function (_641) {
            return Data_Maybe.maybe(new Data_Either.Left("Not a Foo."))(Data_Either.Right.create)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Argonaut_Core.toObject(_641))(function (_48) {
                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("foo")(_48))(Data_Argonaut_Core.toString))(function (_47) {
                    return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("bar")(_48))(Data_Argonaut_Core.toNumber))(function (_46) {
                        return Prelude.pure(Data_Maybe.applicativeMaybe({}))(new Data_Argonaut_Core.Foo({
                            foo: _47, 
                            bar: _46
                        }));
                    });
                });
            }));
        });
    };
    var arrayIndexL = function (__dict_DecodeJson_519) {
        return function (__dict_EncodeJson_520) {
            return function (i) {
                return function (__dict_Applicative_521) {
                    return Prelude[">>>"](Prelude.semigroupoidArr({}))(decodeL(__dict_DecodeJson_519)(__dict_EncodeJson_520)(__dict_Applicative_521)(Data_Profunctor_Choice.choiceArr({})))(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Lens.ix(Control_Lens_At.ixedArrayNumberA({}))(i)(__dict_Applicative_521))(Data_Argonaut_Core.arrayL(__dict_Applicative_521)(Data_Profunctor_Choice.choiceArr({}))));
                };
            };
        };
    };
    return {
        DecodeJson: DecodeJson, 
        objectFieldL: objectFieldL, 
        arrayIndexL: arrayIndexL, 
        decodeL: decodeL, 
        decodeMaybe: decodeMaybe, 
        decodeJson: decodeJson, 
        decodeJsonIdESDRNull: decodeJsonIdESDRNull, 
        decodeJsonIdESDRBoolean: decodeJsonIdESDRBoolean, 
        decodeJsonIdESDRNumber: decodeJsonIdESDRNumber, 
        decodeJsonIdESDRString: decodeJsonIdESDRString, 
        decodeJsonIdESDRArray: decodeJsonIdESDRArray, 
        decodeJsonIdESDRObject: decodeJsonIdESDRObject, 
        decodeJsonIdESDRJson: decodeJsonIdESDRJson, 
        decodeFoo: decodeFoo
    };
})();
var PS = PS || {};
PS.Data_Foreign = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Function = PS.Data_Function;
    var Data_Either = PS.Data_Either;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Array = PS.Data_Array;
    function ForeignParser(value0) {
        this.value0 = value0;
    };
    ForeignParser.create = function (value0) {
        return new ForeignParser(value0);
    };
    function ReadForeign(read) {
        this.read = read;
    };
    function fromStringImpl(left, right, str) {   try {     return right(JSON.parse(str));   } catch (e) {     return left(e.toString());   } };
    function readPrimTypeImpl(left, right, typeName, value) {   if (toString.call(value) == '[object ' + typeName + ']') {     return right(value);  }   return left('Value is not a ' + typeName + ''); };
    function readMaybeImpl(nothing, just, value) {   return value === undefined || value === null ? nothing : just(value); };
    function readPropImpl(k, obj) {     return obj == undefined ? undefined : obj[k];};
    function readKeysImpl(left, right, k, obj) {   if (obj == undefined) {     return left('cannot get a key from an undefined or null value');   } else if (obj[k] == undefined) {     return left('value is undefined or null');   } else if (Array.isArray(obj[k])) {     return left('value is an array');   } else if (typeof obj[k] !== 'object') {     return left('value is not an object');   }   return right(Object.keys(obj[k])); };
    var showForeignImpl = JSON.stringify;;
    var showForeign = function (_) {
        return new Prelude.Show(showForeignImpl);
    };
    var readPrimType = function (ty) {
        return function (x) {
            return readPrimTypeImpl(Data_Either.Left.create, Data_Either.Right.create, ty, x);
        };
    };
    var readString = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("String")));
    };
    var readNumber = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("Number")));
    };
    var readMaybeImpl$prime = function (x) {
        return readMaybeImpl(Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
    };
    var readError = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("Error")));
    };
    var readBoolean = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("Boolean")));
    };
    var read = function (dict) {
        return dict.read;
    };
    var parseForeign = function (_642) {
        return function (_643) {
            return _642.value0(_643);
        };
    };
    var functorForeignParser = function (_) {
        return new Prelude.Functor(function (_644) {
            return function (_645) {
                return new ForeignParser(function (x) {
                    return Prelude["<$>"](Data_Either.functorEither({}))(_644)(_645.value0(x));
                });
            };
        });
    };
    var fromString = function (s) {
        return fromStringImpl(Data_Either.Left.create, Data_Either.Right.create, s);
    };
    var parseJSON = function (__dict_ReadForeign_526) {
        return function (json) {
            return Prelude[">>="](Data_Either.bindEither({}))(fromString(json))(parseForeign(read(__dict_ReadForeign_526)));
        };
    };
    var applyForeignParser = function (_) {
        return new Prelude.Apply(function (_648) {
            return function (_649) {
                return new ForeignParser(function (x) {
                    return (function (_2349) {
                        if (_2349 instanceof Data_Either.Left) {
                            return new Data_Either.Left(_2349.value0);
                        };
                        if (_2349 instanceof Data_Either.Right) {
                            return Prelude["<$>"](Data_Either.functorEither({}))(_2349.value0)(_649.value0(x));
                        };
                        throw new Error("Failed pattern match");
                    })(_648.value0(x));
                });
            };
        }, function (__1) {
            return functorForeignParser({});
        });
    };
    var bindForeignParser = function (_) {
        return new Prelude.Bind(function (_646) {
            return function (_647) {
                return new ForeignParser(function (x) {
                    return (function (_2356) {
                        if (_2356 instanceof Data_Either.Left) {
                            return new Data_Either.Left(_2356.value0);
                        };
                        if (_2356 instanceof Data_Either.Right) {
                            return parseForeign(_647(_2356.value0))(x);
                        };
                        throw new Error("Failed pattern match");
                    })(_646.value0(x));
                });
            };
        }, function (__1) {
            return applyForeignParser({});
        });
    };
    var index = function (__dict_ReadForeign_525) {
        return function (i) {
            return Prelude[">>="](bindForeignParser({}))(new ForeignParser(function (x) {
                return Data_Either.Right.create(readIndexImpl$prime(i)(x));
            }))(function (x) {
                return new ForeignParser(function (_) {
                    return (function (_2360) {
                        if (_2360 instanceof Data_Either.Right) {
                            return new Data_Either.Right(_2360.value0);
                        };
                        if (_2360 instanceof Data_Either.Left) {
                            return Data_Either.Left.create("Error reading index '" + Prelude.show(Prelude.showNumber({}))(i) + "':\n" + _2360.value0);
                        };
                        throw new Error("Failed pattern match");
                    })(parseForeign(read(__dict_ReadForeign_525))(x));
                });
            });
        };
    };
    var readIndexImpl$prime = function (index_1) {
        return function (x) {
            return readPropImpl(index_1, x);
        };
    };
    var prop = function (__dict_ReadForeign_522) {
        return function (p) {
            return Prelude[">>="](bindForeignParser({}))(new ForeignParser(function (x) {
                return Data_Either.Right.create(readPropImpl$prime(p)(x));
            }))(function (x) {
                return new ForeignParser(function (_) {
                    return (function (_2363) {
                        if (_2363 instanceof Data_Either.Right) {
                            return new Data_Either.Right(_2363.value0);
                        };
                        if (_2363 instanceof Data_Either.Left) {
                            return Data_Either.Left.create("Error reading property '" + p + "':\n" + _2363.value0);
                        };
                        throw new Error("Failed pattern match");
                    })(parseForeign(read(__dict_ReadForeign_522))(x));
                });
            });
        };
    };
    var readPropImpl$prime = function (prop_1) {
        return function (x) {
            return readPropImpl(prop_1, x);
        };
    };
    var readKeysImpl$prime = function (prop_1) {
        return function (x) {
            return readKeysImpl(Data_Either.Left.create, Data_Either.Right.create, prop_1, x);
        };
    };
    var keys = function (p) {
        return new ForeignParser(function (x) {
            return (function (_2366) {
                if (_2366 instanceof Data_Either.Right) {
                    return new Data_Either.Right(_2366.value0);
                };
                if (_2366 instanceof Data_Either.Left) {
                    return Data_Either.Left.create("Error reading object keys of '" + p + "':\n" + _2366.value0);
                };
                throw new Error("Failed pattern match");
            })(readKeysImpl$prime(p)(x));
        });
    };
    var readArray = function (__dict_ReadForeign_523) {
        return new ReadForeign((function () {
            var arrayItem = function (_650) {
                return (function (_2370) {
                    if (_2370 instanceof Data_Either.Right) {
                        return new Data_Either.Right(_2370.value0);
                    };
                    if (_2370 instanceof Data_Either.Left) {
                        return Data_Either.Left.create("Error reading item at index " + Prelude.show(Prelude.showNumber({}))(_650.value0) + ":\n" + _2370.value0);
                    };
                    throw new Error("Failed pattern match");
                })(parseForeign(read(__dict_ReadForeign_523))(_650.value1));
            };
            return Prelude[">>="](bindForeignParser({}))(ForeignParser.create(readPrimType("Array")))(function (xs) {
                return new ForeignParser(function (_) {
                    return Data_Traversable.traverse(Data_Traversable.traversableArray({}))(Data_Either.applicativeEither({}))(arrayItem)(Data_Tuple.zip(Data_Array.range(0)(Data_Array.length(xs)))(xs));
                });
            });
        })());
    };
    var readMaybe = function (__dict_ReadForeign_524) {
        return new ReadForeign(Prelude[">>="](bindForeignParser({}))(ForeignParser.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Either.Right.create)(readMaybeImpl$prime)))(function (x) {
            return new ForeignParser(function (_) {
                if (x instanceof Data_Maybe.Just) {
                    return Prelude[">>="](Data_Either.bindEither({}))(parseForeign(read(__dict_ReadForeign_524))(x.value0))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](Data_Either.monadEither({})))(Data_Maybe.Just.create));
                };
                if (x instanceof Data_Maybe.Nothing) {
                    return Prelude["return"](Data_Either.monadEither({}))(Data_Maybe.Nothing.value);
                };
                throw new Error("Failed pattern match");
            });
        }));
    };
    var applicativeForeignParser = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyForeignParser({});
        }, function (x) {
            return new ForeignParser(function (__1) {
                return new Data_Either.Right(x);
            });
        });
    };
    var monadForeignParser = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeForeignParser({});
        }, function (__1) {
            return bindForeignParser({});
        });
    };
    return {
        ForeignParser: ForeignParser, 
        ReadForeign: ReadForeign, 
        keys: keys, 
        index: index, 
        prop: prop, 
        read: read, 
        parseJSON: parseJSON, 
        parseForeign: parseForeign, 
        showForeign: showForeign, 
        functorForeignParser: functorForeignParser, 
        bindForeignParser: bindForeignParser, 
        applyForeignParser: applyForeignParser, 
        applicativeForeignParser: applicativeForeignParser, 
        monadForeignParser: monadForeignParser, 
        readString: readString, 
        readNumber: readNumber, 
        readBoolean: readBoolean, 
        readError: readError, 
        readArray: readArray, 
        readMaybe: readMaybe
    };
})();
var PS = PS || {};
PS.Data_UUID = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Foreign = PS.Data_Foreign;
    var Data_Either = PS.Data_Either;
    var uuid;try {  require;  uuid = require('node-uuid');} catch (e) {  uuid = window.uuid;};
    function showuuid(ident) {  return ident.toString();};
    function v1() {  return uuid.v1();};
    function v4() {  return uuid.v4();};
    function runUUID(UUID) {  return UUID();};
    function parse(str) {  return uuid.parse(str);};
    function unparse(buffer) {  return uuid.unparse(buffer);};
    var showUUID = function (_) {
        return new Prelude.Show(function (ident) {
            return showuuid(ident);
        });
    };
    var readUUID = function (_) {
        return new Data_Foreign.ReadForeign(new Data_Foreign.ForeignParser(function (x) {
            return Data_Either.Right.create(unparse(parse(Prelude.show(Data_Foreign.showForeign({}))(x))));
        }));
    };
    var eqUUID = function (_) {
        return new Prelude.Eq(function (ident) {
            return function (ident$prime) {
                return !Prelude["=="](eqUUID({}))(ident)(ident$prime);
            };
        }, function (ident) {
            return function (ident$prime) {
                return showuuid(ident) === showuuid(ident$prime);
            };
        });
    };
    return {
        unparse: unparse, 
        parse: parse, 
        runUUID: runUUID, 
        v4: v4, 
        v1: v1, 
        showuuid: showuuid, 
        uuid: uuid, 
        eqUUID: eqUUID, 
        showUUID: showUUID, 
        readUUID: readUUID
    };
})();
var PS = PS || {};
PS.SlamData_App_Panel_Tab = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_String = PS.Data_String;
    var Data_UUID = PS.Data_UUID;
    var React_DOM = PS.React_DOM;
    function Tab(value0) {
        this.value0 = value0;
    };
    Tab.create = function (value0) {
        return new Tab(value0);
    };
    var removeDashes = Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_String.split("-"))(Data_String.joinWith(""));
    var tabize = Prelude[">>>"](Prelude.semigroupoidArr({}))(Prelude.show(Data_UUID.showUUID({})))(Prelude[">>>"](Prelude.semigroupoidArr({}))(removeDashes)(Prelude["++"](Prelude.semigroupString({}))("tab-")));
    var makeCont = function (props) {
        return React_DOM.div([ React_DOM.className("content active"), React_DOM.idProp(tabize(props.ident)) ])([ React_DOM.div([ React_DOM.className("toolbar button-bar") ])([ React_DOM.ul([ React_DOM.className("button-group") ])(props.external), React_DOM.ul([ React_DOM.className("button-group") ])(props.internal) ]), React_DOM["hr'"]([  ]), React_DOM.div([ React_DOM.className("actual-content") ])(props.content) ]);
    };
    var activate = function (_651) {
        return function (_652) {
            if (_652) {
                return _651 + " active";
            };
            if (!_652) {
                return _651;
            };
            throw new Error("Failed pattern match");
        };
    };
    var makeTabName = function (props) {
        return React_DOM.dd([ React_DOM.className(activate("tab")(props.active)) ])([ React_DOM.a([ React_DOM.href("#" + tabize(props.ident)), React_DOM.onClick(function (_) {
            return props.activate;
        }) ])([ React_DOM.text(props.name) ]) ]);
    };
    return {
        Tab: Tab, 
        tabize: tabize, 
        makeCont: makeCont, 
        makeTabName: makeTabName
    };
})();
var PS = PS || {};
PS.Node_FS_Async = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Function = PS.Data_Function;
    var Data_Foreign = PS.Data_Foreign;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Eff_Exception = PS.Control_Monad_Eff_Exception;
    var Data_Maybe = PS.Data_Maybe;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Node_Encoding = PS.Node_Encoding;
    var Node_FS_Stats = PS.Node_FS_Stats;
    var Node_FS = PS.Node_FS;
    var Data_Date = PS.Data_Date;
    function runCallbackEff (f) {  return f(); };
    var fs = require('fs');;
    var handleCallback = function (f) {
        return function (err, x) {
            return runCallbackEff(f((function (_2379) {
                if (_2379 instanceof Data_Either.Left) {
                    return Data_Either.Left.create(Control_Monad_Eff_Exception.error("handleCallback failed: " + Prelude.show(Prelude.showString({}))(_2379.value0)));
                };
                if (_2379 instanceof Data_Either.Right && _2379.value0 instanceof Data_Maybe.Just) {
                    return new Data_Either.Left(_2379.value0.value0);
                };
                if (_2379 instanceof Data_Either.Right && _2379.value0 instanceof Data_Maybe.Nothing) {
                    return new Data_Either.Right(x);
                };
                throw new Error("Failed pattern match");
            })(Data_Foreign.parseForeign(Data_Foreign.read(Data_Foreign.readMaybe(Data_Foreign.readError({}))))(err))));
        };
    };
    var link = function (src) {
        return function (dst) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.link(src, dst, handleCallback(cb)));
            };
        };
    };
    var mkdir$prime = function (file) {
        return function (mode) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.mkdir(file, mode, handleCallback(cb)));
            };
        };
    };
    var mkdir = Prelude.flip(mkdir$prime)(777);
    var readFile = function (file) {
        return function (cb) {
            return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.readFile(file, {}, handleCallback(cb)));
        };
    };
    var readTextFile = function (encoding) {
        return function (file) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.readFile(file, {
                    encoding: Prelude.show(Node_Encoding.showEncoding({}))(encoding)
                }, handleCallback(cb)));
            };
        };
    };
    var readdir = function (file) {
        return function (cb) {
            return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.readdir(file, handleCallback(cb)));
        };
    };
    var readlink = function (path) {
        return function (cb) {
            return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.readlink(path, handleCallback(cb)));
        };
    };
    var realpath = function (path) {
        return function (cb) {
            return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.realpath(path, {}, handleCallback(cb)));
        };
    };
    var realpath$prime = function (path) {
        return function (cache) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.realpath(path, cache, handleCallback(cb)));
            };
        };
    };
    var rename = function (oldFile) {
        return function (newFile) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.rename(oldFile, newFile, handleCallback(cb)));
            };
        };
    };
    var rmdir = function (file) {
        return function (cb) {
            return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.rmdir(file, handleCallback(cb)));
        };
    };
    var stat = function (file) {
        return function (cb) {
            return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.stat(file, handleCallback(Prelude["<<<"](Prelude.semigroupoidArr({}))(cb)(Prelude["<$>"](Data_Either.functorEither({}))(Node_FS_Stats.Stats.create)))));
        };
    };
    var symlink = function (src) {
        return function (dest) {
            return function (ty) {
                return function (cb) {
                    return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.symlink(src, dest, Prelude.show(Node_FS.showSymlinkType({}))(ty), handleCallback(cb)));
                };
            };
        };
    };
    var truncate = function (file) {
        return function (len) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.truncate(file, len, handleCallback(cb)));
            };
        };
    };
    var unlink = function (file) {
        return function (cb) {
            return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.unlink(file, handleCallback(cb)));
        };
    };
    var utimes = function (file) {
        return function (atime) {
            return function (mtime) {
                return function (cb) {
                    return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.utimes(file, Data_Date.toEpochMilliseconds(atime) / 1000, Data_Date.toEpochMilliseconds(mtime) / 1000, handleCallback(cb)));
                };
            };
        };
    };
    var writeFile = function (file) {
        return function (buff) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.writeFile(file, buff, {}, handleCallback(cb)));
            };
        };
    };
    var writeTextFile = function (encoding) {
        return function (file) {
            return function (buff) {
                return function (cb) {
                    return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.writeFile(file, buff, {
                        encoding: Prelude.show(Node_Encoding.showEncoding({}))(encoding)
                    }, handleCallback(cb)));
                };
            };
        };
    };
    var chown = function (file) {
        return function (uid) {
            return function (gid) {
                return function (cb) {
                    return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.chown(file, uid, gid, handleCallback(cb)));
                };
            };
        };
    };
    var chmod = function (file) {
        return function (mode) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.chmod(file, mode, handleCallback(cb)));
            };
        };
    };
    var appendTextFile = function (encoding) {
        return function (file) {
            return function (buff) {
                return function (cb) {
                    return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.appendFile(file, buff, {
                        encoding: Prelude.show(Node_Encoding.showEncoding({}))(encoding)
                    }, handleCallback(cb)));
                };
            };
        };
    };
    var appendFile = function (file) {
        return function (buff) {
            return function (cb) {
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(fs.appendFile(file, buff, {}, handleCallback(cb)));
            };
        };
    };
    return {
        appendTextFile: appendTextFile, 
        appendFile: appendFile, 
        writeTextFile: writeTextFile, 
        writeFile: writeFile, 
        readTextFile: readTextFile, 
        readFile: readFile, 
        utimes: utimes, 
        readdir: readdir, 
        "mkdir'": mkdir$prime, 
        mkdir: mkdir, 
        rmdir: rmdir, 
        unlink: unlink, 
        "realpath'": realpath$prime, 
        realpath: realpath, 
        readlink: readlink, 
        symlink: symlink, 
        link: link, 
        stat: stat, 
        chmod: chmod, 
        chown: chown, 
        truncate: truncate, 
        rename: rename
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook_Block_Types = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_String = PS.Data_String;
    var Data_UUID = PS.Data_UUID;
    var Data_Foreign = PS.Data_Foreign;
    var Data_Either = PS.Data_Either;
    var Data_Maybe = PS.Data_Maybe;
    function Loading() {

    };
    Loading.value = new Loading();
    function Successful(value0) {
        this.value0 = value0;
    };
    Successful.create = function (value0) {
        return new Successful(value0);
    };
    function Error(value0) {
        this.value0 = value0;
    };
    Error.create = function (value0) {
        return new Error(value0);
    };
    function Edit() {

    };
    Edit.value = new Edit();
    function Eval() {

    };
    Eval.value = new Eval();
    function Markdown() {

    };
    Markdown.value = new Markdown();
    function SQL() {

    };
    SQL.value = new SQL();
    function Visual() {

    };
    Visual.value = new Visual();
    function BlockID(value0) {
        this.value0 = value0;
    };
    BlockID.create = function (value0) {
        return new BlockID(value0);
    };
    function BlockSpec(value0) {
        this.value0 = value0;
    };
    BlockSpec.create = function (value0) {
        return new BlockSpec(value0);
    };
    function EvalSQLSpec(value0) {
        this.value0 = value0;
    };
    EvalSQLSpec.create = function (value0) {
        return new EvalSQLSpec(value0);
    };
    var startsWith = function (s) {
        return function (s$prime) {
            return Data_String.take(Data_String.length(s$prime))(s) === s$prime;
        };
    };
    var showLoadingStatus = function (_) {
        return new Prelude.Show(function (_663) {
            if (_663 instanceof Loading) {
                return "Loading";
            };
            if (_663 instanceof Successful) {
                return "Successful " + _663.value0;
            };
            if (_663 instanceof Error) {
                return "Error " + _663.value0;
            };
            throw new Error("Failed pattern match");
        });
    };
    var showBlockType = function (_) {
        return new Prelude.Show(function (_659) {
            if (_659 instanceof Markdown) {
                return "Markdown";
            };
            if (_659 instanceof SQL) {
                return "SQL";
            };
            if (_659 instanceof Visual) {
                return "Visual";
            };
            throw new Error("Failed pattern match");
        });
    };
    var showBlockID = function (_) {
        return new Prelude.Show(function (_656) {
            return Prelude.show(Data_UUID.showUUID({}))(_656.value0);
        });
    };
    var readLoadingStatus = function (_) {
        return new Data_Foreign.ReadForeign(new Data_Foreign.ForeignParser(function (str) {
            return (function (_2390) {
                if (_2390 instanceof Data_Either.Right && _2390.value0 === "Loading") {
                    return new Data_Either.Right(Loading.value);
                };
                if (_2390 instanceof Data_Either.Right && startsWith(_2390.value0)("Successful ")) {
                    return Data_Either.Right.create(Successful.create(Data_String.drop(Data_String.length("Successful "))(_2390.value0)));
                };
                if (_2390 instanceof Data_Either.Right && startsWith(_2390.value0)("Error ")) {
                    return Data_Either.Right.create(Successful.create(Data_String.drop(Data_String.length("Error "))(_2390.value0)));
                };
                if (_2390 instanceof Data_Either.Left) {
                    return new Data_Either.Left(_2390.value0);
                };
                throw new Error("Failed pattern match");
            })(Data_Foreign.parseForeign(Data_Foreign.read(Data_Foreign.readString({})))(str));
        }));
    };
    var readEvalSQLSpec = function (_) {
        return new Data_Foreign.ReadForeign(Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(Data_Foreign.readString({}))("content"))(function (_55) {
            return Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(Data_UUID.readUUID({}))("ident"))(function (_54) {
                return Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(readLoadingStatus({}))("status"))(function (_53) {
                    return Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(Data_Foreign.readMaybe(Data_Foreign.readString({})))("location"))(function (_52) {
                        return Prelude.pure(Data_Foreign.applicativeForeignParser({}))(new EvalSQLSpec({
                            content: _55, 
                            ident: new BlockID(_54), 
                            status: _53, 
                            location: _52
                        }));
                    });
                });
            });
        }));
    };
    var readBlockType = function (_) {
        return new Data_Foreign.ReadForeign(new Data_Foreign.ForeignParser(function (str) {
            return (function (_2399) {
                if (_2399 instanceof Data_Either.Right && _2399.value0 === "Markdown") {
                    return new Data_Either.Right(Markdown.value);
                };
                if (_2399 instanceof Data_Either.Right && _2399.value0 === "SQL") {
                    return new Data_Either.Right(SQL.value);
                };
                if (_2399 instanceof Data_Either.Right && _2399.value0 === "Visual") {
                    return new Data_Either.Right(Visual.value);
                };
                if (_2399 instanceof Data_Either.Left) {
                    return new Data_Either.Left(_2399.value0);
                };
                throw new Error("Failed pattern match");
            })(Data_Foreign.parseForeign(Data_Foreign.read(Data_Foreign.readString({})))(str));
        }));
    };
    var readBlockSpec = function (_) {
        return new Data_Foreign.ReadForeign(Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(readBlockType({}))("blockType"))(function (_51) {
            return Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(Data_Foreign.readMaybe(Data_Foreign.readString({})))("content"))(function (_50) {
                return Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(Data_UUID.readUUID({}))("ident"))(function (_49) {
                    return Prelude.pure(Data_Foreign.applicativeForeignParser({}))(new BlockSpec({
                        blockType: _51, 
                        content: _50, 
                        ident: new BlockID(_49)
                    }));
                });
            });
        }));
    };
    var handleString = function (_653) {
        if (_653 === "") {
            return "\"\"";
        };
        return Prelude.show(Prelude.showString({}))(_653);
    };
    var showBlockSpec = function (_) {
        return new Prelude.Show(function (_660) {
            return "{ \"blockType\": \"" + Prelude.show(showBlockType({}))(_660.value0.blockType) + "\"" + ", \"content\": " + Data_Maybe.maybe("null")(handleString)(_660.value0.content) + ", \"ident\": \"" + Prelude.show(showBlockID({}))(_660.value0.ident) + "\"" + "}";
        });
    };
    var showEvalSQLSpec = function (_) {
        return new Prelude.Show(function (_666) {
            return "{ \"ident\": \"" + Prelude.show(showBlockID({}))(_666.value0.ident) + "\"" + ", \"content\": \"" + _666.value0.content + "\"" + ", \"location\": " + Data_Maybe.maybe("null")(handleString)(_666.value0.location) + ", \"status\": \"" + Prelude.show(showLoadingStatus({}))(_666.value0.status) + "\"" + "}";
        });
    };
    var eqLoadingStatus = function (_) {
        return new Prelude.Eq(function (ls) {
            return function (ls$prime) {
                return !Prelude["=="](eqLoadingStatus({}))(ls)(ls$prime);
            };
        }, function (_661) {
            return function (_662) {
                if (_661 instanceof Loading && _662 instanceof Loading) {
                    return true;
                };
                if (_661 instanceof Successful && _662 instanceof Successful) {
                    return _661.value0 === _662.value0;
                };
                if (_661 instanceof Error && _662 instanceof Error) {
                    return _661.value0 === _662.value0;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var eqEditor = function (_) {
        return new Prelude.Eq(function (e) {
            return function (e$prime) {
                return !Prelude["=="](eqEditor({}))(e)(e$prime);
            };
        }, function (_657) {
            return function (_658) {
                if (_657 instanceof Edit && _658 instanceof Edit) {
                    return true;
                };
                if (_657 instanceof Eval && _658 instanceof Eval) {
                    return true;
                };
                return false;
            };
        });
    };
    var eqBlockID = function (_) {
        return new Prelude.Eq(function (b) {
            return function (b$prime) {
                return !Prelude["=="](eqBlockID({}))(b)(b$prime);
            };
        }, function (_654) {
            return function (_655) {
                return Prelude["=="](Data_UUID.eqUUID({}))(_654.value0)(_655.value0);
            };
        });
    };
    var eqEvalSQLSpec = function (_) {
        return new Prelude.Eq(function (ess) {
            return function (ess$prime) {
                return !Prelude["=="](eqEvalSQLSpec({}))(ess)(ess$prime);
            };
        }, function (_664) {
            return function (_665) {
                return Prelude["=="](eqBlockID({}))(_664.value0.ident)(_665.value0.ident) && Prelude["=="](eqLoadingStatus({}))(_664.value0.status)(_665.value0.status) && _664.value0.content === _665.value0.content && Prelude["=="](Data_Maybe.eqMaybe(Prelude.eqString({})))(_664.value0.location)(_665.value0.location);
            };
        });
    };
    return {
        EvalSQLSpec: EvalSQLSpec, 
        Loading: Loading, 
        Successful: Successful, 
        Error: Error, 
        Edit: Edit, 
        Eval: Eval, 
        BlockSpec: BlockSpec, 
        BlockID: BlockID, 
        Markdown: Markdown, 
        SQL: SQL, 
        Visual: Visual, 
        startsWith: startsWith, 
        handleString: handleString, 
        eqBlockID: eqBlockID, 
        showBlockID: showBlockID, 
        eqEditor: eqEditor, 
        showBlockType: showBlockType, 
        readBlockType: readBlockType, 
        showBlockSpec: showBlockSpec, 
        readBlockSpec: readBlockSpec, 
        eqLoadingStatus: eqLoadingStatus, 
        readLoadingStatus: readLoadingStatus, 
        showLoadingStatus: showLoadingStatus, 
        eqEvalSQLSpec: eqEvalSQLSpec, 
        showEvalSQLSpec: showEvalSQLSpec, 
        readEvalSQLSpec: readEvalSQLSpec
    };
})();
var PS = PS || {};
PS.Data_Graph = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Math = PS.Math;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_ST = PS.Control_Monad_ST;
    var Data_Map = PS.Data_Map;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Traversable = PS.Data_Traversable;
    var Control_Monad = PS.Control_Monad;
    var Data_Array = PS.Data_Array;
    function AcyclicSCC(value0) {
        this.value0 = value0;
    };
    AcyclicSCC.create = function (value0) {
        return new AcyclicSCC(value0);
    };
    function CyclicSCC(value0) {
        this.value0 = value0;
    };
    CyclicSCC.create = function (value0) {
        return new CyclicSCC(value0);
    };
    function Edge(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Edge.create = function (value0) {
        return function (value1) {
            return new Edge(value0, value1);
        };
    };
    function Graph(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Graph.create = function (value0) {
        return function (value1) {
            return new Graph(value0, value1);
        };
    };
    var vertices = function (_669) {
        if (_669 instanceof AcyclicSCC) {
            return [ _669.value0 ];
        };
        if (_669 instanceof CyclicSCC) {
            return _669.value0;
        };
        throw new Error("Failed pattern match");
    };
    var showSCC = function (__dict_Show_527) {
        return new Prelude.Show(function (_679) {
            if (_679 instanceof AcyclicSCC) {
                return "AcyclicSCC (" + Prelude.show(__dict_Show_527)(_679.value0) + ")";
            };
            if (_679 instanceof CyclicSCC) {
                return "CyclicSCC " + Prelude.show(Prelude.showArray(__dict_Show_527))(_679.value0);
            };
            throw new Error("Failed pattern match");
        });
    };
    var popUntil = function (__copy___dict_Eq_528) {
        return function (__copy__673) {
            return function (__copy__674) {
                return function (__copy__675) {
                    return function (__copy__676) {
                        var __dict_Eq_528 = __copy___dict_Eq_528;
                        var _673 = __copy__673;
                        var _674 = __copy__674;
                        var _675 = __copy__675;
                        var _676 = __copy__676;
                        tco: while (true) {
                            if (_675.length === 0) {
                                return {
                                    path: [  ], 
                                    component: _676
                                };
                            };
                            if (_675.length > 0) {
                                var _2439 = _675.slice(1);
                                if (Prelude["=="](__dict_Eq_528)(_673(_674))(_673(_675[0]))) {
                                    return {
                                        path: _2439, 
                                        component: Prelude[":"](_675[0])(_676)
                                    };
                                };
                            };
                            if (_675.length > 0) {
                                var _2441 = _675.slice(1);
                                var __tco___dict_Eq_528 = __dict_Eq_528;
                                var __tco__673 = _673;
                                var __tco__674 = _674;
                                var __tco__676 = Prelude[":"](_675[0])(_676);
                                __dict_Eq_528 = __tco___dict_Eq_528;
                                _673 = __tco__673;
                                _674 = __tco__674;
                                _675 = _2441;
                                _676 = __tco__676;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
            };
        };
    };
    var maybeMin = function (_677) {
        return function (_678) {
            if (_678 instanceof Data_Maybe.Nothing) {
                return new Data_Maybe.Just(_677);
            };
            if (_678 instanceof Data_Maybe.Just) {
                return Data_Maybe.Just.create(Math.min(_677)(_678.value0));
            };
            throw new Error("Failed pattern match");
        };
    };
    var scc$prime = function (__dict_Eq_529) {
        return function (__dict_Ord_530) {
            return function (_670) {
                return function (_671) {
                    return function (_672) {
                        return Control_Monad_Eff.runPure(function __do() {
                            var _71 = {
                                value: 0
                            };
                            var _70 = {
                                value: [  ]
                            };
                            var _69 = {
                                value: Data_Map.empty
                            };
                            var _68 = {
                                value: Data_Map.empty
                            };
                            var _67 = {
                                value: [  ]
                            };
                            return (function () {
                                var lowlinkOfKey = function (k) {
                                    return function __do() {
                                        return Data_Map.lookup(__dict_Ord_530)(k)(_68.value);
                                    };
                                };
                                var lowlinkOf = function (v) {
                                    return lowlinkOfKey(_670(v));
                                };
                                var isCycle = function (k) {
                                    return Data_Foldable.any(Data_Foldable.foldableArray({}))(function (_668) {
                                        return Prelude["=="](__dict_Eq_529)(_668.value0)(k) && Prelude["=="](__dict_Eq_529)(_668.value1)(k);
                                    })(_672.value1);
                                };
                                var makeComponent = function (_683) {
                                    if (_683.length === 1 && !isCycle(_670(_683[0]))) {
                                        return new AcyclicSCC(_683[0]);
                                    };
                                    return new CyclicSCC(_683);
                                };
                                var indexOfKey = function (k) {
                                    return function __do() {
                                        return Data_Map.lookup(__dict_Ord_530)(k)(_69.value);
                                    };
                                };
                                var strongConnect = function (k) {
                                    var v = _671(k);
                                    return function __do() {
                                        var _66 = _71.value;
                                        _69.value = Data_Map.insert(__dict_Ord_530)(k)(_66)(_69.value);
                                        var __1 = _68.value = Data_Map.insert(__dict_Ord_530)(k)(_66)(_68.value);
                                        var __2 = _71.value = _66 + 1;
                                        var __3 = _70.value = Prelude[":"](v)(_70.value);
                                        var __4 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(_672.value1)(function (_667) {
                                            return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Prelude["=="](__dict_Eq_529)(k)(_667.value0))(function __do() {
                                                var _62 = indexOfKey(_667.value1)();
                                                return (function (_2464) {
                                                    if (_2464 instanceof Data_Maybe.Nothing) {
                                                        var w = _671(_667.value1);
                                                        return function __do() {
                                                            var __4 = strongConnect(_667.value1)();
                                                            var _59 = lowlinkOfKey(_667.value1)();
                                                            return Data_Foldable.for_(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableMaybe({}))(_59)(function (lowlink) {
                                                                return Control_Monad_ST.modifySTRef(_68)(Data_Map.alter(__dict_Ord_530)(maybeMin(lowlink))(k));
                                                            })();
                                                        };
                                                    };
                                                    return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Data_Foldable.elem(__dict_Eq_529)(Data_Foldable.foldableArray({}))(_667.value1)(Data_Array.map(_670)(_70.value)))(function __do() {
                                                        var _60 = indexOfKey(_667.value1)();
                                                        return Data_Foldable.for_(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableMaybe({}))(_60)(function (index_1) {
                                                            return Control_Monad_ST.modifySTRef(_68)(Data_Map.alter(__dict_Ord_530)(maybeMin(index_1))(k));
                                                        })();
                                                    });
                                                })(_62)();
                                            });
                                        })();
                                        var _65 = indexOfKey(k)();
                                        var _64 = lowlinkOfKey(k)();
                                        return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Prelude["=="](Data_Maybe.eqMaybe(Prelude.eqNumber({})))(_65)(_64))(function __do() {
                                            var _63 = _70.value;
                                            return (function () {
                                                var newPath = popUntil(__dict_Eq_529)(_670)(v)(_63)([  ]);
                                                return function __do() {
                                                    var __5 = _67.value = Prelude.flip(Prelude["++"](Data_Array.semigroupArray({})))([ makeComponent(newPath.component) ])(_67.value);
                                                    var __6 = _70.value = newPath.path;
                                                    return Prelude.unit;
                                                };
                                            })()();
                                        })();
                                    };
                                };
                                var indexOf = function (v) {
                                    return indexOfKey(_670(v));
                                };
                                var go = function (_682) {
                                    if (_682.length === 0) {
                                        return Control_Monad_ST.readSTRef(_67);
                                    };
                                    if (_682.length > 0) {
                                        var _2475 = _682.slice(1);
                                        return function __do() {
                                            var _58 = indexOf(_682[0])();
                                            Control_Monad.when(Control_Monad_Eff.monadEff({}))(Data_Maybe.isNothing(_58))(strongConnect(_670(_682[0])))();
                                            return go(_2475)();
                                        };
                                    };
                                    throw new Error("Failed pattern match");
                                };
                                return go(_672.value0);
                            })()();
                        });
                    };
                };
            };
        };
    };
    var scc = function (__dict_Eq_531) {
        return function (__dict_Ord_532) {
            return scc$prime(__dict_Eq_531)(__dict_Ord_532)(Prelude.id(Prelude.categoryArr({})))(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var topSort$prime = function (__dict_Eq_533) {
        return function (__dict_Ord_534) {
            return function (makeKey) {
                return function (makeVert) {
                    return Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.reverse)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.concatMap(vertices))(scc$prime(__dict_Eq_533)(__dict_Ord_534)(makeKey)(makeVert)));
                };
            };
        };
    };
    var topSort = function (__dict_Eq_535) {
        return function (__dict_Ord_536) {
            return topSort$prime(__dict_Eq_535)(__dict_Ord_536)(Prelude.id(Prelude.categoryArr({})))(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var eqSCC = function (__dict_Eq_537) {
        return new Prelude.Eq(function (scc1) {
            return function (scc2) {
                return !Prelude["=="](eqSCC(__dict_Eq_537))(scc1)(scc2);
            };
        }, function (_680) {
            return function (_681) {
                if (_680 instanceof AcyclicSCC && _681 instanceof AcyclicSCC) {
                    return Prelude["=="](__dict_Eq_537)(_680.value0)(_681.value0);
                };
                if (_680 instanceof CyclicSCC && _681 instanceof CyclicSCC) {
                    return Prelude["=="](Prelude.eqArray(__dict_Eq_537))(_680.value0)(_681.value0);
                };
                return false;
            };
        });
    };
    return {
        AcyclicSCC: AcyclicSCC, 
        CyclicSCC: CyclicSCC, 
        Graph: Graph, 
        Edge: Edge, 
        "topSort'": topSort$prime, 
        topSort: topSort, 
        "scc'": scc$prime, 
        scc: scc, 
        vertices: vertices, 
        showSCC: showSCC, 
        eqSCC: eqSCC
    };
})();
var PS = PS || {};
PS.SlamData_Types = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Map = PS.Data_Map;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Array = PS.Data_Array;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Argonaut_Encode = PS.Data_Argonaut_Encode;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Argonaut_Combinators = PS.Data_Argonaut_Combinators;
    var Data_Argonaut_Core = PS.Data_Argonaut_Core;
    var Data_Argonaut_Decode = PS.Data_Argonaut_Decode;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Either = PS.Data_Either;
    var SDConfig = {
        create: function (value) {
            return value;
        }
    };
    function MountMongo(value0) {
        this.value0 = value0;
    };
    MountMongo.create = function (value0) {
        return new MountMongo(value0);
    };
    var SEConfig = {
        create: function (value) {
            return value;
        }
    };
    var foldableMap = function (_) {
        return new Data_Foldable.Foldable(function (__dict_Monoid_541) {
            return function (f) {
                return function (ms) {
                    return Data_Foldable.foldMap(Data_Foldable.foldableArray({}))(__dict_Monoid_541)(f)(Data_Map.values(ms));
                };
            };
        }, function (f) {
            return function (z) {
                return function (ms) {
                    return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(f)(z)(Data_Map.values(ms));
                };
            };
        }, function (f) {
            return function (z) {
                return function (ms) {
                    return Data_Foldable.foldr(Data_Foldable.foldableArray({}))(f)(z)(Data_Map.values(ms));
                };
            };
        });
    };
    var traversableMap = function (__dict_Ord_538) {
        return new Data_Traversable.Traversable(foldableMap, function (_) {
            return Data_Map.functorMap({});
        }, function (__dict_Applicative_540) {
            return Data_Traversable.traverse(traversableMap(__dict_Ord_538))(__dict_Applicative_540)(Prelude.id(Prelude.categoryArr({})));
        }, function (__dict_Applicative_539) {
            return function (f) {
                return function (ms) {
                    return Data_Foldable.foldr(Data_Foldable.foldableArray({}))(function (x) {
                        return function (acc) {
                            return Prelude["<*>"](__dict_Applicative_539["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_539["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Map.union(__dict_Ord_538))(x))(acc);
                        };
                    })(Prelude.pure(__dict_Applicative_539)(Data_Map.empty))(Prelude["<$>"](Data_Array.functorArray({}))(function (fs) {
                        return Prelude["<$>"]((__dict_Applicative_539["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Tuple.uncurry(Data_Map.singleton))(fs);
                    })(Prelude["<$>"](Data_Array.functorArray({}))(Data_Traversable.traverse(Data_Traversable.traversableTuple({}))(__dict_Applicative_539)(f))(Data_Map.toList(ms))));
                };
            };
        });
    };
    var encodeSDConfig = function (_) {
        return new Data_Argonaut_Encode.EncodeJson(function (_685) {
            return Control_Monad_Identity.Identity.create(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJson({}))("server")(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJString({}))("location")(_685.server.location))(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJNumber({}))("port")(_685.server.port))(Data_Argonaut_Core.jsonEmptyObject))))(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJson({}))("nodeWebkit")(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJString({}))("java")(_685.nodeWebkit.java))(Data_Argonaut_Core.jsonEmptyObject)))(Data_Argonaut_Core.jsonEmptyObject)));
        });
    };
    var encodeMounting = function (_) {
        return new Data_Argonaut_Encode.EncodeJson(function (_687) {
            return Control_Monad_Identity.Identity.create(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJson({}))("mongodb")(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJString({}))("connectionUri")(_687.value0.connectionUri))(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJString({}))("database")(_687.value0.database))(Data_Argonaut_Core.jsonEmptyObject))))(Data_Argonaut_Core.jsonEmptyObject));
        });
    };
    var encodeMounting$prime = function (_684) {
        return Data_Argonaut_Combinators[":="](encodeMounting({}))(_684.value0)(_684.value1);
    };
    var encodeSEConfig = function (_) {
        return new Data_Argonaut_Encode.EncodeJson(function (_689) {
            return Control_Monad_Identity.Identity.create(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJson({}))("server")(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJNumber({}))("port")(_689.server.port))(Data_Argonaut_Core.jsonEmptyObject)))(Data_Argonaut_Combinators["~>"](Data_Argonaut_Combinators[":="](Data_Argonaut_Encode.encodeJsonIdIdJson({}))("mountings")(Data_Foldable.foldr(Data_Foldable.foldableArray({}))(Data_Argonaut_Combinators["~>"])(Data_Argonaut_Core.jsonEmptyObject)(Prelude["<$>"](Data_Array.functorArray({}))(encodeMounting$prime)(Data_Map.toList(_689.mountings)))))(Data_Argonaut_Core.jsonEmptyObject)));
        });
    };
    var decodeSDConfig = function (_) {
        return new Data_Argonaut_Decode.DecodeJson(function (_686) {
            return Data_Maybe.maybe(new Data_Either.Left("Not SDConfig."))(Data_Either.Right.create)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Argonaut_Core.toObject(_686))(function (_77) {
                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("server")(_77))(Data_Argonaut_Core.toObject))(function (_76) {
                    return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("location")(_76))(Data_Argonaut_Core.toString))(function (_75) {
                        return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("port")(_76))(Data_Argonaut_Core.toNumber))(function (_74) {
                            return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("nodeWebkit")(_77))(Data_Argonaut_Core.toObject))(function (_73) {
                                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("java")(_73))(Data_Argonaut_Core.toString))(function (_72) {
                                    return Prelude.pure(Data_Maybe.applicativeMaybe({}))({
                                        server: {
                                            location: _75, 
                                            port: _74
                                        }, 
                                        nodeWebkit: {
                                            java: _72
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            }));
        });
    };
    var decodeMounting = function (_) {
        return new Data_Argonaut_Decode.DecodeJson(function (_688) {
            return Data_Maybe.maybe(new Data_Either.Left("Not a MongoDB Mounting."))(Data_Either.Right.create)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Argonaut_Core.toObject(_688))(function (_81) {
                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("mongodb")(_81))(Data_Argonaut_Core.toObject))(function (_80) {
                    return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("connectionUri")(_80))(Data_Argonaut_Core.toString))(function (_79) {
                        return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("database")(_80))(Data_Argonaut_Core.toString))(function (_78) {
                            return Prelude.pure(Data_Maybe.applicativeMaybe({}))(new MountMongo({
                                connectionUri: _79, 
                                database: _78
                            }));
                        });
                    });
                });
            }));
        });
    };
    var decodeSEConfig = function (_) {
        return new Data_Argonaut_Decode.DecodeJson(function (_690) {
            return Data_Maybe.maybe(new Data_Either.Left("Not SEConfig."))(Data_Either.Right.create)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Argonaut_Core.toObject(_690))(function (_86) {
                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("server")(_86))(Data_Argonaut_Core.toObject))(function (_85) {
                    return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("port")(_85))(Data_Argonaut_Core.toNumber))(function (_84) {
                        return Prelude[">>="](Data_Maybe.bindMaybe({}))(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("mountings")(_86))(Data_Argonaut_Core.toObject))(function (_83) {
                            return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Traversable.traverse(traversableMap(Prelude.ordString({})))(Data_Maybe.applicativeMaybe({}))(Data_Argonaut_Decode.decodeMaybe(decodeMounting({})))(_83))(function (_82) {
                                return Prelude.pure(Data_Maybe.applicativeMaybe({}))({
                                    server: {
                                        port: _84
                                    }, 
                                    mountings: _82
                                });
                            });
                        });
                    });
                });
            }));
        });
    };
    var decodeMap = function (__dict_DecodeJson_542) {
        return new Data_Argonaut_Decode.DecodeJson(function (_691) {
            return Data_Maybe.maybe(new Data_Either.Left("Couldn't decode."))(Data_Either.Right.create)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Argonaut_Core.toObject(_691))(function (_87) {
                return Data_Traversable.traverse(traversableMap(Prelude.ordString({})))(Data_Maybe.applicativeMaybe({}))(Data_Argonaut_Decode.decodeMaybe(__dict_DecodeJson_542))(_87);
            }));
        });
    };
    return {
        MountMongo: MountMongo, 
        SEConfig: SEConfig, 
        SDConfig: SDConfig, 
        "encodeMounting'": encodeMounting$prime, 
        encodeSDConfig: encodeSDConfig, 
        decodeSDConfig: decodeSDConfig, 
        encodeMounting: encodeMounting, 
        decodeMounting: decodeMounting, 
        encodeSEConfig: encodeSEConfig, 
        decodeSEConfig: decodeSEConfig, 
        decodeMap: decodeMap, 
        foldableMap: foldableMap, 
        traversableMap: traversableMap
    };
})();
var PS = PS || {};
PS.SlamData_Lens = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Lens = PS.Control_Lens;
    var SlamData_Types = PS.SlamData_Types;
    var _settings = function (__dict_Functor_543) {
        return Control_Lens.lens(function (o) {
            return o.settings;
        })(function (o) {
            return function (x) {
                var _2511 = {};
                for (var _2512 in o) {
                    if (o.hasOwnProperty(_2512)) {
                        _2511[_2512] = o[_2512];
                    };
                };
                _2511.settings = x;
                return _2511;
            };
        })(__dict_Functor_543);
    };
    var _server = function (__dict_Functor_544) {
        return Control_Lens.lens(function (o) {
            return o.server;
        })(function (o) {
            return function (x) {
                var _2513 = {};
                for (var _2514 in o) {
                    if (o.hasOwnProperty(_2514)) {
                        _2513[_2514] = o[_2514];
                    };
                };
                _2513.server = x;
                return _2513;
            };
        })(__dict_Functor_544);
    };
    var _seConfigRec = function (__dict_Functor_545) {
        return Control_Lens.lens(function (_693) {
            return _693;
        })(function (_) {
            return function (rec) {
                return rec;
            };
        })(__dict_Functor_545);
    };
    var _seConfig = function (__dict_Functor_546) {
        return Control_Lens.lens(function (o) {
            return o.seConfig;
        })(function (o) {
            return function (x) {
                var _2516 = {};
                for (var _2517 in o) {
                    if (o.hasOwnProperty(_2517)) {
                        _2516[_2517] = o[_2517];
                    };
                };
                _2516.seConfig = x;
                return _2516;
            };
        })(__dict_Functor_546);
    };
    var _sdConfigRec = function (__dict_Functor_547) {
        return Control_Lens.lens(function (_692) {
            return _692;
        })(function (_) {
            return function (rec) {
                return rec;
            };
        })(__dict_Functor_547);
    };
    var _sdConfig = function (__dict_Functor_548) {
        return Control_Lens.lens(function (o) {
            return o.sdConfig;
        })(function (o) {
            return function (x) {
                var _2519 = {};
                for (var _2520 in o) {
                    if (o.hasOwnProperty(_2520)) {
                        _2519[_2520] = o[_2520];
                    };
                };
                _2519.sdConfig = x;
                return _2519;
            };
        })(__dict_Functor_548);
    };
    var _port = function (__dict_Functor_549) {
        return Control_Lens.lens(function (o) {
            return o.port;
        })(function (o) {
            return function (x) {
                var _2521 = {};
                for (var _2522 in o) {
                    if (o.hasOwnProperty(_2522)) {
                        _2521[_2522] = o[_2522];
                    };
                };
                _2521.port = x;
                return _2521;
            };
        })(__dict_Functor_549);
    };
    var _nodeWebkit = function (__dict_Functor_550) {
        return Control_Lens.lens(function (o) {
            return o.nodeWebkit;
        })(function (o) {
            return function (x) {
                var _2523 = {};
                for (var _2524 in o) {
                    if (o.hasOwnProperty(_2524)) {
                        _2523[_2524] = o[_2524];
                    };
                };
                _2523.nodeWebkit = x;
                return _2523;
            };
        })(__dict_Functor_550);
    };
    var _mountings = function (__dict_Functor_551) {
        return Control_Lens.lens(function (o) {
            return o.mountings;
        })(function (o) {
            return function (x) {
                var _2525 = {};
                for (var _2526 in o) {
                    if (o.hasOwnProperty(_2526)) {
                        _2525[_2526] = o[_2526];
                    };
                };
                _2525.mountings = x;
                return _2525;
            };
        })(__dict_Functor_551);
    };
    var _mountingRec = function (__dict_Functor_552) {
        return Control_Lens.lens(function (_694) {
            return _694.value0;
        })(function (_) {
            return function (rec) {
                return new SlamData_Types.MountMongo(rec);
            };
        })(__dict_Functor_552);
    };
    var _location = function (__dict_Functor_553) {
        return Control_Lens.lens(function (o) {
            return o.location;
        })(function (o) {
            return function (x) {
                var _2529 = {};
                for (var _2530 in o) {
                    if (o.hasOwnProperty(_2530)) {
                        _2529[_2530] = o[_2530];
                    };
                };
                _2529.location = x;
                return _2529;
            };
        })(__dict_Functor_553);
    };
    var _java = function (__dict_Functor_554) {
        return Control_Lens.lens(function (o) {
            return o.java;
        })(function (o) {
            return function (x) {
                var _2531 = {};
                for (var _2532 in o) {
                    if (o.hasOwnProperty(_2532)) {
                        _2531[_2532] = o[_2532];
                    };
                };
                _2531.java = x;
                return _2531;
            };
        })(__dict_Functor_554);
    };
    var _database = function (__dict_Functor_555) {
        return Control_Lens.lens(function (o) {
            return o.database;
        })(function (o) {
            return function (x) {
                var _2533 = {};
                for (var _2534 in o) {
                    if (o.hasOwnProperty(_2534)) {
                        _2533[_2534] = o[_2534];
                    };
                };
                _2533.database = x;
                return _2533;
            };
        })(__dict_Functor_555);
    };
    var _connectionUri = function (__dict_Functor_556) {
        return Control_Lens.lens(function (o) {
            return o.connectionUri;
        })(function (o) {
            return function (x) {
                var _2535 = {};
                for (var _2536 in o) {
                    if (o.hasOwnProperty(_2536)) {
                        _2535[_2536] = o[_2536];
                    };
                };
                _2535.connectionUri = x;
                return _2535;
            };
        })(__dict_Functor_556);
    };
    return {
        _settings: _settings, 
        _database: _database, 
        _connectionUri: _connectionUri, 
        _mountings: _mountings, 
        _java: _java, 
        _nodeWebkit: _nodeWebkit, 
        _port: _port, 
        _location: _location, 
        _server: _server, 
        _seConfig: _seConfig, 
        _sdConfig: _sdConfig, 
        _mountingRec: _mountingRec, 
        _seConfigRec: _seConfigRec, 
        _sdConfigRec: _sdConfigRec
    };
})();
var PS = PS || {};
PS.Text_Parsing_Parser_Expr = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Data_Foldable = PS.Data_Foldable;
    var Text_Parsing_Parser_Combinators = PS.Text_Parsing_Parser_Combinators;
    function AssocNone() {

    };
    AssocNone.value = new AssocNone();
    function AssocLeft() {

    };
    AssocLeft.value = new AssocLeft();
    function AssocRight() {

    };
    AssocRight.value = new AssocRight();
    function Infix(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Infix.create = function (value0) {
        return function (value1) {
            return new Infix(value0, value1);
        };
    };
    function Prefix(value0) {
        this.value0 = value0;
    };
    Prefix.create = function (value0) {
        return new Prefix(value0);
    };
    function Postfix(value0) {
        this.value0 = value0;
    };
    Postfix.create = function (value0) {
        return new Postfix(value0);
    };
    var termP = function (__dict_Monad_557) {
        return function (prefixP) {
            return function (term) {
                return function (postfixP) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_557))(prefixP)(function (_97) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_557))(term)(function (_96) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_557))(postfixP)(function (_95) {
                                return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_557))(_95(_97(_96)));
                            });
                        });
                    });
                };
            };
        };
    };
    var splitOp = function (_695) {
        return function (_696) {
            if (_695 instanceof Infix && _695.value1 instanceof AssocNone) {
                var _2542 = {};
                for (var _2543 in _696) {
                    if (_696.hasOwnProperty(_2543)) {
                        _2542[_2543] = _696[_2543];
                    };
                };
                _2542.nassoc = Prelude[":"](_695.value0)(_696.nassoc);
                return _2542;
            };
            if (_695 instanceof Infix && _695.value1 instanceof AssocLeft) {
                var _2546 = {};
                for (var _2547 in _696) {
                    if (_696.hasOwnProperty(_2547)) {
                        _2546[_2547] = _696[_2547];
                    };
                };
                _2546.lassoc = Prelude[":"](_695.value0)(_696.lassoc);
                return _2546;
            };
            if (_695 instanceof Infix && _695.value1 instanceof AssocRight) {
                var _2550 = {};
                for (var _2551 in _696) {
                    if (_696.hasOwnProperty(_2551)) {
                        _2550[_2551] = _696[_2551];
                    };
                };
                _2550.rassoc = Prelude[":"](_695.value0)(_696.rassoc);
                return _2550;
            };
            if (_695 instanceof Prefix) {
                var _2554 = {};
                for (var _2555 in _696) {
                    if (_696.hasOwnProperty(_2555)) {
                        _2554[_2555] = _696[_2555];
                    };
                };
                _2554.prefix = Prelude[":"](_695.value0)(_696.prefix);
                return _2554;
            };
            if (_695 instanceof Postfix) {
                var _2557 = {};
                for (var _2558 in _696) {
                    if (_696.hasOwnProperty(_2558)) {
                        _2557[_2558] = _696[_2558];
                    };
                };
                _2557.postfix = Prelude[":"](_695.value0)(_696.postfix);
                return _2557;
            };
            throw new Error("Failed pattern match");
        };
    };
    var rassocP = function (__dict_Monad_558) {
        return function (x) {
            return function (rassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_558))(rassocOp)(function (_90) {
                                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_558))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_558))(termP(__dict_Monad_558)(prefixP)(term)(postfixP))(function (_88) {
                                    return rassocP1(__dict_Monad_558)(_88)(rassocOp)(prefixP)(term)(postfixP);
                                }))(function (_89) {
                                    return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_558))(_90(x)(_89));
                                });
                            });
                        };
                    };
                };
            };
        };
    };
    var rassocP1 = function (__dict_Monad_559) {
        return function (x) {
            return function (rassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_559))(rassocP(__dict_Monad_559)(x)(rassocOp)(prefixP)(term)(postfixP))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_559))(x));
                        };
                    };
                };
            };
        };
    };
    var nassocP = function (__dict_Monad_560) {
        return function (x) {
            return function (nassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_560))(nassocOp)(function (_94) {
                                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_560))(termP(__dict_Monad_560)(prefixP)(term)(postfixP))(function (_93) {
                                    return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_560))(_94(x)(_93));
                                });
                            });
                        };
                    };
                };
            };
        };
    };
    var lassocP = function (__dict_Monad_561) {
        return function (x) {
            return function (lassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_561))(lassocOp)(function (_92) {
                                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_561))(termP(__dict_Monad_561)(prefixP)(term)(postfixP))(function (_91) {
                                    return lassocP1(__dict_Monad_561)(_92(x)(_91))(lassocOp)(prefixP)(term)(postfixP);
                                });
                            });
                        };
                    };
                };
            };
        };
    };
    var lassocP1 = function (__dict_Monad_562) {
        return function (x) {
            return function (lassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_562))(lassocP(__dict_Monad_562)(x)(lassocOp)(prefixP)(term)(postfixP))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_562))(x));
                        };
                    };
                };
            };
        };
    };
    var buildExprParser = function (__dict_Monad_563) {
        return function (operators) {
            return function (simpleExpr) {
                var makeParser = function (term) {
                    return function (ops) {
                        var accum = Data_Foldable.foldr(Data_Foldable.foldableArray({}))(splitOp)({
                            rassoc: [  ], 
                            lassoc: [  ], 
                            nassoc: [  ], 
                            prefix: [  ], 
                            postfix: [  ]
                        })(ops);
                        var rassocOp = Text_Parsing_Parser_Combinators.choice(__dict_Monad_563)(accum.rassoc);
                        var lassocOp = Text_Parsing_Parser_Combinators.choice(__dict_Monad_563)(accum.lassoc);
                        var nassocOp = Text_Parsing_Parser_Combinators.choice(__dict_Monad_563)(accum.nassoc);
                        var prefixOp = Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_563)(Text_Parsing_Parser_Combinators.choice(__dict_Monad_563)(accum.prefix))("");
                        var postfixOp = Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_563)(Text_Parsing_Parser_Combinators.choice(__dict_Monad_563)(accum.postfix))("");
                        var postfixP = Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_563))(postfixOp)(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_563))(Prelude.id(Prelude.categoryArr({}))));
                        var prefixP = Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_563))(prefixOp)(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_563))(Prelude.id(Prelude.categoryArr({}))));
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_563))(termP(__dict_Monad_563)(prefixP)(term)(postfixP))(function (_98) {
                            return Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_563)(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_563))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_563))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_563))(rassocP(__dict_Monad_563)(_98)(rassocOp)(prefixP)(term)(postfixP))(lassocP(__dict_Monad_563)(_98)(lassocOp)(prefixP)(term)(postfixP)))(nassocP(__dict_Monad_563)(_98)(nassocOp)(prefixP)(term)(postfixP)))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_563))(_98)))("operator");
                        });
                    };
                };
                return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(makeParser)(simpleExpr)(operators);
            };
        };
    };
    return {
        Infix: Infix, 
        Prefix: Prefix, 
        Postfix: Postfix, 
        AssocNone: AssocNone, 
        AssocLeft: AssocLeft, 
        AssocRight: AssocRight, 
        buildExprParser: buildExprParser, 
        termP: termP, 
        nassocP: nassocP, 
        lassocP1: lassocP1, 
        lassocP: lassocP, 
        rassocP1: rassocP1, 
        rassocP: rassocP, 
        splitOp: splitOp
    };
})();
var PS = PS || {};
PS.Text_Parsing_Parser_String = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Data_String = PS.Data_String;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Error = PS.Control_Monad_Error;
    var Text_Parsing_Parser_Combinators = PS.Text_Parsing_Parser_Combinators;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Monoid = PS.Data_Monoid;
    var string = function (__dict_Monad_564) {
        return function (s) {
            return Text_Parsing_Parser.ParserT.create(function (s$prime) {
                return Prelude["return"](__dict_Monad_564)((function (_2568) {
                    if (_2568 === 0) {
                        return {
                            consumed: true, 
                            input: Data_String.drop(Data_String.length(s))(s$prime), 
                            result: new Data_Either.Right(s)
                        };
                    };
                    return {
                        consumed: false, 
                        input: s$prime, 
                        result: new Data_Either.Left(Control_Monad_Error.strMsg(Text_Parsing_Parser.errorParseError({}))("Expected " + Prelude.show(Prelude.showString({}))(s)))
                    };
                })(Data_String.indexOf(s)(s$prime)));
            });
        };
    };
    var whiteSpace = function (__dict_Monad_565) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_565))(Text_Parsing_Parser_Combinators.many(__dict_Monad_565)(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_565))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_565))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_565))(string(__dict_Monad_565)("\n"))(string(__dict_Monad_565)("\r")))(string(__dict_Monad_565)(" ")))(string(__dict_Monad_565)("\t"))))(function (_100) {
            return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_565))(Data_Foldable.foldMap(Data_Foldable.foldableArray({}))(Data_Monoid.monoidString({}))(Prelude.id(Prelude.categoryArr({})))(_100));
        });
    };
    var eof = function (__dict_Monad_566) {
        return Text_Parsing_Parser.ParserT.create(function (s) {
            return Prelude["return"](__dict_Monad_566)((function (_2570) {
                if (_2570 === "") {
                    return {
                        consumed: false, 
                        input: s, 
                        result: new Data_Either.Right({})
                    };
                };
                return {
                    consumed: false, 
                    input: s, 
                    result: new Data_Either.Left(Control_Monad_Error.strMsg(Text_Parsing_Parser.errorParseError({}))("Expected EOF"))
                };
            })(s));
        });
    };
    var $$char = function (__dict_Monad_567) {
        return Text_Parsing_Parser.ParserT.create(function (s$prime) {
            return Prelude["return"](__dict_Monad_567)((function (_2571) {
                if (_2571 === "") {
                    return {
                        consumed: false, 
                        input: s$prime, 
                        result: new Data_Either.Left(Control_Monad_Error.strMsg(Text_Parsing_Parser.errorParseError({}))("Unexpected EOF"))
                    };
                };
                return {
                    consumed: true, 
                    input: Data_String.drop(1)(s$prime), 
                    result: new Data_Either.Right(Data_String.charAt(0)(s$prime))
                };
            })(s$prime));
        });
    };
    var satisfy = function (__dict_Monad_568) {
        return function (f) {
            return Text_Parsing_Parser_Combinators["try"](((__dict_Monad_568["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_568))($$char(__dict_Monad_568))(function (_99) {
                return f(_99) ? Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_568))(_99) : Text_Parsing_Parser.fail(__dict_Monad_568)("Character did not satisfy predicate");
            }));
        };
    };
    return {
        whiteSpace: whiteSpace, 
        satisfy: satisfy, 
        "char": $$char, 
        string: string, 
        eof: eof
    };
})();
var PS = PS || {};
PS.Data_Argonaut_Parser = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Control_Apply = PS.Control_Apply;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Text_Parsing_Parser_String = PS.Text_Parsing_Parser_String;
    var Data_Maybe = PS.Data_Maybe;
    var Data_String = PS.Data_String;
    var Data_Argonaut_Core = PS.Data_Argonaut_Core;
    var Data_Foldable = PS.Data_Foldable;
    var Text_Parsing_Parser_Combinators = PS.Text_Parsing_Parser_Combinators;
    var Control_Lens = PS.Control_Lens;
    var Global = PS.Global;
    var Data_Array = PS.Data_Array;
    var Data_Map = PS.Data_Map;
    var Data_Tuple = PS.Data_Tuple;
    function ParseFailure(value0) {
        this.value0 = value0;
    };
    ParseFailure.create = function (value0) {
        return new ParseFailure(value0);
    };
    function ParseSuccess(value0) {
        this.value0 = value0;
    };
    ParseSuccess.create = function (value0) {
        return new ParseSuccess(value0);
    };
    function Parser(parseJson) {
        this.parseJson = parseJson;
    };
    var toEither = function (_705) {
        if (_705 instanceof ParseFailure) {
            return new Data_Either.Left(_705.value0);
        };
        if (_705 instanceof ParseSuccess) {
            return new Data_Either.Right(_705.value0);
        };
        throw new Error("Failed pattern match");
    };
    var solidus = "/";
    var skipSpaces = Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_String.whiteSpace(Control_Monad_Identity.monadIdentity({})))(Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))({}));
    var skipMany = function (__dict_Monad_569) {
        return function (p) {
            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_569))(skipMany1(__dict_Monad_569)(p))(Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_569))({}));
        };
    };
    var skipMany1 = function (__dict_Monad_570) {
        return function (p) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_570))(p)(function (_123) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_570))(skipMany(__dict_Monad_570)(p))(function (_122) {
                    return Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_570))({});
                });
            });
        };
    };
    var showParseResult = function (__dict_Show_571) {
        return new Prelude.Show(function (_709) {
            if (_709 instanceof ParseFailure) {
                return _709.value0;
            };
            if (_709 instanceof ParseSuccess) {
                return Prelude.show(__dict_Show_571)(_709.value0);
            };
            throw new Error("Failed pattern match");
        });
    };
    var showParseError = function (_) {
        return new Prelude.Show(function (_711) {
            return _711.value0.message;
        });
    };
    var reverseSolidus = "\\";
    var parseJson = function (dict) {
        return dict.parseJson;
    };
    var parseMaybe = function (__dict_Parser_572) {
        return function (x) {
            return (function (_2583) {
                if (_2583 instanceof ParseFailure) {
                    return Data_Maybe.Nothing.value;
                };
                if (_2583 instanceof ParseSuccess) {
                    return new Data_Maybe.Just(_2583.value0);
                };
                throw new Error("Failed pattern match");
            })(parseJson(__dict_Parser_572)(x));
        };
    };
    var parseFrom = function (__dict_Parser_573) {
        return parseJson(__dict_Parser_573);
    };
    var ord = Data_String.charCodeAt(0);
    var openBracket = "[";
    var openBrace = "{";
    var nullParser = Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("null")))(Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(Data_Argonaut_Core.jsonNull));
    var noneOf = function (__dict_Monad_574) {
        return function (ss) {
            return Text_Parsing_Parser_String.satisfy(__dict_Monad_574)(Prelude.flip(Data_Foldable.notElem(Prelude.eqString({}))(Data_Foldable.foldableArray({})))(ss));
        };
    };
    var newline = "n";
    var manyTill = function (__dict_Monad_575) {
        return function (p) {
            return function (end) {
                var scan = Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_575))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_575))(end)(function (_) {
                    return Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_575))([  ]);
                }))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_575))(p)(function (_126) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_575))(scan)(function (_125) {
                        return Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_575))(Prelude[":"](_126)(_125));
                    });
                }));
                return scan;
            };
        };
    };
    var many1Till = function (__dict_Monad_576) {
        return function (p) {
            return function (end) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_576))(p)(function (_128) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_576))(manyTill(__dict_Monad_576)(p)(end))(function (_127) {
                        return Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_576))(Prelude[":"](_128)(_127));
                    });
                });
            };
        };
    };
    var lookAhead = function (__dict_Monad_577) {
        return function (_704) {
            return new Text_Parsing_Parser.ParserT(function (s) {
                return Prelude[">>="](__dict_Monad_577["__superclass_Prelude.Bind_1"]({}))(_704.value0(s))(function (_124) {
                    return Prelude.pure(__dict_Monad_577["__superclass_Prelude.Applicative_0"]({}))((function () {
                        var _2592 = {};
                        for (var _2593 in _124) {
                            if (_124.hasOwnProperty(_2593)) {
                                _2592[_2593] = _124[_2593];
                            };
                        };
                        _2592.input = s;
                        _2592.consumed = false;
                        return _2592;
                    })());
                });
            });
        };
    };
    var isHexAlpha = function (str) {
        var n = ord(str);
        return 65 <= n && n <= 70 || 97 <= n && n <= 102;
    };
    var isDigit = function (_703) {
        if (48 <= ord(_703) && ord(_703) <= 57) {
            return true;
        };
        return false;
    };
    var isHex = Prelude["<*>"](Prelude.applyArr({}))(Prelude["<$>"](Prelude.functorArr({}))(Prelude["||"](Prelude.boolLikeBoolean({})))(isDigit))(isHexAlpha);
    var oneToNine = function (str) {
        return isDigit(str) && str !== "0";
    };
    var invalidJson = function (expected) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators.many(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}))))(function (s) {
            return Text_Parsing_Parser.fail(Control_Monad_Identity.monadIdentity({}))("Invalid JSON:\n\t" + "Expected " + expected + ".\n\t" + "Found: " + Data_String.joinWith("")(s));
        });
    };
    var normalChar = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(lookAhead(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}))))(function (_114) {
        if (_114 === "\"") {
            return invalidJson("unicode character");
        };
        if (_114 === "\\") {
            return invalidJson("unicode character");
        };
        return Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}));
    });
    var horizontalTab = "t";
    var hexDigit = Text_Parsing_Parser_String.satisfy(Control_Monad_Identity.monadIdentity({}))(isHex);
    var unicodeParser = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("u"))(function (_121) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(hexDigit)(function (_120) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(hexDigit)(function (_119) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(hexDigit)(function (_118) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(hexDigit)(function (_117) {
                        return Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(_121 + _120 + _119 + _118 + _117);
                    });
                });
            });
        });
    });
    var fromEither = function (_706) {
        if (_706 instanceof Data_Either.Left) {
            return new ParseFailure(_706.value0);
        };
        if (_706 instanceof Data_Either.Right) {
            return new ParseSuccess(_706.value0);
        };
        throw new Error("Failed pattern match");
    };
    var functorParseResult = function (_) {
        return new Prelude.Functor(function (f) {
            return function (x) {
                return fromEither(Prelude["<$>"](Data_Either.functorEither({}))(f)(toEither(x)));
            };
        });
    };
    var isoParseEither = function (__dict_Functor_578) {
        return function (__dict_Profunctor_579) {
            return Control_Lens.iso(__dict_Profunctor_579)(__dict_Functor_578)(toEither)(fromEither);
        };
    };
    var formfeed = "f";
    var eqParseResult = function (__dict_Eq_580) {
        return new Prelude.Eq(function (pr) {
            return function (pr$prime) {
                return !Prelude["=="](eqParseResult(__dict_Eq_580))(pr)(pr$prime);
            };
        }, function (_707) {
            return function (_708) {
                if (_707 instanceof ParseFailure && _708 instanceof ParseFailure) {
                    return _707.value0 === _708.value0;
                };
                if (_707 instanceof ParseSuccess && _708 instanceof ParseSuccess) {
                    return Prelude["=="](__dict_Eq_580)(_707.value0)(_708.value0);
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var doubleQuote = "\"";
    var quoted = function (__dict_Monad_581) {
        return Text_Parsing_Parser_Combinators.between(__dict_Monad_581)(Text_Parsing_Parser_String.string(__dict_Monad_581)(doubleQuote))(Text_Parsing_Parser_String.string(__dict_Monad_581)(doubleQuote));
    };
    var emptyStringParser = Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(quoted(Control_Monad_Identity.monadIdentity({}))(Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))("")));
    var digit = Text_Parsing_Parser_String.satisfy(Control_Monad_Identity.monadIdentity({}))(isDigit);
    var digits = Prelude["<$>"](Text_Parsing_Parser.functorParserT(Control_Monad_Identity.functorIdentity({})))(Data_String.joinWith(""))(manyTill(Control_Monad_Identity.monadIdentity({}))(digit)(lookAhead(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String.satisfy(Control_Monad_Identity.monadIdentity({}))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.not(Prelude.boolLikeBoolean({})))(isDigit)))));
    var expParser = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("e")))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("E")))(function (_113) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators.option(Control_Monad_Identity.monadIdentity({}))("")(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("+")))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("-")))))(function (_112) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(digits)(function (_111) {
                return Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(_113 + _112 + _111);
            });
        });
    });
    var fracParser = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("."))(function (_) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(digits)(function (_110) {
            return Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))("." + _110);
        });
    });
    var numberParser = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(function (_) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators.option(Control_Monad_Identity.monadIdentity({}))("")(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("-")))(function (_109) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(lookAhead(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}))))(function (_108) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))((function (_2618) {
                    if (_2618 === "0") {
                        return Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}));
                    };
                    if (oneToNine(_108)) {
                        return digits;
                    };
                    return invalidJson("digit");
                })(_108))(function (_107) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators.option(Control_Monad_Identity.monadIdentity({}))("")(fracParser))(function (_106) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators.option(Control_Monad_Identity.monadIdentity({}))("")(expParser))(function (_105) {
                            return Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(Data_Argonaut_Core.fromNumber(Global.readFloat(_109 + _107 + _106 + _105)));
                        });
                    });
                });
            });
        });
    });
    var controlChar = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(lookAhead(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}))))(function (_116) {
        if (_116 === "\\") {
            return Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({})))(Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(lookAhead(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}))))(function (_115) {
                return Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}));
            }));
        };
        return invalidJson("control character");
    });
    var nonEmptyStringParser = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(function (_) {
        return Prelude["<$>"](Text_Parsing_Parser.functorParserT(Control_Monad_Identity.functorIdentity({})))(Data_String.joinWith(""))(quoted(Control_Monad_Identity.monadIdentity({}))(manyTill(Control_Monad_Identity.monadIdentity({}))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(normalChar))(controlChar))(lookAhead(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))(doubleQuote)))));
    });
    var rawStringParser = Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(emptyStringParser))(nonEmptyStringParser);
    var stringParser = Prelude["<$>"](Text_Parsing_Parser.functorParserT(Control_Monad_Identity.functorIdentity({})))(Data_Argonaut_Core.fromString)(rawStringParser);
    var comma = ",";
    var closeBracket = "]";
    var closeBrace = "}";
    var carriageReturn = "r";
    var brackets = function (__dict_Monad_582) {
        return Text_Parsing_Parser_Combinators.between(__dict_Monad_582)(Text_Parsing_Parser_String.string(__dict_Monad_582)(openBracket))(Text_Parsing_Parser_String.string(__dict_Monad_582)(closeBracket));
    };
    var emptyArrayParser = Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(brackets(Control_Monad_Identity.monadIdentity({}))(Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(Data_Argonaut_Core.jsonEmptyArray))));
    var braces = function (__dict_Monad_583) {
        return Text_Parsing_Parser_Combinators.between(__dict_Monad_583)(Text_Parsing_Parser_String.string(__dict_Monad_583)(openBrace))(Text_Parsing_Parser_String.string(__dict_Monad_583)(closeBrace));
    };
    var emptyObjectParser = Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(braces(Control_Monad_Identity.monadIdentity({}))(Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(Data_Argonaut_Core.jsonEmptyObject))));
    var booleanParser = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(function (_) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(lookAhead(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}))))(function (_104) {
            if (_104 === "t") {
                return Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("true"))(Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(Data_Argonaut_Core.jsonTrue));
            };
            if (_104 === "f") {
                return Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("false"))(Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(Data_Argonaut_Core.jsonFalse));
            };
            return invalidJson("one of 'true' or 'false'");
        });
    });
    var backspace = "b";
    var arrayParser = function (_698) {
        return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(emptyArrayParser))(nonEmptyArrayParser);
    };
    var nonEmptyArrayParser = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(function (_) {
        return Prelude["<$>"](Text_Parsing_Parser.functorParserT(Control_Monad_Identity.functorIdentity({})))(Data_Argonaut_Core.fromArray)(brackets(Control_Monad_Identity.monadIdentity({}))(Control_Apply["<*"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(Text_Parsing_Parser_Combinators.sepBy(Control_Monad_Identity.monadIdentity({}))(valueParser(Prelude.unit))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))(comma))))(skipSpaces)));
    });
    var valueParser = function (_702) {
        return Text_Parsing_Parser_Combinators.choice(Control_Monad_Identity.monadIdentity({}))(Prelude["<$>"](Data_Array.functorArray({}))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({})))([ nullParser, booleanParser, stringParser, objectParser(Prelude.unit), arrayParser(Prelude.unit), numberParser ]));
    };
    var objectParser = function (_697) {
        return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(emptyObjectParser))(nonEmptyObjectParser(Prelude.unit));
    };
    var nonEmptyObjectParser = function (_699) {
        return Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(braces(Control_Monad_Identity.monadIdentity({}))(Control_Apply["<*"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(Control_Apply["*>"](Text_Parsing_Parser.applyParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(membersParser(Prelude.unit)))(skipSpaces)));
    };
    var membersParser = function (_700) {
        return Prelude["<$>"](Text_Parsing_Parser.functorParserT(Control_Monad_Identity.functorIdentity({})))(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Map.fromList(Prelude.ordString({})))(Data_Argonaut_Core.fromObject))(Text_Parsing_Parser_Combinators.sepBy1(Control_Monad_Identity.monadIdentity({}))(memberParser(Prelude.unit))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))(comma)));
    };
    var memberParser = function (_701) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(function (_) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(rawStringParser)(function (_103) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(function (__1) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))(":"))(function (__2) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(function (__3) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(valueParser(Prelude.unit))(function (_102) {
                                return Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(new Data_Tuple.Tuple(_103, _102));
                            });
                        });
                    });
                });
            });
        });
    };
    var jsonParser = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(skipSpaces)(function (_) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(lookAhead(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String["char"](Control_Monad_Identity.monadIdentity({}))))(function (_101) {
            if (_101 === "{") {
                return objectParser(Prelude.unit);
            };
            if (_101 === "[") {
                return arrayParser(Prelude.unit);
            };
            return invalidJson("object or array");
        });
    });
    var parseString = function (str) {
        return (function (_2638) {
            if (_2638 instanceof Data_Either.Left) {
                return new ParseFailure(_2638.value0.value0.message);
            };
            if (_2638 instanceof Data_Either.Right) {
                return new ParseSuccess(_2638.value0);
            };
            throw new Error("Failed pattern match");
        })(Text_Parsing_Parser.runParser(str)(jsonParser));
    };
    var parserIdParseResultString = function (_) {
        return new Parser(function (_710) {
            return parseString(_710);
        });
    };
    var applyParseResult = function (_) {
        return new Prelude.Apply(function (f) {
            return function (x) {
                return fromEither(Prelude["<*>"](Data_Either.applyEither({}))(toEither(f))(toEither(x)));
            };
        }, function (__1) {
            return functorParseResult({});
        });
    };
    var bindParseResult = function (_) {
        return new Prelude.Bind(function (m) {
            return function (f) {
                return fromEither(Prelude[">>="](Data_Either.bindEither({}))(toEither(m))(Prelude[">>>"](Prelude.semigroupoidArr({}))(f)(toEither)));
            };
        }, function (__1) {
            return applyParseResult({});
        });
    };
    var applicativeParseResult = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyParseResult({});
        }, ParseSuccess.create);
    };
    var monadParseResult = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeParseResult({});
        }, function (__1) {
            return bindParseResult({});
        });
    };
    return {
        ParseFailure: ParseFailure, 
        ParseSuccess: ParseSuccess, 
        Parser: Parser, 
        fromEither: fromEither, 
        toEither: toEither, 
        isoParseEither: isoParseEither, 
        quoted: quoted, 
        brackets: brackets, 
        braces: braces, 
        many1Till: many1Till, 
        manyTill: manyTill, 
        noneOf: noneOf, 
        lookAhead: lookAhead, 
        skipMany1: skipMany1, 
        skipMany: skipMany, 
        skipSpaces: skipSpaces, 
        oneToNine: oneToNine, 
        isDigit: isDigit, 
        ord: ord, 
        invalidJson: invalidJson, 
        valueParser: valueParser, 
        isHexAlpha: isHexAlpha, 
        isHex: isHex, 
        hexDigit: hexDigit, 
        unicodeParser: unicodeParser, 
        controlChar: controlChar, 
        normalChar: normalChar, 
        nonEmptyStringParser: nonEmptyStringParser, 
        emptyStringParser: emptyStringParser, 
        rawStringParser: rawStringParser, 
        stringParser: stringParser, 
        expParser: expParser, 
        fracParser: fracParser, 
        digit: digit, 
        digits: digits, 
        numberParser: numberParser, 
        booleanParser: booleanParser, 
        nullParser: nullParser, 
        nonEmptyArrayParser: nonEmptyArrayParser, 
        emptyArrayParser: emptyArrayParser, 
        memberParser: memberParser, 
        membersParser: membersParser, 
        nonEmptyObjectParser: nonEmptyObjectParser, 
        emptyObjectParser: emptyObjectParser, 
        arrayParser: arrayParser, 
        objectParser: objectParser, 
        jsonParser: jsonParser, 
        parseString: parseString, 
        parseMaybe: parseMaybe, 
        solidus: solidus, 
        reverseSolidus: reverseSolidus, 
        openBracket: openBracket, 
        openBrace: openBrace, 
        newline: newline, 
        horizontalTab: horizontalTab, 
        formfeed: formfeed, 
        doubleQuote: doubleQuote, 
        comma: comma, 
        closeBracket: closeBracket, 
        closeBrace: closeBrace, 
        carriageReturn: carriageReturn, 
        backspace: backspace, 
        parseFrom: parseFrom, 
        parseJson: parseJson, 
        undefined: undefined, 
        eqParseResult: eqParseResult, 
        showParseResult: showParseResult, 
        functorParseResult: functorParseResult, 
        applyParseResult: applyParseResult, 
        bindParseResult: bindParseResult, 
        applicativeParseResult: applicativeParseResult, 
        monadParseResult: monadParseResult, 
        parserIdParseResultString: parserIdParseResultString, 
        showParseError: showParseError
    };
})();
var PS = PS || {};
PS.Network_HTTP = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Text_Parsing_Parser_Combinators = PS.Text_Parsing_Parser_Combinators;
    var Text_Parsing_Parser_String = PS.Text_Parsing_Parser_String;
    var Control_Apply = PS.Control_Apply;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Data_Maybe = PS.Data_Maybe;
    var Data_String = PS.Data_String;
    function DELETE() {

    };
    DELETE.value = new DELETE();
    function GET() {

    };
    GET.value = new GET();
    function HEAD() {

    };
    HEAD.value = new HEAD();
    function OPTIONS() {

    };
    OPTIONS.value = new OPTIONS();
    function PATCH() {

    };
    PATCH.value = new PATCH();
    function POST() {

    };
    POST.value = new POST();
    function PUT() {

    };
    PUT.value = new PUT();
    function NoStatus() {

    };
    NoStatus.value = new NoStatus();
    function Accepted() {

    };
    Accepted.value = new Accepted();
    function BadGateway() {

    };
    BadGateway.value = new BadGateway();
    function BadRequest() {

    };
    BadRequest.value = new BadRequest();
    function Continue() {

    };
    Continue.value = new Continue();
    function Created() {

    };
    Created.value = new Created();
    function ExpectationFailed() {

    };
    ExpectationFailed.value = new ExpectationFailed();
    function Forbidden() {

    };
    Forbidden.value = new Forbidden();
    function Found() {

    };
    Found.value = new Found();
    function GatewayTimeout() {

    };
    GatewayTimeout.value = new GatewayTimeout();
    function Gone() {

    };
    Gone.value = new Gone();
    function HTTPVersionNotSupported() {

    };
    HTTPVersionNotSupported.value = new HTTPVersionNotSupported();
    function InternalServerError() {

    };
    InternalServerError.value = new InternalServerError();
    function LengthRequired() {

    };
    LengthRequired.value = new LengthRequired();
    function MethodNotAllowed() {

    };
    MethodNotAllowed.value = new MethodNotAllowed();
    function MovedPermanently() {

    };
    MovedPermanently.value = new MovedPermanently();
    function MultipleChoices() {

    };
    MultipleChoices.value = new MultipleChoices();
    function NoContent() {

    };
    NoContent.value = new NoContent();
    function NonAuthoritativeInformation() {

    };
    NonAuthoritativeInformation.value = new NonAuthoritativeInformation();
    function NotAcceptable() {

    };
    NotAcceptable.value = new NotAcceptable();
    function NotFound() {

    };
    NotFound.value = new NotFound();
    function NotImplemented() {

    };
    NotImplemented.value = new NotImplemented();
    function NotModified() {

    };
    NotModified.value = new NotModified();
    function Ok() {

    };
    Ok.value = new Ok();
    function PartialContent() {

    };
    PartialContent.value = new PartialContent();
    function PaymentRequired() {

    };
    PaymentRequired.value = new PaymentRequired();
    function PreconditionFailed() {

    };
    PreconditionFailed.value = new PreconditionFailed();
    function ProxyAuthenticationRequired() {

    };
    ProxyAuthenticationRequired.value = new ProxyAuthenticationRequired();
    function RequestedRangeNotSatisfiable() {

    };
    RequestedRangeNotSatisfiable.value = new RequestedRangeNotSatisfiable();
    function RequestEntityTooLarge() {

    };
    RequestEntityTooLarge.value = new RequestEntityTooLarge();
    function RequestTimeout() {

    };
    RequestTimeout.value = new RequestTimeout();
    function RequestURITooLong() {

    };
    RequestURITooLong.value = new RequestURITooLong();
    function ResetContent() {

    };
    ResetContent.value = new ResetContent();
    function SeeOther() {

    };
    SeeOther.value = new SeeOther();
    function ServiceUnavailable() {

    };
    ServiceUnavailable.value = new ServiceUnavailable();
    function SwitchingProtocols() {

    };
    SwitchingProtocols.value = new SwitchingProtocols();
    function TemporaryRedirect() {

    };
    TemporaryRedirect.value = new TemporaryRedirect();
    function Unauthorized() {

    };
    Unauthorized.value = new Unauthorized();
    function UnsupportedMediaType() {

    };
    UnsupportedMediaType.value = new UnsupportedMediaType();
    function UseProxy() {

    };
    UseProxy.value = new UseProxy();
    function Accept() {

    };
    Accept.value = new Accept();
    function AcceptCharset() {

    };
    AcceptCharset.value = new AcceptCharset();
    function AcceptEncoding() {

    };
    AcceptEncoding.value = new AcceptEncoding();
    function AcceptLanguage() {

    };
    AcceptLanguage.value = new AcceptLanguage();
    function Allow() {

    };
    Allow.value = new Allow();
    function Authorization() {

    };
    Authorization.value = new Authorization();
    function CacheControl() {

    };
    CacheControl.value = new CacheControl();
    function Connection() {

    };
    Connection.value = new Connection();
    function ContentEncoding() {

    };
    ContentEncoding.value = new ContentEncoding();
    function ContentLanguage() {

    };
    ContentLanguage.value = new ContentLanguage();
    function ContentLength() {

    };
    ContentLength.value = new ContentLength();
    function ContentLocation() {

    };
    ContentLocation.value = new ContentLocation();
    function ContentMD5() {

    };
    ContentMD5.value = new ContentMD5();
    function ContentRange() {

    };
    ContentRange.value = new ContentRange();
    function ContentType() {

    };
    ContentType.value = new ContentType();
    function Date() {

    };
    Date.value = new Date();
    function Expect() {

    };
    Expect.value = new Expect();
    function Expires() {

    };
    Expires.value = new Expires();
    function From() {

    };
    From.value = new From();
    function Host() {

    };
    Host.value = new Host();
    function IfMatch() {

    };
    IfMatch.value = new IfMatch();
    function IfModifiedSince() {

    };
    IfModifiedSince.value = new IfModifiedSince();
    function IfNoneMatch() {

    };
    IfNoneMatch.value = new IfNoneMatch();
    function IfRange() {

    };
    IfRange.value = new IfRange();
    function IfUnmodifiedSince() {

    };
    IfUnmodifiedSince.value = new IfUnmodifiedSince();
    function LastModified() {

    };
    LastModified.value = new LastModified();
    function MaxForwards() {

    };
    MaxForwards.value = new MaxForwards();
    function Pragma() {

    };
    Pragma.value = new Pragma();
    function ProxyAuthorization() {

    };
    ProxyAuthorization.value = new ProxyAuthorization();
    function Range() {

    };
    Range.value = new Range();
    function Referer() {

    };
    Referer.value = new Referer();
    function TE() {

    };
    TE.value = new TE();
    function Trailer() {

    };
    Trailer.value = new Trailer();
    function TransferEncoding() {

    };
    TransferEncoding.value = new TransferEncoding();
    function Upgrade() {

    };
    Upgrade.value = new Upgrade();
    function UserAgent() {

    };
    UserAgent.value = new UserAgent();
    function Via() {

    };
    Via.value = new Via();
    function Warning() {

    };
    Warning.value = new Warning();
    function Custom(value0) {
        this.value0 = value0;
    };
    Custom.create = function (value0) {
        return new Custom(value0);
    };
    function Header(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Header.create = function (value0) {
        return function (value1) {
            return new Header(value0, value1);
        };
    };
    var string2Head = function (_712) {
        if (_712 === "Accept") {
            return Accept.value;
        };
        if (_712 === "Accept-Charset") {
            return AcceptCharset.value;
        };
        if (_712 === "Accept-Encoding") {
            return AcceptEncoding.value;
        };
        if (_712 === "Accept-Language") {
            return AcceptLanguage.value;
        };
        if (_712 === "Allow") {
            return Allow.value;
        };
        if (_712 === "Authorization") {
            return Authorization.value;
        };
        if (_712 === "Cache-Control") {
            return CacheControl.value;
        };
        if (_712 === "Connection") {
            return Connection.value;
        };
        if (_712 === "Content-Encoding") {
            return ContentEncoding.value;
        };
        if (_712 === "Content-Language") {
            return ContentLanguage.value;
        };
        if (_712 === "Content-Length") {
            return ContentLength.value;
        };
        if (_712 === "Content-Location") {
            return ContentLocation.value;
        };
        if (_712 === "Content-MD5") {
            return ContentMD5.value;
        };
        if (_712 === "Content-Range") {
            return ContentRange.value;
        };
        if (_712 === "Content-Type") {
            return ContentType.value;
        };
        if (_712 === "Date") {
            return Date.value;
        };
        if (_712 === "Expect") {
            return Expect.value;
        };
        if (_712 === "Expires") {
            return Expires.value;
        };
        if (_712 === "From") {
            return From.value;
        };
        if (_712 === "Host") {
            return Host.value;
        };
        if (_712 === "If-Match") {
            return IfMatch.value;
        };
        if (_712 === "If-Modified-Since") {
            return IfModifiedSince.value;
        };
        if (_712 === "If-None-Match") {
            return IfNoneMatch.value;
        };
        if (_712 === "If-Range") {
            return IfRange.value;
        };
        if (_712 === "If-Unmodified-Since") {
            return IfUnmodifiedSince.value;
        };
        if (_712 === "Last-Modified") {
            return LastModified.value;
        };
        if (_712 === "Max-Forwards") {
            return MaxForwards.value;
        };
        if (_712 === "Pragma") {
            return Pragma.value;
        };
        if (_712 === "Proxy-Authorization") {
            return ProxyAuthorization.value;
        };
        if (_712 === "Range") {
            return Range.value;
        };
        if (_712 === "Referer") {
            return Referer.value;
        };
        if (_712 === "Te") {
            return TE.value;
        };
        if (_712 === "Trailer") {
            return Trailer.value;
        };
        if (_712 === "Transfer-Encoding") {
            return TransferEncoding.value;
        };
        if (_712 === "Upgrade") {
            return Upgrade.value;
        };
        if (_712 === "User-Agent") {
            return UserAgent.value;
        };
        if (_712 === "Via") {
            return Via.value;
        };
        if (_712 === "Warning") {
            return Warning.value;
        };
        return new Custom(_712);
    };
    var status2Number = function (_713) {
        if (_713 instanceof NoStatus) {
            return 0;
        };
        if (_713 instanceof Continue) {
            return 100;
        };
        if (_713 instanceof SwitchingProtocols) {
            return 101;
        };
        if (_713 instanceof Ok) {
            return 200;
        };
        if (_713 instanceof Created) {
            return 201;
        };
        if (_713 instanceof Accepted) {
            return 202;
        };
        if (_713 instanceof NonAuthoritativeInformation) {
            return 203;
        };
        if (_713 instanceof NoContent) {
            return 204;
        };
        if (_713 instanceof ResetContent) {
            return 205;
        };
        if (_713 instanceof PartialContent) {
            return 206;
        };
        if (_713 instanceof MultipleChoices) {
            return 300;
        };
        if (_713 instanceof MovedPermanently) {
            return 301;
        };
        if (_713 instanceof Found) {
            return 302;
        };
        if (_713 instanceof SeeOther) {
            return 303;
        };
        if (_713 instanceof NotModified) {
            return 304;
        };
        if (_713 instanceof UseProxy) {
            return 305;
        };
        if (_713 instanceof TemporaryRedirect) {
            return 307;
        };
        if (_713 instanceof BadRequest) {
            return 400;
        };
        if (_713 instanceof Unauthorized) {
            return 401;
        };
        if (_713 instanceof PaymentRequired) {
            return 402;
        };
        if (_713 instanceof Forbidden) {
            return 403;
        };
        if (_713 instanceof NotFound) {
            return 404;
        };
        if (_713 instanceof MethodNotAllowed) {
            return 405;
        };
        if (_713 instanceof NotAcceptable) {
            return 406;
        };
        if (_713 instanceof ProxyAuthenticationRequired) {
            return 407;
        };
        if (_713 instanceof RequestTimeout) {
            return 408;
        };
        if (_713 instanceof Gone) {
            return 410;
        };
        if (_713 instanceof LengthRequired) {
            return 411;
        };
        if (_713 instanceof PreconditionFailed) {
            return 412;
        };
        if (_713 instanceof RequestEntityTooLarge) {
            return 413;
        };
        if (_713 instanceof RequestURITooLong) {
            return 414;
        };
        if (_713 instanceof UnsupportedMediaType) {
            return 415;
        };
        if (_713 instanceof RequestedRangeNotSatisfiable) {
            return 416;
        };
        if (_713 instanceof ExpectationFailed) {
            return 417;
        };
        if (_713 instanceof InternalServerError) {
            return 500;
        };
        if (_713 instanceof NotImplemented) {
            return 501;
        };
        if (_713 instanceof BadGateway) {
            return 502;
        };
        if (_713 instanceof ServiceUnavailable) {
            return 503;
        };
        if (_713 instanceof GatewayTimeout) {
            return 504;
        };
        if (_713 instanceof HTTPVersionNotSupported) {
            return 505;
        };
        throw new Error("Failed pattern match");
    };
    var space = function (__dict_Monad_584) {
        return Text_Parsing_Parser_Combinators.choice(__dict_Monad_584)([ Text_Parsing_Parser_String.string(__dict_Monad_584)(" "), Text_Parsing_Parser_String.string(__dict_Monad_584)("\t") ]);
    };
    var skipMany = function (__dict_Monad_585) {
        return function (s) {
            return Control_Apply["*>"](Text_Parsing_Parser.applyParserT(__dict_Monad_585))(Text_Parsing_Parser_Combinators.many(__dict_Monad_585)(s))(Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_585))({}));
        };
    };
    var skipSpaces = function (__dict_Monad_586) {
        return skipMany(__dict_Monad_586)(space(__dict_Monad_586));
    };
    var showHeaderHead = function (_) {
        return new Prelude.Show(function (_717) {
            if (_717 instanceof Accept) {
                return "Accept";
            };
            if (_717 instanceof AcceptCharset) {
                return "Accept-Charset";
            };
            if (_717 instanceof AcceptEncoding) {
                return "Accept-Encoding";
            };
            if (_717 instanceof AcceptLanguage) {
                return "Accept-Language";
            };
            if (_717 instanceof Allow) {
                return "Allow";
            };
            if (_717 instanceof Authorization) {
                return "Authorization";
            };
            if (_717 instanceof CacheControl) {
                return "Cache-Control";
            };
            if (_717 instanceof Connection) {
                return "Connection";
            };
            if (_717 instanceof ContentEncoding) {
                return "Content-Encoding";
            };
            if (_717 instanceof ContentLanguage) {
                return "Content-Language";
            };
            if (_717 instanceof ContentLength) {
                return "Content-Length";
            };
            if (_717 instanceof ContentLocation) {
                return "Content-Location";
            };
            if (_717 instanceof ContentMD5) {
                return "Content-MD5";
            };
            if (_717 instanceof ContentRange) {
                return "Content-Range";
            };
            if (_717 instanceof ContentType) {
                return "Content-Type";
            };
            if (_717 instanceof Date) {
                return "Date";
            };
            if (_717 instanceof Expect) {
                return "Expect";
            };
            if (_717 instanceof Expires) {
                return "Expires";
            };
            if (_717 instanceof From) {
                return "From";
            };
            if (_717 instanceof Host) {
                return "Host";
            };
            if (_717 instanceof IfMatch) {
                return "If-Match";
            };
            if (_717 instanceof IfModifiedSince) {
                return "If-Modified-Since";
            };
            if (_717 instanceof IfNoneMatch) {
                return "If-None-Match";
            };
            if (_717 instanceof IfRange) {
                return "If-Range";
            };
            if (_717 instanceof IfUnmodifiedSince) {
                return "If-Unmodified-Since";
            };
            if (_717 instanceof LastModified) {
                return "Last-Modified";
            };
            if (_717 instanceof MaxForwards) {
                return "Max-Forwards";
            };
            if (_717 instanceof Pragma) {
                return "Pragma";
            };
            if (_717 instanceof ProxyAuthorization) {
                return "Proxy-Authorization";
            };
            if (_717 instanceof Range) {
                return "Range";
            };
            if (_717 instanceof Referer) {
                return "Referer";
            };
            if (_717 instanceof TE) {
                return "Te";
            };
            if (_717 instanceof Trailer) {
                return "Trailer";
            };
            if (_717 instanceof TransferEncoding) {
                return "Transfer-Encoding";
            };
            if (_717 instanceof Upgrade) {
                return "Upgrade";
            };
            if (_717 instanceof UserAgent) {
                return "User-Agent";
            };
            if (_717 instanceof Via) {
                return "Via";
            };
            if (_717 instanceof Warning) {
                return "Warning";
            };
            if (_717 instanceof Custom) {
                return _717.value0;
            };
            throw new Error("Failed pattern match");
        });
    };
    var showHeader = function (_) {
        return new Prelude.Show(function (_716) {
            return Prelude.show(showHeaderHead({}))(_716.value0) + ": " + _716.value1;
        });
    };
    var showHTTPVerb = function (_) {
        return new Prelude.Show(function (_715) {
            if (_715 instanceof DELETE) {
                return "DELETE";
            };
            if (_715 instanceof GET) {
                return "GET";
            };
            if (_715 instanceof HEAD) {
                return "HEAD";
            };
            if (_715 instanceof OPTIONS) {
                return "OPTIONS";
            };
            if (_715 instanceof PATCH) {
                return "PATCH";
            };
            if (_715 instanceof POST) {
                return "POST";
            };
            if (_715 instanceof PUT) {
                return "PUT";
            };
            throw new Error("Failed pattern match");
        });
    };
    var number2Status = function (_714) {
        if (_714 === 0) {
            return new Data_Maybe.Just(NoStatus.value);
        };
        if (_714 === 100) {
            return new Data_Maybe.Just(Continue.value);
        };
        if (_714 === 101) {
            return new Data_Maybe.Just(SwitchingProtocols.value);
        };
        if (_714 === 200) {
            return new Data_Maybe.Just(Ok.value);
        };
        if (_714 === 201) {
            return new Data_Maybe.Just(Created.value);
        };
        if (_714 === 202) {
            return new Data_Maybe.Just(Accepted.value);
        };
        if (_714 === 203) {
            return new Data_Maybe.Just(NonAuthoritativeInformation.value);
        };
        if (_714 === 204) {
            return new Data_Maybe.Just(NoContent.value);
        };
        if (_714 === 205) {
            return new Data_Maybe.Just(ResetContent.value);
        };
        if (_714 === 206) {
            return new Data_Maybe.Just(PartialContent.value);
        };
        if (_714 === 300) {
            return new Data_Maybe.Just(MultipleChoices.value);
        };
        if (_714 === 301) {
            return new Data_Maybe.Just(MovedPermanently.value);
        };
        if (_714 === 302) {
            return new Data_Maybe.Just(Found.value);
        };
        if (_714 === 303) {
            return new Data_Maybe.Just(SeeOther.value);
        };
        if (_714 === 304) {
            return new Data_Maybe.Just(NotModified.value);
        };
        if (_714 === 305) {
            return new Data_Maybe.Just(UseProxy.value);
        };
        if (_714 === 307) {
            return new Data_Maybe.Just(TemporaryRedirect.value);
        };
        if (_714 === 400) {
            return new Data_Maybe.Just(BadRequest.value);
        };
        if (_714 === 401) {
            return new Data_Maybe.Just(Unauthorized.value);
        };
        if (_714 === 402) {
            return new Data_Maybe.Just(PaymentRequired.value);
        };
        if (_714 === 403) {
            return new Data_Maybe.Just(Forbidden.value);
        };
        if (_714 === 404) {
            return new Data_Maybe.Just(NotFound.value);
        };
        if (_714 === 405) {
            return new Data_Maybe.Just(MethodNotAllowed.value);
        };
        if (_714 === 406) {
            return new Data_Maybe.Just(NotAcceptable.value);
        };
        if (_714 === 407) {
            return new Data_Maybe.Just(ProxyAuthenticationRequired.value);
        };
        if (_714 === 408) {
            return new Data_Maybe.Just(RequestTimeout.value);
        };
        if (_714 === 410) {
            return new Data_Maybe.Just(Gone.value);
        };
        if (_714 === 411) {
            return new Data_Maybe.Just(LengthRequired.value);
        };
        if (_714 === 412) {
            return new Data_Maybe.Just(PreconditionFailed.value);
        };
        if (_714 === 413) {
            return new Data_Maybe.Just(RequestEntityTooLarge.value);
        };
        if (_714 === 414) {
            return new Data_Maybe.Just(RequestURITooLong.value);
        };
        if (_714 === 415) {
            return new Data_Maybe.Just(UnsupportedMediaType.value);
        };
        if (_714 === 416) {
            return new Data_Maybe.Just(RequestedRangeNotSatisfiable.value);
        };
        if (_714 === 417) {
            return new Data_Maybe.Just(ExpectationFailed.value);
        };
        if (_714 === 500) {
            return new Data_Maybe.Just(InternalServerError.value);
        };
        if (_714 === 501) {
            return new Data_Maybe.Just(NotImplemented.value);
        };
        if (_714 === 502) {
            return new Data_Maybe.Just(BadGateway.value);
        };
        if (_714 === 503) {
            return new Data_Maybe.Just(ServiceUnavailable.value);
        };
        if (_714 === 504) {
            return new Data_Maybe.Just(GatewayTimeout.value);
        };
        if (_714 === 505) {
            return new Data_Maybe.Just(HTTPVersionNotSupported.value);
        };
        return Data_Maybe.Nothing.value;
    };
    var eol = function (__dict_Monad_587) {
        return Text_Parsing_Parser_String.string(__dict_Monad_587)("\n");
    };
    var parseHeader = function (__dict_Monad_588) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_588))(Control_Apply["<*"](Text_Parsing_Parser.applyParserT(__dict_Monad_588))(Control_Apply["<*"](Text_Parsing_Parser.applyParserT(__dict_Monad_588))(Text_Parsing_Parser_Combinators.many1(__dict_Monad_588)(Text_Parsing_Parser_String["char"](__dict_Monad_588)))(Text_Parsing_Parser_String.string(__dict_Monad_588)(":")))(skipSpaces(__dict_Monad_588)))(function (_130) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_588))(Control_Apply["<*"](Text_Parsing_Parser.applyParserT(__dict_Monad_588))(Text_Parsing_Parser_Combinators.many1(__dict_Monad_588)(Text_Parsing_Parser_String["char"](__dict_Monad_588)))(eol(__dict_Monad_588)))(function (_129) {
                var head$prime = string2Head(Data_String.joinWith("")(_130));
                var values$prime = Data_String.joinWith("")(_129);
                return Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_588))(new Header(head$prime, values$prime));
            });
        });
    };
    return {
        Accept: Accept, 
        AcceptCharset: AcceptCharset, 
        AcceptEncoding: AcceptEncoding, 
        AcceptLanguage: AcceptLanguage, 
        Allow: Allow, 
        Authorization: Authorization, 
        CacheControl: CacheControl, 
        Connection: Connection, 
        ContentEncoding: ContentEncoding, 
        ContentLanguage: ContentLanguage, 
        ContentLength: ContentLength, 
        ContentLocation: ContentLocation, 
        ContentMD5: ContentMD5, 
        ContentRange: ContentRange, 
        ContentType: ContentType, 
        Date: Date, 
        Expect: Expect, 
        Expires: Expires, 
        From: From, 
        Host: Host, 
        IfMatch: IfMatch, 
        IfModifiedSince: IfModifiedSince, 
        IfNoneMatch: IfNoneMatch, 
        IfRange: IfRange, 
        IfUnmodifiedSince: IfUnmodifiedSince, 
        LastModified: LastModified, 
        MaxForwards: MaxForwards, 
        Pragma: Pragma, 
        ProxyAuthorization: ProxyAuthorization, 
        Range: Range, 
        Referer: Referer, 
        TE: TE, 
        Trailer: Trailer, 
        TransferEncoding: TransferEncoding, 
        Upgrade: Upgrade, 
        UserAgent: UserAgent, 
        Via: Via, 
        Warning: Warning, 
        Custom: Custom, 
        Header: Header, 
        NoStatus: NoStatus, 
        Accepted: Accepted, 
        BadGateway: BadGateway, 
        BadRequest: BadRequest, 
        Continue: Continue, 
        Created: Created, 
        ExpectationFailed: ExpectationFailed, 
        Forbidden: Forbidden, 
        Found: Found, 
        GatewayTimeout: GatewayTimeout, 
        Gone: Gone, 
        HTTPVersionNotSupported: HTTPVersionNotSupported, 
        InternalServerError: InternalServerError, 
        LengthRequired: LengthRequired, 
        MethodNotAllowed: MethodNotAllowed, 
        MovedPermanently: MovedPermanently, 
        MultipleChoices: MultipleChoices, 
        NoContent: NoContent, 
        NonAuthoritativeInformation: NonAuthoritativeInformation, 
        NotAcceptable: NotAcceptable, 
        NotFound: NotFound, 
        NotImplemented: NotImplemented, 
        NotModified: NotModified, 
        Ok: Ok, 
        PartialContent: PartialContent, 
        PaymentRequired: PaymentRequired, 
        PreconditionFailed: PreconditionFailed, 
        ProxyAuthenticationRequired: ProxyAuthenticationRequired, 
        RequestedRangeNotSatisfiable: RequestedRangeNotSatisfiable, 
        RequestEntityTooLarge: RequestEntityTooLarge, 
        RequestTimeout: RequestTimeout, 
        RequestURITooLong: RequestURITooLong, 
        ResetContent: ResetContent, 
        SeeOther: SeeOther, 
        ServiceUnavailable: ServiceUnavailable, 
        SwitchingProtocols: SwitchingProtocols, 
        TemporaryRedirect: TemporaryRedirect, 
        Unauthorized: Unauthorized, 
        UnsupportedMediaType: UnsupportedMediaType, 
        UseProxy: UseProxy, 
        DELETE: DELETE, 
        GET: GET, 
        HEAD: HEAD, 
        OPTIONS: OPTIONS, 
        PATCH: PATCH, 
        POST: POST, 
        PUT: PUT, 
        parseHeader: parseHeader, 
        skipSpaces: skipSpaces, 
        space: space, 
        skipMany: skipMany, 
        eol: eol, 
        number2Status: number2Status, 
        status2Number: status2Number, 
        string2Head: string2Head, 
        showHTTPVerb: showHTTPVerb, 
        showHeader: showHeader, 
        showHeaderHead: showHeaderHead
    };
})();
var PS = PS || {};
PS.Network_Oboe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Network_HTTP = PS.Network_HTTP;
    var Data_Function = PS.Data_Function;
    function showJSONImpl(json) {  if (toString.call(json).slice(8, -1) === 'String') {    return json;  } else {    return JSON.stringify(json);  }};
    function node(o) {  return function(n) {    return function(f) {      return function() {        return o.node(n, function(x,y,z){return f(x)(y)(z)();});      }    }  }};
    function path(o) {  return function(n) {    return function(f) {      return function() {        return o.path(n, function(x,y,z){return f(x)(y)(z)();});      }    }  }};
    function done(o) {  return function(f) {    return function() {      return o.done(function(x){return f(x)();});    }  }};
    function start(o) {  return function(f) {    return function() {      return o.start(function(x,y){return f(x)(y)();});    }  }};
    function fail(o) {  return function(f) {    return function() {      return o.fail(function(x){return f(x)();});    }  }};
    var oboe_;try {  oboe_ = require('oboe');} catch (e) {  oboe_ = window.oboe;};
    function oboe(obj) {  return function() {      var headers = {};      obj.headers.map(header2Obj).forEach(function(header) {        headers[header.head] = header.value;      });      return oboe_({        url: obj.url,        method: showVerb(obj.method),        headers: headers,        body: obj.body,        cached: obj.cached,        withCredentials: obj.withCredentials      });  }};
    var showVerb = Prelude.show(Network_HTTP.showHTTPVerb({}));
    var showJSON = function (_) {
        return new Prelude.Show(showJSONImpl);
    };
    var oboeOptions = {
        url: "", 
        method: Network_HTTP.GET.value, 
        headers: [  ], 
        body: "", 
        cached: true, 
        withCredentials: false
    };
    var oboeGet = function (url) {
        return oboe((function () {
            var _2655 = {};
            for (var _2656 in oboeOptions) {
                if (oboeOptions.hasOwnProperty(_2656)) {
                    _2655[_2656] = oboeOptions[_2656];
                };
            };
            _2655.url = url;
            return _2655;
        })());
    };
    var mkFn3_ = Data_Function.mkFn3;
    var mkFn2_ = Data_Function.mkFn2;
    var mkFn1_ = Data_Function.mkFn1;
    var header2Obj = function (_718) {
        return {
            head: Prelude.show(Network_HTTP.showHeaderHead({}))(_718.value0), 
            value: _718.value1
        };
    };
    return {
        fail: fail, 
        start: start, 
        done: done, 
        path: path, 
        node: node, 
        oboeGet: oboeGet, 
        oboe: oboe, 
        oboeOptions: oboeOptions, 
        showJSON: showJSON
    };
})();
var PS = PS || {};
PS.Browser_WebStorage = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    function Storage(clear, getItem, key, length, removeItem, setItem) {
        this.clear = clear;
        this.getItem = getItem;
        this.key = key;
        this.length = length;
        this.removeItem = removeItem;
        this.setItem = setItem;
    };
    var localStorage = window.localStorage;
    var sessionStorage = window.sessionStorage;
    function unsafeLength(storage) {  return storage.length;};
    function unsafeKey(storage) {  return function(num) {    return num >= storage.length ? nothing : just(storage.key(num));  }};
    function unsafeGetItem(storage) {  return function(str) {    var item = storage.getItem(str);    return item == null ? nothing : just(item);  }};
    function unsafeSetItem(storage) {  return function(str) {    return function(val) {      storage.setItem(str, val);      return storage;    }  }};
    function unsafeRemoveItem(storage) {  return function(str) {    storage.removeItem(str);    return storage;  }};
    function unsafeClear(storage) {  storage.clear();  return storage;};
    function null2Maybe(n) {  return n == null ? nothing : just(n);};
    var storageSessionStorage = function (_) {
        return new Storage(function (_730) {
            return unsafeClear(sessionStorage);
        }, function (_727) {
            return unsafeGetItem(sessionStorage);
        }, function (_726) {
            return unsafeKey(sessionStorage);
        }, function (_725) {
            return unsafeLength(sessionStorage);
        }, function (_729) {
            return unsafeRemoveItem(sessionStorage);
        }, function (_728) {
            return unsafeSetItem(sessionStorage);
        });
    };
    var storageLocalStorage = function (_) {
        return new Storage(function (_724) {
            return unsafeClear(localStorage);
        }, function (_721) {
            return unsafeGetItem(localStorage);
        }, function (_720) {
            return unsafeKey(localStorage);
        }, function (_719) {
            return unsafeLength(localStorage);
        }, function (_723) {
            return unsafeRemoveItem(localStorage);
        }, function (_722) {
            return unsafeSetItem(localStorage);
        });
    };
    var setItem = function (dict) {
        return dict.setItem;
    };
    var removeItem = function (dict) {
        return dict.removeItem;
    };
    var nothing = Data_Maybe.Nothing.value;
    var length = function (dict) {
        return dict.length;
    };
    var key = function (dict) {
        return dict.key;
    };
    var just = Data_Maybe.Just.create;
    var getItem = function (dict) {
        return dict.getItem;
    };
    var clear = function (dict) {
        return dict.clear;
    };
    return {
        Storage: Storage, 
        setItem: setItem, 
        removeItem: removeItem, 
        length: length, 
        key: key, 
        getItem: getItem, 
        clear: clear, 
        sessionStorage: sessionStorage, 
        localStorage: localStorage, 
        storageLocalStorage: storageLocalStorage, 
        storageSessionStorage: storageSessionStorage
    };
})();
var PS = PS || {};
PS.SlamData_Helpers = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Graphics_C3 = PS.Graphics_C3;
    var SlamData_Types = PS.SlamData_Types;
    var React_DOM = PS.React_DOM;
    var Data_Foldable = PS.Data_Foldable;
    var Text_Parsing_Parser_String = PS.Text_Parsing_Parser_String;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_String = PS.Data_String;
    var Text_Parsing_Parser_Combinators = PS.Text_Parsing_Parser_Combinators;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Map = PS.Data_Map;
    var Browser_WebStorage = PS.Browser_WebStorage;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Foreign = PS.Data_Foreign;
    var Data_Either = PS.Data_Either;
    var Data_Function = PS.Data_Function;
    function Blocks() {

    };
    Blocks.value = new Blocks();
    function Notebooks() {

    };
    Notebooks.value = new Notebooks();
    function EvalSQLBlocks() {

    };
    EvalSQLBlocks.value = new EvalSQLBlocks();
    function FAIcon(value0) {
        this.value0 = value0;
    };
    FAIcon.create = function (value0) {
        return new FAIcon(value0);
    };
    function EntypoIcon(value0) {
        this.value0 = value0;
    };
    EntypoIcon.create = function (value0) {
        return new EntypoIcon(value0);
    };
    function Icon(toUI) {
        this.toUI = toUI;
    };
    function location(win) {  return win.location;};
    function search(loc) {  return loc.search;};
    function getDOMNode(x) {  return x.getDOMNode();};
    function focus(x) {  return x.focus();};
    var $dot$dot = Data_Array.range;
    var visualPie = Graphics_C3.Pie.value;
    var visualLine = Graphics_C3.Line.value;
    var visualBar = Graphics_C3.Bar.value;
    var toUI = function (dict) {
        return dict.toUI;
    };
    var showLocalKey = function (_) {
        return new Prelude.Show(function (_756) {
            if (_756 instanceof Blocks) {
                return "blocks";
            };
            if (_756 instanceof Notebooks) {
                return "notebooks";
            };
            if (_756 instanceof EvalSQLBlocks) {
                return "evalsqlblocks";
            };
            throw new Error("Failed pattern match");
        });
    };
    var serverURI = function (_736) {
        return _736.server.location + ":" + Prelude.show(Prelude.showNumber({}))(_736.server.port);
    };
    var select = function (_731) {
        return function (_732) {
            return function (_733) {
                if (_731(_732)) {
                    var _2680 = {};
                    for (var _2681 in _733) {
                        if (_733.hasOwnProperty(_2681)) {
                            _2680[_2681] = _733[_2681];
                        };
                    };
                    _2680.fst = Prelude[":"](_732)(_733.fst);
                    return _2680;
                };
                var _2682 = {};
                for (var _2683 in _733) {
                    if (_733.hasOwnProperty(_2683)) {
                        _2682[_2683] = _733[_2683];
                    };
                };
                _2682.snd = Prelude[":"](_732)(_733.snd);
                return _2682;
            };
        };
    };
    var row = function (uis) {
        return React_DOM.div([ React_DOM.className("row") ])(uis);
    };
    var partition = function (p) {
        return Data_Foldable.foldr(Data_Foldable.foldableArray({}))(select(p))({
            fst: [  ], 
            snd: [  ]
        });
    };
    var noneOf = function (__dict_Monad_589) {
        return function (ss) {
            return Text_Parsing_Parser_String.satisfy(__dict_Monad_589)(Prelude.flip(Data_Foldable.notElem(Prelude.eqString({}))(Data_Foldable.foldableArray({})))(ss));
        };
    };
    var parseQuery = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Prelude["<$>"](Text_Parsing_Parser.functorParserT(Control_Monad_Identity.functorIdentity({})))(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_String.joinWith(""))(decodeURIComponent))(Text_Parsing_Parser_Combinators.many1(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(noneOf(Control_Monad_Identity.monadIdentity({}))([ "=" ])))))(function (_142) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("="))(function (_) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Prelude["<$>"](Text_Parsing_Parser.functorParserT(Control_Monad_Identity.functorIdentity({})))(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_String.joinWith(""))(decodeURIComponent))(Text_Parsing_Parser_Combinators.many1(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_Combinators["try"](Control_Monad_Identity.functorIdentity({}))(noneOf(Control_Monad_Identity.monadIdentity({}))([ "&" ])))))(function (_141) {
                return Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(new Data_Tuple.Tuple(_142, _141));
            });
        });
    });
    var parseQueryString = Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators.optional(Control_Monad_Identity.monadIdentity({}))(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("?")))(function (_) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(Control_Monad_Identity.monadIdentity({})))(Text_Parsing_Parser_Combinators.sepBy(Control_Monad_Identity.monadIdentity({}))(parseQuery)(Text_Parsing_Parser_String.string(Control_Monad_Identity.monadIdentity({}))("&")))(function (_140) {
            return Prelude.pure(Text_Parsing_Parser.applicativeParserT(Control_Monad_Identity.monadIdentity({})))(Data_Map.fromList(Prelude.ordString({}))(_140));
        });
    });
    var localSet = function (__dict_Show_590) {
        return function (key) {
            return function (val) {
                return Browser_WebStorage.setItem(Browser_WebStorage.storageLocalStorage({}))(Browser_WebStorage.localStorage)(Prelude.show(showLocalKey({}))(key))(Prelude.show(__dict_Show_590)(val));
            };
        };
    };
    var localGet = function (__dict_ReadForeign_591) {
        return function (key) {
            return Data_Maybe.maybe([  ])(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Foreign.parseJSON(Data_Foreign.readArray(__dict_ReadForeign_591)))(Data_Either.either(Prelude["const"]([  ]))(Prelude.id(Prelude.categoryArr({})))))(Browser_WebStorage.getItem(Browser_WebStorage.storageLocalStorage({}))(Browser_WebStorage.localStorage)(Prelude.show(showLocalKey({}))(key)));
        };
    };
    var large = function (size) {
        return function (ui) {
            return React_DOM.div([ React_DOM.className("large-" + size + " columns") ])([ ui ]);
        };
    };
    var iconFA = function (_) {
        return new Icon(function (_757) {
            return _757.value0;
        });
    };
    var iconEntypo = function (_) {
        return new Icon(function (_758) {
            return _758.value0;
        });
    };
    var guardMaybe = function (_734) {
        return function (_735) {
            if (_734) {
                return _735;
            };
            if (!_734) {
                return Data_Maybe.Nothing.value;
            };
            throw new Error("Failed pattern match");
        };
    };
    var getOrElse = Prelude.flip(Data_Maybe.fromMaybe);
    var faIcon = function (name) {
        return FAIcon.create(React_DOM.i([ React_DOM.className(name) ])([  ]));
    };
    var fileIcon = function (_747) {
        return faIcon("fa fa-file-o");
    };
    var loadingIcon = function (_749) {
        return faIcon("fa fa-circle-o-notch fa-spin");
    };
    var markdownIcon = function (_742) {
        return faIcon("fa fa-file-text");
    };
    var newIcon = function (_738) {
        return faIcon("fa fa-file");
    };
    var newNotebookIcon = function (_748) {
        return faIcon("fa fa-plus");
    };
    var openIcon = function (_739) {
        return faIcon("fa fa-folder-open");
    };
    var publishIcon = function (_741) {
        return faIcon("fa fa-book");
    };
    var saveIcon = function (_740) {
        return faIcon("fa fa-save");
    };
    var sqlIcon = function (_743) {
        return faIcon("fa fa-database");
    };
    var visualIcon = function (_744) {
        return faIcon("fa fa-bar-chart-o");
    };
    var eqLocalKey = function (_) {
        return new Prelude.Eq(function (l) {
            return function (l$prime) {
                return !Prelude["=="](eqLocalKey({}))(l)(l$prime);
            };
        }, function (_754) {
            return function (_755) {
                if (_754 instanceof Blocks && _755 instanceof Blocks) {
                    return true;
                };
                if (_754 instanceof Notebooks && _755 instanceof Notebooks) {
                    return true;
                };
                if (_754 instanceof EvalSQLBlocks && _755 instanceof EvalSQLBlocks) {
                    return true;
                };
                return false;
            };
        });
    };
    var entypoIcon = function (name) {
        return EntypoIcon.create(React_DOM.i([ React_DOM.className(name) ])([  ]));
    };
    var lineChartIcon = function (_752) {
        return entypoIcon("icon-chart-line");
    };
    var pieChartIcon = function (_753) {
        return entypoIcon("icon-chart-pie");
    };
    var dirOpenIcon = function (_745) {
        return faIcon("fa fa-folder-open-o");
    };
    var dirClosedIcon = function (_746) {
        return faIcon("fa fa-folder-o");
    };
    var defaultServerPort = 8080;
    var defaultServerLocation = "http://localhost";
    var defaultServerURI = defaultServerLocation + ":" + Prelude.show(Prelude.showNumber({}))(defaultServerPort);
    var getServerURI = function (qs) {
        return Data_Maybe.fromMaybe(defaultServerURI)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("serverLocation")(qs))(function (_132) {
            return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("serverPort")(qs))(function (_131) {
                return Prelude.pure(Data_Maybe.applicativeMaybe({}))(_132 + ":" + _131);
            });
        }));
    };
    var defaultSDConfig = {
        server: {
            location: defaultServerLocation, 
            port: defaultServerPort
        }, 
        nodeWebkit: {
            java: "java"
        }
    };
    var query2SDConfig = function (qs) {
        return Data_Maybe.fromMaybe(defaultSDConfig)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("serverLocation")(qs))(function (_135) {
            return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("serverPort")(qs))(function (_134) {
                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("javaLocation")(qs))(function (_133) {
                    return Prelude.pure(Data_Maybe.applicativeMaybe({}))({
                        server: {
                            location: _135, 
                            port: parseInt(_134, 10)
                        }, 
                        nodeWebkit: {
                            java: _133
                        }
                    });
                });
            });
        }));
    };
    var defaultMountPath = "/";
    var defaultMongoURI = "mongodb://localhost:27017";
    var defaultMongoDatabase = "test";
    var defaultSEConfig = {
        server: {
            port: defaultServerPort
        }, 
        mountings: Data_Map.singleton(defaultMountPath)(new SlamData_Types.MountMongo({
            connectionUri: defaultMongoURI, 
            database: defaultMongoDatabase
        }))
    };
    var query2SEConfig = function (qs) {
        return Data_Maybe.fromMaybe(defaultSEConfig)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("sePort")(qs))(function (_139) {
            return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("seMountPath")(qs))(function (_138) {
                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("seMongoURI")(qs))(function (_137) {
                    return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))("seDatabase")(qs))(function (_136) {
                        return Prelude.pure(Data_Maybe.applicativeMaybe({}))({
                            server: {
                                port: parseInt(_139, 10)
                            }, 
                            mountings: Data_Map.singleton(_138)(new SlamData_Types.MountMongo({
                                connectionUri: _137, 
                                database: _136
                            }))
                        });
                    });
                });
            });
        }));
    };
    var closeIcon = function (_737) {
        return faIcon("fa fa-times");
    };
    var barChartIcon = function (_751) {
        return entypoIcon("icon-chart-bar");
    };
    var areaChartIcon = function (_750) {
        return entypoIcon("icon-chart-area");
    };
    var actionButton = function (__dict_Icon_592) {
        return function (props) {
            return React_DOM["li'"]([ React_DOM.a([ React_DOM.className("tiny secondary button has-tooltip"), React_DOM.onClick(function (_) {
                return props.click;
            }), React_DOM.titleProp(props.tooltip), React_DOM.dataSet({
                tooltip: ""
            }) ])([ toUI(__dict_Icon_592)(props.icon) ]) ]);
        };
    };
    return {
        EntypoIcon: EntypoIcon, 
        FAIcon: FAIcon, 
        Blocks: Blocks, 
        Notebooks: Notebooks, 
        EvalSQLBlocks: EvalSQLBlocks, 
        Icon: Icon, 
        focus: focus, 
        getDOMNode: getDOMNode, 
        decodeURIComponent: decodeURIComponent, 
        parseQuery: parseQuery, 
        parseQueryString: parseQueryString, 
        noneOf: noneOf, 
        pieChartIcon: pieChartIcon, 
        lineChartIcon: lineChartIcon, 
        barChartIcon: barChartIcon, 
        areaChartIcon: areaChartIcon, 
        loadingIcon: loadingIcon, 
        newNotebookIcon: newNotebookIcon, 
        fileIcon: fileIcon, 
        dirClosedIcon: dirClosedIcon, 
        dirOpenIcon: dirOpenIcon, 
        visualIcon: visualIcon, 
        sqlIcon: sqlIcon, 
        markdownIcon: markdownIcon, 
        publishIcon: publishIcon, 
        saveIcon: saveIcon, 
        openIcon: openIcon, 
        newIcon: newIcon, 
        closeIcon: closeIcon, 
        entypoIcon: entypoIcon, 
        faIcon: faIcon, 
        toUI: toUI, 
        large: large, 
        row: row, 
        visualPie: visualPie, 
        visualLine: visualLine, 
        visualBar: visualBar, 
        localSet: localSet, 
        localGet: localGet, 
        actionButton: actionButton, 
        query2SEConfig: query2SEConfig, 
        query2SDConfig: query2SDConfig, 
        parseInt: parseInt, 
        getServerURI: getServerURI, 
        serverURI: serverURI, 
        defaultSEConfig: defaultSEConfig, 
        defaultSDConfig: defaultSDConfig, 
        defaultServerURI: defaultServerURI, 
        defaultMongoDatabase: defaultMongoDatabase, 
        defaultMongoURI: defaultMongoURI, 
        defaultMountPath: defaultMountPath, 
        defaultServerPort: defaultServerPort, 
        defaultServerLocation: defaultServerLocation, 
        search: search, 
        location: location, 
        window: window, 
        guardMaybe: guardMaybe, 
        select: select, 
        partition: partition, 
        getOrElse: getOrElse, 
        "..": $dot$dot, 
        eqLocalKey: eqLocalKey, 
        showLocalKey: showLocalKey, 
        iconFA: iconFA, 
        iconEntypo: iconEntypo
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook_Block_Common = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React = PS.React;
    var SlamData_App_Notebook_Block_Types = PS.SlamData_App_Notebook_Block_Types;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var React_DOM = PS.React_DOM;
    var $$eval = function __do() {
        var _144 = React.getRefs();
        var _143 = React.readState();
        return React.writeState((function () {
            var _2723 = {};
            for (var _2724 in _143) {
                if (_143.hasOwnProperty(_2724)) {
                    _2723[_2724] = _143[_2724];
                };
            };
            _2723.edit = SlamData_App_Notebook_Block_Types.Eval.value;
            _2723.content = (SlamData_Helpers.getDOMNode(_144.editor)).value;
            return _2723;
        })());
    };
    var edit = function __do() {
        var _145 = React.readState();
        return React.writeState((function () {
            var _2726 = {};
            for (var _2727 in _145) {
                if (_145.hasOwnProperty(_2727)) {
                    _2726[_2727] = _145[_2727];
                };
            };
            _2726.edit = SlamData_App_Notebook_Block_Types.Edit.value;
            _2726.content = _145.content;
            return _2726;
        })());
    };
    var blockRow = function (styles) {
        return function (firstCol) {
            return function (secondCol) {
                return React_DOM.div([ React_DOM.className(styles + " row") ])([ React_DOM.div([ React_DOM.className("large-1  columns") ])(firstCol), React_DOM.div([ React_DOM.className("large-11 columns right-side") ])(secondCol) ]);
            };
        };
    };
    return {
        edit: edit, 
        "eval": $$eval, 
        blockRow: blockRow
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook_Block_Markdown = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var React = PS.React;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var SlamData_App_Notebook_Block_Common = PS.SlamData_App_Notebook_Block_Common;
    var React_DOM = PS.React_DOM;
    var Showdown = PS.Showdown;
    var evalMarkdown = function (content) {
        return React.mkUI(React.spec)(Prelude.pure(Control_Monad_Eff.applicativeEff({}))(SlamData_App_Notebook_Block_Common.blockRow("block-content")([  ])([ React_DOM.div([ React_DOM.className("evaled-block"), React_DOM.onClick(function (_) {
            return SlamData_App_Notebook_Block_Common.edit;
        }) ])([ React_DOM.span([ React_DOM.dangerouslySetInnerHTML(Showdown.makeHtml(content)) ])([  ]) ]) ])));
    };
    return {
        evalMarkdown: evalMarkdown
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook_Block_SQL = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var SlamData_App_Notebook_Block_Types = PS.SlamData_App_Notebook_Block_Types;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var Data_Array = PS.Data_Array;
    var Control_Apply = PS.Control_Apply;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Data_String = PS.Data_String;
    var Data_UUID = PS.Data_UUID;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Maybe_Unsafe = PS.Data_Maybe_Unsafe;
    var React_DOM = PS.React_DOM;
    var Data_Foldable = PS.Data_Foldable;
    var React = PS.React;
    var SlamData_App_Notebook_Block_Common = PS.SlamData_App_Notebook_Block_Common;
    function cwm() {  extendState.call(this, {status: loading});  if (isJust_(this.state.location)) {    cdm.call(this, fromJust_(this.state.location));  } else {    runQuery.call(this, this.state.content);  }};
    function cdm(location) {  var xhr = new XMLHttpRequest();  xhr.onerror = function() {    if (this.isMounted()) {      extendState.call(this, {status: error('Problem loading query')});    }  }.bind(this);  xhr.onload = function() {    if (this.isMounted()) {      extendState.call(this, {status: successful(xhr.responseText)});    }  }.bind(this);  xhr.open('GET', this.props.serverURI + '/data/fs' + this.props.serverFS + location + '?limit=' + pagingLimit);  xhr.send(null);};
    function runQuery(query) {  var sanitizeLocation = function(loc) {    return loc.slice(0) === '/' ? loc.slice(1) : loc;  };  var id = newID();  $.ajax({    type: 'POST',    url: this.props.serverURI + '/query/fs' + this.props.serverFS + '?out=' + showBlockID(id),    data: query,    dataType: 'json',    success: function(data, status, jqXHR) {      /* Parse the location out of the response. */      var location = data.out;      if (this.isMounted()) {        extendState.call(this, {location: just_(sanitizeLocation(location))});      }      saveLocal(this.props)(this.state);      cdm.call(this, location);    }.bind(this),    error: function() {      if (this.isMounted()) {        extendState.call(this, {status: error('Could not create query')});      }    }.bind(this)  });};
    function extendState(neu) {  return this.setState(extend(this.state)(neu));};
    function extend(old) {  return function(neu) {    return copy(neu)(copy(old)({}));  }};
    function copy(neu) {  return function(old) {    for (var key in neu) {      old[key] = neu[key];    }    return old;  }};
    var successful = function (str) {
        return new SlamData_App_Notebook_Block_Types.Successful(str);
    };
    var showBlockID = Prelude.show(SlamData_App_Notebook_Block_Types.showBlockID({}));
    var saveLocal = function (props) {
        return function (state) {
            var rec = new SlamData_App_Notebook_Block_Types.EvalSQLSpec({
                ident: props.ident, 
                status: state.status, 
                content: state.content, 
                location: state.location
            });
            var go = function (_764) {
                return Prelude["=="](SlamData_App_Notebook_Block_Types.eqBlockID({}))(_764.value0.ident)(props.ident) ? rec : _764;
            };
            var blocks = SlamData_Helpers.localGet(SlamData_App_Notebook_Block_Types.readEvalSQLSpec({}))(SlamData_Helpers.EvalSQLBlocks.value);
            var blocks$prime = Prelude["<$>"](Data_Array.functorArray({}))(go)(blocks);
            var blocks$prime$prime = Prelude["=="](Prelude.eqArray(SlamData_App_Notebook_Block_Types.eqEvalSQLSpec({})))(blocks)(blocks$prime) ? Data_Array.snoc(blocks)(rec) : blocks$prime;
            return Control_Apply["*>"](Control_Monad_Eff.applyEff({}))(Prelude.pure(Control_Monad_Eff.applicativeEff({}))(SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Block_Types.showEvalSQLSpec({})))(SlamData_Helpers.EvalSQLBlocks.value)(blocks$prime$prime)))(Prelude.pure(Control_Monad_Eff.applicativeEff({}))({}));
        };
    };
    var parseRaw = Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_String.trim)(Data_String.split("\\n"));
    var pagingLimit = 20;
    var newID = function (_763) {
        return SlamData_App_Notebook_Block_Types.BlockID.create(Data_UUID.runUUID(Data_UUID.v4));
    };
    var loading = SlamData_App_Notebook_Block_Types.Loading.value;
    var just_ = Data_Maybe.Just.create;
    var isJust_ = Data_Maybe.isJust;
    var fromJust_ = Data_Maybe_Unsafe.fromJust;
    var format = function (str) {
        return React_DOM["li'"]([ React_DOM["span'"]([ React_DOM.text(str) ]) ]);
    };
    var essLocation = function (_762) {
        return _762.value0.location;
    };
    var essIdent = function (_760) {
        return _760.value0.ident;
    };
    var essContent = function (_761) {
        return _761.value0.content;
    };
    var getLocation = function (props) {
        return function (content) {
            return function (blocks) {
                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Foldable.find(Data_Foldable.foldableArray({}))(Prelude[">>>"](Prelude.semigroupoidArr({}))(essIdent)(Prelude["=="](SlamData_App_Notebook_Block_Types.eqBlockID({}))(props.ident)))(blocks))(function (_149) {
                    return SlamData_Helpers.guardMaybe(essContent(_149) === content)(essLocation(_149));
                });
            };
        };
    };
    var error = function (str) {
        return new SlamData_App_Notebook_Block_Types.Error(str);
    };
    var actualContent = function (_759) {
        if (_759 instanceof SlamData_App_Notebook_Block_Types.Loading) {
            return SlamData_Helpers.toUI(SlamData_Helpers.iconFA({}))(SlamData_Helpers.loadingIcon({}));
        };
        if (_759 instanceof SlamData_App_Notebook_Block_Types.Error) {
            return React_DOM["span'"]([ React_DOM.text(_759.value0) ]);
        };
        if (_759 instanceof SlamData_App_Notebook_Block_Types.Successful) {
            return React_DOM["ul'"](Prelude["<$>"](Data_Array.functorArray({}))(format)(parseRaw(_759.value0)));
        };
        throw new Error("Failed pattern match");
    };
    var evalSQL = function (ed) {
        return function (content) {
            return React.mkUI((function () {
                var _2742 = {};
                for (var _2743 in React.spec) {
                    if (React.spec.hasOwnProperty(_2743)) {
                        _2742[_2743] = React.spec[_2743];
                    };
                };
                _2742.getInitialState = function __do() {
                    var _146 = React.getProps();
                    return (function () {
                        var blocks = SlamData_Helpers.localGet(SlamData_App_Notebook_Block_Types.readEvalSQLSpec({}))(SlamData_Helpers.EvalSQLBlocks.value);
                        var location = getLocation(_146)(content)(blocks);
                        return Prelude.pure(Control_Monad_Eff.applicativeEff({}))({
                            status: new SlamData_App_Notebook_Block_Types.Successful(content), 
                            content: content, 
                            location: location
                        });
                    })()();
                };
                _2742.componentWillMount = cwm;
                return _2742;
            })())(function __do() {
                var _148 = React.getProps();
                var _147 = React.readState();
                return SlamData_App_Notebook_Block_Common.blockRow("block-content block-sql")([ React_DOM.div([ React_DOM.className("text-center block-metadata") ])([ React_DOM.text("out" + Prelude.show(Prelude.showNumber({}))(_148.index) + " :=") ]) ])([ React_DOM.div([ React_DOM.className("evaled-block"), React_DOM.onClick(function (_) {
                    return ed;
                }) ])([ actualContent(_147.status) ]) ]);
            });
        };
    };
    var _status = function (o) {
        return o.status;
    };
    return {
        evalSQL: evalSQL
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook_Block_Visual = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Graphics_C3 = PS.Graphics_C3;
    var SlamData_App_Notebook_Block_Types = PS.SlamData_App_Notebook_Block_Types;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var React = PS.React;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var SlamData_App_Notebook_Block_Common = PS.SlamData_App_Notebook_Block_Common;
    var React_DOM = PS.React_DOM;
    function cdm() {  var defaultJson = '{"dataSrc": "", "field": "", "visualType": ""}';  try {    var content = JSON.parse(getOrElse_(this.props.content)(defaultJson));  } catch (e) {    var content = JSON.parse(defaultJson);  }  var opts = newOptions(this.props.ident)(content.field)(parseVisualType(content.visualType));  var chart = generate_(opts)();  var data = [];  oboe(this.props.serverURI + '/data/fs' + this.props.serverFS + content.dataSrc)    .node('!', function(json) {      data.push(json[content.field]);      chart.load({columns: [[content.field].concat(data)]});    });};
    var parseVisualType = function (_765) {
        if (_765 === "bar") {
            return Graphics_C3.Bar.value;
        };
        if (_765 === "line") {
            return Graphics_C3.Line.value;
        };
        if (_765 === "pie") {
            return Graphics_C3.Pie.value;
        };
        return Graphics_C3.Bar.value;
    };
    var newOptions = function (ident) {
        return function (name) {
            return function (ty) {
                var _2749 = {};
                for (var _2750 in Graphics_C3.options) {
                    if (Graphics_C3.options.hasOwnProperty(_2750)) {
                        _2749[_2750] = Graphics_C3.options[_2750];
                    };
                };
                _2749.bindto = "#chart-" + Prelude.show(SlamData_App_Notebook_Block_Types.showBlockID({}))(ident);
                _2749.c3Data = [ (function () {
                    var _2747 = {};
                    for (var _2748 in Graphics_C3.c3Data) {
                        if (Graphics_C3.c3Data.hasOwnProperty(_2748)) {
                            _2747[_2748] = Graphics_C3.c3Data[_2748];
                        };
                    };
                    _2747.name = name;
                    _2747.c3Type = ty;
                    return _2747;
                })() ];
                return _2749;
            };
        };
    };
    var getOrElse_ = SlamData_Helpers.getOrElse;
    var generate_ = Graphics_C3.generate;
    var evalVisual = function (content) {
        return React.mkUI((function () {
            var _2751 = {};
            for (var _2752 in React.spec) {
                if (React.spec.hasOwnProperty(_2752)) {
                    _2751[_2752] = React.spec[_2752];
                };
            };
            _2751.componentDidMount = cdm;
            return _2751;
        })())(function __do() {
            var _150 = React.getProps();
            return SlamData_App_Notebook_Block_Common.blockRow("block-content")([  ])([ React_DOM.div([ React_DOM.className("evaled-block") ])([ React_DOM.div([ React_DOM.idProp("chart-" + Prelude.show(SlamData_App_Notebook_Block_Types.showBlockID({}))(_150.ident)) ])([  ]) ]) ]);
        });
    };
    return {
        evalVisual: evalVisual
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook_Block = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var SlamData_App_Notebook_Block_Types = PS.SlamData_App_Notebook_Block_Types;
    var React = PS.React;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React_DOM = PS.React_DOM;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var Graphics_C3 = PS.Graphics_C3;
    var SlamData_App_Notebook_Block_Common = PS.SlamData_App_Notebook_Block_Common;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Array = PS.Data_Array;
    var Control_Apply = PS.Control_Apply;
    var SlamData_App_Notebook_Block_Visual = PS.SlamData_App_Notebook_Block_Visual;
    var SlamData_App_Notebook_Block_Markdown = PS.SlamData_App_Notebook_Block_Markdown;
    var SlamData_App_Notebook_Block_SQL = PS.SlamData_App_Notebook_Block_SQL;
    var Data_Function = PS.Data_Function;
    function scu(p, s) {  return (!eqEditor(this.state.edit)(s.edit)) ||         (!isEval(s.edit) && this.state.content !== s.content) ||         (!eqBlockID(this.props.ident)(p.ident));};
    function state2Content(state) {  return state.content;};
    var toolbar = (function () {
        var specificButtons = function (_770) {
            if (_770 instanceof SlamData_App_Notebook_Block_Types.Markdown) {
                return [  ];
            };
            if (_770 instanceof SlamData_App_Notebook_Block_Types.SQL) {
                return [  ];
            };
            if (_770 instanceof SlamData_App_Notebook_Block_Types.Visual) {
                return [  ];
            };
            throw new Error("Failed pattern match");
        };
        return React.mkUI(React.spec)(function __do() {
            var _155 = React.getProps();
            return React_DOM.div([ React_DOM.className("button-bar") ])([ React_DOM.ul([ React_DOM.className("left button-group") ])(specificButtons(_155.blockType)), React_DOM.ul([ React_DOM.className("right button-group") ])([ SlamData_Helpers.actionButton(SlamData_Helpers.iconFA({}))({
                tooltip: "Close", 
                icon: SlamData_Helpers.closeIcon({}), 
                click: _155.close
            }) ]) ]);
        });
    })();
    var isEval = function (_766) {
        if (_766 instanceof SlamData_App_Notebook_Block_Types.Eval) {
            return true;
        };
        return false;
    };
    var injectC3Options = function (o) {
        return {
            blockType: o.blockType, 
            ident: o.ident, 
            index: o.index, 
            close: o.close, 
            content: o.content, 
            options: Graphics_C3.options
        };
    };
    var handleKeyPress = function (k) {
        return k.ctrlKey && k.keyCode === 13 || k.keyCode === 10 ? SlamData_App_Notebook_Block_Common["eval"] : SlamData_App_Notebook_Block_Common.edit;
    };
    var eqEditor = function (ed) {
        return function (ed$prime) {
            return Prelude["=="](SlamData_App_Notebook_Block_Types.eqEditor({}))(ed)(ed$prime);
        };
    };
    var eqBlockID = function (ident) {
        return function (ident$prime) {
            return Prelude["=="](SlamData_App_Notebook_Block_Types.eqBlockID({}))(ident)(ident$prime);
        };
    };
    var cwu = function (props) {
        return function (state) {
            var rec = new SlamData_App_Notebook_Block_Types.BlockSpec({
                blockType: props.blockType, 
                content: Data_Maybe.Just.create(state2Content(state)), 
                ident: props.ident
            });
            var go = function (_769) {
                return Prelude["=="](SlamData_App_Notebook_Block_Types.eqBlockID({}))(_769.value0.ident)(props.ident) ? rec : new SlamData_App_Notebook_Block_Types.BlockSpec(_769.value0);
            };
            var blocks = SlamData_Helpers.localGet(SlamData_App_Notebook_Block_Types.readBlockSpec({}))(SlamData_Helpers.Blocks.value);
            var blocks$prime = Prelude["<$>"](Data_Array.functorArray({}))(go)(blocks);
            return Control_Apply["*>"](Control_Monad_Eff.applyEff({}))(Prelude.pure(Control_Monad_Eff.applicativeEff({}))(SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Block_Types.showBlockSpec({})))(SlamData_Helpers.Blocks.value)(blocks$prime)))(Prelude.pure(Control_Monad_Eff.applicativeEff({}))({}));
        };
    };
    var cwm = function __do() {
        var _154 = React.getProps();
        var _153 = React.readState();
        React.writeState((function () {
            var _2761 = {};
            for (var _2762 in _153) {
                if (_153.hasOwnProperty(_2762)) {
                    _2761[_2762] = _153[_2762];
                };
            };
            _2761.content = SlamData_Helpers.getOrElse(_154.content)("");
            return _2761;
        })());
        return {};
    };
    var blockType = function (ty) {
        return React_DOM.div([ React_DOM.className("block-type text-center") ])([ React_DOM.span([ React_DOM.className("") ])([ React_DOM.text(Prelude.show(SlamData_App_Notebook_Block_Types.showBlockType({}))(ty)) ]) ]);
    };
    var blockEditor = function (content) {
        return SlamData_App_Notebook_Block_Common.blockRow("block-content")([  ])([ React_DOM["div'"]([ React_DOM.textarea([ React_DOM.autoFocus("true"), React_DOM.className("block-editor"), React_DOM.onBlur(function (_) {
            return SlamData_App_Notebook_Block_Common["eval"];
        }), React_DOM.onChange(function (e) {
            return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React.writeState({
                edit: SlamData_App_Notebook_Block_Types.Edit.value, 
                content: e.target.value
            }));
        }), React_DOM.onKeyPress(handleKeyPress), React_DOM.ref("editor"), React_DOM.value(content) ])([  ]) ]) ]);
    };
    var evalOrEdit = function (_767) {
        return function (_768) {
            if (_768.blockType instanceof SlamData_App_Notebook_Block_Types.Visual) {
                return function (s) {
                    return SlamData_App_Notebook_Block_Visual.evalVisual(s)(_768);
                };
            };
            if (_767 instanceof SlamData_App_Notebook_Block_Types.Edit) {
                return blockEditor;
            };
            if (_767 instanceof SlamData_App_Notebook_Block_Types.Eval && _768.blockType instanceof SlamData_App_Notebook_Block_Types.Markdown) {
                return function (s) {
                    return SlamData_App_Notebook_Block_Markdown.evalMarkdown(s)({});
                };
            };
            if (_767 instanceof SlamData_App_Notebook_Block_Types.Eval && _768.blockType instanceof SlamData_App_Notebook_Block_Types.SQL) {
                return function (s) {
                    return SlamData_App_Notebook_Block_SQL.evalSQL(React.deferred(SlamData_App_Notebook_Block_Common.edit))(s)(_768);
                };
            };
            throw new Error("Failed pattern match");
        };
    };
    var block = React.mkUI((function () {
        var _2768 = {};
        for (var _2769 in React.spec) {
            if (React.spec.hasOwnProperty(_2769)) {
                _2768[_2769] = React.spec[_2769];
            };
        };
        _2768.getInitialState = Prelude.pure(Control_Monad_Eff.applicativeEff({}))({
            edit: SlamData_App_Notebook_Block_Types.Edit.value, 
            content: ""
        });
        _2768.componentWillUpdate = Data_Function.mkFn2(cwu);
        _2768.componentWillMount = cwm;
        _2768.shouldComponentUpdate = scu;
        return _2768;
    })())(function __do() {
        var _152 = React.readState();
        var _151 = React.getProps();
        return React_DOM.div([ React_DOM.className("block") ])([ SlamData_App_Notebook_Block_Common.blockRow("block-toolbar toolbar")([ blockType(_151.blockType) ])([ toolbar(_151) ]), evalOrEdit(_152.edit)(_151)(_152.content) ]);
    });
    return {
        block: block
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook_Settings = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Lens = PS.Control_Lens;
    var SlamData_Lens = PS.SlamData_Lens;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React = PS.React;
    var Data_Map = PS.Data_Map;
    var Data_Const = PS.Data_Const;
    var React_DOM = PS.React_DOM;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Function = PS.Data_Function;
    var Data_Array = PS.Data_Array;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Profunctor = PS.Data_Profunctor;
    var Data_Maybe = PS.Data_Maybe;
    function SlamDataTab() {

    };
    SlamDataTab.value = new SlamDataTab();
    function SlamEngineTab() {

    };
    SlamEngineTab.value = new SlamEngineTab();
    function wtfIsUpWithEvents(write, save, state) {  write(state);  save({sdConfig: state.settings.sdConfig, seConfig: state.settings.seConfig})();  return function() {    return state;  };};
    var showSettingsTab = function (_) {
        return new Prelude.Show(function (_776) {
            if (_776 instanceof SlamDataTab) {
                return "SlamData";
            };
            if (_776 instanceof SlamEngineTab) {
                return "SlamEngine";
            };
            throw new Error("Failed pattern match");
        });
    };
    var seConfig = function (__dict_Functor_593) {
        return Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._settings(__dict_Functor_593))(SlamData_Lens._seConfig(__dict_Functor_593));
    };
    var seMountings = function (__dict_Functor_594) {
        return Control_Lens[".."](Prelude.semigroupoidArr({}))(seConfig(__dict_Functor_594))(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._seConfigRec(__dict_Functor_594))(SlamData_Lens._mountings(__dict_Functor_594)));
    };
    var seServer = function (__dict_Functor_595) {
        return Control_Lens[".."](Prelude.semigroupoidArr({}))(seConfig(__dict_Functor_595))(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._seConfigRec(__dict_Functor_595))(SlamData_Lens._server(__dict_Functor_595)));
    };
    var sdConfig = function (__dict_Functor_596) {
        return Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._settings(__dict_Functor_596))(SlamData_Lens._sdConfig(__dict_Functor_596));
    };
    var sdServer = function (__dict_Functor_597) {
        return Control_Lens[".."](Prelude.semigroupoidArr({}))(sdConfig(__dict_Functor_597))(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._sdConfigRec(__dict_Functor_597))(SlamData_Lens._server(__dict_Functor_597)));
    };
    var nodeWebkit = function (__dict_Functor_598) {
        return Control_Lens[".."](Prelude.semigroupoidArr({}))(sdConfig(__dict_Functor_598))(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._sdConfigRec(__dict_Functor_598))(SlamData_Lens._nodeWebkit(__dict_Functor_598)));
    };
    var initialState = function __do() {
        var props = React.getProps();
        return {
            active: SlamEngineTab.value, 
            settings: props.settings
        };
    };
    var eqSettingsTab = function (_) {
        return new Prelude.Eq(function (st) {
            return function (st$prime) {
                return !Prelude["=="](eqSettingsTab({}))(st)(st$prime);
            };
        }, function (_774) {
            return function (_775) {
                if (_774 instanceof SlamDataTab && _775 instanceof SlamDataTab) {
                    return true;
                };
                if (_774 instanceof SlamEngineTab && _775 instanceof SlamEngineTab) {
                    return true;
                };
                return false;
            };
        });
    };
    var activate = function (__dict_Eq_599) {
        return function (_772) {
            return function (_773) {
                if (Prelude["=="](__dict_Eq_599)(_772)(_773)) {
                    return " active";
                };
                return "";
            };
        };
    };
    var settings = React.mkUI((function () {
        var _2777 = {};
        for (var _2778 in React.spec) {
            if (React.spec.hasOwnProperty(_2778)) {
                _2777[_2778] = React.spec[_2778];
            };
        };
        _2777.getInitialState = initialState;
        return _2777;
    })())(function __do() {
        var _157 = React.getProps();
        var _156 = React.readState();
        return (function () {
            var mountings = Data_Map.toList(Control_Lens["^."](_156)(Control_Lens[".."](Prelude.semigroupoidArr({}))(seConfig(Data_Const.functorConst({})))(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._seConfigRec(Data_Const.functorConst({})))(SlamData_Lens._mountings(Data_Const.functorConst({}))))));
            return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React_DOM.div([ React_DOM.className("vertical") ])([ React_DOM.div([ React_DOM.className("small-1  columns"), React_DOM.idProp("settings-category") ])([ React_DOM.dl([ React_DOM.className("tabs vertical") ])([ React_DOM.dd([ React_DOM.className("tab" + activate(eqSettingsTab({}))(SlamEngineTab.value)(_156.active)) ])([ React_DOM.a([ React_DOM.idProp("settings-" + Prelude.show(showSettingsTab({}))(SlamEngineTab.value)), React_DOM.onClick(function (_) {
                return React.writeState((function () {
                    var _2781 = {};
                    for (var _2782 in _156) {
                        if (_156.hasOwnProperty(_2782)) {
                            _2781[_2782] = _156[_2782];
                        };
                    };
                    _2781.active = SlamEngineTab.value;
                    return _2781;
                })());
            }) ])([ React_DOM.text(Prelude.show(showSettingsTab({}))(SlamEngineTab.value)) ]) ]), React_DOM.dd([ React_DOM.className("tab" + activate(eqSettingsTab({}))(SlamDataTab.value)(_156.active)) ])([ React_DOM.a([ React_DOM.idProp("settings-" + Prelude.show(showSettingsTab({}))(SlamDataTab.value)), React_DOM.onClick(function (_) {
                return React.writeState((function () {
                    var _2783 = {};
                    for (var _2784 in _156) {
                        if (_156.hasOwnProperty(_2784)) {
                            _2783[_2784] = _156[_2784];
                        };
                    };
                    _2783.active = SlamDataTab.value;
                    return _2783;
                })());
            }) ])([ React_DOM.text(Prelude.show(showSettingsTab({}))(SlamDataTab.value)) ]) ]) ]) ]), React_DOM.div([ React_DOM.className("small-11 columns"), React_DOM.idProp("settings-content") ])([ React_DOM.div([ React_DOM.className("tabs-content vertical") ])([ React_DOM.div([ React_DOM.className("content" + activate(eqSettingsTab({}))(SlamEngineTab.value)(_156.active)) ])([ React_DOM["h6'"]([ React_DOM.text("Settings for the local instance of SlamEngine") ]), React_DOM["form'"]([ React_DOM["fieldset'"]([ React_DOM["legend'"]([ React_DOM.text("Server") ]), React_DOM["div'"]([ React_DOM.label([ React_DOM.htmlFor("slamengine-port") ])([ React_DOM.text("Port") ]), React_DOM.input([ React_DOM.name("slamengine-port"), React_DOM.placeholder("8080"), React_DOM.onChange(function (e) {
                var state$prime = Control_Lens[".~"](Control_Lens[".."](Prelude.semigroupoidArr({}))(seServer(Control_Monad_Identity.functorIdentity({})))(SlamData_Lens._port(Control_Monad_Identity.functorIdentity({}))))(e.target.value)(_156);
                return wtfIsUpWithEvents(React.writeState, _157.saveSettings, state$prime);
            }), React_DOM.value(Prelude.show(Prelude.showNumber({}))(Control_Lens["^."](_156)(Control_Lens[".."](Prelude.semigroupoidArr({}))(seServer(Data_Const.functorConst({})))(SlamData_Lens._port(Data_Const.functorConst({})))))) ])([  ]) ]) ]), React_DOM["fieldset'"]([ React_DOM["legend'"]([ React_DOM.text("MongoDB mountings") ]), React_DOM["div'"](Prelude[">>="](Data_Array.bindArray({}))(mountings)(function (_771) {
                return [ React_DOM.label([ React_DOM.htmlFor("mongodb-path") ])([ React_DOM.text("Path") ]), React_DOM.input([ React_DOM.name("mongodb-path"), React_DOM.placeholder("/"), React_DOM.onChange(function (e) {
                    var state$prime = Control_Lens["%~"](Data_Profunctor.profunctorArr({}))(seMountings(Control_Monad_Identity.functorIdentity({})))(Data_Map["delete"](Prelude.ordString({}))(_771.value0))(_156);
                    var state$prime$prime = Control_Lens["%~"](Data_Profunctor.profunctorArr({}))(seMountings(Control_Monad_Identity.functorIdentity({})))(Data_Map.insert(Prelude.ordString({}))(e.target.value)(_771.value1))(state$prime);
                    return wtfIsUpWithEvents(React.writeState, _157.saveSettings, state$prime$prime);
                }), React_DOM.value(_771.value0) ])([  ]), React_DOM.label([ React_DOM.htmlFor("mongodb-mongouri") ])([ React_DOM.text("MongoUri") ]), React_DOM.input([ React_DOM.name("mongodb-mongouri"), React_DOM.placeholder("mongodb://localhost:27017"), React_DOM.onChange(function (e) {
                    var state$prime = Control_Lens["%~"](Data_Profunctor.profunctorArr({}))(seMountings(Control_Monad_Identity.functorIdentity({})))(Data_Map.update(Prelude.ordString({}))(function (m) {
                        return new Data_Maybe.Just(Control_Lens[".~"](Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._mountingRec(Control_Monad_Identity.functorIdentity({})))(SlamData_Lens._connectionUri(Control_Monad_Identity.functorIdentity({}))))(e.target.value)(m));
                    })(_771.value0))(_156);
                    return wtfIsUpWithEvents(React.writeState, _157.saveSettings, state$prime);
                }), React_DOM.value(Control_Lens["^."](_771.value1)(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._mountingRec(Data_Const.functorConst({})))(SlamData_Lens._connectionUri(Data_Const.functorConst({}))))) ])([  ]), React_DOM.label([ React_DOM.htmlFor("mongodb-database") ])([ React_DOM.text("Database") ]), React_DOM.input([ React_DOM.name("mongodb-database"), React_DOM.placeholder("test"), React_DOM.onChange(function (e) {
                    var state$prime = Control_Lens["%~"](Data_Profunctor.profunctorArr({}))(seMountings(Control_Monad_Identity.functorIdentity({})))(Data_Map.update(Prelude.ordString({}))(function (m) {
                        return new Data_Maybe.Just(Control_Lens[".~"](Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._mountingRec(Control_Monad_Identity.functorIdentity({})))(SlamData_Lens._database(Control_Monad_Identity.functorIdentity({}))))(e.target.value)(m));
                    })(_771.value0))(_156);
                    return wtfIsUpWithEvents(React.writeState, _157.saveSettings, state$prime);
                }), React_DOM.value(Control_Lens["^."](_771.value1)(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._mountingRec(Data_Const.functorConst({})))(SlamData_Lens._database(Data_Const.functorConst({}))))) ])([  ]) ];
            })) ]), React_DOM["fieldset'"]([ React_DOM["legend'"]([ React_DOM.text("Java") ]), React_DOM["div'"]([ React_DOM.label([ React_DOM.htmlFor("java-binary") ])([ React_DOM.text("Binary") ]), React_DOM.input([ React_DOM.name("java-binary"), React_DOM.placeholder("/usr/bin/java"), React_DOM.onChange(function (e) {
                var state$prime = Control_Lens[".~"](Control_Lens[".."](Prelude.semigroupoidArr({}))(nodeWebkit(Control_Monad_Identity.functorIdentity({})))(SlamData_Lens._java(Control_Monad_Identity.functorIdentity({}))))(e.target.value)(_156);
                return wtfIsUpWithEvents(React.writeState, _157.saveSettings, state$prime);
            }), React_DOM.value(Control_Lens["^."](_156)(Control_Lens[".."](Prelude.semigroupoidArr({}))(nodeWebkit(Data_Const.functorConst({})))(SlamData_Lens._java(Data_Const.functorConst({}))))) ])([  ]) ]) ]) ]) ]), React_DOM.div([ React_DOM.className("content" + activate(eqSettingsTab({}))(SlamDataTab.value)(_156.active)) ])([ React_DOM["h6'"]([ React_DOM.text("SlamEngine server to connect to") ]), React_DOM["form'"]([ React_DOM["fieldset'"]([ React_DOM["legend'"]([ React_DOM.text("SlamEngine server") ]), React_DOM["div'"]([ React_DOM.label([ React_DOM.htmlFor("server-location") ])([ React_DOM.text("Location") ]), React_DOM.input([ React_DOM.name("server-location"), React_DOM.placeholder("http://localhost"), React_DOM.onChange(function (e) {
                var state$prime = Control_Lens[".~"](Control_Lens[".."](Prelude.semigroupoidArr({}))(sdServer(Control_Monad_Identity.functorIdentity({})))(SlamData_Lens._location(Control_Monad_Identity.functorIdentity({}))))(e.target.value)(_156);
                return wtfIsUpWithEvents(React.writeState, _157.saveSettings, state$prime);
            }), React_DOM.value(Control_Lens["^."](_156)(Control_Lens[".."](Prelude.semigroupoidArr({}))(sdServer(Data_Const.functorConst({})))(SlamData_Lens._location(Data_Const.functorConst({}))))) ])([  ]) ]), React_DOM["div'"]([ React_DOM.label([ React_DOM.htmlFor("server-port") ])([ React_DOM.text("Post") ]), React_DOM.input([ React_DOM.name("server-port"), React_DOM.placeholder("8080"), React_DOM.onChange(function (e) {
                var state$prime = Control_Lens[".~"](Control_Lens[".."](Prelude.semigroupoidArr({}))(sdServer(Control_Monad_Identity.functorIdentity({})))(SlamData_Lens._port(Control_Monad_Identity.functorIdentity({}))))(e.target.value)(_156);
                return wtfIsUpWithEvents(React.writeState, _157.saveSettings, state$prime);
            }), React_DOM.value(Prelude.show(Prelude.showNumber({}))(Control_Lens["^."](_156)(Control_Lens[".."](Prelude.semigroupoidArr({}))(sdServer(Data_Const.functorConst({})))(SlamData_Lens._port(Data_Const.functorConst({})))))) ])([  ]) ]) ]) ]) ]) ]) ]) ]));
        })()();
    });
    return {
        settings: settings, 
        eqSettingsTab: eqSettingsTab, 
        showSettingsTab: showSettingsTab
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook_Types = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_UUID = PS.Data_UUID;
    var Data_Array = PS.Data_Array;
    var SlamData_App_Notebook_Block_Types = PS.SlamData_App_Notebook_Block_Types;
    var Data_Foreign = PS.Data_Foreign;
    function DataSrcTab() {

    };
    DataSrcTab.value = new DataSrcTab();
    function FieldsTab() {

    };
    FieldsTab.value = new FieldsTab();
    function VisualTypeTab() {

    };
    VisualTypeTab.value = new VisualTypeTab();
    function NotebookID(value0) {
        this.value0 = value0;
    };
    NotebookID.create = function (value0) {
        return new NotebookID(value0);
    };
    function NotebookSpec(value0) {
        this.value0 = value0;
    };
    NotebookSpec.create = function (value0) {
        return new NotebookSpec(value0);
    };
    function showVisualData(vd) {  return JSON.stringify(vd);};
    var showVisualTab = function (_) {
        return new Prelude.Show(function (_777) {
            if (_777 instanceof DataSrcTab) {
                return "Data Source";
            };
            if (_777 instanceof FieldsTab) {
                return "Fields";
            };
            if (_777 instanceof VisualTypeTab) {
                return "Type";
            };
            throw new Error("Failed pattern match");
        });
    };
    var showNotebookID = function (_) {
        return new Prelude.Show(function (_780) {
            return Prelude.show(Data_UUID.showUUID({}))(_780.value0);
        });
    };
    var showNotebookSpec = function (_) {
        return new Prelude.Show(function (_783) {
            return "{ \"blocks\": " + Prelude.show(Prelude.showArray(Prelude.showString({})))(Prelude["<$>"](Data_Array.functorArray({}))(Prelude.show(SlamData_App_Notebook_Block_Types.showBlockID({})))(_783.value0.blocks)) + ", \"ident\": \"" + Prelude.show(showNotebookID({}))(_783.value0.ident) + "\"" + ", \"name\": \"" + _783.value0.name + "\"" + "}";
        });
    };
    var readNotebookSpec = function (_) {
        return new Data_Foreign.ReadForeign(Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(Data_Foreign.readArray(Data_UUID.readUUID({})))("blocks"))(function (_160) {
            return Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(Data_UUID.readUUID({}))("ident"))(function (_159) {
                return Prelude[">>="](Data_Foreign.bindForeignParser({}))(Data_Foreign.prop(Data_Foreign.readString({}))("name"))(function (_158) {
                    return Prelude.pure(Data_Foreign.applicativeForeignParser({}))(new NotebookSpec({
                        ident: new NotebookID(_159), 
                        blocks: Prelude["<$>"](Data_Array.functorArray({}))(SlamData_App_Notebook_Block_Types.BlockID.create)(_160), 
                        name: _158
                    }));
                });
            });
        }));
    };
    var eqNotebookID = function (_) {
        return new Prelude.Eq(function (b) {
            return function (b$prime) {
                return !Prelude["=="](eqNotebookID({}))(b)(b$prime);
            };
        }, function (_778) {
            return function (_779) {
                return Prelude["=="](Data_UUID.eqUUID({}))(_778.value0)(_779.value0);
            };
        });
    };
    var eqNotebookSpec = function (_) {
        return new Prelude.Eq(function (ns) {
            return function (ns$prime) {
                return !Prelude["=="](eqNotebookSpec({}))(ns)(ns$prime);
            };
        }, function (_781) {
            return function (_782) {
                return _781.value0.name === _782.value0.name && Prelude["=="](Prelude.eqArray(SlamData_App_Notebook_Block_Types.eqBlockID({})))(_781.value0.blocks)(_782.value0.blocks) && Prelude["=="](eqNotebookID({}))(_781.value0.ident)(_782.value0.ident);
            };
        });
    };
    return {
        DataSrcTab: DataSrcTab, 
        FieldsTab: FieldsTab, 
        VisualTypeTab: VisualTypeTab, 
        NotebookID: NotebookID, 
        NotebookSpec: NotebookSpec, 
        showVisualData: showVisualData, 
        showVisualTab: showVisualTab, 
        eqNotebookID: eqNotebookID, 
        showNotebookID: showNotebookID, 
        eqNotebookSpec: eqNotebookSpec, 
        showNotebookSpec: showNotebookSpec, 
        readNotebookSpec: readNotebookSpec
    };
})();
var PS = PS || {};
PS.SlamData_App_Panel = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React = PS.React;
    var Data_Maybe = PS.Data_Maybe;
    var SlamData_App_Panel_Tab = PS.SlamData_App_Panel_Tab;
    var Data_UUID = PS.Data_UUID;
    var Data_Array = PS.Data_Array;
    var React_DOM = PS.React_DOM;
    var Data_Foldable = PS.Data_Foldable;
    var makeActive = function (ident) {
        return function __do() {
            var _163 = React.readState();
            return React.writeState((function () {
                var _2805 = {};
                for (var _2806 in _163) {
                    if (_163.hasOwnProperty(_2806)) {
                        _2805[_2806] = _163[_2806];
                    };
                };
                _2805.activeTab = new Data_Maybe.Just(ident);
                return _2805;
            })());
        };
    };
    var injectMakeActive = function (_788) {
        return function (_789) {
            return SlamData_App_Panel_Tab.makeTabName({
                name: _789.name, 
                external: _789.external, 
                internal: _789.internal, 
                content: _789.content, 
                active: Prelude["=="](Data_Maybe.eqMaybe(Data_UUID.eqUUID({})))(_788)(new Data_Maybe.Just(_789.ident)), 
                ident: _789.ident, 
                activate: React.deferred(makeActive(_789.ident))
            });
        };
    };
    var initialState = {
        tabs: [  ], 
        activeTab: Data_Maybe.Nothing.value
    };
    var _name = function (_784) {
        return _784.name;
    };
    var _ident = function (_787) {
        return _787.ident;
    };
    var panel$prime = React.mkUI((function () {
        var _2818 = {};
        for (var _2819 in React.spec) {
            if (React.spec.hasOwnProperty(_2819)) {
                _2818[_2819] = React.spec[_2819];
            };
        };
        _2818.getInitialState = Prelude.pure(Control_Monad_Eff.applicativeEff({}))(initialState);
        return _2818;
    })())(function __do() {
        var _162 = React.getProps();
        var _161 = React.readState();
        return (function () {
            var activeTab = Prelude["<|>"](Data_Maybe.alternativeMaybe({}))(_161.activeTab)(Data_Maybe.maybe(Data_Maybe.Nothing.value)(Prelude[">>>"](Prelude.semigroupoidArr({}))(_ident)(Prelude.pure(Data_Maybe.applicativeMaybe({}))))(Data_Array.head(_162.tabs)));
            return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React_DOM.div([ React_DOM.className("slamdata-panel"), React_DOM.dataSet({
                "equalizer-watch": ""
            }) ])([ React_DOM.dl([ React_DOM.className("tabs"), React_DOM.dataSet({
                tab: ""
            }) ])(Prelude["<$>"](Data_Array.functorArray({}))(injectMakeActive(activeTab))(_162.tabs)), React_DOM.div([ React_DOM.className("tabs-content") ])(Data_Maybe.maybe([  ])(Prelude[">>>"](Prelude.semigroupoidArr({}))(SlamData_App_Panel_Tab.makeCont)(Prelude.pure(Data_Array.applicativeArray({}))))(Data_Foldable.find(Data_Foldable.foldableArray({}))(Prelude[">>>"](Prelude.semigroupoidArr({}))(_ident)(Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Maybe.Just.create)(Prelude["=="](Data_Maybe.eqMaybe(Data_UUID.eqUUID({})))(activeTab))))(_162.tabs))) ]));
        })()();
    });
    var panel = function (tabs) {
        return panel$prime({
            tabs: tabs
        });
    };
    var _content = function (_785) {
        return _785.content;
    };
    var _active = function (_786) {
        return _786.active;
    };
    return {
        panel: panel
    };
})();
var PS = PS || {};
PS.SlamData_App_Extra = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var SlamData_App_Panel = PS.SlamData_App_Panel;
    var React_DOM = PS.React_DOM;
    var Data_UUID = PS.Data_UUID;
    var exPanel = SlamData_App_Panel.panel([ {
        name: "Tasks", 
        content: [ React_DOM.text("Do some tasks.") ], 
        external: [  ], 
        internal: [  ], 
        ident: Data_UUID.runUUID(Data_UUID.v4)
    }, {
        name: "Sharing", 
        content: [ React_DOM.text("Show your friends.") ], 
        external: [  ], 
        internal: [  ], 
        ident: Data_UUID.runUUID(Data_UUID.v4)
    }, {
        name: "Chat", 
        content: [ React_DOM.text("Guess what he/she said.") ], 
        external: [  ], 
        internal: [  ], 
        ident: Data_UUID.runUUID(Data_UUID.v4)
    } ]);
    var extra = exPanel;
    return {
        extra: extra
    };
})();
var PS = PS || {};
PS.SlamData_App_FileSystem = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var React_DOM = PS.React_DOM;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var React = PS.React;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var SlamData_App_Panel = PS.SlamData_App_Panel;
    var Data_Array = PS.Data_Array;
    var Data_UUID = PS.Data_UUID;
    var ft2UI = function (_790) {
        if (_790.type === "directory") {
            return React_DOM["ul'"]([ SlamData_Helpers.toUI(SlamData_Helpers.iconFA({}))(SlamData_Helpers.dirOpenIcon({})), React_DOM.text(_790.name) ]);
        };
        if (_790.type === "file") {
            return React_DOM["li'"]([ SlamData_Helpers.toUI(SlamData_Helpers.iconFA({}))(SlamData_Helpers.fileIcon({})), React_DOM.text(_790.name) ]);
        };
        throw new Error("Failed pattern match");
    };
    var filesystem = React.mkUI(React.spec)(function __do() {
        var _164 = React.getProps();
        return SlamData_App_Panel.panel([ {
            name: "File System", 
            content: [ Data_Array["null"](_164.files) ? SlamData_Helpers.toUI(SlamData_Helpers.iconFA({}))(SlamData_Helpers.loadingIcon({})) : React_DOM["ul'"](Prelude["<$>"](Data_Array.functorArray({}))(ft2UI)(_164.files)) ], 
            external: [  ], 
            internal: [ SlamData_Helpers.actionButton(SlamData_Helpers.iconFA({}))({
                tooltip: "New", 
                icon: SlamData_Helpers.newIcon({}), 
                click: Prelude.pure(Control_Monad_Eff.applicativeEff({}))({})
            }), SlamData_Helpers.actionButton(SlamData_Helpers.iconFA({}))({
                tooltip: "Open", 
                icon: SlamData_Helpers.openIcon({}), 
                click: Prelude.pure(Control_Monad_Eff.applicativeEff({}))({})
            }) ], 
            ident: Data_UUID.runUUID(Data_UUID.v4)
        } ]);
    });
    return {
        filesystem: filesystem
    };
})();
var PS = PS || {};
PS.SlamData_App_Notebook = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var React_DOM = PS.React_DOM;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var Graphics_C3 = PS.Graphics_C3;
    var Data_String = PS.Data_String;
    var Data_Array = PS.Data_Array;
    var SlamData_App_Notebook_Types = PS.SlamData_App_Notebook_Types;
    var Data_Maybe = PS.Data_Maybe;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React = PS.React;
    var Data_Map = PS.Data_Map;
    var Data_UUID = PS.Data_UUID;
    var SlamData_App_Panel_Tab = PS.SlamData_App_Panel_Tab;
    var Data_Foldable = PS.Data_Foldable;
    var SlamData_App_Notebook_Block_Types = PS.SlamData_App_Notebook_Block_Types;
    var SlamData_App_Notebook_Block = PS.SlamData_App_Notebook_Block;
    var SlamData_App_Notebook_Settings = PS.SlamData_App_Notebook_Settings;
    var Control_Lens = PS.Control_Lens;
    var SlamData_Lens = PS.SlamData_Lens;
    var Data_Const = PS.Data_Const;
    var Data_Array_Unsafe = PS.Data_Array_Unsafe;
    function scu(p, s) {  return s.visualState.visible ||         (this.state.visualState.visible !== s.visualState.visible) ||         (!eqNotebooks(this.state.notebooks)(s.notebooks)) ||         (!eqActive(this.state.active)(s.active)) ||         (this.props.showSettings !== p.showSettings);};
    function targetValue(e) {  return function(ty) {    return {      dataSrc: e.target.selectedOptions[0].parentNode.label,      field: e.target.value,      visualType: showVisualType_(ty)    }  }};
    function slashize(raw) {  return raw.slice(-1) === '/' ? raw : raw + '/';};
    function fieldswm(that) {    that.state.visualState.fields.forEach(function(f0) {      var settings = that.props.settings;      oboe(serverURI_(settings.sdConfig) +'/data/fs' + slashize(keys_(settings.seConfig.mountings)[0]) + f0.dataSrc + '?limit=1')      .done(function(json) {        var state = that.state;        state.visualState.fields.forEach(function(f1, i) {          if (f1.dataSrc === f0.dataSrc) {            state.visualState.fields[i].allFields = Object.keys(json);          }        });        if (that.isMounted()) {          that.setState(state);        }      });    });};
    function bind(that) {  return function(f) {    return f.bind(that);  }};
    function modifyDataSrc(that) {  return function(bool) {    return function(str) {      return function() {        var state = that.state;        var vState = dataSrcUpdate(bool)(str)(state.visualState);        state.visualState = vState;        that.replaceState(state);        fieldswm(that);      }    }  }};
    function createVisualBlock(that) {  return function(ty) {    return function(ident) {      return function(content) {        var event = createBlock(ty)(ident)(content)();        var state = event();        state.visualState = initialState.visualState;        that.replaceState(state);        return function() { return state; };      }    }  }};
    var visuals = function (change) {
        return function (ty) {
            return [ React_DOM.li([ React_DOM.onClick(function (_) {
                return change(SlamData_Helpers.visualPie);
            }), React_DOM.className(Prelude["=="](Graphics_C3.eqC3Type({}))(ty)(SlamData_Helpers.visualPie) ? "selected" : "") ])([ React_DOM["a'"]([ SlamData_Helpers.toUI(SlamData_Helpers.iconEntypo({}))(SlamData_Helpers.pieChartIcon({})) ]), React_DOM["span'"]([ React_DOM.text("Pie") ]) ]), React_DOM.li([ React_DOM.onClick(function (_) {
                return change(SlamData_Helpers.visualBar);
            }), React_DOM.className(Prelude["=="](Graphics_C3.eqC3Type({}))(ty)(SlamData_Helpers.visualBar) ? "selected" : "") ])([ React_DOM["a'"]([ SlamData_Helpers.toUI(SlamData_Helpers.iconEntypo({}))(SlamData_Helpers.barChartIcon({})) ]), React_DOM["span'"]([ React_DOM.text("Bar") ]) ]), React_DOM.li([ React_DOM.onClick(function (_) {
                return change(SlamData_Helpers.visualLine);
            }), React_DOM.className(Prelude["=="](Graphics_C3.eqC3Type({}))(ty)(SlamData_Helpers.visualLine) ? "selected" : "") ])([ React_DOM["a'"]([ SlamData_Helpers.toUI(SlamData_Helpers.iconEntypo({}))(SlamData_Helpers.lineChartIcon({})) ]), React_DOM["span'"]([ React_DOM.text("Line") ]) ]) ];
        };
    };
    var visualContent = function (vds) {
        var content = Data_String.joinWith("")(Prelude["<$>"](Data_Array.functorArray({}))(SlamData_App_Notebook_Types.showVisualData)(vds));
        return content === "" ? Data_Maybe.Nothing.value : new Data_Maybe.Just(content);
    };
    var showVisualType_ = function (ty) {
        return Prelude.show(Graphics_C3.showC3Type({}))(ty);
    };
    var serverURI_ = SlamData_Helpers.serverURI;
    var optionify = function (vsf) {
        return React_DOM.optgroup([ React_DOM.labelProp(vsf.dataSrc) ])(Prelude["<$>"](Data_Array.functorArray({}))(function (s) {
            return React_DOM.option([ React_DOM.value(s) ])([ React_DOM.text(s) ]);
        })(vsf.selectedFields));
    };
    var modalVisibility = function (vis) {
        return function __do() {
            var _172 = React.readState();
            return (function () {
                var visualState$prime = (function () {
                    var _2833 = {};
                    for (var _2834 in _172.visualState) {
                        if (_172.visualState.hasOwnProperty(_2834)) {
                            _2833[_2834] = _172.visualState[_2834];
                        };
                    };
                    _2833.visible = vis;
                    return _2833;
                })();
                return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React.writeState((function () {
                    var _2835 = {};
                    for (var _2836 in _172) {
                        if (_172.hasOwnProperty(_2836)) {
                            _2835[_2836] = _172[_2836];
                        };
                    };
                    _2835.visualState = visualState$prime;
                    return _2835;
                })()));
            })()();
        };
    };
    var maybeActive = function (ident) {
        return Data_Maybe.maybe("")(function (i) {
            return Prelude["=="](SlamData_App_Notebook_Types.eqNotebookID({}))(ident)(i) ? " active" : "";
        });
    };
    var keys_ = Data_Map.keys;
    var initialState = {
        notebooks: SlamData_Helpers.localGet(SlamData_App_Notebook_Types.readNotebookSpec({}))(SlamData_Helpers.Notebooks.value), 
        active: Data_Maybe.Nothing.value, 
        settingId: SlamData_App_Notebook_Types.NotebookID.create(Data_UUID.runUUID(Data_UUID.v4)), 
        visualState: {
            active: SlamData_App_Notebook_Types.DataSrcTab.value, 
            fields: [  ], 
            visualType: SlamData_Helpers.visualBar, 
            visualData: [  ], 
            visible: false
        }
    };
    var getNotebookID = function (_821) {
        return _821.value0;
    };
    var makeNotebook = function (_803) {
        return function (_804) {
            return function (_805) {
                return function (_806) {
                    return function (_807) {
                        return function (_808) {
                            if (Prelude["=="](SlamData_App_Notebook_Types.eqNotebookID({}))(_804)(_808.value0.ident)) {
                                return React_DOM.dd([ React_DOM.className("tab" + maybeActive(_808.value0.ident)(_803)) ])([ React_DOM.a([ React_DOM.href("#" + SlamData_App_Panel_Tab.tabize(getNotebookID(_808.value0.ident))), React_DOM.idProp("notebook-Settings"), React_DOM.onClick(function (e) {
                                    return function __do() {
                                        e.preventDefault({});
                                        return _806(_808.value0.ident)();
                                    };
                                }) ])([ React_DOM.text(_808.value0.name), React_DOM.i([ React_DOM.className("fa fa-times"), React_DOM.onClick(function (e) {
                                    return function __do() {
                                        e.stopPropagation({});
                                        var __1 = e.preventDefault({});
                                        return _805();
                                    };
                                }) ])([  ]) ]) ]);
                            };
                            return React_DOM.dd([ React_DOM.className("tab" + maybeActive(_808.value0.ident)(_803)) ])([ React_DOM.a([ React_DOM.href("#" + SlamData_App_Panel_Tab.tabize(getNotebookID(_808.value0.ident))), React_DOM.onClick(function (e) {
                                return function __do() {
                                    var __2 = e.preventDefault({});
                                    return _806(_808.value0.ident)();
                                };
                            }) ])([ React_DOM.text(_808.value0.name), React_DOM.i([ React_DOM.className("fa fa-times"), React_DOM.onClick(function (e) {
                                return function __do() {
                                    var __2 = e.stopPropagation({});
                                    var __3 = e.preventDefault({});
                                    return _807(_808.value0.ident)();
                                };
                            }) ])([  ]) ]) ]);
                        };
                    };
                };
            };
        };
    };
    var field2UI = function (modify) {
        return function (dataSrc) {
            return function (fields) {
                return function (field) {
                    var checked = Data_Foldable.elem(Prelude.eqString({}))(Data_Foldable.foldableArray({}))(field)(fields);
                    return React_DOM["li'"]([ React_DOM.input([ React_DOM.typeProp("checkbox"), React_DOM.checked(checked), React_DOM.onChange(function (_) {
                        return modify(dataSrc)(checked ? Data_Array.filter(Prelude["/="](Prelude.eqString({}))(field))(fields) : Prelude[":"](field)(fields));
                    }) ])([  ]), React_DOM.text(field) ]);
                };
            };
        };
    };
    var fields2UI = function (modify) {
        return function (props) {
            return React_DOM["li'"]([ React_DOM.text(props.dataSrc), React_DOM["ul'"](Prelude["<$>"](Data_Array.functorArray({}))(field2UI(modify)(props.dataSrc)(props.selectedFields))(props.allFields)) ]);
        };
    };
    var externalActions = function (_815) {
        return React_DOM.ul([ React_DOM.className("button-group") ])([ SlamData_Helpers.actionButton(SlamData_Helpers.iconFA({}))({
            tooltip: "Save", 
            icon: SlamData_Helpers.saveIcon({}), 
            click: Prelude.pure(Control_Monad_Eff.applicativeEff({}))({})
        }), SlamData_Helpers.actionButton(SlamData_Helpers.iconFA({}))({
            tooltip: "Publish", 
            icon: SlamData_Helpers.publishIcon({}), 
            click: Prelude.pure(Control_Monad_Eff.applicativeEff({}))({})
        }) ]);
    };
    var eqNotebooks = function (xs) {
        return function (ys) {
            return Prelude["=="](Prelude.eqArray(SlamData_App_Notebook_Types.eqNotebookSpec({})))(xs)(ys);
        };
    };
    var eqActive = function (x) {
        return function (y) {
            return Prelude["=="](Data_Maybe.eqMaybe(SlamData_App_Notebook_Types.eqNotebookID({})))(x)(y);
        };
    };
    var deleteNotebook = function (ident) {
        return function __do() {
            var _180 = React.readState();
            return (function () {
                var o = SlamData_Helpers.partition(function (_795) {
                    return Prelude["=="](SlamData_App_Notebook_Types.eqNotebookID({}))(_795.value0.ident)(ident);
                })(_180.notebooks);
                var blocks = SlamData_Helpers.localGet(SlamData_App_Notebook_Block_Types.readBlockSpec({}))(SlamData_Helpers.Blocks.value);
                return function __do() {
                    var _179 = Data_Maybe.fromMaybe(blocks)(Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Array.head(o.fst))(function (_178) {
                        return Prelude.pure(Data_Maybe.applicativeMaybe({}))(Data_Array.filter(function (_796) {
                            return Data_Foldable.notElem(SlamData_App_Notebook_Block_Types.eqBlockID({}))(Data_Foldable.foldableArray({}))(_796.value0.ident)(_178.value0.blocks);
                        })(blocks));
                    }));
                    SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Block_Types.showBlockSpec({})))(SlamData_Helpers.Blocks.value)(_179);
                    var __1 = SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Types.showNotebookSpec({})))(SlamData_Helpers.Notebooks.value)(o.snd);
                    return React.writeState((function () {
                        var _2856 = {};
                        for (var _2857 in _180) {
                            if (_180.hasOwnProperty(_2857)) {
                                _2856[_2857] = _180[_2857];
                            };
                        };
                        _2856.notebooks = o.snd;
                        _2856.active = Data_Maybe.Nothing.value;
                        return _2856;
                    })());
                };
            })()();
        };
    };
    var deleteBlock = function (ident) {
        return function __do() {
            var _176 = React.readState();
            return (function () {
                var blocks$prime = Data_Array.filter(function (_794) {
                    return Prelude["/="](SlamData_App_Notebook_Block_Types.eqBlockID({}))(_794.value0.ident)(ident);
                })(SlamData_Helpers.localGet(SlamData_App_Notebook_Block_Types.readBlockSpec({}))(SlamData_Helpers.Blocks.value));
                var go = function (_823) {
                    return new SlamData_App_Notebook_Types.NotebookSpec((function () {
                        var _2862 = {};
                        for (var _2863 in _823.value0) {
                            if (_823.value0.hasOwnProperty(_2863)) {
                                _2862[_2863] = _823.value0[_2863];
                            };
                        };
                        _2862.blocks = Data_Array["delete"](SlamData_App_Notebook_Block_Types.eqBlockID({}))(ident)(_823.value0.blocks);
                        return _2862;
                    })());
                };
                var notebooks$prime = Prelude["<$>"](Data_Array.functorArray({}))(go)(_176.notebooks);
                return function __do() {
                    SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Block_Types.showBlockSpec({})))(SlamData_Helpers.Blocks.value)(blocks$prime);
                    var __1 = SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Types.showNotebookSpec({})))(SlamData_Helpers.Notebooks.value)(notebooks$prime);
                    return React.writeState((function () {
                        var _2865 = {};
                        for (var _2866 in _176) {
                            if (_176.hasOwnProperty(_2866)) {
                                _2865[_2866] = _176[_2866];
                            };
                        };
                        _2865.notebooks = notebooks$prime;
                        return _2865;
                    })());
                };
            })()();
        };
    };
    var crudBlock = function (f) {
        return function __do() {
            var _174 = React.readState();
            return (function () {
                var notebooks = Prelude["<$>"](Data_Array.functorArray({}))(f)(_174.notebooks);
                return function __do() {
                    SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Types.showNotebookSpec({})))(SlamData_Helpers.Notebooks.value)(notebooks);
                    return React.writeState((function () {
                        var _2868 = {};
                        for (var _2869 in _174) {
                            if (_174.hasOwnProperty(_2869)) {
                                _2868[_2869] = _174[_2869];
                            };
                        };
                        _2868.notebooks = Prelude["<$>"](Data_Array.functorArray({}))(f)(_174.notebooks);
                        return _2868;
                    })());
                };
            })()();
        };
    };
    var createNotebook = function __do() {
        var _177 = React.readState();
        return (function () {
            var i = SlamData_App_Notebook_Types.NotebookID.create(Data_UUID.runUUID(Data_UUID.v4));
            var notebooks$prime = Data_Array.snoc(_177.notebooks)(new SlamData_App_Notebook_Types.NotebookSpec({
                name: "Untitled", 
                blocks: [  ], 
                ident: i
            }));
            return function __do() {
                SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Types.showNotebookSpec({})))(SlamData_Helpers.Notebooks.value)(notebooks$prime);
                return React.writeState((function () {
                    var _2871 = {};
                    for (var _2872 in _177) {
                        if (_177.hasOwnProperty(_2872)) {
                            _2871[_2872] = _177[_2872];
                        };
                    };
                    _2871.notebooks = notebooks$prime;
                    _2871.active = new Data_Maybe.Just(i);
                    return _2871;
                })());
            };
        })()();
    };
    var createBlock = function (ty) {
        return function (ident) {
            return function (content) {
                return function __do() {
                    var _175 = React.readState();
                    return (function () {
                        var i = SlamData_App_Notebook_Block_Types.BlockID.create(Data_UUID.runUUID(Data_UUID.v4));
                        var block = new SlamData_App_Notebook_Block_Types.BlockSpec({
                            blockType: ty, 
                            content: content, 
                            ident: i
                        });
                        var blocks$prime = Data_Array.snoc(SlamData_Helpers.localGet(SlamData_App_Notebook_Block_Types.readBlockSpec({}))(SlamData_Helpers.Blocks.value))(block);
                        var go = function (_822) {
                            return Prelude["=="](SlamData_App_Notebook_Types.eqNotebookID({}))(_822.value0.ident)(ident) ? new SlamData_App_Notebook_Types.NotebookSpec((function () {
    var _2875 = {};
    for (var _2876 in _822.value0) {
        if (_822.value0.hasOwnProperty(_2876)) {
            _2875[_2876] = _822.value0[_2876];
        };
    };
    _2875.blocks = Data_Array.snoc(_822.value0.blocks)(i);
    return _2875;
})()) : new SlamData_App_Notebook_Types.NotebookSpec(_822.value0);
                        };
                        var notebooks$prime = Prelude["<$>"](Data_Array.functorArray({}))(go)(_175.notebooks);
                        return function __do() {
                            SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Block_Types.showBlockSpec({})))(SlamData_Helpers.Blocks.value)(blocks$prime);
                            var __1 = SlamData_Helpers.localSet(Prelude.showArray(SlamData_App_Notebook_Types.showNotebookSpec({})))(SlamData_Helpers.Notebooks.value)(notebooks$prime);
                            return React.writeState((function () {
                                var _2878 = {};
                                for (var _2879 in _175) {
                                    if (_175.hasOwnProperty(_2879)) {
                                        _2878[_2879] = _175[_2879];
                                    };
                                };
                                _2878.notebooks = notebooks$prime;
                                return _2878;
                            })());
                        };
                    })()();
                };
            };
        };
    };
    var internalActions = function (_816) {
        return React_DOM.ul([ React_DOM.className("button-group") ])([ SlamData_Helpers.actionButton(SlamData_Helpers.iconFA({}))({
            tooltip: Prelude.show(SlamData_App_Notebook_Block_Types.showBlockType({}))(SlamData_App_Notebook_Block_Types.Markdown.value), 
            icon: SlamData_Helpers.markdownIcon({}), 
            click: createBlock(SlamData_App_Notebook_Block_Types.Markdown.value)(_816.notebook.ident)(Data_Maybe.Nothing.value)
        }), SlamData_Helpers.actionButton(SlamData_Helpers.iconFA({}))({
            tooltip: Prelude.show(SlamData_App_Notebook_Block_Types.showBlockType({}))(SlamData_App_Notebook_Block_Types.SQL.value), 
            icon: SlamData_Helpers.sqlIcon({}), 
            click: createBlock(SlamData_App_Notebook_Block_Types.SQL.value)(_816.notebook.ident)(Data_Maybe.Nothing.value)
        }), SlamData_Helpers.actionButton(SlamData_Helpers.iconFA({}))({
            tooltip: Prelude.show(SlamData_App_Notebook_Block_Types.showBlockType({}))(SlamData_App_Notebook_Block_Types.Visual.value), 
            icon: SlamData_Helpers.visualIcon({}), 
            click: _816.visibility(true)
        }) ]);
    };
    var changeVisual = function (ty) {
        return function __do() {
            var _169 = React.readState();
            return (function () {
                var vState$prime = (function () {
                    var _2884 = {};
                    for (var _2885 in _169.visualState) {
                        if (_169.visualState.hasOwnProperty(_2885)) {
                            _2884[_2885] = _169.visualState[_2885];
                        };
                    };
                    _2884.visualType = ty;
                    return _2884;
                })();
                return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React.writeState((function () {
                    var _2886 = {};
                    for (var _2887 in _169) {
                        if (_169.hasOwnProperty(_2887)) {
                            _2886[_2887] = _169[_2887];
                        };
                    };
                    _2886.visualState = vState$prime;
                    return _2886;
                })()));
            })()();
        };
    };
    var block2UI = function (_817) {
        return function (_818) {
            return function (_819) {
                return function (_820) {
                    return SlamData_App_Notebook_Block.block({
                        blockType: _819.value0.blockType, 
                        ident: _819.value0.ident, 
                        close: React.deferred(deleteBlock(_819.value0.ident)), 
                        content: _819.value0.content, 
                        index: _820, 
                        serverURI: _817, 
                        serverFS: _818
                    });
                };
            };
        };
    };
    var makeBlocks = function (_809) {
        return function (_810) {
            return function (_811) {
                return function (_812) {
                    return function (_813) {
                        return function (_814) {
                            if (Prelude["=="](SlamData_App_Notebook_Types.eqNotebookID({}))(_809)(_814.value0.ident)) {
                                return React_DOM.div([ React_DOM.className("content" + maybeActive(_814.value0.ident)(_810)) ])([ SlamData_App_Notebook_Settings.settings({
                                    settings: _811, 
                                    saveSettings: _812
                                }) ]);
                            };
                            return React_DOM.div([ React_DOM.className("content" + maybeActive(_814.value0.ident)(_810)) ])([ React_DOM.div([ React_DOM.className("toolbar button-bar") ])([ externalActions({}), internalActions({
                                notebook: _814.value0, 
                                visibility: _813
                            }) ]), React_DOM["hr'"]([  ]), React_DOM.div([ React_DOM.className("actual-content") ])(Data_Array.zipWith(block2UI(SlamData_Helpers.serverURI(Control_Lens["^."](_811)(SlamData_Lens._sdConfig(Data_Const.functorConst({})))))(Data_Array_Unsafe.head(Data_Map.keys(Control_Lens["^."](_811)(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._seConfig(Data_Const.functorConst({})))(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._seConfigRec(Data_Const.functorConst({})))(SlamData_Lens._mountings(Data_Const.functorConst({})))))))))(Data_Array.filter(function (_793) {
                                return Data_Foldable.elem(SlamData_App_Notebook_Block_Types.eqBlockID({}))(Data_Foldable.foldableArray({}))(_793.value0.ident)(_814.value0.blocks);
                            })(SlamData_Helpers.localGet(SlamData_App_Notebook_Block_Types.readBlockSpec({}))(SlamData_Helpers.Blocks.value)))(Data_Array.range(0)(Data_Array.length(_814.value0.blocks)))) ]);
                        };
                    };
                };
            };
        };
    };
    var activateVisualTab = function (visualTab) {
        return function __do() {
            var _171 = React.readState();
            return (function () {
                var visualState$prime = (function () {
                    var _2907 = {};
                    for (var _2908 in _171.visualState) {
                        if (_171.visualState.hasOwnProperty(_2908)) {
                            _2907[_2908] = _171.visualState[_2908];
                        };
                    };
                    _2907.active = visualTab;
                    return _2907;
                })();
                return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React.writeState((function () {
                    var _2909 = {};
                    for (var _2910 in _171) {
                        if (_171.hasOwnProperty(_2910)) {
                            _2909[_2910] = _171[_2910];
                        };
                    };
                    _2909.visualState = visualState$prime;
                    return _2909;
                })()));
            })()();
        };
    };
    var activateTab = function (ident) {
        return function __do() {
            var _170 = React.readState();
            return React.writeState((function () {
                var _2912 = {};
                for (var _2913 in _170) {
                    if (_170.hasOwnProperty(_2913)) {
                        _2912[_2913] = _170[_2913];
                    };
                };
                _2912.active = new Data_Maybe.Just(ident);
                return _2912;
            })());
        };
    };
    var actVisualType = function (_802) {
        if (_802 instanceof SlamData_App_Notebook_Types.VisualTypeTab) {
            return " active";
        };
        return "";
    };
    var actFields = function (_801) {
        if (_801 instanceof SlamData_App_Notebook_Types.FieldsTab) {
            return " active";
        };
        return "";
    };
    var actData = function (_800) {
        if (_800 instanceof SlamData_App_Notebook_Types.DataSrcTab) {
            return " active";
        };
        return "";
    };
    var _type = function (o) {
        return o.type;
    };
    var _selectedFields = function (o) {
        return o.selectedFields;
    };
    var _dataSrc = function (o) {
        return o.dataSrc;
    };
    var dataSrcUpdate = function ($$new) {
        return function (ident) {
            return function (vState) {
                var newField = {
                    dataSrc: ident, 
                    allFields: [  ], 
                    selectedFields: [  ]
                };
                var fields$prime = $$new ? Prelude[":"](newField)(vState.fields) : Data_Array.filter(Prelude[">>>"](Prelude.semigroupoidArr({}))(_dataSrc)(Prelude["/="](Prelude.eqString({}))(ident)))(vState.fields);
                var _2917 = {};
                for (var _2918 in vState) {
                    if (vState.hasOwnProperty(_2918)) {
                        _2917[_2918] = vState[_2918];
                    };
                };
                _2917.fields = fields$prime;
                return _2917;
            };
        };
    };
    var ft2UI = function (_797) {
        return function (_798) {
            return function (_799) {
                if (_799.type === "file") {
                    var checked = Data_Foldable.elem(Prelude.eqString({}))(Data_Foldable.foldableArray({}))(_799.name)(Prelude["<$>"](Data_Array.functorArray({}))(_dataSrc)(_798));
                    return React_DOM["li'"]([ React_DOM.input([ React_DOM.typeProp("checkbox"), React_DOM.onChange(function (_) {
                        return _797(!checked)(_799.name);
                    }), React_DOM.checked(checked) ])([  ]), React_DOM.text(_799.name) ]);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var modifyFields = function (ident) {
        return function (fields) {
            return function __do() {
                var _173 = React.readState();
                return (function () {
                    var fields$prime = Prelude["<$>"](Data_Array.functorArray({}))(function (f) {
                        return ident === _dataSrc(f) ? (function () {
    var _2925 = {};
    for (var _2926 in f) {
        if (f.hasOwnProperty(_2926)) {
            _2925[_2926] = f[_2926];
        };
    };
    _2925.selectedFields = fields;
    return _2925;
})() : f;
                    })(_173.visualState.fields);
                    var vState$prime = (function () {
                        var _2927 = {};
                        for (var _2928 in _173.visualState) {
                            if (_173.visualState.hasOwnProperty(_2928)) {
                                _2927[_2928] = _173.visualState[_2928];
                            };
                        };
                        _2927.fields = fields$prime;
                        return _2927;
                    })();
                    return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React.writeState((function () {
                        var _2929 = {};
                        for (var _2930 in _173) {
                            if (_173.hasOwnProperty(_2930)) {
                                _2929[_2930] = _173[_2930];
                            };
                        };
                        _2929.visualState = vState$prime;
                        return _2929;
                    })()));
                })()();
            };
        };
    };
    var notebook = React.mkUI((function () {
        var _2931 = {};
        for (var _2932 in React.spec) {
            if (React.spec.hasOwnProperty(_2932)) {
                _2931[_2932] = React.spec[_2932];
            };
        };
        _2931.getInitialState = Prelude.pure(Control_Monad_Eff.applicativeEff({}))(initialState);
        _2931.shouldComponentUpdate = scu;
        return _2931;
    })())(function __do() {
        var _168 = React.getProps();
        var _167 = React.readState();
        var _166 = React.getSelf();
        return (function () {
            var settingsPage = _168.showSettings ? [ new SlamData_App_Notebook_Types.NotebookSpec({
    name: "Settings", 
    blocks: [  ], 
    ident: _167.settingId
}) ] : [  ];
            var notebooks = Prelude["++"](Data_Array.semigroupArray({}))(_167.notebooks)(settingsPage);
            var active = Prelude["<|>"](Data_Maybe.alternativeMaybe({}))(_167.active)(Data_Maybe.maybe(Data_Maybe.Nothing.value)(function (_791) {
                return new Data_Maybe.Just(_791.value0.ident);
            })(Data_Array.head(notebooks)));
            return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React_DOM.div([ React_DOM.className("slamdata-panel") ])(Prelude["++"](Data_Array.semigroupArray({}))([ React_DOM.dl([ React_DOM.className("tabs") ])(Data_Array.snoc(Prelude["<$>"](Data_Array.functorArray({}))(makeNotebook(active)(_167.settingId)(_168.hideSettings)(Prelude["<<<"](Prelude.semigroupoidArr({}))(React.deferred)(activateTab))(Prelude["<<<"](Prelude.semigroupoidArr({}))(React.deferred)(deleteNotebook)))(notebooks))(React_DOM.dd([ React_DOM.className("tab") ])([ React_DOM["div'"]([ React_DOM.a([ React_DOM.onClick(function (_) {
                return createNotebook;
            }), React_DOM.idProp("add-notebook") ])([ SlamData_Helpers.toUI(SlamData_Helpers.iconFA({}))(SlamData_Helpers.newNotebookIcon({})) ]) ]) ]))), React_DOM.div([ React_DOM.className("tabs-content") ])(Prelude["<$>"](Data_Array.functorArray({}))(makeBlocks(_167.settingId)(active)(_168.settings)(_168.saveSettings)(Prelude["<<<"](Prelude.semigroupoidArr({}))(React.deferred)(modalVisibility)))(notebooks)) ])(_167.visualState.visible ? [ React_DOM.div([ React_DOM.idProp("visual-modal") ])([ React_DOM.div([ React_DOM.idProp("visual-modal-content") ])([ React_DOM.dl([ React_DOM.className("tabs vertical") ])([ React_DOM.dd([ React_DOM.className("tab" + actData(_167.visualState.active)) ])([ React_DOM.a([ React_DOM.onClick(function (_) {
    return activateVisualTab(SlamData_App_Notebook_Types.DataSrcTab.value);
}) ])([ React_DOM.text("Data Source") ]) ]), React_DOM.dd([ React_DOM.className("tab" + actFields(_167.visualState.active)) ])([ React_DOM.a([ React_DOM.onClick(function (_) {
    return activateVisualTab(SlamData_App_Notebook_Types.FieldsTab.value);
}) ])([ React_DOM.text("Fields") ]) ]), React_DOM.dd([ React_DOM.className("tab" + actVisualType(_167.visualState.active)) ])([ React_DOM.a([ React_DOM.onClick(function (_) {
    return activateVisualTab(SlamData_App_Notebook_Types.VisualTypeTab.value);
}) ])([ React_DOM.text("Type") ]) ]) ]), React_DOM.div([ React_DOM.className("tabs-content vertical") ])([ React_DOM.ul([ React_DOM.className("content" + actData(_167.visualState.active)) ])(Prelude["<$>"](Data_Array.functorArray({}))(ft2UI(function (b) {
    return function (i) {
        return React.deferred(modifyDataSrc(_166)(b)(i));
    };
})(_167.visualState.fields))(Data_Array.filter(Prelude[">>>"](Prelude.semigroupoidArr({}))(_type)(Prelude["=="](Prelude.eqString({}))("file")))(_168.files))), React_DOM.ul([ React_DOM.className("content" + actFields(_167.visualState.active)) ])(Prelude["<$>"](Data_Array.functorArray({}))(fields2UI(function (s) {
    return function (ss) {
        return React.deferred(modifyFields(s)(ss));
    };
}))(_167.visualState.fields)), React_DOM.div([ React_DOM.className("content" + actVisualType(_167.visualState.active)) ])([ React_DOM.ul([ React_DOM.className("chart-type small-block-grid-5") ])(visuals(Prelude["<<<"](Prelude.semigroupoidArr({}))(React.deferred)(changeVisual))(_167.visualState.visualType)), React_DOM.select([ React_DOM.onChange(function (e) {
    var vState$prime = (function () {
        var _2938 = {};
        for (var _2939 in _167.visualState) {
            if (_167.visualState.hasOwnProperty(_2939)) {
                _2938[_2939] = _167.visualState[_2939];
            };
        };
        _2938.visualData = [ targetValue(e)(_167.visualState.visualType) ];
        return _2938;
    })();
    return React.writeState((function () {
        var _2940 = {};
        for (var _2941 in _167) {
            if (_167.hasOwnProperty(_2941)) {
                _2940[_2941] = _167[_2941];
            };
        };
        _2940.visualState = vState$prime;
        return _2940;
    })());
}) ])(Prelude["<$>"](Data_Array.functorArray({}))(optionify)(_167.visualState.fields)), React_DOM.div([ React_DOM.className("actions") ])([ React_DOM.a([ React_DOM.className("button"), React_DOM.onClick(function (_) {
    return function __do() {
        var _165 = React.readState();
        return (function () {
            var active_1 = SlamData_Helpers.getOrElse(_165.active)(Data_Maybe.maybe(SlamData_App_Notebook_Types.NotebookID.create(Data_UUID.runUUID(Data_UUID.v4)))(function (_792) {
                return _792.value0.ident;
            })(Data_Array.head(_165.notebooks)));
            return createVisualBlock(_166)(SlamData_App_Notebook_Block_Types.Visual.value)(active_1)(visualContent(_167.visualState.visualData));
        })()();
    };
}) ])([ React_DOM.text("Create") ]), React_DOM.a([ React_DOM.className("button secondary"), React_DOM.onClick(function (_) {
    return React.writeState((function () {
        var _2945 = {};
        for (var _2946 in _167) {
            if (_167.hasOwnProperty(_2946)) {
                _2945[_2946] = _167[_2946];
            };
        };
        _2945.visualState = initialState.visualState;
        return _2945;
    })());
}) ])([ React_DOM.text("Cancel") ]) ]) ]) ]) ]) ]) ] : [  ])));
        })()();
    });
    return {
        notebook: notebook
    };
})();
var PS = PS || {};
PS.SlamData_App_Reference = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var SlamData_App_Panel = PS.SlamData_App_Panel;
    var React_DOM = PS.React_DOM;
    var Data_UUID = PS.Data_UUID;
    var refPanel = SlamData_App_Panel.panel([ {
        name: "Tutorial", 
        content: [ React_DOM.text("Here's some tutorial things.") ], 
        external: [  ], 
        internal: [  ], 
        ident: Data_UUID.runUUID(Data_UUID.v4)
    }, {
        name: "References", 
        content: [ React_DOM.text("Look at all this reference stuff.") ], 
        external: [  ], 
        internal: [  ], 
        ident: Data_UUID.runUUID(Data_UUID.v4)
    }, {
        name: "Examples", 
        content: [ React_DOM.text("Wow, examples!") ], 
        external: [  ], 
        internal: [  ], 
        ident: Data_UUID.runUUID(Data_UUID.v4)
    }, {
        name: "Notes", 
        content: [ React_DOM.text("Knowtes.") ], 
        external: [  ], 
        internal: [  ], 
        ident: Data_UUID.runUUID(Data_UUID.v4)
    } ]);
    var reference = refPanel;
    return {
        reference: reference
    };
})();
var PS = PS || {};
PS.SlamData_App_Workspace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var React = PS.React;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React_DOM = PS.React_DOM;
    var SlamData_App_FileSystem = PS.SlamData_App_FileSystem;
    var SlamData_App_Notebook = PS.SlamData_App_Notebook;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var Data_Map = PS.Data_Map;
    function cwm() {  var fetchFS = function() {    var settings = this.props.settings;    oboe(serverURI_(settings.sdConfig) + '/metadata/fs' + keys_(settings.seConfig.mountings)[0])    .done(function(json) {      if (this.isMounted()) {        var sorted = json.children.sort(function(a, b) {          return a.name.localeCompare(b.name);        });        this.setState({files: sorted});      }    }.bind(this));  }.bind(this);  fetchFS();  setInterval(fetchFS, pollRate);};
    var workspace = React.mkUI((function () {
        var _2947 = {};
        for (var _2948 in React.spec) {
            if (React.spec.hasOwnProperty(_2948)) {
                _2947[_2948] = React.spec[_2948];
            };
        };
        _2947.getInitialState = Prelude.pure(Control_Monad_Eff.applicativeEff({}))({
            files: [  ]
        });
        _2947.componentWillMount = cwm;
        return _2947;
    })())(function __do() {
        var _182 = React.getProps();
        var _181 = React.readState();
        return React_DOM.div([ React_DOM.idProp("workspace") ])([ React_DOM.div([ React_DOM.className("row"), React_DOM.idProp("main-row") ])([ React_DOM.div([ React_DOM.className("large-2 medium-3 small-5 columns"), React_DOM.idProp("filesystem") ])([ SlamData_App_FileSystem.filesystem({
            files: _181.files
        }) ]), React_DOM.div([ React_DOM.className("large-10 medium-9 small-7 columns"), React_DOM.idProp("notebook") ])([ SlamData_App_Notebook.notebook({
            files: _181.files, 
            settings: _182.settings, 
            saveSettings: _182.saveSettings, 
            showSettings: _182.showSettings, 
            hideSettings: _182.hideSettings
        }) ]) ]) ]);
    });
    var serverURI_ = SlamData_Helpers.serverURI;
    var pollRate = 5000;
    var keys_ = Data_Map.keys;
    return {
        workspace: workspace
    };
})();
var PS = PS || {};
PS.SlamData_App = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React = PS.React;
    var React_DOM = PS.React_DOM;
    var SlamData_App_Menu = PS.SlamData_App_Menu;
    var SlamData_App_Workspace = PS.SlamData_App_Workspace;
    var showSettings = function (bool) {
        return function __do() {
            var _185 = React.readState();
            return React.writeState((function () {
                var _2952 = {};
                for (var _2953 in _185) {
                    if (_185.hasOwnProperty(_2953)) {
                        _2952[_2953] = _185[_2953];
                    };
                };
                _2952.settingsVisible = bool;
                return _2952;
            })())();
        };
    };
    var app = React.mkUI((function () {
        var _2954 = {};
        for (var _2955 in React.spec) {
            if (React.spec.hasOwnProperty(_2955)) {
                _2954[_2955] = React.spec[_2955];
            };
        };
        _2954.getInitialState = Prelude.pure(Control_Monad_Eff.applicativeEff({}))({
            settingsVisible: false
        });
        return _2954;
    })())(function __do() {
        var _184 = React.readState();
        var _183 = React.getProps();
        return React_DOM["div'"]([ SlamData_App_Menu.menu({
            showSettings: React.deferred(showSettings(true))
        }), SlamData_App_Workspace.workspace({
            settings: _183.settings, 
            saveSettings: _183.saveSettings, 
            showSettings: _184.settingsVisible, 
            hideSettings: React.deferred(showSettings(false))
        }) ]);
    });
    return {
        app: app
    };
})();
var PS = PS || {};
PS.SlamData = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Cont_Trans = PS.Control_Monad_Cont_Trans;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React = PS.React;
    var SlamData_App = PS.SlamData_App;
    var slamData = function (settings) {
        return function (save) {
            return function __do() {
                React.renderToElementById("content")(SlamData_App.app({
                    settings: settings, 
                    saveSettings: save
                }))();
                return Prelude.unit;
            };
        };
    };
    return {
        slamData: slamData
    };
})();
var PS = PS || {};
PS.SlamData_Login = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var React = PS.React;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var React_DOM = PS.React_DOM;
    var Data_String = PS.Data_String;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var Data_Array = PS.Data_Array;
    function New() {

    };
    New.value = new New();
    function Existing() {

    };
    Existing.value = new Existing();
    function changeNew(state) {  React.writeState(state);};
    var validationText = React.mkUI(React.spec)(function __do() {
        var _190 = React.getProps();
        return React_DOM.div([  ])([ React_DOM.label([ React_DOM.htmlFor(Data_String.toLower(_190.label)) ])([ React_DOM.text(_190.label) ]), React_DOM.input([ React_DOM.typeProp("text"), React_DOM.idProp(Data_String.toLower(_190.label)) ])([  ]) ]);
    });
    var showNewOrExisting = function (_) {
        return new Prelude.Show(function (_827) {
            if (_827 instanceof New) {
                return "NewAccount";
            };
            if (_827 instanceof Existing) {
                return "ExistingAccount";
            };
            throw new Error("Failed pattern match");
        });
    };
    var newInfo = React_DOM.div([  ])([ SlamData_Helpers.row(Prelude["<$>"](Data_Array.functorArray({}))(SlamData_Helpers.large("6"))([ validationText({
        label: "Name"
    }), validationText({
        label: "Confirm Password"
    }), validationText({
        label: "Company"
    }), validationText({
        label: "Title"
    }) ])) ]);
    var isNew = function (_824) {
        if (_824 instanceof New) {
            return true;
        };
        return false;
    };
    var eqNewOrExisting = function (_) {
        return new Prelude.Eq(function (noe) {
            return function (noe$prime) {
                return !Prelude["=="](eqNewOrExisting({}))(noe)(noe$prime);
            };
        }, function (_825) {
            return function (_826) {
                if (_825 instanceof New && _826 instanceof New) {
                    return true;
                };
                if (_825 instanceof Existing && _826 instanceof Existing) {
                    return true;
                };
                return false;
            };
        });
    };
    var newOrExisting = (function () {
        var newAccountChanged = function (_828) {
            return function (_829) {
                return function __do() {
                    var _187 = React.getProps();
                    return _187.onChangeNew({
                        newAccount: _828
                    });
                };
            };
        };
        return React.mkUI(React.spec)(function __do() {
            var _188 = React.getProps();
            return (function () {
                var radioWithLabel = function (_830) {
                    return React_DOM.p([  ])([ React_DOM.input([ React_DOM.typeProp("radio"), React_DOM.checked(Prelude["=="](eqNewOrExisting({}))(_188.newAccount)(_830.value)), React_DOM.idProp(Prelude.show(showNewOrExisting({}))(_830.value)), React_DOM.name("new-or-existing"), React_DOM.onChange(newAccountChanged(_830.value)) ])([  ]), React_DOM.label([ React_DOM.htmlFor(Prelude.show(showNewOrExisting({}))(_830.value)) ])([ React_DOM.text(_830.labelText) ]) ]);
                };
                return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React_DOM.div([  ])([ radioWithLabel({
                    labelText: "I have an existing account.", 
                    value: Existing.value
                }), radioWithLabel({
                    labelText: "I need to create a new account.", 
                    value: New.value
                }) ]));
            })()();
        });
    })();
    var demo = React_DOM.button([ React_DOM.className("right secondary") ])([ React_DOM.text("Try Demo!") ]);
    var createOrLogin = React.mkUI(React.spec)(function __do() {
        var _191 = React.getProps();
        return (function () {
            var buttonText = isNew(_191.newAccount) ? "Create Account" : "Login";
            return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React_DOM.div([  ])([ React_DOM.div([  ])([  ]), React_DOM.button([ React_DOM.className("right") ])([ React_DOM.text(buttonText) ]) ]));
        })()();
    });
    var alwaysInfo = React_DOM.div([  ])([ SlamData_Helpers.row(Prelude["<$>"](Data_Array.functorArray({}))(SlamData_Helpers.large("6"))([ validationText({
        label: "Email"
    }), validationText({
        label: "Password"
    }) ])) ]);
    var information = React.mkUI(React.spec)(function __do() {
        var _189 = React.getProps();
        return (function () {
            var info = isNew(_189.newAccount) ? [ alwaysInfo, newInfo ] : [ alwaysInfo ];
            return Prelude.pure(Control_Monad_Eff.applicativeEff({}))(React_DOM.div([  ])(info));
        })()();
    });
    var loginForm = React.mkUI((function () {
        var _2972 = {};
        for (var _2973 in React.spec) {
            if (React.spec.hasOwnProperty(_2973)) {
                _2972[_2973] = React.spec[_2973];
            };
        };
        _2972.getInitialState = Prelude.pure(Control_Monad_Eff.applicativeEff({}))({
            newAccount: Existing.value
        });
        return _2972;
    })())(function __do() {
        var _186 = React.readState();
        return React_DOM.form([  ])([ React_DOM.fieldset([  ])([ React_DOM.legend([  ])([ React_DOM.text("Login to SlamData") ]), SlamData_Helpers.row([ SlamData_Helpers.large("6")(newOrExisting({
            newAccount: _186.newAccount, 
            onChangeNew: React.handle(changeNew)
        })), SlamData_Helpers.large("6")(demo) ]), information({
            newAccount: _186.newAccount
        }), SlamData_Helpers.row([ SlamData_Helpers.large("6")(React_DOM.div([  ])([  ])), SlamData_Helpers.large("6")(createOrLogin({
            newAccount: _186.newAccount
        })) ]) ]) ]);
    });
    return {
        loginForm: loginForm, 
        eqNewOrExisting: eqNewOrExisting, 
        showNewOrExisting: showNewOrExisting
    };
})();
var PS = PS || {};
PS.SlamData_NodeWebkit = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Node_Path = PS.Node_Path;
    var Data_Either = PS.Data_Either;
    var Debug_Trace = PS.Debug_Trace;
    var Control_Monad_Eff_Exception = PS.Control_Monad_Eff_Exception;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Data_Argonaut_Encode = PS.Data_Argonaut_Encode;
    var Data_Argonaut_Printer = PS.Data_Argonaut_Printer;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Argonaut_Parser = PS.Data_Argonaut_Parser;
    var Data_Argonaut_Decode = PS.Data_Argonaut_Decode;
    var Node_Events = PS.Node_Events;
    var Data_Maybe_Unsafe = PS.Data_Maybe_Unsafe;
    var SlamData_Helpers = PS.SlamData_Helpers;
    var SlamData_Types = PS.SlamData_Types;
    var Control_Lens = PS.Control_Lens;
    var SlamData_Lens = PS.SlamData_Lens;
    var Data_Const = PS.Data_Const;
    var Node_ChildProcess = PS.Node_ChildProcess;
    var Data_Function = PS.Data_Function;
    var Node_Webkit = PS.Node_Webkit;
    var Node_ChildProcess_Signal = PS.Node_ChildProcess_Signal;
    var Control_Monad_Cont_Trans = PS.Control_Monad_Cont_Trans;
    var SlamData = PS.SlamData;
    var Node_FS_Sync = PS.Node_FS_Sync;
    var Node_Encoding = PS.Node_Encoding;
    var platform = process.platform;;
    function unsafeEnv(nothing) {  return function(just) {    return function(key) {      var val = process.env[key];      return val == null ? nothing : just(val);    }  }};
    function requireConfig(location) {  return JSON.stringify(require(location));};
    var $less$div$greater = function (fp) {
        return function (fp$prime) {
            return Node_Path.join([ fp, fp$prime ]);
        };
    };
    var showError = Data_Either.either(Debug_Trace.print(Control_Monad_Eff_Exception.showError({})))(Prelude.pure(Control_Monad_Eff.applicativeEff({})));
    var showConfig = function (__dict_EncodeJson_600) {
        return Prelude[">>>"](Prelude.semigroupoidArr({}))(Data_Argonaut_Encode.encodeIdentity(__dict_EncodeJson_600))(Data_Argonaut_Printer.printToString);
    };
    var seJar = $less$div$greater("jar")("slamengine_2.10-0.1-SNAPSHOT-one-jar.jar");
    var parseConfig = function (__dict_DecodeJson_601) {
        return function (config) {
            return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Argonaut_Parser.parseMaybe(Data_Argonaut_Parser.parserIdParseResultString({}))(requireConfig(config)))(Data_Argonaut_Decode.decodeMaybe(__dict_DecodeJson_601));
        };
    };
    var onData = function (__dict_EventEmitter_602) {
        return Node_Events.on(__dict_EventEmitter_602)(Node_Events.variadicFn1({}))("data");
    };
    var env = unsafeEnv(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
    var linuxConfigHome = Prelude["<|>"](Data_Maybe.alternativeMaybe({}))(env("XDG_CONFIG_HOME"))(Prelude["<$>"](Data_Maybe.functorMaybe({}))(function (home) {
        return $less$div$greater(home)(".config");
    })(env("HOME")));
    var resolveConfigDir = (function (_2975) {
        if (_2975 === "darwin") {
            return $less$div$greater($less$div$greater($less$div$greater(Data_Maybe_Unsafe.fromJust(env("HOME")))("Library"))("Application Support"))("slamdata");
        };
        if (_2975 === "linux") {
            return $less$div$greater(Data_Maybe_Unsafe.fromJust(linuxConfigHome))("slamdata");
        };
        if (_2975 === "win32") {
            return $less$div$greater(Data_Maybe_Unsafe.fromJust(env("LOCALAPPDATA")))("slamdata");
        };
        throw new Error("Failed pattern match");
    })(platform);
    var sdConfigFile = $less$div$greater(resolveConfigDir)("slamdata-config.json");
    var seConfigFile = $less$div$greater(resolveConfigDir)("slamengine-config.json");
    var main = (function () {
        var sdConfig = SlamData_Helpers.getOrElse(parseConfig(SlamData_Types.decodeSDConfig({}))(sdConfigFile))(SlamData_Helpers.defaultSDConfig);
        var seConfig = SlamData_Helpers.getOrElse(parseConfig(SlamData_Types.decodeSEConfig({}))(seConfigFile))(SlamData_Helpers.defaultSEConfig);
        var java = Control_Lens["^."](sdConfig)(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._sdConfigRec(Data_Const.functorConst({})))(Control_Lens[".."](Prelude.semigroupoidArr({}))(SlamData_Lens._nodeWebkit(Data_Const.functorConst({})))(SlamData_Lens._java(Data_Const.functorConst({})))));
        return function __do() {
            var _193 = Node_ChildProcess.spawn(java)([ "-jar", seJar, seConfigFile ])(Node_ChildProcess.defaultSpawnOptions)();
            onData(Node_ChildProcess.eventEmitterStreamStdout({}))(function (msg) {
                return Debug_Trace.trace("stdout: " + msg);
            })(_193.stdout)();
            var __1 = onData(Node_ChildProcess.eventEmitterStreamStderr({}))(function (msg) {
                return Debug_Trace.trace("stderr: " + msg);
            })(_193.stderr)();
            var _192 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Node_Webkit.nwWindow)(Node_Webkit.get)();
            var __2 = Node_Webkit.onNewWinPolicy(function (__2, url, policy) {
                return function __do() {
                    var __3 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Node_Webkit.nwShell)(Node_Webkit.openExternal(url))();
                    return Node_Webkit.ignore(policy)();
                };
            })(_192)();
            var __3 = Node_Webkit.onClose(function () {
                return function __do() {
                    var __4 = _193.kill(Node_ChildProcess_Signal.sigterm);
                    var __5 = Node_Webkit.closeWindow(_192)();
                    return Prelude.unit;
                };
            })(_192)();
            return Control_Monad_Cont_Trans.runContT(SlamData.slamData({
                sdConfig: sdConfig, 
                seConfig: seConfig
            }))(function (_831) {
                return function __do() {
                    var __4 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Node_FS_Sync.writeTextFile(Node_Encoding.UTF8.value)(sdConfigFile)(showConfig(SlamData_Types.encodeSDConfig({}))(_831.sdConfig)))(showError)();
                    return Prelude[">>="](Control_Monad_Eff.bindEff({}))(Node_FS_Sync.writeTextFile(Node_Encoding.UTF8.value)(seConfigFile)(showConfig(SlamData_Types.encodeSEConfig({}))(_831.seConfig)))(showError)();
                };
            })();
        };
    })();
    return {
        main: main, 
        showError: showError, 
        parseConfig: parseConfig, 
        showConfig: showConfig, 
        seJar: seJar, 
        seConfigFile: seConfigFile, 
        sdConfigFile: sdConfigFile, 
        resolveConfigDir: resolveConfigDir, 
        linuxConfigHome: linuxConfigHome, 
        requireConfig: requireConfig, 
        onData: onData, 
        "</>": $less$div$greater, 
        env: env, 
        unsafeEnv: unsafeEnv, 
        platform: platform
    };
})();
PS.SlamData_NodeWebkit.main();
