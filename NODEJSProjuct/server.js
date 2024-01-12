// const crypto = require("crypto");

const events = require("events");
const EventEmitter = new events();

EventEmitter.on("event", function firstListener() {
   console.log("Helloooo! first listener");
});

EventEmitter.on("event", function secondListener(arg1, arg2) {
   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
EventEmitter.on("event", function thirdListener(...args) {
   const parameters = args.join(", ");
   console.log(`event with parameters ${parameters} in third listener`);
});

EventEmitter.emit("event", 1, 2, 3, 4, 5);
