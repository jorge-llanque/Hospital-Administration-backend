import { getListData, getOneData } from "../../repository/queries/query";

const entity: string = "Hospital"

export const listAllHospital = async (): Promise<any> => {
    try {
        return await getListData();
    } catch (error) {
        return error
    }
};

export const getOneHospital = async (id: string): Promise<any> => {
    try {
        return await getOneData(id);
    } catch (error) {
        return error;
    }
}