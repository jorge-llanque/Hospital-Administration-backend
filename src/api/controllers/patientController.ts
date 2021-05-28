import express, {Request, Response, NextFunction} from "express";
import { Result, Patient } from "../../core/models";
import { patientService } from "../../core/services";
import { validationHandler } from "../../utils/middlewares";
import { createPatientSchema, updatePatientSchema } from "../../utils/schemas";



const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    
    const {dateOfBirth, name, lastname} = req.body;

    const paginationParams: object = {
        req_page: req.query.page || '1',
        req_limit: req.query.limit || '10'
    }

    patientService.listAllPatient(dateOfBirth, name, lastname, paginationParams).then((result: Result) => {
        res.status(200).json({
            "message": "List of Patients",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    
    patientService.getOnePatient(id).then((result: Patient) => {
        res.status(200).json({
            "message": "One Patient",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.get('/:id/appointments', (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;

    const paginationParams: object = {
        req_page: req.query.page || '1' ,
        req_limit: req.query.limit || '10'
    }
    
    patientService.getAppointments(id, paginationParams).then((result: Result) => {
        res.status(200).json({
            "message": "My appointments",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.post('/', validationHandler(createPatientSchema), (req: Request, res: Response, next: NextFunction) => {
    
    const data: Patient = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
        birthday: req.body.birthday,
        avatar: req.body.image
    }

    patientService.createPatient(data).then(( result: Patient) => {
        res.status(201).json({
            message: "Patient created",
            "data": result
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.put('/:id', validationHandler(updatePatientSchema), (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    const data = req.body;
    
    patientService.updatePatient(id, data).then((result: Patient) => {
        res.status(200).json({
            "message": "Patient updated",
            "data": result
        })
    }).catch((error: Error) => {
        next(error);
    })
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    
    patientService.removePatient(id).then(() => {
        res.status(200).json({
            "message": "Patient Removed"
        })
    }).catch((error: Error) => {
        next(error);
    })
})

export default router;

