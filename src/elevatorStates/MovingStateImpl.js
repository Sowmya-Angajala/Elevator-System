"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingStateImpl = void 0;
var MovingStateImpl = /** @class */ (function () {
    function MovingStateImpl() {
    }
    MovingStateImpl.prototype.moveToFloor = function (elevator, floor) {
        console.log("Elevator is already moving");
    };
    MovingStateImpl.prototype.openDoor = function (elevator) {
        console.log("Cannot open the door while moving");
    };
    MovingStateImpl.prototype.closeDoor = function (elevator) {
        console.log("Doors are already closed");
    };
    return MovingStateImpl;
}());
exports.MovingStateImpl = MovingStateImpl;
