import app from "./app";
import "dotenv/config";

app.listen(process.env.PORT, () => {
  console.log(`Server listen on localhost:${process.env.PORT}`);
});
