let minutes = {
    '00': '',
    '05': 'five',
    '10': 'ten',
    '15': 'quarter',
    '20': 'twenty',
    '25': 'twenty five',
    '30': 'half',
    '35': 'twenty five',
    '40': 'twenty',
    '45': 'quarter',
    '50': 'ten',
    '55': 'five'
};

let hours = {
    '00': 'twelve',
    '01': 'one',
    '02': 'two',
    '03': 'three',
    '04': 'four',
    '05': 'five',
    '06': 'six',
    '07': 'seven',
    '08': 'eight',
    '09': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'one',
    '14': 'two',
    '15': 'three',
    '16': 'four',
    '17': 'five',
    '18': 'six',
    '19': 'seven',
    '20': 'eight',
    '21': 'nine',
    '22': 'ten',
    '23': 'eleven'
};

let dividers = {
    'on-hour': 'o\'clock',
    'past': 'past',
    'to': 'to',
};

let formats = {
    'on-hour': ':hour :divider',
    'past': ':minutes :divider :hour',
    'to': ':minutes :divider :hour',
};

let minuteConfig = [
    {
        startTime: '00.00',
        endTime: '02.30',
        identifier: '00'
    },{
        startTime: '57.30',
        endTime: '59.60',
        identifier: '00'
    },{
        startTime: '02.30',
        endTime: '07.30',
        identifier: '05'
    },{
        startTime: '07.30',
        endTime: '12.30',
        identifier: '10'
    },{
        startTime: '12.30',
        endTime: '17.30',
        identifier: '15'
    },{
        startTime: '17.30',
        endTime: '22.30',
        identifier: '20'
    },{
        startTime: '22.30',
        endTime: '27.30',
        identifier: '25'
    },{
        startTime: '27.30',
        endTime: '32.30',
        identifier: '30'
    },{
        startTime: '32.30',
        endTime: '37.30',
        identifier: '35'
    },{
        startTime: '37.30',
        endTime: '42.30',
        identifier: '40'
    },{
        startTime: '42.30',
        endTime: '47.30',
        identifier: '45'
    },{
        startTime: '47.30',
        endTime: '52.30',
        identifier: '50'
    },{
        startTime: '52.30',
        endTime: '57.30',
        identifier: '55'
    }
];

let dividerConfig = [
    {
        startTime: '00.00',
        endTime: '02.30',
        identifier: 'on-hour',
    },{
        startTime: '57.30',
        endTime: '59.60',
        identifier: 'on-hour',
    },{
        startTime: '02.30',
        endTime: '30.00',
        identifier: 'past',
    },{
        startTime: '30.00',
        endTime: '57.30',
        identifier: 'to',
    }
];

let timeFormatConfig = [
    {
        startTime: '00.00',
        endTime: '02.30',
        identifier: 'on-hour',
    },{
        startTime: '57.30',
        endTime: '59.60',
        identifier: 'on-hour',
    },{
        startTime: '02.30',
        endTime: '30.00',
        identifier: 'past',
    },{
        startTime: '30.00',
        endTime: '57.30',
        identifier: 'to',
    },
];

module.exports = {
    minutes: minutes,
    hours: hours,
    dividers: dividers,
    formats: formats,
    minuteConfig: minuteConfig,
    dividerConfig: dividerConfig,
    timeFormatConfig: timeFormatConfig
};
