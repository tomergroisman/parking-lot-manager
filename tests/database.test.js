const Database = require('../database');
const db = new Database();

describe('Database Tests', () => {
    const mockParking = {
        plate: '123-456-789',
        parkingLot: 100,
        timestamp: Date.now(),
    }
    afterEach(() => {
        db.reset();
    });


    it('should get an empty db', () => {
        expect(db.get()).toStrictEqual({});
    });
    it('should add an entry to the database', () => {
        db.add(mockParking);
        expect(db.get()).toStrictEqual({
            1: mockParking
        });
    });
    it('should remove an entry from the database and return the entry', () => {
        const id = db.add(mockParking);
        const entry = db.remove(id);
        expect(entry).toStrictEqual(mockParking);

        expect(db.get()).toStrictEqual({});
    });
    it('should reset the database', () => {
        db.add(mockParking);
        db.reset();
        expect(db.get()).toStrictEqual({});
        expect(db.getLastParkingId()).toBe(0);
    });

})