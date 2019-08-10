import * as HTTP from 'http';
import app  from './config/app'
const port = 8080;

HTTP.createServer(app).listen( port, () => console.log(`Server started at port ${port}`))