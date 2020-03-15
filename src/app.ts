import express, {Request, Response, NextFunction} from "express";

const app = express();
const mongoose = require('mongoose');

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
});

async function start() {
    try {
        await mongoose.connect('mongodb+srv://inna:tim12345@cluster0-mrmak.mongodb.net/users',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            });
        app.listen(3000, function () {
            console.log('server is listening on 3000 port')
        });

    } catch (error) {
        console.log(error)
    }
}

start();
