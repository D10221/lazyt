(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    class Lazy {
        constructor(f) {
            this.built = false;
            this._fty = f;
        }
        get isValueCreated() {
            return typeof this._t != 'undefined';
        }
        get value() {
            if (!this.built) {
                this.built = true;
                this._t = this._fty();
                return this._t;
            }
            return this._t;
        }
    }
    exports.Lazy = Lazy;
    function isFunction(x) {
        return typeof (x) === 'function';
    }
    class LazyFunc {
        constructor(factory) {
            this.factory = factory;
            this.built = false;
        }
        get isValueCreated() {
            return typeof this._t != 'undefined';
        }
        value(x) {
            if (!this.built) {
                let params = isFunction(x) ? x() : x;
                this.built = true;
                this._t = this.factory(params);
                return this._t;
            }
            return this._t;
        }
    }
    exports.LazyFunc = LazyFunc;
});
//# sourceMappingURL=lazy.js.map