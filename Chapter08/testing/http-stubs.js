"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var ConnectionHelper = (function () {
    function ConnectionHelper() {
    }
    ConnectionHelper.prototype.setupConnections = function (mockBackend, options) {
        mockBackend.connections.subscribe(function (connection) {
            // if (connection.request.url.indexOf('doctor') >= 0) {
            var responseOptions = new http_1.ResponseOptions(options);
            var response = new http_1.Response(responseOptions);
            connection.mockRespond(response);
            // }
        });
    };
    return ConnectionHelper;
}());
exports.ConnectionHelper = ConnectionHelper;
//# sourceMappingURL=http-stubs.js.map