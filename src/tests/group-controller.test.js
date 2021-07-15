import { jest, test, describe, expect, it, mock } from '@jest/globals'
import { getGroups, getGroupById, createGroup, updateGroup, deleteGroup } from "../services/group";

const controller = require('../controllers/group');

jest.mock('../services/group');

describe("Check methods ", () => {

    beforeEach(() => {
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

  test('CREATE should 500 and return correct value', async () => {
    expect.assertions(2);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    createGroup.mockReturnValue(new Promise(function(resolve, reject) {
        return reject({message: "error"});
    }))

    await controller.create(req, res)

    //doesn't wait for promise rejection without timeout function
    await new Promise((r) => setTimeout(r, 2000));

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(500);

  });

  //UPDATE

  test('UPDATE should 200 and return correct value', async () => {
    expect.assertions(3);

    let req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    updateGroup.mockReturnValue(new Promise(function(resolve, reject) {
      return resolve(1);
    }));
    
    await controller.update(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith({"message": "Group was updated successfully!"});
  });

  test('UPDATE failed with an error message "Cannot update Group data"', async () => {
    expect.assertions(3);

    let req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    updateGroup.mockReturnValue(new Promise(function(resolve, reject) {
      return resolve();
    }));
    
    await controller.update(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith({message: "Cannot update Group data with id=1!"});
  });

  test('UPDATE should 500 and return correct value', async () => {
    expect.assertions(2);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    updateGroup.mockReturnValue(new Promise(function(resolve, reject) {
        return reject({message: "error"});
    }));

    await controller.update(req, res);
    
    //doesn't wait for promise rejection without timeout function
    await new Promise((r) => setTimeout(r, 2000));

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(500);
  });

  //FINDALL

  test('FINDALL should 200 and return correct value', async () => {
    expect.assertions(3);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    getGroups.mockReturnValue(new Promise(function(resolve, reject) {
        return resolve('data');
    }));

    await controller.findAll(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith("data");
  });

  test('FINDALL should 500 and return correct value', async () => {
    expect.assertions(2);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    getGroups.mockReturnValue(new Promise(function(resolve, reject) {
        return reject({message: 'error'});
    }));

    await controller.findAll(req, res);

    //doesn't wait for promise rejection without timeout function
    await new Promise((r) => setTimeout(r, 2000));

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(500);
  });

  //FINEONE

  test('FINDONE should 200 and return correct value', async () => {
    expect.assertions(3);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    getGroupById.mockReturnValue(new Promise(function(resolve, reject) {
        return resolve('data');
    }));

    await controller.findOne(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith("data");
  });

  test('FINDONE should 500 and return correct value', async () => {
    expect.assertions(2);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    getGroupById.mockReturnValue(new Promise(function(resolve, reject) {
        return reject({message: 'error'});
    }));

    await controller.findOne(req, res);

    //doesn't wait for promise rejection without timeout function
    await new Promise((r) => setTimeout(r, 2000));

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(500);
  });

  //DELETE

  test('DELETE should 200 and return correct value', async () => {
    expect.assertions(3);

    let req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    deleteGroup.mockReturnValue(new Promise(function(resolve, reject) {
      return resolve(1);
    }));
    
    await controller.delete(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith({"message": "Group was deleted successfully!"});
  });

  test('DELETE failed with an error message "Cannot update Group data"', async () => {
    expect.assertions(3);

    let req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    deleteGroup.mockReturnValue(new Promise(function(resolve, reject) {
      return resolve();
    }));
    
    await controller.delete(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith({message: "Cannot delete Group with id=1.!"});
  });

  test('DELETE should 500 and return correct value', async () => {
    expect.assertions(2);

    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    deleteGroup.mockReturnValue(new Promise(function(resolve, reject) {
        return reject({message: "error"});
    }));

    await controller.delete(req, res);
    
    //doesn't wait for promise rejection without timeout function
    await new Promise((r) => setTimeout(r, 2000));

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(500);
  });
});