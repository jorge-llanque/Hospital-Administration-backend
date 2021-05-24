import express, {Request, Response, NextFunction} from "express";
import { doctorService } from "../../core/services";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {

    const paginationParams: object = {
        req_page: req.query.page,
        req_limit: req.query.limit
    }

    doctorService.listAllDoctor(paginationParams).then((data: any) => {
        res.status(200).json({
            "message": "List of Doctors",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    
    doctorService.getOneDoctor(id).then((data: any) => {
        res.status(200).json({
            "message": "One Doctor",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.get('/:id/appointments', (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    
    const paginationParams: object = {
        req_page: req.query.page,
        req_limit: req.query.limit
    }

    doctorService.getAppointments(id, paginationParams).then((data: any) => {
        res.status(200).json({
            "message": "My appointments",
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
        address: req.body.address,
        phone: req.body.phone,
        birthday: req.body.birthday,
        avatar: req.body.image
    }

    doctorService.createDoctor(data).then((data: any) => {
        res.status(201).json({
            message: "Doctor created",
            "data": data
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
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

