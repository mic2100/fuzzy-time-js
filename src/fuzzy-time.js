let generator = require('./Generator');

Date.prototype.fuzzyTime = function () {
    let fuzzyTime = new generator.generator(this);

    return fuzzyTime.getFuzzyTime();
};
