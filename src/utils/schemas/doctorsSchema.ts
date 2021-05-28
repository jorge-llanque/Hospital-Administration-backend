import Joi from "@hapi/joi";

const doctorIdSchema = Joi.string().max(36);
const doctorFirstnameSchema = Joi.string().min(3).max(50);
const doctorLastnameSchema = Joi.string().min(3).max(50);
const doctorEmailSchema = Joi.string().email();
const doctorGenderSchema = Joi.string().max(6);
const doctorAddressSchema = Joi.string().max(100);
const doctorPhoneSchema = Joi.string().min(7).max(15);
const doctorBirthdaySchema = Joi.date().greater('1-1-1900').less('now');
const doctorAvatarSchema = Joi.string();

export const createDoctorSchema = {
    first_name: doctorFirstnameSchema.required(),
    last_name: doctorLastnameSchema.required(),
    email: doctorEmailSchema.required(),
    gender: doctorGenderSchema.required(),
    address: doctorAddressSchema.required(),
    phone: doctorPhoneSchema.required(),
    birthday: doctorBirthdaySchema.required(),
    avatar: doctorAvatarSchema.required()
}
export const updateDoctorSchema = {
    first_name: doctorFirstnameSchema,
    last_name: doctorLastnameSchema,
    email: doctorEmailSchema,
    gender: doctorGenderSchema,
    address: doctorAddressSchema,
    phone: doctorPhoneSchema,
    birthday: doctorBirthdaySchema,
    avatar: doctorAvatarSchema
}