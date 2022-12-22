const exoplanets = require('../../models/Exoplanet');

test('pipeline-test', () => {
    expect(0).toBe(0);
});

test('no special charactere are allowed', () => {
    expect(
        exoplanets.save({
            uniqueName: 'MADA./-',
            hClass: 'test',
            discoveryYear: '1000',
        })
    ).toBe(false);
});