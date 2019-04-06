module.exports = function (Doz, app, options = {}) {
    Doz.mixin({
        showAlert(msg) {
            alert(msg);
        }
    });
};