var dashn = require('..');

module.exports['dashn'] = {
  "custom function-driven stream recveives input line by line": function(test) {

    var actual = [];

    var d = dashn(function(data) {
      actual.push(data.toString());
    });

    d.end("a\nb\nc");

    test.equal(actual, ['a', 'b', 'c']);
    test.done();
  }
};
