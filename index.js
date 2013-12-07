var es = require('event-stream');

module.exports = function dashn(writeFn) {
  return es.pipeline(
    es.split(),
    es.through(writeFn)
  );
};
