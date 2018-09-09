var constants = require('./lib/constants.js');
var login = require('./lib/login.js');
var Session = require('./lib/session.js');
var request = require('./lib/request.js');
var Tunnel = require('./lib/tunnel.js');

var exports = module.exports = {
    login: login.login,
    loginWithCode: login.loginWithCode,
    setLoginUrl: login.setLoginUrl,

    Session,
    clearSession: Session.clear,

    request: request.request,
    RequestError: request.RequestError,

    Tunnel: Tunnel
};

// 导出错误类型码
Object.keys(constants).forEach(function (key) {
    if (key.indexOf('ERR_') === 0) {
        exports[key] = constants[key];
    }
});