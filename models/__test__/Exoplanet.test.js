const exoplanets = require("../Exoplanet");

test("pipeline-test", () => {
    expect(0).toBe(0);
});

describe("Exoplanet add tests", () => {
    it('should fail as the uniqueName is empty', () => {  
        //arrange
        const exoplanet = {
            uniqueName: '',
            hClass: 'test',
            discoveryYear: '1000', 
        };
        //act
        const result = exoplanets.save(exoplanet);
        //assert 
        expect(result).toBe(false);
    });
    
    it("should fail as the exoplanet name contains at least one lowercase letter", () => {
        //arrange
        const exoplanet = {
            uniqueName: 'TRAPPISt',
            hClass: 'test',
            discoveryYear: '2010', 
        };
        //act
        const result = exoplanets.save(exoplanet);
        //assert 
        expect(result).toBe(false);
    });
    
    it("should return false as no special character besides . and - are allowed", () => {
        expect(
            exoplanets.save({
                uniqueName: "MADA./-",
                hClass: "test",
                discoveryYear: "1000",
            })
        ).toBe(false);
    });
});