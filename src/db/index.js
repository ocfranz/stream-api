import monk from "monk";
import "dotenv/config";

const db = monk(process.env.MONGO_URI);
db.then(() => {
  console.log("DB connected");
}).catch((err) => {
  console.error(err);
});

export default db;
