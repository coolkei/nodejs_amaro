//// [octalIntegerLiteralES6.ts]
var oct1 = 0o45436;
var oct2 = 0O45436;
var oct3 = Infinity;
var oct4 = 0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777;
var obj1 = {
    0o45436: "Hello",
    a: 0o45436,
    b: oct1,
    oct1,
    Infinity: true
};
var obj2 = {
    0O45436: "hi",
    a: 0O45436,
    b: oct2,
    oct2,
    0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777: false
};
obj1[0o45436]; // string
obj1["0o45436"]; // any
obj1["19230"]; // string
obj1[19230]; // string
obj1["a"]; // number
obj1["b"]; // number
obj1["oct1"]; // number
obj1["Infinity"]; // boolean
obj2[0O45436]; // string
obj2["0O45436"]; // any
obj2["19230"]; // string
obj2[19230]; // string
obj2["a"]; // number
obj2["b"]; // number
obj2["oct2"]; // number
obj2[5.462437423415177e+244]; // boolean
obj2["5.462437423415177e+244"]; // boolean
obj2["Infinity"]; // any
