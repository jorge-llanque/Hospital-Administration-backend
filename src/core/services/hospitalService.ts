import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { Entity, Hospital, joinFields, paginatedResults, Result } from "../models";


export const listAllHospital = async (filterParams: object, paginatedParams: any): Promise<Result> => {
    try {
        
        const result = await getListData(Entity.HOSPITAL, filterParams);

        return paginatedResults(result, paginatedParams.req_page, paginatedParams.req_limit);

    } catch (error) {
        return error;
    }
};

export const getOneHospital = async (id: string): Promise<Hospital> => {
    try {
        const result: Hospital = await getOneData(Entity.HOSPITAL, id);
        return result;

    } catch (error) {
        return error;
    }
};

export const createHospital = async (name: string, created: string): Promise<Hospital> => {
    try {
        const data = joinFields({name, created});
        return await insertData(Entity.HOSPITAL, data);
    } catch (error) {
        return error;
    }
};

export const updateHospital = async (id: string, name: string): Promise<Hospital> => {
    try {
        const data = await updateData(Entity.HOSPITAL, id, {name});
        return data
    } catch (error) {
        return error;
    }
};

export const removeHospital = async (id: string) => {
    try {
        await deleteData(Entity.HOSPITAL, id);
    } catch (error) {
        return error;
    }
}
