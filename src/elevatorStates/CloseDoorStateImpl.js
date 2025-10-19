"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseDoorStateImpl = void 0;
var Direction_1 = require("../Direction");
var MovingStateImpl_1 = require("./MovingStateImpl");
var OpenDoorStateImpl_1 = require("./OpenDoorStateImpl");
var CloseDoorStateImpl = /** @class */ (function () {
    function CloseDoorStateImpl() {
    }
    CloseDoorStateImpl.prototype.moveToFloor = function (elevator, floor) {
        elevator.direction = elevator.currentFloor > floor ? Direction_1.Direction.DOWN : Direction_1.Direction.UP;
        elevator.state = new MovingStateImpl_1.MovingStateImpl();
        var distance = Math.abs(floor - elevator.currentFloor);
        var step = elevator.currentFloor < floor ? 1 : -1;
        for (var i = 1; i <= distance; i++) {
            elevator.currentFloor += step;
            console.log("Elevator at floor : ".concat(elevator.currentFloor));
            if (elevator.currentFloor === floor) {
                console.log("Elevator has arrived at floor ".concat(floor));
                elevator.state = new CloseDoorStateImpl();
                elevator.updateDisplay();
            }
        }
    };
    CloseDoorStateImpl.prototype.openDoor = function (elevator) {
        console.log("Elevator door is opening....");
        elevator.doorOpen = true;
        elevator.state = new OpenDoorStateImpl_1.OpenDoorStateImpl();
    };
    CloseDoorStateImpl.prototype.closeDoor = function (elevator) {
        console.log("Elevator Door is closed");
        elevator.doorOpen = false;
    };
    return CloseDoorStateImpl;
}());
exports.CloseDoorStateImpl = CloseDoorStateImpl;
