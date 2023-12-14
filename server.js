import app from './src/app.js';
const port = process.env.DEV_APP_PORT || 3055;

const server = app.listen(port, () => {
  console.log(`Server start with port: ${port}`);
});
