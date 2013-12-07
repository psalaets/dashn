var es = require('event-stream');

function discardSecondChunkOfEveryTwo() {
  return es.through(function(data) {
    this.buffer = this.buffer || [];

    this.buffer.push(data.toString());

    if (this.buffer.length == 2) {
      this.queue(this.buffer[0]);
      delete this.buffer;
    }
  }, function() {
    // write last buffered chunk if it's there and non empty
    if (this.buffer.length && this.buffer[0]) {
      this.queue(this.buffer[0]);
    }

    this.queue(null);
  });
}

module.exports = function dashn(writeFn) {
  return es.pipeline(
    es.split(/(\n)/),
    discardSecondChunkOfEveryTwo(),
    es.through(writeFn)
  );
};
