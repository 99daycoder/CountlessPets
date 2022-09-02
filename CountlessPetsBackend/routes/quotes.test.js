
import { test, expect } from '@jest/globals';
import request from 'supertest';
import app from '../app.js'


describe ('GET request to /quotes',() => {

    test('Status Code: The server should return 200', async () => {
        const response = await request(app).get('/quotes')
        expect(response.status).toEqual(200); 
    })

    test('Payload: Every item in the payload array is an object with the structure { id: ANYNUMBER, category: ANYSTRING, name: ANYSTRING, rating: ANYSTRING, photo: ANYSTRING, address: ANYSTRING, longitude: ANYSTRING, latitude: ANYSTRING, accessible: ANYSTRING, eye: BOOLEAN, hearing: BOOLEAN, brain: BOOLEAN, phone_number: ANYSTRING, web_address: ANYSTRING, opening_times: ANYSTRING} ', async () => {
        const response = await request(app).get('/places');
        const expectedResponseItem = { id: expect.any(Number), catgeory: expect.any(String),  name: expect.any(String), rating: expect.any(String), photo: expect.any(String), address: expect.any(String), longitude: expect.any(String), latitude: expect.any(String), accessible: expect.any(Boolean), eye: expect.any(Boolean), hearing: expect.any(Boolean), brain: expect.any(Boolean), phone_number: expect.any(String), web_address: expect.any(String), opening_times: expect.any(String)};

        for ( let i = 0; i < response.body.payload.length; i++) {
            expect(response.body.payload[i]).toStrictEqual(expectedResponseItem);
        }
    })
})

describe ('GET request to /places/:id', () => {
    test('Successful request: If the database contains the id, return status code 200 and an object of the format { payload: { id: ANYNUMBER, category: ANYSTRING, name: ANYSTRING, rating: ANYSTRING, photo: ANYSTRING, address: ANYSTRING, longitude: ANYSTRING, latitude: ANYSTRING, accessible: ANYSTRING, eye: BOOLEAN, hearing: BOOLEAN, brain: BOOLEAN, phone_number: ANYSTRING, web_address: ANYSTRING, opening_times: ANYSTRING }, success: true }', async () => {
        const expectedBody = {
            
            payload: { 
                id: 10,
                category: expect.any(String),
                name: expect.any(String),
                rating: expect.any(String),
                photo: expect.any(String),
                address: expect.any(String),
                longitude: expect.any(String), 
                latitude: expect.any(String),
                accessible: expect.any(Boolean),
                eye: expect.any(Boolean),
                hearing: expect.any(Boolean),
                brain: expect.any(Boolean),
                phone_number: expect.any(String),
                web_address: expect.any(String), 
                opening_times: expect.any(String)
                },
                success: true,
        };
        const response = await request(app).get('/places/10');
        
        expect(response.status).toEqual(200);
        expect(response.body).toStrictEqual(expectedBody);
    });
})

describe ('DELETE request to /places/:id', () => {

    test('If deleting a place, return status code 200 and an array containing an object structured { payload: { id: ANYNUMBER, category: ANYSTRING, name: ANYSTRING, rating: ANYSTRING, photo: ANYSTRING, address: ANYSTRING, longitude: ANYSTRING, latitude: ANYSTRING, accessible: ANYSTRING, eye: BOOLEAN, hearing: BOOLEAN, brain: BOOLEAN, phone_number: ANYSTRING, web_address: ANYSTRING, opening_times: ANYSTRING }, success: true}, success: true } ', async () => {
        const expectedBody = {
            success: true,
            payload: { 
                id: 30, 
                category: expect.any(String),
                name: expect.any(String),
                rating: expect.any(String),
                photo: expect.any(String),
                address: expect.any(String),
                longitude: expect.any(String), 
                latitude: expect.any(String),
                accessible: expect.any(Boolean),
                eye: expect.any(Boolean),
                hearing: expect.any(Boolean),
                brain: expect.any(Boolean),
                phone_number: expect.any(String),
                web_address: expect.any(String), 
                opening_times: expect.any(String)
                }
        };
        
        const response = await request(app).delete('/places/30')
       
        expect(response.status).toEqual(200);
        expect(response.body).toStrictEqual(expectedBody);
    }); 
}); 

 


