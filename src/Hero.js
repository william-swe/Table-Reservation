import "./css/Hero.css"
import breads from "./images/Breads served by a waiter smaller size.jpg"

const Hero = () => {
    return (
        <div id='container'>
            <div class="overlay"></div>
            <div id='text'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <input id="reserve-button" type="button" value="Reserve a table"/>
            </div>
            <img src={breads} alt="A waiter serving breads"></img>
        </div>
    )
}

export default Hero;