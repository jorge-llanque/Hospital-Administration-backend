import hospitals from "../../utils/mocks/hospitals";

export const getListData = async () => {
    try {
        return await hospitals
    } catch (error) {
        return error;
    }
}

export const getOneData = async (id: string) => {
    try {
        let result = await hospitals.find((data) => data.id === id);
        return result;
    } catch (error) {
        return error;
    }
}