import { connectDB } from "./DB/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 3000;

connectDB()
  .then(
    app.listen(port, () => {
      console.log(`Server is running on Port:${port}`);
    })
  )
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
