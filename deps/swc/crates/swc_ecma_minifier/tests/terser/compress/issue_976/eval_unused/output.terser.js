function f1(a, eval) {
    return a("c") + eval;
}
function f2(a, b, c, d, e) {
    return a + eval("c");
}
function f3(a, eval, c, d, e) {
    return a + eval("c");
}
