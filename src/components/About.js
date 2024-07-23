import "../css/About.css"
import restaurant from "../images/restaurant.jpg"

const About = () => {
    return (
        <div id="about">
            <div id="about-header-description">
                <div id="about-header">
                    <p>Little Lemon</p>
                    <p>Chicago</p>
                </div>
                <p id="about-description">
                    Little Lemon is a charming restaurant in Chicago, offering a delightful fusion of Mediterranean and American cuisine. With fresh, locally sourced ingredients and a warm, inviting atmosphere, it's the perfect spot for a memorable dining experience. Come savor the zest of Little Lemon!
                </p>
            </div>
            <img id="about-img" src={restaurant} alt="restaurant"></img>
        </div>
    )
}

export default About;