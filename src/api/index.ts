import express from "express";
import morgan from "morgan";
import cors from "cors";
import "reflect-metadata";
import apiRoutes from "./routes";
import { logErrors, wrapErrors, errorHandler, notFoundHandler } from "../utils/middlewares";

export default () => {
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(morgan('combined'));

    apiRoutes(app);

    app.use(notFoundHandler);
    app.use(logErrors);
    app.use(wrapErrors);
    app.use(errorHandler);

    return app;
}