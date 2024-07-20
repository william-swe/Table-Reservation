import "./css/Review.css"
import star from "./images/star.png"

const Review = ({stars, image, name, description}) => {
    return (
        <div id="review">
            <div id="user-star-img-name">
                <div id="stars">
                    {
                        Array.from({ length: stars }).map((_, index) => (
                            <img id="star" key={index} src={star} alt="star"></img>
                        ))
                    }
                </div>
                <div id="user-img-name">
                    <img id="user-image" src={image} alt="user"></img>
                    <p>{name}</p>
                </div>
            </div>
            <p id="review-description">{description}</p>
        </div>
    )
}


export default Review;