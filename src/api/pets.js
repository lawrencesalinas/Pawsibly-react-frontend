import apiUrl from '../apiConfig'
import axios from 'axios'


export const getUsersAndPets = (user) => {

    return axios({
        method: 'GET',
        url: `${apiUrl}/profile`,
        headers: {
            'Authorization': `Token ${user.token}`
        }
    })
}

export const getSinglePet = (user,id) => {

    return axios({
        method: 'GET',
        url: `${apiUrl}/pets${id}`,
        headers: {
            'Authorization': `Token =${user.token}`
        }
    })
}

// export const getSinglePet = (user) => {
//     return axios({
//         method: 'GET',
//         url: apiUrl + '/pets',
//         headers: {
//             'Authorization': `Token ${user.token}`
//         },
//         data: {
//             pet: {
               
//             }
//         } 
//     })
// }

export const createPet = (user) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/pets',
        headers: {
            'Authorization': `Token ${user.token}`
        },
        data: {
            pet: {
                
            }
        } 
    })
}

export const deletePet = (user, itemId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/pets/${itemId}`,
        headers : {
            Authorization: `Token token=${user.token}`
        }
    })
}