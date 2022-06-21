import {gender} from "../API/PersoneAPI/PersonTypes";

export const getGender = (genderId:gender) => {
    switch (genderId) {
        case 1: return 'Female'
        case 2: return 'Male'
        case 3: return 'Transsexual'
        case 0: return 'No info'
    }
}