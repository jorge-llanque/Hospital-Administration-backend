import express, { Request, Response, NextFunction } from "express";
import { hospitalService } from "../../core/services";
import { validationHandler } from "../../utils/middlewares";
import { createHospitalSchema, updateHospitalSchema } from "../../utils/schemas";

const router = express.Router();

router.post('/', validationHandler(createHospitalSchema), (req: Request, res: Response, next: NextFunction) => {
    const {name, created} = req.body;

    hospitalService.createHospital(name, created).then((data: any) => {
        res.status(201).json({
            message: "Hospital created",
            "data": data
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    
    const filterParams: object = {
        date_start: req.query.date_start,
        date_end: req.query.date_end,
        name: req.query.name
    };
    
    const paginationParams: object = {
        req_page: req.query.page || 1 ,
        req_limit: req.query.limit || 10
    }
    hospitalService.listAllHospital(filterParams, paginationParams).then((list: [])=> {
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

router.put('/:id', validationHandler(updateHospitalSchema), (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    const {name} = req.body;

    hospitalService.updateHospital(id, name).then((data: any) => {
        res.status(200).json({
            "message": "Hospital updated",
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