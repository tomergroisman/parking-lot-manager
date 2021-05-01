class Database {
    #db;
    #lastParkingId;

    /**
     * Class constructor
     */
    constructor() {
        this.#db = {};
        this.#lastParkingId = 0;
    }

    /**
     * Get parking(s) from the database
     * 
     * @param {String} parkingId - The parking id
     * @returns The specific parking (if provided)
     * or all the active parkings on the database
     */
    get(parkingId) {
        return parkingId ? this.#db[parkingId] : this.#db;
    }

    /**
     * Add new parking to the database
     * @param {Parking} parking 
     */
    add(parking) {
        const parkingId = ++this.#lastParkingId;
        this.#db[parkingId] = parking;
        return parkingId;
    }

    /**
     * Remove a parking from the database
     * @param {String} parkingId 
     * @returns the removed entry
     */
    remove(parkingId) {
        const parking = this.#db[parkingId];
        delete this.#db[parkingId];
        return parking;
    }

    getLastParkingId() {
        return this.#lastParkingId;
    }

    /**
     * Reset the database
     */
    reset() {
        this.#db = {};
        this.#lastParkingId = 0;
    }
}

module.exports = Database;