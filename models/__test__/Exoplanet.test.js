const exoplanets = require("../Exoplanet");

test("pipeline-test", () => {
    expect(0).toBe(0);
});

describe("Exoplanet add tests", () => {
    let exoplanet;
    let result;
    
    it("should fail as the uniqueName is empty", () => {
        //arrange
        exoplanet = {
            uniqueName: "",
            hClass: "test",
            discoveryYear: "1000",
        };
        //act
        result = exoplanets.save(exoplanet);
        //assert
        expect(result).toBe(false);
    });

    it("should fail as the exoplanet name contains at least one lowercase letter", () => {
        //arrange
        exoplanet = {
            uniqueName: "TRAPPISt",
            hClass: "test",
            discoveryYear: "2010",
        };
        //act
        result = exoplanets.save(exoplanet);
        //assert
        expect(result).toBe(false);
    });

    it("should return false as no special character besides . and - are allowed", () => {
        //arrange
        exoplanet = {
            uniqueName: "MADA./-",
            hClass: "test",
            discoveryYear: "1000",
        };
        //act
        result = exoplanets.save(exoplanet);
        //assert
        expect(result).toBe(false);
    });
});
