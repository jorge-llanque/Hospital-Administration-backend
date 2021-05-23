import express, { Request, Response, NextFunction } from "express";
import { hospitalService } from "../../core/services";

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const {name} = req.body;

    hospitalService.createHospital(name).then((data: any) => {
        res.status(201).json({
            message: "Hospital created",
            "data": data
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    
    const {date, name} = req.body;
    
    hospitalService.listAllHospital(date, name).then((list: [])=> {
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

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const {name} = req.body;
    hospitalService.updateCategory(id, name).then((data: any) => {
        res.status(200).json({
            "message": "Category updated",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    hospitalService.removeHospital(id).then(() => {
        res.status(200).json({
            "message": "Hospital Removed"
        })
    }).catch((error: Error) => {
        next(error);
    })
})


export default router;