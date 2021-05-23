import express, {Request, Response, NextFunction} from "express";
import { appointmentService } from "../../core/services";

const router = express.Router();


router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const {param} = req.body;
    appointmentService.listAllAppointment(id, param).then((data: any) => {
        res.status(200).json({
            "message": "List of appointments",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    });
});

export default router;

