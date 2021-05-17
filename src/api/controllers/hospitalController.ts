import express, { Request, Response, NextFunction } from "express";
import { hospitalService } from "../../core/services";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    
    hospitalService.listAllHospital().then((list: [])=> {
        res.status(200).json({
            "message": "List Hospitals",
            "data": list
        })
    }).catch((error: Error)=> {
        next(error);
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    hospitalService.getOneHospital(id).then((data: any) => {
        res.status(200).json({
            "message": "One Hospital",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    });
});


export default router;