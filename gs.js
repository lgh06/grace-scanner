#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const XLSX = require('xlsx');
const colors = require('colors');
const path = require('path');

const version = require( path.resolve( __dirname, 'package.json' ) ).version;

program
  .version(version)
  .option('-f, --file [file]', 'excel name,default is current path\'s test.xlsx', 'test.xlsx')
  .option('-s, --score [score]', '1 or 2', '1')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(hint);
}

function hint(txt) {
  return colors.red(txt); //display the help text in red on the console
}

const fs = require('fs');

const filePath = path.resolve('./' + program.file);
console.log(filePath);

var workbook = XLSX.readFile(filePath);

console.log(getScoreFromSheet(workbook));

// read value from E21
function getScoreFromSheet(workbook) {
  var first_sheet_name = workbook.SheetNames[0];
  var address_of_cell = 'E21';
  if (program.score === '2') {
    address_of_cell = 'G21'
  }

  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];

  /* Find desired cell */
  var desired_cell = worksheet[address_of_cell];

  /* Get the value */
  var desired_value = (desired_cell ? desired_cell.v : undefined);
  return desired_value;
}