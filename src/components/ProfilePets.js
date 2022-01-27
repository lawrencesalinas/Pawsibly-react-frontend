import React from 'react'



export default function ProfilePets(props) {
const listOfPets = props.myPets.map(pet=>{
        return pet.name
})

return(
    <div>
        <h1>{listOfPets}</h1>
            
    </div>
)
}
