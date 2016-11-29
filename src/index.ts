import { App } from './App';

const port = process.env.PORT || 8080;
const app = new App();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
