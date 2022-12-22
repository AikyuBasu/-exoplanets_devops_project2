const exoplanets = require('../Exoplanet')

test('pipeline-test', () => {
    expect(0).toBe(0);
});

test('empty uniqueName', () => {
    expect(
        exoplanets.save({
            uniqueName: '',
            hClass: 'test',
            discoveryYear: '1000',

        })
    ).toBe(false);
})