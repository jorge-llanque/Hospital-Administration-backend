import express, {Request, Response, NextFunction} from "express";
import { patientService } from "../../core/services";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    const {dateOfBirth, name, lastname} = req.body;

    patientService.listAllPatient(dateOfBirth, name, lastname).then((data: any) => {
        res.status(200).json({
            "message": "List of Patients",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    patientService.getOnePatient(id).then((data: any) => {
        res.status(200).json({
            "message": "One Patient",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const data: object = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
        birthday: req.body.birthday,
        avatar: req.body.image
    }

    patientService.createPatient(data).then((data: any) => {
        res.status(201).json({
            message: "Patient created",
            "data": data
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const data = req.body;
    
    patientService.updatePatient(id, data).then((data: any) => {
        res.status(200).json({
            "message": "Patient updated",
            "data": data
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

