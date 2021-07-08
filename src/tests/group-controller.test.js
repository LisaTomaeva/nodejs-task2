import { jest, test, describe, expect, it, mock } from '@jest/globals'
import { getGroups, getGroupById, createGroup, updateGroup, deleteGroup } from "../services/group";

const controller = require('../controllers/group');

jest.mock('../services/group');

describe("Check methods ", () => {

    beforeEach(() => {
        // Resets the overwritten return values via
        // "callExternalService.mockReturnValue" in the test cases
        jest.resetAllMocks();
      });

    const mockRequest = () => {
        const req = {}
        req.body = jest.fn().mockReturnValue(req)
        req.params = jest.fn().mockReturnValue(req)
        return req
      }
    
    const mockResponse = () => {
        const res = {}
        res.send = jest.fn().mockReturnValue(res)
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        return res
      }

  // CREATE    

  test('CREATE should 200 and return correct value', async () => {
    expect.assertions(3);

    let req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    createGroup.mockReturnValue(new Promise(function(resolve, reject) {
        return resolve("RESOLVED");
    }))
    
    await controller.create(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith('RESOLVED');
  });

  test('CREATE should 404 and return correct value', async () => {
    expect.assertions(2);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    createGroup.mockReturnValue(new Promise(function(resolve, reject) {
        return reject("13123123")
    }))

    // Doesn't work with return
    // done();

    try {
      await controller.create(req, res)
    } catch(e) {
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status).toHaveBeenCalledWith({ message: 'Not Found' });
    }

    // await controller.create(req, res)


    // expect(controller.create(req, res).rejects.toEqual(new Error('Test')))

  });

  //UPDATE

  test('UPDATE should 200 and return correct value', async () => {
    expect.assertions(3);

    let req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    updateGroup.mockReturnValue(new Promise(function(resolve, reject) {
        return resolve("RESOLVED");
    }));
    
    await controller.update(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith('RESOLVED');
  });

  test('UPDATE should 404 and return correct value', async () => {
    expect.assertions(2);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    updateGroup.mockReturnValue(new Promise(function(resolve, reject) {
        return reject("13123123")
    }));

    try {
      return await controller.update(req, res)
    } catch {
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status).toHaveBeenCalledWith({ message: 'Not Found' });
    }
  });
});