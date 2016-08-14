#!/usr/bin/env node
'use strict';
const meow = require('meow');
const rgbHex = require('rgb-hex');

const cli = meow(`
	Examples
	  $ rgb-hex 255 154 253
	  ff9afd
	  $ rgb-hex 'rgb(40, 42, 54)'
	  282a36
`);

console.log(rgbHex(cli.input.join(' ')));