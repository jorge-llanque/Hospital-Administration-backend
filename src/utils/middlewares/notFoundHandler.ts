import boom from "@hapi/boom";

export default function notFoundHandler(req: any, res: any){
    const {output: {statusCode, payload}} = boom.notFound();
    res.status(statusCode).json(payload);
}