const messages = [
  {
    turnOrder: [3, 2, 1]
  },
];
const ForceMessage = require("./ForceMessage")
module.exports = new ForceMessage("start_match", messages);
