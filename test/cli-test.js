var spawn = require('child_process').spawn;
var concat = require('concat-stream');

// path to a file in the test dir
function pathTo(filename) {
  return __dirname + '/' + filename;
}

var bin = __dirname + '/../bin/dashn';

module.exports['command line'] = {
  "running expression on one file": function(test) {
    var expr = 'console.log(line + "!");';
    var child = spawn(bin, ['-e', expr, pathTo('file1')]);

    child.stdout.pipe(concat(function(data) {
      test.equal(data.toString(), "a!\nb!\nc!\n");
      test.done();
    }));
  },
  "running expression on multiple files": function(test) {
    var expr = 'console.log(line + "!");';
    var child = spawn(bin, ['-e', expr, pathTo('file1'), pathTo('file1')]);

    child.stdout.pipe(concat(function(data) {
      test.equal(data.toString(), "a!\nb!\nc!\na!\nb!\nc!\n");
      test.done();
    }));
  }
};
