import { string } from '@hapi/joi';
import { v4 as uuidv4 } from 'uuid';

const generateId = () => {
    return uuidv4();
};

export const joinFields = (data: any) => {
    return {
        id: generateId(),
        ...data
    }
}

export interface Result {
    previous?: any,
    next?: any,
    result?: []
}


export interface Hospital{
  id: string,
  name: string,
  created: string
}

export interface Doctor {
  id?: string,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  address: string,
  phone: string,
  birthday: string,
  avatar: string
}

export const paginatedResults = (data: any, req_page: string, req_limit: string) => {

    const page = parseInt(req_page);
    const limit = parseInt(req_limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results: Result = {}
  
    if (endIndex < data.length) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }
    
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }

    results.result = data.slice(startIndex, endIndex)
    return results;
}


export enum Entity {
    HOSPITAL = "hospitals",
    DOCTOR = "doctors",
    PATIENT = "patients",
    HISTORY = "histories",
    SPECIALTY = "specialties",
    APPOINTMENT = "appointments"
}