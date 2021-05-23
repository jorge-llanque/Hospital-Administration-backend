import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { joinFields } from "../models";

const entity: string = "Hospital"

export const listAllHospital = async (date_start?:string, date_end?:string, name?:string): Promise<any> => {
    try {
        if(date_start || date_end || name){
            return await getListData(entity, date_start, date_end, name);
        }
        return await getListData(entity);
    } catch (error) {
        return error;
    }
};

export const getOneHospital = async (id: string): Promise<any> => {
    try {
        return await getOneData(entity, id);
    } catch (error) {
        return error;
    }
};

export const createHospital = async (name: string, created: string): Promise<any> => {
    try {
        const data = joinFields({name, created});
        return await insertData(entity, data);
    } catch (error) {
        return error;
    }
};

export const updateCategory = async (id: string, name: string): Promise<any> => {
    try {
        return await updateData(entity, id, {name});
    } catch (error) {
        return error;
    }
};

export const removeHospital = async (id: string): Promise<any> => {
    try {
        await deleteData(entity, id);
    } catch (error) {
        return error;
    }
}
