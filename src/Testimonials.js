import "./css/Testimonials.css"
import Review from "./Review"
import user1 from "./images/user1.png"

const Testimonials = () => {
    const reviews = [
        {
            name: "John",
            stars: 5,
            description: "The Greek Salad dish is delicious, I'll recommend this to my friends",
            image: user1
        },
        {
            name: "Elizabeth",
            stars: 4,
            description: "The Bruchetta is good, but too sweet to me",
            image: user1
        },
        {
            name: "Shuna",
            stars: 4,
            description: "The Lemon Dessert is great, but a bit too expensive",
            image: user1
        }
    ]
    return (
        <div id="testimonial">
            <p id="testimonial-header">Testimonials</p>
            <div id="reviews">
                {reviews.map((item) => (
                    <Review stars={item["stars"]} image={item["image"]} name={item["name"]} description={item["description"]}/>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;