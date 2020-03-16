"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Aula4Component = /** @class */ (function () {
    function Aula4Component() {
        this.title = 'Aula 4 - Introdução ao TypeScript';
    }
    Aula4Component = __decorate([
        core_1.Component({
            selector: 'app-aula4',
            templateUrl: './aula4.component.html',
            styleUrls: ['./aula4.component.css']
        })
    ], Aula4Component);
    return Aula4Component;
}());
exports.Aula4Component = Aula4Component;
// JS Only
var numbersJS = [1, 2, 3];
numbersJS.map(function (val) { return val * 2; });
// ES6(2015) TS
var numbersTS = [1, 2, 3];
numbersTS.map(function (val) { return val * 2; });
