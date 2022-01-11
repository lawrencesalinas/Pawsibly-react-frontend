import { useEffect } from "react"

export default function Profile(props) {

    const [userPets, setUserPets] = useState([])

    useEffect(() => {
        getUsersPets(props.user)
            .then(pets => {
                console.log(`current user's pets\n`, pets.data.foundPets)
                setUserPets(pets.data.foundPets)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <ProfilePets user={props.user} userPets={userPets} />
        </>
    )
}