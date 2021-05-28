import boom from "@hapi/boom";

function withErrorStack(error: any, stack: any){
    
}

export function errorHandler(err: any, req: any, res: any, next: any){
    const {output: {statusCode, payload}} = err;
    res.status(statusCode);
    res.json(withErrorStack(payload, err.stack));
}