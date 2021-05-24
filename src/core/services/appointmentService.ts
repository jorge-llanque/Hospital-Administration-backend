import { getListData, getOneData, insertData, updateData, deleteData } from "../../repository/queries/query";
const  entity: string = "Appointment";


export const listAllAppointment = async (id: string, param: string): Promise<any> => {
    try {
        if(param === "doctor"){
            return await getListData(entity, undefined,undefined , undefined, id, "doctor");
        }
        if(param === "patient"){
            return await getListData(entity, undefined,undefined , undefined, id, "patient");
        }
    } catch (error) {
        return error;
    }
};