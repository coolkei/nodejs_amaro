(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports);
    else if (typeof define === "function" && define.amd) define([
        "exports"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.input = {});
})(this, function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        default: function() {
            return someCall;
        },
        test: function() {
            return test;
        },
        warn: function() {
            return warn;
        }
    });
    function someCall() {
        throw new Error("this should not be called");
    }
    function warn() {
        throw new Error("this should not be called");
    }
    const test = {};
    Object.defineProperty(test, "someCall", {
        set: (v)=>{
            someCall = v;
        }
    });
    Object.defineProperty(test, "warn", {
        get: ()=>warn,
        set: (v)=>{
            warn = v;
        }
    });
});
