var spawn = require('child_process').spawn;
var concat = require('concat-stream');

// path to a file in the test dir
function pathTo(filename) {
  return __dirname + '/' + filename;
}

var bin = __dirname + '/../bin/dashn';

module.exports['command line'] = {
  "line is current line of input": function(test) {
    var expr = 'console.log(line + "!");';
    var child = spawn(bin, ['-e', expr, pathTo('file1')]);

    child.stdout.pipe(concat(function(data) {
      test.equal(data.toString(), "a!\nb!\nc!\n");
      test.done();
    }));
  },
  "log is console.log": function(test) {
    var expr = 'log(line + "!");';
    var child = spawn(bin, ['-e', expr, pathTo('file1')]);

    child.stdout.pipe(concat(function(data) {
      test.equal(data.toString(), "a!\nb!\nc!\n");
      test.done();
    }));
  },
  "error is console.error": function(test) {
    var expr = 'error(line + "!");';
    var child = spawn(bin, ['-e', expr, pathTo('file1')]);

    child.stderr.pipe(concat(function(data) {
      test.equal(data.toString(), "a!\nb!\nc!\n");
      test.done();
    }));
  },
  "can take multiple files": function(test) {
    var expr = 'console.log(line + "!");';
    var child = spawn(bin, ['-e', expr, pathTo('file1'), pathTo('file1')]);

    child.stdout.pipe(concat(function(data) {
      test.equal(data.toString(), "a!\nb!\nc!\na!\nb!\nc!\n");
      test.done();
    }));
  },
  "-e is optional": function(test) {
    var expr = 'console.log(line + "!");';
    var child = spawn(bin, [expr, pathTo('file1')]);

    child.stdout.pipe(concat(function(data) {
      test.equal(data.toString(), "a!\nb!\nc!\n");
      test.done();
    }));
  }
};
