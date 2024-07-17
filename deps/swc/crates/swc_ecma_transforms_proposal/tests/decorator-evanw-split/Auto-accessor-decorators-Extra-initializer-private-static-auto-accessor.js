(() => {
    let oldAddInitializer;
    let got;
    const dec = (target, ctx) => {
        ctx.addInitializer(function (...args) {
            got = { this: this, args };
        });
        if (oldAddInitializer)
            assertThrows(() => oldAddInitializer(() => { }), TypeError);
        assertThrows(() => ctx.addInitializer({}), TypeError);
        oldAddInitializer = ctx.addInitializer;
    };
    class Foo {
        @dec
        @dec
        static accessor #foo;
    }
    assertEq(() => got.this, Foo);
    assertEq(() => got.args.length, 0);
})();
