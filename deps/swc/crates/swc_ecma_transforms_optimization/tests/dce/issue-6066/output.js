// Generated by Peggy 2.0.1.
//
// https://peggyjs.org/
"use strict";
function peg$subclass(child, parent) {
    function C() {
        this.constructor = child;
    }
    C.prototype = parent.prototype;
    child.prototype = new C();
}
function peg$SyntaxError(message, expected, found, location) {
    var self = Error.call(this, message);
    // istanbul ignore next Check is a necessary evil to support older environments
    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(self, peg$SyntaxError.prototype);
    }
    self.expected = expected;
    self.found = found;
    self.location = location;
    self.name = "SyntaxError";
    return self;
}
peg$subclass(peg$SyntaxError, Error);
function peg$padEnd(str, targetLength, padString) {
    padString = padString || " ";
    if (str.length > targetLength) {
        return str;
    }
    targetLength -= str.length;
    padString += padString.repeat(targetLength);
    return str + padString.slice(0, targetLength);
}
peg$SyntaxError.prototype.format = function(sources) {
    var str = "Error: " + this.message;
    if (this.location) {
        var src = null;
        var k;
        for(k = 0; k < sources.length; k++){
            if (sources[k].source === this.location.source) {
                src = sources[k].text.split(/\r\n|\n|\r/g);
                break;
            }
        }
        var s = this.location.start;
        var loc = this.location.source + ":" + s.line + ":" + s.column;
        if (src) {
            var e = this.location.end;
            var filler = peg$padEnd("", s.line.toString().length, ' ');
            var line = src[s.line - 1];
            var last = s.line === e.line ? e.column : line.length + 1;
            var hatLen = last - s.column || 1;
            str += "\n --> " + loc + "\n" + filler + " |\n" + s.line + " | " + line + "\n" + filler + " | " + peg$padEnd("", s.column - 1, ' ') + peg$padEnd("", hatLen, "^");
        } else {
            str += "\n at " + loc;
        }
    }
    return str;
};
peg$SyntaxError.buildMessage = function(expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
        },
        class: function(expectation) {
            var escapedParts = expectation.parts.map(function(part) {
                return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
            });
            return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
        },
        any: function() {
            return "any character";
        },
        end: function() {
            return "end of input";
        },
        other: function(expectation) {
            return expectation.description;
        }
    };
    function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
    }
    function literalEscape(s) {
        return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
            return "\\x0" + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
            return "\\x" + hex(ch);
        });
    }
    function classEscape(s) {
        return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
            return "\\x0" + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
            return "\\x" + hex(ch);
        });
    }
    function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }
    function describeExpected(expected) {
        var descriptions = expected.map(describeExpectation);
        var i, j;
        descriptions.sort();
        if (descriptions.length > 0) {
            for(i = 1, j = 1; i < descriptions.length; i++){
                if (descriptions[i - 1] !== descriptions[i]) {
                    descriptions[j] = descriptions[i];
                    j++;
                }
            }
            descriptions.length = j;
        }
        switch(descriptions.length){
            case 1:
                return descriptions[0];
            case 2:
                return descriptions[0] + " or " + descriptions[1];
            default:
                return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
        }
    }
    function describeFound(found) {
        return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }
    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse(input, options) {
    options = options !== undefined ? options : {};
    var peg$FAILED = {};
    var peg$source = options.grammarSource;
    var peg$startRuleFunctions = {
        TEST: peg$parseTEST
    };
    var peg$startRuleFunction = peg$parseTEST;
    var peg$r0 = /^[a]/;
    var peg$r1 = /^[b]/;
    var peg$r2 = /^[c]/;
    var peg$r3 = /^[d]/;
    var peg$r4 = /^[e]/;
    var peg$r5 = /^[f]/;
    var peg$r6 = /^[g]/;
    var peg$r7 = /^[h]/;
    var peg$r8 = /^[i]/;
    var peg$r9 = /^[j]/;
    var peg$r10 = /^[k]/;
    var peg$r11 = /^[l]/;
    var peg$r12 = /^[m]/;
    var peg$r13 = /^[n]/;
    var peg$r14 = /^[o]/;
    var peg$r15 = /^[p]/;
    var peg$r16 = /^[q]/;
    var peg$r17 = /^[r]/;
    var peg$r18 = /^[s]/;
    var peg$r19 = /^[t]/;
    var peg$r20 = /^[u]/;
    var peg$r21 = /^[v]/;
    var peg$e0 = peg$classExpectation([
        "a"
    ], false, false);
    var peg$e1 = peg$classExpectation([
        "b"
    ], false, false);
    var peg$e2 = peg$classExpectation([
        "c"
    ], false, false);
    var peg$e3 = peg$classExpectation([
        "d"
    ], false, false);
    var peg$e4 = peg$classExpectation([
        "e"
    ], false, false);
    var peg$e5 = peg$classExpectation([
        "f"
    ], false, false);
    var peg$e6 = peg$classExpectation([
        "g"
    ], false, false);
    var peg$e7 = peg$classExpectation([
        "h"
    ], false, false);
    var peg$e8 = peg$classExpectation([
        "i"
    ], false, false);
    var peg$e9 = peg$classExpectation([
        "j"
    ], false, false);
    var peg$e10 = peg$classExpectation([
        "k"
    ], false, false);
    var peg$e11 = peg$classExpectation([
        "l"
    ], false, false);
    var peg$e12 = peg$classExpectation([
        "m"
    ], false, false);
    var peg$e13 = peg$classExpectation([
        "n"
    ], false, false);
    var peg$e14 = peg$classExpectation([
        "o"
    ], false, false);
    var peg$e15 = peg$classExpectation([
        "p"
    ], false, false);
    var peg$e16 = peg$classExpectation([
        "q"
    ], false, false);
    var peg$e17 = peg$classExpectation([
        "r"
    ], false, false);
    var peg$e18 = peg$classExpectation([
        "s"
    ], false, false);
    var peg$e19 = peg$classExpectation([
        "t"
    ], false, false);
    var peg$e20 = peg$classExpectation([
        "u"
    ], false, false);
    var peg$e21 = peg$classExpectation([
        "v"
    ], false, false);
    var peg$currPos = 0;
    var peg$savedPos = 0;
    var peg$posDetailsCache = [
        {
            line: 1,
            column: 1
        }
    ];
    var peg$maxFailPos = 0;
    var peg$maxFailExpected = [];
    var peg$silentFails = 0;
    var peg$result;
    if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
            throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }
        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }
    function text() {
        return input.substring(peg$savedPos, peg$currPos);
    }
    function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
    }
    function expected(description, location) {
        location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildStructuredError([
            peg$otherExpectation(description)
        ], input.substring(peg$savedPos, peg$currPos), location);
    }
    function peg$classExpectation(parts, inverted, ignoreCase) {
        return {
            type: "class",
            parts: parts,
            inverted: inverted,
            ignoreCase: ignoreCase
        };
    }
    function peg$endExpectation() {
        return {
            type: "end"
        };
    }
    function peg$otherExpectation(description) {
        return {
            type: "other",
            description: description
        };
    }
    function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos];
        var p;
        if (details) {
            return details;
        } else {
            p = pos - 1;
            while(!peg$posDetailsCache[p]){
                p--;
            }
            details = peg$posDetailsCache[p];
            details = {
                line: details.line,
                column: details.column
            };
            while(p < pos){
                if (input.charCodeAt(p) === 10) {
                    details.line++;
                    details.column = 1;
                } else {
                    details.column++;
                }
                p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
        }
    }
    function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos);
        var endPosDetails = peg$computePosDetails(endPos);
        return {
            source: peg$source,
            start: {
                offset: startPos,
                line: startPosDetails.line,
                column: startPosDetails.column
            },
            end: {
                offset: endPos,
                line: endPosDetails.line,
                column: endPosDetails.column
            }
        };
    }
    function peg$fail(expected) {
        if (peg$currPos < peg$maxFailPos) {
            return;
        }
        if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
        }
        peg$maxFailExpected.push(expected);
    }
    function peg$buildSimpleError(message, location) {
        return new peg$SyntaxError(message, null, null, location);
    }
    function peg$buildStructuredError(expected, found, location) {
        return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
    }
    function peg$parseTEST() {
        var s0;
        if (peg$r0.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$e0);
            }
        }
        if (s0 === peg$FAILED) {
            if (peg$r1.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$e1);
                }
            }
            if (s0 === peg$FAILED) {
                if (peg$r2.test(input.charAt(peg$currPos))) {
                    s0 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$e2);
                    }
                }
                if (s0 === peg$FAILED) {
                    if (peg$r3.test(input.charAt(peg$currPos))) {
                        s0 = input.charAt(peg$currPos);
                        peg$currPos++;
                    } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$e3);
                        }
                    }
                    if (s0 === peg$FAILED) {
                        if (peg$r4.test(input.charAt(peg$currPos))) {
                            s0 = input.charAt(peg$currPos);
                            peg$currPos++;
                        } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$e4);
                            }
                        }
                        if (s0 === peg$FAILED) {
                            if (peg$r5.test(input.charAt(peg$currPos))) {
                                s0 = input.charAt(peg$currPos);
                                peg$currPos++;
                            } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                    peg$fail(peg$e5);
                                }
                            }
                            if (s0 === peg$FAILED) {
                                if (peg$r6.test(input.charAt(peg$currPos))) {
                                    s0 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                } else {
                                    s0 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$e6);
                                    }
                                }
                                if (s0 === peg$FAILED) {
                                    if (peg$r7.test(input.charAt(peg$currPos))) {
                                        s0 = input.charAt(peg$currPos);
                                        peg$currPos++;
                                    } else {
                                        s0 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                            peg$fail(peg$e7);
                                        }
                                    }
                                    if (s0 === peg$FAILED) {
                                        if (peg$r8.test(input.charAt(peg$currPos))) {
                                            s0 = input.charAt(peg$currPos);
                                            peg$currPos++;
                                        } else {
                                            s0 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$e8);
                                            }
                                        }
                                        if (s0 === peg$FAILED) {
                                            if (peg$r9.test(input.charAt(peg$currPos))) {
                                                s0 = input.charAt(peg$currPos);
                                                peg$currPos++;
                                            } else {
                                                s0 = peg$FAILED;
                                                if (peg$silentFails === 0) {
                                                    peg$fail(peg$e9);
                                                }
                                            }
                                            if (s0 === peg$FAILED) {
                                                if (peg$r10.test(input.charAt(peg$currPos))) {
                                                    s0 = input.charAt(peg$currPos);
                                                    peg$currPos++;
                                                } else {
                                                    s0 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$e10);
                                                    }
                                                }
                                                if (s0 === peg$FAILED) {
                                                    if (peg$r11.test(input.charAt(peg$currPos))) {
                                                        s0 = input.charAt(peg$currPos);
                                                        peg$currPos++;
                                                    } else {
                                                        s0 = peg$FAILED;
                                                        if (peg$silentFails === 0) {
                                                            peg$fail(peg$e11);
                                                        }
                                                    }
                                                    if (s0 === peg$FAILED) {
                                                        if (peg$r12.test(input.charAt(peg$currPos))) {
                                                            s0 = input.charAt(peg$currPos);
                                                            peg$currPos++;
                                                        } else {
                                                            s0 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                                peg$fail(peg$e12);
                                                            }
                                                        }
                                                        if (s0 === peg$FAILED) {
                                                            if (peg$r13.test(input.charAt(peg$currPos))) {
                                                                s0 = input.charAt(peg$currPos);
                                                                peg$currPos++;
                                                            } else {
                                                                s0 = peg$FAILED;
                                                                if (peg$silentFails === 0) {
                                                                    peg$fail(peg$e13);
                                                                }
                                                            }
                                                            if (s0 === peg$FAILED) {
                                                                if (peg$r14.test(input.charAt(peg$currPos))) {
                                                                    s0 = input.charAt(peg$currPos);
                                                                    peg$currPos++;
                                                                } else {
                                                                    s0 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                        peg$fail(peg$e14);
                                                                    }
                                                                }
                                                                if (s0 === peg$FAILED) {
                                                                    if (peg$r15.test(input.charAt(peg$currPos))) {
                                                                        s0 = input.charAt(peg$currPos);
                                                                        peg$currPos++;
                                                                    } else {
                                                                        s0 = peg$FAILED;
                                                                        if (peg$silentFails === 0) {
                                                                            peg$fail(peg$e15);
                                                                        }
                                                                    }
                                                                    if (s0 === peg$FAILED) {
                                                                        if (peg$r16.test(input.charAt(peg$currPos))) {
                                                                            s0 = input.charAt(peg$currPos);
                                                                            peg$currPos++;
                                                                        } else {
                                                                            s0 = peg$FAILED;
                                                                            if (peg$silentFails === 0) {
                                                                                peg$fail(peg$e16);
                                                                            }
                                                                        }
                                                                        if (s0 === peg$FAILED) {
                                                                            if (peg$r17.test(input.charAt(peg$currPos))) {
                                                                                s0 = input.charAt(peg$currPos);
                                                                                peg$currPos++;
                                                                            } else {
                                                                                s0 = peg$FAILED;
                                                                                if (peg$silentFails === 0) {
                                                                                    peg$fail(peg$e17);
                                                                                }
                                                                            }
                                                                            if (s0 === peg$FAILED) {
                                                                                if (peg$r18.test(input.charAt(peg$currPos))) {
                                                                                    s0 = input.charAt(peg$currPos);
                                                                                    peg$currPos++;
                                                                                } else {
                                                                                    s0 = peg$FAILED;
                                                                                    if (peg$silentFails === 0) {
                                                                                        peg$fail(peg$e18);
                                                                                    }
                                                                                }
                                                                                if (s0 === peg$FAILED) {
                                                                                    if (peg$r19.test(input.charAt(peg$currPos))) {
                                                                                        s0 = input.charAt(peg$currPos);
                                                                                        peg$currPos++;
                                                                                    } else {
                                                                                        s0 = peg$FAILED;
                                                                                        if (peg$silentFails === 0) {
                                                                                            peg$fail(peg$e19);
                                                                                        }
                                                                                    }
                                                                                    if (s0 === peg$FAILED) {
                                                                                        if (peg$r20.test(input.charAt(peg$currPos))) {
                                                                                            s0 = input.charAt(peg$currPos);
                                                                                            peg$currPos++;
                                                                                        } else {
                                                                                            s0 = peg$FAILED;
                                                                                            if (peg$silentFails === 0) {
                                                                                                peg$fail(peg$e20);
                                                                                            }
                                                                                        }
                                                                                        if (s0 === peg$FAILED) {
                                                                                            if (peg$r21.test(input.charAt(peg$currPos))) {
                                                                                                s0 = input.charAt(peg$currPos);
                                                                                                peg$currPos++;
                                                                                            } else {
                                                                                                s0 = peg$FAILED;
                                                                                                if (peg$silentFails === 0) {
                                                                                                    peg$fail(peg$e21);
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return s0;
    }
    peg$result = peg$startRuleFunction();
    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
    } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
            peg$fail(peg$endExpectation());
        }
        throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
}
module.exports = {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
};
