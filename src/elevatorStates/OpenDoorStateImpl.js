"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenDoorStateImpl = void 0;
var CloseDoorStateImpl_1 = require("./CloseDoorStateImpl");
var OpenDoorStateImpl = /** @class */ (function () {
    function OpenDoorStateImpl() {
    }
    OpenDoorStateImpl.prototype.moveToFloor = function (elevator, floor) {
        console.log("Cannot move elevator while doors are open");
    };
    OpenDoorStateImpl.prototype.openDoor = function (elevator) {
        console.log("Doors are already open!");
    };
    OpenDoorStateImpl.prototype.closeDoor = function (elevator) {
        console.log("Doors are closing...");
        elevator.doorOpen = false;
        elevator.state = new CloseDoorStateImpl_1.CloseDoorStateImpl();
    };
    return OpenDoorStateImpl;
}());
exports.OpenDoorStateImpl = OpenDoorStateImpl;
