import marker from '../src/assets/marker.png'
export function Card({ location_img ,place, date, description }){
    return (
        <div className="card">
            <div>
                <img src={location_img} alt="location img" />
            </div>

            <div>
                <p><img src={marker} alt="location logo " /> <small> Japan </small> <small> VIEW ON GOOGLE MAP</small></p>
                <h1>{place}</h1>
                <p>{date}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}