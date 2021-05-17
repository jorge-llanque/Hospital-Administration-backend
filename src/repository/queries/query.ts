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

export const insertData = async (id: string, name: string) => {
    try {
        await hospitals.push({id: id, name: name});
        return hospitals
    } catch (error) {
        return error;
    }
}

export const updateData = async (id: string, name: string) => {
    try {
        let result = await hospitals.find((data) => {
            if(data.id === id){
                data.name = name;
            }
            return data;
        });
        return result
    } catch (error) {
        return error;        
    }
}

export const deleteData = async (id: string) => {
    try {

        let idx = await hospitals.findIndex((data) => data.id === id);
        await hospitals.splice(idx, 1);

    } catch (error) {
        return error;        
    }
}