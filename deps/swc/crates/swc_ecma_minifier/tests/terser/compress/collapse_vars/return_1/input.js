var log = console.log;
function f(b, c) {
    var a = c;
    if (b) return b;
    log(a);
}
f(false, 1);
f(true, 2);
