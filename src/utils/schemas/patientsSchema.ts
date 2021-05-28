import Joi from "@hapi/joi";

const patientIdSchema = Joi.string().max(36);
const patientFirstnameSchema = Joi.string().min(3).max(50);
const patientLastnameSchema = Joi.string().min(3).max(50);
const patientEmailSchema = Joi.string().email();
const patientGenderSchema = Joi.string().max(6);
const patientPhoneSchema = Joi.string().min(7).max(15);
const patientAddressSchema = Joi.string().max(100);
const patientBirthdaySchema = Joi.date().greater('1-1-1900').less('now');
const patientAvatarSchema = Joi.string();

export const createPatientSchema = {
    first_name: patientFirstnameSchema.required(),
    last_name: patientLastnameSchema.required(),
    email: patientEmailSchema.required(),
    gender: patientGenderSchema.required(),
    phone: patientPhoneSchema.required(),
    address: patientAddressSchema.required(),
    birthday: patientBirthdaySchema.required(),
    avatar: patientAvatarSchema.required()
}
export const updatePatientSchema = {
    first_name: patientFirstnameSchema,
    last_name: patientLastnameSchema,
    email: patientEmailSchema,
    gender: patientGenderSchema,
    address: patientAddressSchema,
    phone: patientPhoneSchema,
    birthday: patientBirthdaySchema,
    avatar: patientAvatarSchema
}