import express, {Request, Response, NextFunction} from "express";
import { historyService } from "../../core/services";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    historyService.listAllHistory().then((data: any) => {
        res.status(200).json({
            "message": "List of Histories",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    historyService.getOneHistory(id).then((data: any) => {
        res.status(200).json({
            "message": "One History",
            "data": data
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const data: object = {
        description: req.body.description,
        date: req.body.date,
    }

    historyService.createHistory(data).then((data: any) => {
        res.status(201).json({
            message: "History created",
            "data": data
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const data = req.body;
    
    historyService.updateHistory(id, data).then((data: any) => {
        res.status(200).json({
            "message": "History updated",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    historyService.removeHistory(id).then(() => {
        res.status(200).json({
            "message": "History Removed"
        })
    }).catch((error: Error) => {
        next(error);
    })
})

export default router;

