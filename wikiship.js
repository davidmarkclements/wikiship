#!/usr/bin/env node
var fs = require('fs');
var es = require('event-stream');
var argv = require('optimist').argv;
var progrex =  /\!\[\]\[(\d+)\]/
var threshold = 50;

var rs = fs.createReadStream(process.cwd() + '/_Progress.md');
var ws = fs.createWriteStream(process.cwd() + '/Home.md');

if (!argv.p) { 
  return rs.pipe(ws);
}

rs.pipe(es.split())
  .pipe(es.map(function (line, cb) {
    var m = progrex.exec(line);
    if (!m) { return cb(null, line); }
    if (+m[1] < threshold) {return cb();}
    line = line.replace(m[0], '').trim();
    cb(null, line)
  }))
  .pipe(es.join('\n'))
  .pipe(ws);







