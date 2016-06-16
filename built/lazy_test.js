(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'chai', "./lazy"], factory);
    }
})(function (require, exports) {
    "use strict";
    const chai_1 = require('chai');
    const lazy_1 = require("./lazy");
    let globalCounter = 0;
    class Thing {
        constructor(id) {
            this.id = id;
            ++globalCounter;
        }
    }
    describe('lazy', () => {
        it('works', () => {
            let i = 0;
            const getThing = () => new Thing(++i);
            let lazy = new lazy_1.Lazy(getThing);
            chai_1.assert.equal(lazy.value.id, 1);
            chai_1.assert.equal(lazy.value.id, 1);
            chai_1.assert.equal(lazy.value.id, 1);
            chai_1.assert.equal(globalCounter, 1);
        });
    });
});
//# sourceMappingURL=lazy_test.js.map