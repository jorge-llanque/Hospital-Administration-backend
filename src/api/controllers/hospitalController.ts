import express, { Request, Response, NextFunction } from "express";
import { Hospital, Result } from "../../core/models";
import { hospitalService } from "../../core/services";
import { validationHandler } from "../../utils/middlewares";
import { createHospitalSchema, updateHospitalSchema } from "../../utils/schemas";

const router = express.Router();

router.post('/', validationHandler(createHospitalSchema), (req: Request, res: Response, next: NextFunction) => {
    const {name, created} = req.body;

    hospitalService.createHospital(name, created).then((result: Hospital) => {
        res.status(201).json({
            message: "Hospital created",
            "data": result
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
    
    const paginationParams = {
        req_page: req.query.page || '1',
        req_limit: req.query.limit || '10'
    }

    hospitalService.listAllHospital(filterParams, paginationParams).then((results: Result)=> {
        res.status(200).json({
            "message": "List Hospitals",
            "data": results
        })
    }).catch((error: Error)=> {
        next(error);
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    hospitalService.getOneHospital(id).then((result: Hospital) => {
        if(!result){
            throw new Error("There is not data")
        }
        res.status(200).json({
            "message": "One Hospital",
            "data": result
        })
    
    }).catch((error: Error) => {
        next(error)
    });
});

router.put('/:id', validationHandler(updateHospitalSchema), (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    const {name} = req.body;

    hospitalService.updateHospital(id, name).then((result: Hospital) => {
        res.status(200).json({
            "message": "Hospital updated",
            "data": result
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