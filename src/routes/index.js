import express from "express";
import axios from "axios";

const apiRouter = express.Router();

// Middleware to parse request bodies
apiRouter.use(express.urlencoded({ extended: true }));
apiRouter.use(express.json());

// Route handler for GET request to "/"
apiRouter.get("/", async (req, res) => {
    try {
        const apiResponse = await axios.get("https://emojihub.yurace.pro/api/random");
        res.render("index.ejs", { response: apiResponse.data });
    } catch (error) {
        console.error("There is an error:", error);
        res.status(500).send("An error occurred while fetching data.");
    }
});

export default apiRouter;
