var Row = function(cells, line) {
  var Cucumber = require('../../../cucumber');

  self = {
    raw: function raw() {
      return cells;
    },
    getLine: function getLine(){
        return line;
    }

  };
  return self;
}
module.exports = Row;
