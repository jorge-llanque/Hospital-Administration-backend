import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { joinFields, Entity, paginatedResults } from "../models";


export const listAllHistory = async (paginatedParams: any): Promise<any> => {
    try {
        const result = await getListData(Entity.HISTORY);
        return paginatedResults(result, paginatedParams.req_page, paginatedParams.req_limit);

    } catch (error) {
        return error;
    }
};

export const getOneHistory = async (id: string): Promise<any> => {
    try {
        return await getOneData(Entity.HISTORY, id);
    } catch (error) {
        return error;
    }
};

export const createHistory = async (data: object): Promise<any> => {
    try {
        const info = joinFields(data);
        return await insertData(Entity.HISTORY, info);
    } catch (error) {
        return error;
    }
};

export const updateHistory = async (id: string, data: object): Promise<any> => {
    try {
        return await updateData(Entity.HISTORY, id, data);
    } catch (error) {
        return error;
    }
};

export const removeHistory = async (id: string): Promise<any> => {
    try {
        await deleteData(Entity.HISTORY, id);
    } catch (error) {
        return error;
    }
}
