const exoplanets = require("../Exoplanet");

test("pipeline-test", () => {
    expect(0).toBe(0);
});

describe("Exoplanet add tests", () => {
    let exoplanet;
    let result;
    
    it("should fail as the uniqueName is empty", () => {
        givenExoplanet('','test','1000');
        //act
        result = exoplanets.save(exoplanet);
        //assert
        expect(result).toBe(false);
    });

    it("should fail as the exoplanet name contains at least one lowercase letter", () => {
        givenExoplanet('TRAPPISt','test','2010');
        //act
        result = exoplanets.save(exoplanet);
        //assert
        expect(result).toBe(false);
    });

    it("should return false as no special character besides . and - are allowed", () => {
        givenExoplanet('MADA./-','test','1000');
        //act
        result = exoplanets.save(exoplanet);
        //assert
        expect(result).toBe(false);
    });

    //arrange
    function givenExoplanet(uniqueName,hClass,discoveryYear){
        exoplanet = {
            uniqueName,
            hClass,
            discoveryYear
        };
    }
});
