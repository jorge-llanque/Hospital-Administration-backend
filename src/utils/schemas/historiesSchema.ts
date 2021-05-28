import Joi from "@hapi/joi";

export const historyIdSchema = Joi.string().max(36);
const historyDescriptionSchema = Joi.string().min(3).max(50);
const historyDateSchema = Joi.date().greater('1-1-1900').less('now');

export const createHistorySchema = {
    description: historyDescriptionSchema.required(),
    date: historyDateSchema.required()
}
export const updateHistorySchema = {
    description: historyDescriptionSchema,
    date: historyDateSchema
}