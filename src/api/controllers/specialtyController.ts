import express, {Request, Response, NextFunction} from "express";
import { Result, Specialty } from "../../core/models";
import { specialtyService } from "../../core/services";
import { validationHandler } from "../../utils/middlewares";
import { createSpecialtySchema, updateSpecialtySchema } from "../../utils/schemas";


const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {

    const paginationParams: object = {
        req_page: req.query.page || '1',
        req_limit: req.query.limit || '10'
    }

    specialtyService.listAllSpecialty(paginationParams).then((result: Result) => {
        res.status(200).json({
            "message": "List of Specialties",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    specialtyService.getOneSpecialty(id).then((result: Specialty) => {
        res.status(200).json({
            "message": "One Specialty",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.post('/', validationHandler(createSpecialtySchema), (req: Request, res: Response, next: NextFunction) => {
    
    const data: Specialty = {
        name: req.body.name,
        description: req.body.description,
        avatar: req.body.avatar
    }

    specialtyService.createSpecialty(data).then((result: Specialty) => {
        res.status(201).json({
            message: "Specialty created",
            "data": result
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.put('/:id', validationHandler(updateSpecialtySchema), (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    const data = req.body;
    
    specialtyService.updateSpecialty(id, data).then((result: Specialty) => {
        res.status(200).json({
            "message": "Specialty updated",
            "data": result
        })
    }).catch((error: Error) => {
        next(error);
    })
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    
    specialtyService.removeSpecialty(id).then(() => {
        res.status(200).json({
            "message": "Specialty Removed"
        })
    }).catch((error: Error) => {
        next(error);
    })
})

export default router;