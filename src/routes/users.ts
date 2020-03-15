import express, {Request, Response} from "express";
import User from '../models/users'
import {UserInterface} from "../models/users";

const router = express.Router();

router.get('/users', async (request: Request, response: Response) => {
    await User.find((err: string, users: UserInterface) => {
        if (err) {
            response.send("Error");
        } else {
            response.send(users);
        }
    });
});

router.get('/user/:id', async (request:Request, response:Response)=>{
    await User.findById(request.params.id, (err: string, user: UserInterface) => {
        if (err) {
            response.send(err);
        } else {
            response.send(user);
        }
    });
});

router.post('/user', async (request: Request, response: Response) => {
    const user: UserInterface = new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        address: {
            street: request.body.address.street,
            city: request.body.address.city
        }
    });
    await user.save((err: string) => {
        if (err) {
            response.send(err);
        } else {
            response.send(user);
        }
    });
});
module.exports = router;
