"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GuessTheNumberComponent = (function () {
    function GuessTheNumberComponent() {
        this.initializeGame();
    }
    GuessTheNumberComponent.prototype.initializeGame = function () {
        this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 1000) + 1);
        this.guess = null;
        this.deviation = null;
    };
    GuessTheNumberComponent.prototype.verifyGuess = function () {
        this.deviation = this.original - this.guess;
        this.noOfTries = this.noOfTries + 1;
    };
    return GuessTheNumberComponent;
}());
GuessTheNumberComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"container\">\n      <h2>Guess the Number !</h2>\n      <p class=\"well lead\">Guess the computer generated random number between 1 and 1000.</p>\n      <label>Your Guess: </label>\n      <input type=\"number\" [value]=\"guess\" (input)=\"guess = $event.target.value\" />\n      <button (click)=\"verifyGuess()\" class=\"btn btn-primary btn-sm\">Verify</button>\n      <button (click)=\"initializeGame()\" class=\"btn btn-warning btn-sm\">Restart</button>\n      <div>\n        <p *ngIf=\"deviation<0\" class=\"alert alert-warning\">Your guess is higher.</p>\n        <p *ngIf=\"deviation>0\" class=\"alert alert-warning\">Your guess is lower.</p>\n        <p *ngIf=\"deviation===0\" class=\"alert alert-success\">Yes! That's it.</p>\n      </div>\n      <p class=\"text-info\">No of guesses :\n        <span class=\"badge\">{{noOfTries}}</span>\n      </p>\n    </div>\n    "
    })
], GuessTheNumberComponent);
exports.GuessTheNumberComponent = GuessTheNumberComponent;
