function modifyWrapper(a, f, wrapper) {
    wrapper.a = a;
    wrapper.f = f;
    return wrapper;
}
function pureFunc(fun) {
    return modifyWrapper(1, fun, function (a) {
        return fun(a);
    });
}
var unused = pureFunc(function (x) {
    return x;
});
