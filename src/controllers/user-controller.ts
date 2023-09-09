import express from 'express';


export const register =  async (req: express.Request, res: express.Response) => {
    const createRequest = req.body as CreateUser;
    
};