const exoplanets = require("../Exoplanet");

test("pipeline-test", () => {
    expect(0).toBe(0);
});

test("no lowercase letter allowed for exoplanet uniqueName (only uppercase)", () => {
    expect(
        exoplanets.save({
            uniqueName: "TRAPPISt",
            hClass: "test",
            discoveryYear: "2010",
        })
    ).toBe(false);
});

test("empty uniqueName", () => {
    expect(
        exoplanets.save({
            uniqueName: "",
            hClass: "test",
            discoveryYear: "1000",
        })
    ).toBe(false);
});

test("no special charactere are allowed", () => {
    expect(
        exoplanets.save({
            uniqueName: "MADA./-",
            hClass: "test",
            discoveryYear: "1000",
        })
    ).toBe(false);
});
