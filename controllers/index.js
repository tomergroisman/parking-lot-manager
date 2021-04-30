const Database = require('../database');

const db = new Database();

const HOURLY_CHARGE = 10;
const INCREMENT_INTERVAL = 15;
const PERIODIC_CHARGE = HOURLY_CHARGE / (60 / INCREMENT_INTERVAL);

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
        const charge = Math.ceil(minutesSpent / 15) * PERIODIC_CHARGE
        res.json({
            plate: parking.plate,
            totalParkingTime: minutesSpent.toFixed(1),
            parkingLot: parking.parkingLot,
            charge: charge % 1 == 0 ? charge : charge.toFixed(1),
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