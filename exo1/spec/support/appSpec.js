import {BerlinClock} from "../../src/app.js";

describe("the first minute line", function(){
    it("minuteLine given 0.00 should return blabla",function(){
        //arrange
        let time = null;

        //act
        let result = BerlinClock.minuteLine(time);

        //assert
        expect(result).tobe("something, something");
    })
})