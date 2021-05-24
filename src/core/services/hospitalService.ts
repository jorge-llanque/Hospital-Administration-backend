import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { Entity, joinFields } from "../models";


export const listAllHospital = async (filterParams: object): Promise<any> => {
    try {

        return await getListData(Entity.HOSPITAL, filterParams);

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

export const updateCategory = async (id: string, name: string): Promise<any> => {
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
