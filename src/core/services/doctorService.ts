import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
import { joinFields, Entity, paginatedResults } from "../models";


export const listAllDoctor = async (paginatedParams: any): Promise<any> => {
    try {
        const result = await getListData(Entity.DOCTOR);
        return paginatedResults(result, paginatedParams.req_page, paginatedParams.req_limit);

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

export const getAppointments = async (id: string, paginatedParams: any): Promise<any> => {
    try {
        const listReq = {
            id: id,
            isDoctor: true,
            isPatient: false
        }
        const result = await getListData(Entity.APPOINTMENT, undefined, listReq );
        return paginatedResults(result, paginatedParams.req_page, paginatedParams.req_limit);

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
