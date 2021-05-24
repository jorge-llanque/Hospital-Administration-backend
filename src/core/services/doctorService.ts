import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { joinFields, Entity } from "../models";


export const listAllDoctor = async (): Promise<any> => {
    try {
        return await getListData(Entity.DOCTOR);
    } catch (error) {
        return error;
    }
};

export const getOneDoctor = async (id: string): Promise<any> => {
    try {
        return await getOneData(Entity.DOCTOR, id);
    } catch (error) {
        return error;
    }
};

export const createDoctor = async (data: object): Promise<any> => {
    try {
        const info = joinFields(data);
        return await insertData(Entity.DOCTOR, info);
    } catch (error) {
        return error;
    }
};

export const updateDoctor = async (id: string, data: object): Promise<any> => {
    try {
        return await updateData(Entity.DOCTOR, id, data);
    } catch (error) {
        return error;
    }
};

export const removeDoctor = async (id: string): Promise<any> => {
    try {
        await deleteData(Entity.DOCTOR, id);
    } catch (error) {
        return error;
    }
}
