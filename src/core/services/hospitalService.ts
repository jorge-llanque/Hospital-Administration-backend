import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { generateId } from "../models";

const entity: string = "Hospital"

export const listAllHospital = async (): Promise<any> => {
    try {
        return await getListData("");
    } catch (error) {
        return error;
    }
};

export const getOneHospital = async (id: string): Promise<any> => {
    try {
        return await getOneData(id);
    } catch (error) {
        return error;
    }
};

export const createHospital = async (name: string): Promise<any> => {
    try {
        const id = generateId();
        return await insertData(id, name);
    } catch (error) {
        return error;
    }
};

export const updateCategory = async (id: string, name: string): Promise<any> => {
    try {
        return await updateData(id, name);
    } catch (error) {
        return error;
    }
};

export const removeHospital = async (id: string): Promise<any> => {
    try {
        await deleteData(id);
    } catch (error) {
        return error;
    }
}
