import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
});

connectDB()
.then(() => {
    const PORT = process.env.PORT || 8000; // Use the PORT environment variable
    app.listen(PORT, () => {
        console.log(`Server is running at Port: ${PORT}`); // Log the correct port
    });
})
.catch((err) => {
    console.log("Mongo Connection Failed!!!", err);
});
