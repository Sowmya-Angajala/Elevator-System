"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevatorManager = void 0;
var ClosestElevatorSelector_1 = require("./ClosestElevatorSelector");
var Elevator_1 = require("./Elevator");
var ElevatorManager = /** @class */ (function () {
    function ElevatorManager(numFloors, numElevators) {
        this.numFloors = numFloors;
        this.selector = new ClosestElevatorSelector_1.ClosestElevatorSelector();
        this.elevators = [];
        for (var i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator_1.Elevator());
        }
    }
    ElevatorManager.prototype.updateDisplay = function () {
        for (var _i = 0, _a = this.elevators; _i < _a.length; _i++) {
            var elevator = _a[_i];
            elevator.updateDisplay();
        }
    };
    ElevatorManager.prototype.requestElevator = function (request) {
        var elevator = this.selector.selectElevator(this.elevators, request);
        if (elevator) {
            // pick up
            elevator.enqueueFloor(request.currentFloor);
            // drop off
            elevator.enqueueFloor(request.destinationFloor);
        }
        else {
            console.log("No elevator is available");
        }
        return elevator;
    };
    return ElevatorManager;
}());
exports.ElevatorManager = ElevatorManager;
