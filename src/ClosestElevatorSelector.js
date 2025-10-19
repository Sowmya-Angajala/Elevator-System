"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosestElevatorSelector = void 0;
var Direction_1 = require("./Direction");
var ClosestElevatorSelector = /** @class */ (function () {
    function ClosestElevatorSelector() {
    }
    ClosestElevatorSelector.prototype.selectElevator = function (elevators, request) {
        var bestElevator = null;
        var minDistance = Infinity;
        for (var _i = 0, elevators_1 = elevators; _i < elevators_1.length; _i++) {
            var elevator = elevators_1[_i];
            var distance = Math.abs(elevator.currentFloor - request.currentFloor);
            if (elevator.direction === request.direction || elevator.direction === Direction_1.Direction.IDLE) {
                if (distance < minDistance) {
                    minDistance = distance;
                    bestElevator = elevator;
                }
            }
        }
        return bestElevator;
    };
    return ClosestElevatorSelector;
}());
exports.ClosestElevatorSelector = ClosestElevatorSelector;
