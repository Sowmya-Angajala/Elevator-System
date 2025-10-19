"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElevatorManager_1 = require("./ElevatorManager");
var ElevatorRequest_1 = require("./ElevatorRequest");
var elevatorManager = new ElevatorManager_1.ElevatorManager(50, 4);
var request1 = new ElevatorRequest_1.ElevatorRequest(30, 1);
var elevator1 = elevatorManager.requestElevator(request1);
