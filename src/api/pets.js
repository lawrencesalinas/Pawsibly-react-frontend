import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUsersPets = (user) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/problems/user`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const addPet = (user, newPet) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/pets',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            pet: {
                name: newPet.name
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