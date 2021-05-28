import express, {Request, Response, NextFunction} from "express";
import { Doctor, Result } from "../../core/models";
import { doctorService } from "../../core/services";
import { validationHandler } from "../../utils/middlewares";
import { createDoctorSchema, updateDoctorSchema } from "../../utils/schemas";


const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {

    const paginationParams: object = {
        req_page: req.query.page || '1',
        req_limit: req.query.limit || '10'
    }

    doctorService.listAllDoctor(paginationParams).then((result: Result) => {
        res.status(200).json({
            "message": "List of Doctors",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    doctorService.getOneDoctor(id).then((result: Doctor) => {
        if(!result){
            throw new Error("There is not data")
        }
        res.status(200).json({
            "message": "One Doctor",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.get('/:id/appointments', (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    
    const paginationParams: object = {
        req_page: req.query.page || '1',
        req_limit: req.query.limit || '10'
    }

    doctorService.getAppointments(id, paginationParams).then((result: Result) => {
        res.status(200).json({
            "message": "My appointments",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.post('/', validationHandler(createDoctorSchema), (req: Request, res: Response, next: NextFunction) => {
    const data: Doctor = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        address: req.body.address,
        phone: req.body.phone,
        birthday: req.body.birthday,
        avatar: req.body.image
    }

    doctorService.createDoctor(data).then((result: Doctor) => {
        res.status(201).json({
            message: "Doctor created",
            "data": result
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.put('/:id',validationHandler(updateDoctorSchema), (req: Request, res: Response, next: NextFunction) => {

    const {id} = req.params;
    const data = req.body;
    
    doctorService.updateDoctor(id, data).then((data: any) => {
        res.status(200).json({
            "message": "Doctor updated",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    doctorService.removeDoctor(id).then(() => {
        res.status(200).json({
            "message": "Doctor Removed"
        })
    }).catch((error: Error) => {
        next(error);
    })
})

export default router;

