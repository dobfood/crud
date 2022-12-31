import express from 'express';
import cors from 'cors';
import DBconnect from './src/DBconnect.js';
import bodyParser from 'body-parser'
import router from './src/router/member_router.js';
import eventRouter from './src/router/event_router.js';
import routerParticipation from './src/router/participation_router.js';
const app = express();
const PORT = 8000;
const db = new DBconnect();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/members",router)
app.use("/api/events",eventRouter)
app.use("/api/participants",routerParticipation)
db.connect()
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err.message);
    });
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
