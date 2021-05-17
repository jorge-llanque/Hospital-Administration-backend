import express, {Request, Response, NextFunction} from "express";
import { doctorService } from "../../core/services";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    doctorService.listAllDoctor().then((data: any) => {
        res.status(200).json({
            "message": "List of Doctors",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    })
});

export default router;

