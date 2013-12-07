var es = require('event-stream');

module.exports = function dashn(expression) {
  return es.pipeline(
    es.split(),
    es.through(expression)
  );
};
