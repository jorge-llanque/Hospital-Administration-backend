import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
const  entity: string = "Doctor";

export const listAllDoctor = async (): Promise<any> => {
    try {
        return await getListData(entity);
    } catch (error) {
        return error;
    }
};