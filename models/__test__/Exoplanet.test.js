const exoplanets = require('../Exoplanet');

test('pipeline-test', () => {
    expect(0).toBe(0);
});

test('no lowercase letter allowed for exoplanet uniqueName (only uppercase)', () => {
    expect(
        exoplanets.save({
            uniqueName: "TRAPPISt",
            hClass: "test",
            discoveryYear: "2010",
        })
    ).toBe(false);
});
