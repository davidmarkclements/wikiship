#!/usr/bin/env node
var fs = require('fs');
var stream = require('stream');
var es = require('event-stream');
var progrex =  /\!\[\]\[(\d+)\]/
var threshold = 50;


fs.createReadStream(process.cwd() + '/_Progress.md')
  .pipe(es.split())
  .pipe(es.map(function (line, cb) {
    var m = progrex.exec(line);
    if (!m) { return cb(null, line); }
    if (+m[1] < threshold) {return cb();}
    line = line.replace(m[0], '').trim();
    cb(null, line)
  }))
  .pipe(es.join('\n'))
  .pipe(fs.createWriteStream(process.cwd() + '/Home.md'))
