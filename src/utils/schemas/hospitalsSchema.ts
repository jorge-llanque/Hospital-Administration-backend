import Joi from "@hapi/joi";

const hospitalIdSchema = Joi.string().max(36);
const hospitalNameSchema = Joi.string().min(3).max(50);
const hospitalCreatedSchema = Joi.date().greater('1-1-1900').less('now');

export const createHospitalSchema = {
    name: hospitalNameSchema.required(),
    created: hospitalCreatedSchema.required()
}
export const updateHospitalSchema = {
    name: hospitalNameSchema,
    created: hospitalCreatedSchema
}
