const request = require('supertest');
const Database = require('../database');
jest.mock('../database');

describe('Routes Tests', () => {
    let server;

    beforeEach(() => {
        server = require('../server');
        server.start();
    });

    afterEach(() => {
        server.app.close();
        server.reset();
    });


    it('should check entry route 200 status', async () => {
        await request(server.app).post('/entry?plate=123-123-123&parkingLot=382')
        .expect(200)
        const mockDatabaseInstance = Database.mock.instances[0];
        const mockDatabaseAdd = mockDatabaseInstance.add;
        expect(mockDatabaseAdd).toHaveBeenCalledTimes(1);
    });
    it('should check entry route 400 status', async () => {
        await request(server.app).post('/entry?bad=123-123-123&parkingLot=382')
        .expect(400);
    });
    it('should check exit route 200 status', async () => {
        await request(server.app).post('/entry?plate=123-123-123&parkingLot=382');
        await request(server.app).post('/exit?ticketId=1');
        const mockDatabaseInstance = Database.mock.instances[0];
        const mockDatabaseRemove = mockDatabaseInstance.remove;
        expect(mockDatabaseRemove).toHaveBeenCalledTimes(1);
    });
    it('should check exit route 404 status', async () => {
        await request(server.app).post('/exit?ticketId=1')
        .expect(404);
    });

})