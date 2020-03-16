// JS Only
var numbersJS = [1, 2, 3];
numbersJS.map(function (val) { return val * 2; });
// ES6(2015) TS
var numbersTS = [1, 2, 3];
numbersTS.map(function (val) { return val * 2; });
// Class declaration ES6(2015) TS
var Mathematic = /** @class */ (function () {
    function Mathematic() {
    }
    Mathematic.prototype.soma2 = function (x, y) {
        return x + y;
    };
    return Mathematic;
}());
