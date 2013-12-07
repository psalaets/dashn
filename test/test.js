var dashn = require('..');

module.exports['dashn'] = {
  "given a function, sends it input line by line": function(test) {
    var actual = [];

    var d = dashn(function(data) {
      actual.push(data.toString());
    });

    d.end("a\nb\nc");

    test.deepEqual(actual, ['a', 'b', 'c']);
    test.done();
  }
};
