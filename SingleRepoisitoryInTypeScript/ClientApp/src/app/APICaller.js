"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenService_1 = require("./TokenService");
var apiCaller = /** @class */ (function () {
    function apiCaller() {
    }
    apiCaller.prototype.prepareToken = function () {
        var _this = this;
        var tokenManager = new TokenService_1.TokenManager(this.http);
        tokenManager.generateNewToken().then(function (token) {
            _this.token = token;
            alert(_this.token);
        });
    };
    return apiCaller;
}());
exports.apiCaller = apiCaller;
//# sourceMappingURL=APICaller.js.map