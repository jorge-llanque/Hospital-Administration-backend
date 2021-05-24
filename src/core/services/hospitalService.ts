import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { Entity, joinFields, paginatedResults } from "../models";


export const listAllHospital = async (filterParams: object, paginatedParams: any): Promise<any> => {
    try {

        const result = await getListData(Entity.HOSPITAL, filterParams);

        return paginatedResults(result, paginatedParams.req_page, paginatedParams.req_limit);

    } catch (error) {
        return error;
    }
};

export const getOneHospital = async (id: string): Promise<any> => {
    try {
        return await getOneData(Entity.HOSPITAL, id);
    } catch (error) {
        return error;
    }
};

export const createHospital = async (name: string, created: string): Promise<any> => {
    try {
        const data = joinFields({name, created});
        return await insertData(Entity.HOSPITAL, data);
    } catch (error) {
        return error;
    }
};

export const updateHospital = async (id: string, name: string): Promise<any> => {
    try {
        return await updateData(Entity.HOSPITAL, id, {name});
    } catch (error) {
        return error;
    }
};

export const removeHospital = async (id: string): Promise<any> => {
    try {
        await deleteData(Entity.HOSPITAL, id);
    } catch (error) {
        return error;
    }
}
