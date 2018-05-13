// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

  constructor(){
    this.eventRegistry = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if(!this.eventRegistry[eventName]){
      this.eventRegistry[eventName] = [];
    }
    this.eventRegistry[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.eventRegistry[eventName]){
      for(let callback of this.eventRegistry[eventName]){
        callback();
      }
    }
    for (var key in this.eventRegistry){
      this.eventRegistry[key];
    }

  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.eventRegistry[eventName];
  }
}

module.exports = Events;