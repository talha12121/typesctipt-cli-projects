#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Object.defineProperty(exports, "__esModule", { value: true });
import inquirer_1 from "inquirer";
import chalk_1 from "chalk";
var total = 0;
var guessed = 0;
function selectMode() {
    var chooseMode = inquirer_1.prompt({
        name: "mode",
        message: "Select Type",
        type: "list",
        choices: ["Easy", "Medium", "Hard"]
    })
        .then(function (chooseMode) {
        if (chooseMode.mode === "Easy") {
            easyFunc();
            total += 1;
        }
        else if (chooseMode.mode === "Medium") {
            mediumFunc();
            total += 1;
        }
        else if (chooseMode.mode === "Hard") {
            hardFunc();
            total += 1;
        }
    });
}
function easyFunc() {
    return __awaiter(this, void 0, void 0, function () {
        var easyNum, easy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    easyNum = Math.ceil(Math.random() * 5);
                    return [4 /*yield*/, inquirer_1.prompt({
                            name: "num",
                            message: "Enter Number From 1 to 5",
                            type: "number"
                        })
                            .then(function (easy) {
                            if (easy.num === easyNum) {
                                console.log(chalk_1.green("YOU GUESSED THE CORRECT NUMBER"));
                                guessed += 1;
                            }
                            else {
                                console.log(chalk_1.red("NOT GUESSED CORRECT"));
                            }
                        })];
                case 1:
                    easy = _a.sent();
                    console.log(easyNum);
                    playAgain();
                    return [2 /*return*/];
            }
        });
    });
}
function mediumFunc() {
    return __awaiter(this, void 0, void 0, function () {
        var mediumNum, medium;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mediumNum = Math.ceil(Math.random() * 10);
                    return [4 /*yield*/, inquirer_1.prompt({
                            name: "num",
                            message: "Enter Number From 1 to 10",
                            type: "number"
                        })
                            .then(function (medium) {
                            if (medium.num === mediumNum) {
                                console.log(chalk_1.green("YOU GUESSED THE CORRECT NUMBER"));
                                guessed += 1;
                            }
                            else {
                                console.log(chalk_1.red("NOT GUESSED CORRECT"));
                            }
                        })];
                case 1:
                    medium = _a.sent();
                    console.log(mediumNum);
                    playAgain();
                    return [2 /*return*/];
            }
        });
    });
}
function hardFunc() {
    return __awaiter(this, void 0, void 0, function () {
        var hardNum, hard;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hardNum = Math.ceil(Math.random() * 15);
                    return [4 /*yield*/, inquirer_1.prompt({
                            name: "num",
                            message: "Enter Number From 1 to 15",
                            type: "number"
                        })
                            .then(function (hard) {
                            if (hard.num === hardNum) {
                                console.log(chalk_1.green("YOU GUESSED THE CORRECT NUMBER"));
                                guessed += 1;
                            }
                            else {
                                console.log(chalk_1.red("NOT GUESSED CORRECT"));
                            }
                        })];
                case 1:
                    hard = _a.sent();
                    console.log(hardNum);
                    playAgain();
                    return [2 /*return*/];
            }
        });
    });
}
var playAgain = function () { return __awaiter(void 0, void 0, void 0, function () {
    var restart;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.prompt({
                    name: "again",
                    type: "list",
                    message: "DO YOU WANT TO PLAY AGAIN",
                    choices: ["YES", "NO"]
                })
                    .then(function (restart) {
                    if (restart.again === 'YES') {
                        selectMode();
                    }
                    else {
                        console.log(chalk_1.blue("THANKS FOR PLAYING 😄"));
                        console.log("you guessed ".concat(guessed, " answers out of ").concat(total, " questions"));
                    }
                })];
            case 1:
                restart = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
selectMode();
