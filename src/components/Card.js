import "../css/Card.css"
import car from "../images/car.png"

const Card = ({image, title, price, description}) => {
    return (
        <div id="card-container">
            <div id="card-image">
                <img src={image} alt={description}></img>
            </div>
            <div id="card-text">
                <div id="card-text-header">
                    <p id="card-title">{title}</p>
                    <p id="card-price">{price}</p>
                </div>
                <div id="card-description">{description}</div>
                <div id="card-delivery">
                    <p>Order a delivery</p>
                    <img src={car} alt={"delivery"}></img>
                </div>
            </div>
        </div>
    )
}

export default Card;