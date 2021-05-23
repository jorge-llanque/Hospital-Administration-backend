import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { joinFields } from "../models";
const  entity: string = "Patient";

export const listAllPatient = async (dateOfBirth: string, name: string, lastname: string): Promise<any> => {
    try {
        if(dateOfBirth || name || lastname)        
        return await getListData(entity, dateOfBirth, name, lastname);
    } catch (error) {
        return error;
    }
};

export const getOnePatient = async (id: string): Promise<any> => {
    try {
        return await getOneData(entity, id);
    } catch (error) {
        return error;
    }
};

export const createPatient = async (data: object): Promise<any> => {
    try {
        const info = joinFields(data);
        return await insertData(entity, info);
    } catch (error) {
        return error;
    }
};

export const updatePatient = async (id: string, data: object): Promise<any> => {
    try {
        return await updateData(entity, id, data);
    } catch (error) {
        return error;
    }
};

export const removePatient = async (id: string): Promise<any> => {
    try {
        await deleteData(entity, id);
    } catch (error) {
        return error;
    }
}
