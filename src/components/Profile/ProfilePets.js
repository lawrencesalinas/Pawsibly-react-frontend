import React from 'react'
import PetDetail from './PetDetail';


export default function ProfilePets(props) {
const listOfPets = props.myPets.map(pet=>{
        return pet.name
})

return(
    <div>
        <h1>{listOfPets}</h1>
            <PetDetail/>
    </div>
)
}
