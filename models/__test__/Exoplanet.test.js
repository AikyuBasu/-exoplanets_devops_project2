const exoplanets = require("../Exoplanet");

test("pipeline-test", () => {
    expect(0).toBe(0);
});

describe("Exoplanet add tests", () => {
    let exoplanet;
    let result;
    
    it("should fail as the uniqueName is empty", () => {
        givenExoplanet('','test','1000');
        whenAddExoplanet(exoplanet);
        assertResult(result, false);
    });

    it("should fail as the exoplanet name contains at least one lowercase letter", () => {
        givenExoplanet('TRAPPISt','test','2010');
        whenAddExoplanet(exoplanet);
        assertResult(result, false);
    });

    it("should return false as no special character besides . and - are allowed", () => {
        givenExoplanet('MADA./-','test','1000');
        whenAddExoplanet(exoplanet);
        assertResult(result, false);
    });

    //arrange
    function givenExoplanet(uniqueName,hClass,discoveryYear){
        exoplanet = {
            uniqueName,
            hClass,
            discoveryYear
        };
    }

    //act
    function whenAddExoplanet(exoplanet){
        result = exoplanets.save(exoplanet);
    }

    //assert
    function assertResult(result,expected){
        expect(result).toBe(expected);
}
});
