import doctors from "../../utils/mocks/doctors";
import hospitals from "../../utils/mocks/hospitals";
import patients from "../../utils/mocks/patients";
import histories from "../../utils/mocks/histories";
import specialties from "../../utils/mocks/specialties";
import Mocks from "../../utils/mocks";


const compareEntities = (tabla: string) => {
    for (const  [key, value] of Object.entries(Mocks)) {
        if(key == tabla){
            return value
        }
    }
}


export const getListData = async (table: string, filterParams?: any, id?: string, attr?: string) => {
    try {
        let listData: any = await compareEntities(table);

        if(filterParams != undefined){
            
            if(filterParams.date_start && filterParams.date_start != undefined){
                
                let start = new Date(filterParams.date_start);
                let end = new Date(filterParams.date_end);
                    
                return listData.filter( (data: any) => {
                    let real = new Date(data.created)
                    if(real.getTime() >= start.getTime() && real.getTime() <= end.getTime()){
                        return data
                    };
                });
            };
            
            if(filterParams.name && filterParams.name != undefined){
                
                return listData.filter( (data: any) => {
                    let nameFromDB = data.name.toLowerCase();
                    if(nameFromDB.includes(filterParams.name.toLowerCase())){
                        return data
                    }
                })
            }
        }

        return listData;

    } catch (error) {
        return error;
    }
}






export const getOneData = async (entity: string, id: string) => {
    try {
        if(entity === "Doctor"){
            let result = await doctors.find((data) => data.id === id);
            return result;    
        }
        if(entity === "Hospital"){
            let result = await hospitals.find((data) => data.id === id);
            return result;
        }
        if(entity === "Patient"){
            let result = await patients.find((data) => data.id === id);
            return result;    
        }
        if(entity === "History"){
            let result = await histories.find((data) => data.id === id);
            return result;    
        }
        if(entity === "Specialty"){
            let result = await specialties.find((data) => data.id === id);
            return result;    
        }
        
    } catch (error) {
        return error;
    }
}

export const insertData = async (entity:string, data: any) => {
    try {
        if(entity === "Doctor"){
            await doctors.push(data);
            return doctors    
        }
        if(entity === "Patient"){
            await patients.push(data);
            return patients    
        }
        if(entity === "Hospital"){
            await hospitals.push(data);
            return hospitals    
        }
        if(entity === "History"){
            await histories.push(data);
            return histories    
        }
        if(entity === "Specialty"){
            await specialties.push(data);
            return specialties    
        }
        
    } catch (error) {
        return error;
    }
}

export const updateData = async (entity: string, id: string, newData: object) => {
    try {
        if(entity === "Doctor"){
            let result = await doctors.find((data) => {
                if(data.id === id){
                   return Object.assign(data, newData)
                }
            });
            return result
        }
        if(entity === "History"){
            let result = await histories.find((data) => {
                if(data.id === id){
                   return Object.assign(data, newData)
                }
            });
            return result
        }
        if(entity === "Specialty"){
            let result = await specialties.find((data) => {
                if(data.id === id){
                   return Object.assign(data, newData)
                }
            });
            return result
        }
        if(entity === "Patient"){
            let result = await patients.find((data) => {
                if(data.id === id){
                   return Object.assign(data, newData)
                }
            });
            return result
        }
        if(entity === "Hospital"){
            let result = await hospitals.find((data) => {
                if(data.id === id){
                   return Object.assign(data, newData)
                }
            });
            return result
        }
        
    } catch (error) {
        return error;        
    }
}

export const deleteData = async (entity: string, id: string) => {
    try {
        if(entity === "Doctor"){
            let idx = await doctors.findIndex((data) => data.id === id);
            await doctors.splice(idx, 1);
        }
        if(entity === "History"){
            let idx = await histories.findIndex((data) => data.id === id);
            await histories.splice(idx, 1);
        }
        if(entity === "Specialty"){
            let idx = await specialties.findIndex((data) => data.id === id);
            await specialties.splice(idx, 1);
        }
        if(entity === "Patient"){
            let idx = await patients.findIndex((data) => data.id === id);
            await patients.splice(idx, 1);
        }
        if(entity === "Hospital"){
            let idx = await hospitals.findIndex((data) => data.id === id);
            await hospitals.splice(idx, 1);
        }

    } catch (error) {
        return error;        
    }
}