//// [subtypingWithStringIndexer4.ts]
// Derived type indexer must be subtype of base type indexer
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
var A = function A() {
    "use strict";
    _class_call_check(this, A);
};
var B = /*#__PURE__*/ function(A) {
    "use strict";
    _inherits(B, A);
    var _super = _create_super(B);
    function B() {
        _class_call_check(this, B);
        return _super.apply(this, arguments);
    }
    return B;
}(A);
var Generics;
(function(Generics) {
    var A = function A() {
        "use strict";
        _class_call_check(this, A);
    };
    var B = /*#__PURE__*/ function(A) {
        "use strict";
        _inherits(B, A);
        var _super = _create_super(B);
        function B() {
            _class_call_check(this, B);
            return _super.apply(this, arguments);
        }
        return B;
    }(A);
    var B3 = /*#__PURE__*/ function(A) {
        "use strict";
        _inherits(B3, A);
        var _super = _create_super(B3);
        function B3() {
            _class_call_check(this, B3);
            return _super.apply(this, arguments);
        }
        return B3;
    }(A);
})(Generics || (Generics = {}));
