export function Skills({title, ...rest}){
    const items = Object.values(rest);
    return (
        <>
            <h2>{title} :</h2>
            <p>{items.join(", ")}</p>
        </>
    )
}