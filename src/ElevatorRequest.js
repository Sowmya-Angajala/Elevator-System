"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevatorRequest = void 0;
var Direction_1 = require("./Direction");
var ElevatorRequest = /** @class */ (function () {
    function ElevatorRequest(currentFloor, destintationFloor) {
        this.currentFloor = currentFloor;
        this.destinationFloor = destintationFloor;
        this.direction = this.destinationFloor > this.currentFloor ? Direction_1.Direction.UP : Direction_1.Direction.DOWN;
    }
    return ElevatorRequest;
}());
exports.ElevatorRequest = ElevatorRequest;
