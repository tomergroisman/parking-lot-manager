const Database = require('../database');

const db = new Database();

const HOURLY_CHARGE = 10;

const millisToMinutes = (millis) => {
    return millis / 60000;
}

const controllers = {
    createParking: (req, res) => {
        const { plate, parkingLot } = req.query;
        const parking = {
            plate,
            parkingLot,
            timestamp: Date.now(),
        }
        const parkingId = db.add(parking);
        res.json(parkingId);
    },
    clearParking: (req, res) => {
        const { parkingId } = req.query;
        const timestamp = Date.now();
        const parking = db.remove(parkingId);
        const minutesSpent = millisToMinutes(timestamp - parking.timestamp);
        const charge = (Math.floor(minutesSpent) % 60 + 1) * HOURLY_CHARGE 
        res.json({
            plate: parking.plate,
            totalParkingTime: minutesSpent.toFixed(1),
            parkingLot: parking.parkingLot,
            charge
        });
    },
    getAllParkings: (req, res) => {
        const lotOccupation = db.get();
        res.json(lotOccupation);
    },
    resetDatabase: () => {
        db.reset();
    }
}

module.exports = controllers;