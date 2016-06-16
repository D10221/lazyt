import {assert} from 'chai';
import {Lazy} from "./lazy";

let globalCounter = 0;

class Thing {
    constructor(public id:number){
        ++globalCounter;
    }
}

describe('lazy', ()=>{

    it('works',()=>{
        let i = 0 ;

        const getThing = ()=> new Thing(++i);

        let lazy = new Lazy<Thing>(getThing);

        assert.equal(lazy.value.id,1);
        assert.equal(lazy.value.id,1);
        assert.equal(lazy.value.id,1);

        assert.equal(globalCounter,1);
        
    })
});