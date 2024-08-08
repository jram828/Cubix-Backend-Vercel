import { server } from "./server.js";
import { envs } from "./src/config/enviroments/enviroments.js";

import { models } from "./DB.js";

const { conn } = models;

conn
  .sync({ alter: true })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => console.error("Unable to synchronize the database:", error));

server.listen(envs.PORT, () => {
  console.log(`Server listening on port ${envs.PORT}`);
});
