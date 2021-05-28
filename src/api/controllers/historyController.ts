import express, {Request, Response, NextFunction} from "express";
import { History, Result } from "../../core/models";
import { historyService } from "../../core/services";
import { validationHandler } from "../../utils/middlewares";
import { createHistorySchema, updateHistorySchema } from "../../utils/schemas";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {

    const paginationParams: object = {
        req_page: req.query.page || '1',
        req_limit: req.query.limit || '10'
    }

    historyService.listAllHistory(paginationParams).then((result: Result) => {
        res.status(200).json({
            "message": "List of Histories",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    })
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    historyService.getOneHistory(id).then(( result: History) => {
        res.status(200).json({
            "message": "One History",
            "data": result
        })
    }).catch((error: Error) => {
        next(error)
    });
});

router.post('/', validationHandler(createHistorySchema), (req: Request, res: Response, next: NextFunction) => {
    
    const data: History = {
        description: req.body.description,
        date: req.body.date,
    }

    historyService.createHistory(data).then((result: History) => {
        res.status(201).json({
            message: "History created",
            "data": result
        })
    }).catch( (error: Error) =>{
        next(error);
    });
});

router.put('/:id', validationHandler(updateHistorySchema), (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    const data = req.body;
    
    historyService.updateHistory(id, data).then((result: History) => {
        res.status(200).json({
            "message": "History updated",
            "data": result
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

