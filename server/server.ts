import * as express from 'express';
import * as cors from 'cors';
import { getJsonFile } from './get-json-file';

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.route('/').get(getJsonFile);

const httpServer:any = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});