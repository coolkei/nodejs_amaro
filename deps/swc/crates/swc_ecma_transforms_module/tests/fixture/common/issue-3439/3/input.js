export { bar, foo as foo1 };
export { bar as bar2, foo };

const foo = 1;
let bar = 2;

export { bar as default };

bar = 3;
