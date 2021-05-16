import express from "express";
import morgan from "morgan";
import "reflect-metadata";
import apiRoutes from "./routes";

export default () => {
    
    const app = express();
    app.use(express.json());
    app.use(morgan('combined'));

    // apiRoutes(app);

    return app;
}