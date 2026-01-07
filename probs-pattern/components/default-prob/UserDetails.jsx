export function UserDetails({name , age , location = "Not specified" , profession = "Not Specified"}) {
    return (
        <>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
            <p>Profession: {profession}</p>
        </>
    )
}