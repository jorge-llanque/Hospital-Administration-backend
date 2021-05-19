import express, {Request, Response, NextFunction} from "express";
import { specialtyService } from "../../core/services";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    specialtyService.listAllSpecialty().then((data: any) => {
        res.status(200).json({
            "message": "List of Specialties",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    specialtyService.getOneSpecialty(id).then((data: any) => {
        res.status(200).json({
            "message": "One Specialty",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const data: object = {
        name: req.body.name,
        description: req.body.description,
        avatar: req.body.avatar
    }

    specialtyService.createSpecialty(data).then((data: any) => {
        res.status(201).json({
            message: "Specialty created",
            "data": data
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const data = req.body;
    
    specialtyService.updateSpecialty(id, data).then((data: any) => {
        res.status(200).json({
            "message": "Specialty updated",
            "data": data
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

