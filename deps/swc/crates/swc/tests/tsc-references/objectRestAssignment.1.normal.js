//// [objectRestAssignment.ts]
import { _ as _extends } from "@swc/helpers/_/_extends";
import { _ as _object_destructuring_empty } from "@swc/helpers/_/_object_destructuring_empty";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
let ka;
let nested;
let other;
let rest;
let complex;
var _complex;
_complex = complex, nested = _object_without_properties(_complex.x, [
    "ka"
]), rest = _object_without_properties(_complex, [
    "x",
    "y"
]), ({ x: { ka }, y: other } = _complex), _complex;
// should be:
let overEmit;
// var _g = overEmit.a, [_h, ...y] = _g, nested2 = __rest(_h, []), _j = overEmit.b, { z } = _j, c = __rest(_j, ["z"]), rest2 = __rest(overEmit, ["a", "b"]);
var { a: [{}, ...y], b: { z } } = overEmit, nested2 = _extends({}, _object_destructuring_empty(overEmit.a[0])), c = _object_without_properties(overEmit.b, [
    "z"
]), rest2 = _object_without_properties(overEmit, [
    "a",
    "b"
]);
var _overEmit;
_overEmit = overEmit, nested2 = _extends({}, _object_destructuring_empty(_overEmit.a[0])), c = _object_without_properties(_overEmit.b, [
    "z"
]), rest2 = _object_without_properties(_overEmit, [
    "a",
    "b"
]), ({ a: [{}, ...y], b: { z } } = _overEmit), _overEmit;
