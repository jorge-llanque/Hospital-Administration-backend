import { v4 as uuidv4 } from 'uuid';

const generateId = () => {
    return uuidv4();
};

export const joinFields = (data: any) => {
    return {
        id: generateId(),
        ...data
    }
}

export enum Entity {
    HOSPITAL = "hospitals",
    DOCTOR = "doctors",
    PATIENT = "patients",
    HISTORY = "histories",
    SPECIALTY = "specialties"
}