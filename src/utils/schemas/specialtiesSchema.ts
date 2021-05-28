import Joi from "@hapi/joi";

const specialtyIdSchema = Joi.string().max(36);
const specialtyNameSchema = Joi.string().min(3).max(50);
const specialtyDescriptionSchema = Joi.string().min(10);
const specialtyAvatarSchema = Joi.string();

export const createSpecialtySchema = {
    name: specialtyNameSchema.required(),
    description: specialtyDescriptionSchema.required(),
    avatar: specialtyAvatarSchema.required()
}
export const updateSpecialtySchema = {
    name: specialtyNameSchema,
    description: specialtyDescriptionSchema,
    avatar: specialtyAvatarSchema
}