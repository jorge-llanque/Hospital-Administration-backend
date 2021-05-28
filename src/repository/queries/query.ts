import Mocks from "../../utils/mocks";


const compareEntities = (tabla: string) => {
    for (const  [key, value] of Object.entries(Mocks)) {
        if(key == tabla){
            return value
        }
    }
}

const getDataFIlteredByDate = (listData: any, filterParams: any) => {
    let start = new Date(filterParams.date_start);
    let end = new Date(filterParams.date_end);
        
    return listData.filter( (data: any) => {
        let real = new Date(data.created)
        if(real.getTime() >= start.getTime() && real.getTime() <= end.getTime()){
            return data
        };
    });
};

const getDataFilteredByName = (listData: any, filterParams: any) => {
    return listData.filter( (data: any) => {
        let nameFromDB = data.name.toLowerCase();
        if(nameFromDB.includes(filterParams.name.toLowerCase())){
            return data
        }
    })
};

const getAppointmentsFromOwner = (listData: any, listReq: any) => {
    if(listReq.isDoctor){
        return listData.filter((data: any) => {
            if(data.id_doctor == listReq.id){
                return data
            }
        })
    }

    if(listReq.isPatient){
        return listData.filter((data: any) => {
            if(data.id_patient == listReq.id){
                return data
            }
        })
    }
}

export const getListData = async (table: string, filterParams?: any, listReq?: any ) => {
    try {
        let listData: any = await compareEntities(table);

        if(filterParams != undefined){
            
            if(filterParams.date_start && filterParams.date_start != undefined){
                return getDataFIlteredByDate(listData, filterParams)                
            };
            
            if(filterParams.name && filterParams.name != undefined){
                return getDataFilteredByName(listData, filterParams);
            }
        }

        if(listReq != undefined){
            return getAppointmentsFromOwner(listData, listReq);
        }

        return listData;

    } catch (error) {
        return error;
    }
}

export const getOneData = async (table: string, id: string) => {
    try {
        let listData: any = await compareEntities(table);
        const result = listData.find((data: any) => data.id === id);
        
            return result
        
    } catch (error) {
        return error;
    }
}

export const insertData = async (table: string, data: any) => {
    try {
        for (const [key, value] of Object.entries(Mocks)) {
            if(key == table){
                await value.push(data);
                return data
            }
        }
    } catch (error) {
        return error;
    }
}

export const updateData = async (table: string, id: string, newData: object) => {
    try {
        for (const [key, value] of Object.entries(Mocks)) {
            if(key == table){
                await value.forEach((data: any) => {
                    if(data.id == id){
                        Object.assign(data, newData)
                        return data;
                    }
                })
            }
        }
        
    } catch (error) {
        return error;        
    }
}

export const deleteData = async (table: string, id: string) => {
    try {
        let idx
        for (const [key, value] of Object.entries(Mocks)) {
            if(key == table){
                idx = await value.findIndex((data: any) => data.id == id);
                await value.splice(idx, 1);
            }
        }

    } catch (error) {
        return error;        
    }
}