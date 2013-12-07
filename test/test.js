var dashn = require('..');

module.exports['dashn'] = {
  "sends function input line by line": function(test) {
    var actual = [];

    var d = dashn(function(data) {
      actual.push(data.toString());
    });

    d.end("a\nb\nc");

    test.deepEqual(actual, ['a', 'b', 'c']);
    test.done();
  },
  "last data chunk is empty string when input ends with newline": function(test) {
    var actual = [];

    var d = dashn(function(data) {
      actual.push(data.toString());
    });

    d.end("a\nb\nc\n");

    test.deepEqual(actual, ['a', 'b', 'c', '']);
    test.done();
  }
};
