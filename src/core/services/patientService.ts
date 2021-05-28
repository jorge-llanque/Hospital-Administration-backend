import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { joinFields, Entity, paginatedResults, Result, Patient } from "../models";


export const listAllPatient = async (dateOfBirth: string, name: string, lastname: string, paginatedParams: any): Promise<Result> => {
    try {
        const result = await getListData(Entity.PATIENT);
        return paginatedResults(result, paginatedParams.req_page, paginatedParams.req_limit);

    } catch (error) {
        return error;
    }
};

export const getOnePatient = async (id: string): Promise<Patient> => {
    try {
        return await getOneData(Entity.PATIENT, id);
    } catch (error) {
        return error;
    }
};

export const getAppointments = async (id: string, paginatedParams: any): Promise<any> => {
    try {
        const listReq = {
            id: id,
            isDoctor: false,
            isPatient: true
        }
        const result = await getListData(Entity.APPOINTMENT, undefined, listReq );
        return paginatedResults(result, paginatedParams.req_page, paginatedParams.req_limit);
        
    } catch (error) {
        return error;
    }
};

export const createPatient = async (data: object): Promise<Patient> => {
    try {
        const info = joinFields(data);
        return await insertData(Entity.PATIENT, info);
    } catch (error) {
        return error;
    }
};

export const updatePatient = async (id: string, data: object): Promise<Patient> => {
    try {
        return await updateData(Entity.PATIENT, id, data);
    } catch (error) {
        return error;
    }
};

export const removePatient = async (id: string) => {
    try {
        await deleteData(Entity.PATIENT, id);
    } catch (error) {
        return error;
    }
}
