let language = require('./Languages/English');

class Generator {
    constructor(time) {
        this.time = time;
    }

    getFuzzyTime() {
        let time = this.time.getMinutes() + '.' + this.time.getSeconds();
        var minuteIdentifier;
        for (let key in language.minuteConfig) {
            if (time >= language.minuteConfig[key].startTime && time < language.minuteConfig[key].endTime) {
                minuteIdentifier = language.minuteConfig[key].identifier;
            }
        }
        let minute = language.minutes[minuteIdentifier];

        var dividerIdentifier;
        for (let key in language.dividerConfig) {
            if (time >= language.dividerConfig[key].startTime && time < language.dividerConfig[key].endTime) {
                dividerIdentifier = language.dividerConfig[key].identifier;
            }
        }

        var hourIdentifier;
        var hour = this.pad(this.time.getHours(), 2);
        if (hour === '23') {
            hour = '00';
        } else if (this.time.getMinutes() > '30') {
            hour++;
            hour = this.pad(hour, 2, '0');
        }
        hourIdentifier = language.hours[hour];

        var format, formatIdentifier;
        for (let key in language.timeFormatConfig) {
            if (time >= language.timeFormatConfig[key].startTime && time < language.timeFormatConfig[key].endTime) {
                formatIdentifier = language.timeFormatConfig[key].identifier;
            }
        }
        format = language.formats[formatIdentifier];
        format = format.replace(':minutes', minute);
        format = format.replace(':divider', dividerIdentifier);
        format = format.replace(':hour', hourIdentifier);

        return format;
    }

    pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
}

module.exports = {
    generator: Generator
};
