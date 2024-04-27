import { app } from ".";

const port = process.env.API_PORT;

app.listen(port, () => {
  console.log("api is working!");
});
