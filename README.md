# Fuzzy Time

This was inspired from the fuzzy time clock that exists on Ubuntu. It gives you a rough idea what the time is without you knowing the exact minutes.

## Installation

`npm install --save @mic2100/fuzzy-time`

## Usage

Once the `./src/fuzzy-time` file has been required a new method will be available on all `Date` objects.

```
require('./src/fuzzy-time');

let date = new Date();

console.log(date.fuzzyTime());
```  