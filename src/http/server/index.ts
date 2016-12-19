import { App } from './../app/App';

const app = new App();
app.connectToMongo();
app.listen(8080);
