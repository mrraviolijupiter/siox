class ForceMessage {
  currentMessage = 0;
  constructor(event, messages) {
    this.event = event;
    this.messages = messages;
    this.emit = this.emit.bind(this);
  }
  emit() {
    io.emit(this.event, this.messages[this.currentMessage % this.messages.length]);
    this.currentMessage++;
  }
}

module.exports = ForceMessage;
