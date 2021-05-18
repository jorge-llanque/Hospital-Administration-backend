import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { joinFields } from "../models";
const  entity: string = "History";

export const listAllHistory = async (): Promise<any> => {
    try {
        return await getListData(entity);
    } catch (error) {
        return error;
    }
};

export const getOneHistory = async (id: string): Promise<any> => {
    try {
        return await getOneData(entity, id);
    } catch (error) {
        return error;
    }
};

export const createHistory = async (data: object): Promise<any> => {
    try {
        const info = joinFields(data);
        return await insertData(entity, info);
    } catch (error) {
        return error;
    }
};

export const updateHistory = async (id: string, data: object): Promise<any> => {
    try {
        return await updateData(entity, id, data);
    } catch (error) {
        return error;
    }
};

export const removeHistory = async (id: string): Promise<any> => {
    try {
        await deleteData(entity, id);
    } catch (error) {
        return error;
    }
}
