describe("Berlin Clock", function() {
    var berlinClock;

    beforeEach(function() {
        berlinClock = new BerlinClock();
    });

    it("should blink every second", function() {
        expect(berlinClock.getSeconds(0)).toEqual('O');
        expect(berlinClock.getSeconds(1)).toEqual('Y');
    });

    it("should have 4 lamps in the first hours row", function() {
        expect(berlinClock.getFiveHourRow(23)).toEqual('RRRR');
        expect(berlinClock.getFiveHourRow(22)).toEqual('RRRR');
        expect(berlinClock.getFiveHourRow(8)).toEqual('ROOO');
    });

    it("should have 4 lamps in the second hours row", function() {
        expect(berlinClock.getSingleHourRow(23)).toEqual('RRRO');
        expect(berlinClock.getSingleHourRow(22)).toEqual('RROO');
        expect(berlinClock.getSingleHourRow(8)).toEqual('RRRO');
    });

    it("should have 11 lamps in the first minutes row", function() {
        expect(berlinClock.getFiveMinuteRow(59)).toEqual('YYRYYRYYRYY');
        expect(berlinClock.getFiveMinuteRow(32)).toEqual('YYRYYRYYOOO');
    });

    it("should have 4 lamps in the second minutes row", function() {
        expect(berlinClock.getSingleMinuteRow(59)).toEqual('YYYY');
        expect(berlinClock.getSingleMinuteRow(32)).toEqual('YYOO');
    });
});