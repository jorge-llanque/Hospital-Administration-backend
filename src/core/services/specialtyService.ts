import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { joinFields, Entity, paginatedResults, Result, Specialty } from "../models";


export const listAllSpecialty = async (paginatedParams: any): Promise<Result> => {
    try {
        const result = await getListData(Entity.SPECIALTY);
        return paginatedResults(result, paginatedParams.req_page, paginatedParams.req_limit);

    } catch (error) {
        return error;
    }
};

export const getOneSpecialty = async (id: string): Promise<Specialty> => {
    try {
        return await getOneData(Entity.SPECIALTY, id);
    } catch (error) {
        return error;
    }
};

export const createSpecialty = async (data: object): Promise<Specialty> => {
    try {
        const info = joinFields(data);
        return await insertData(Entity.SPECIALTY, info);
    } catch (error) {
        return error;
    }
};

export const updateSpecialty = async (id: string, data: object): Promise<Specialty> => {
    try {
        return await updateData(Entity.SPECIALTY, id, data);
    } catch (error) {
        return error;
    }
};

export const removeSpecialty = async (id: string) => {
    try {
        await deleteData(Entity.SPECIALTY, id);
    } catch (error) {
        return error;
    }
}
