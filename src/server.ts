import { app } from ".";

const port = process.env.API_PORT;

app.listen(port, () => {
  console.log("🚀 SERVER NA ATIVA 💻🤖.");
});
