import "../css/Hero.css"
import breads from "../images/Breads served by a waiter smaller size.jpg"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();
    const times = ["17:00", "19:00", "20:00"];

    const handleClick = () => {
        navigate("/reserve", { state: { times } }); // pass times to Reserve component
    }

    return (
        <div id='container'>
            <div className="overlay"></div>
            <div id='text'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <input id="hero-button" type="button" value="Reserve a table" onClick={handleClick} />
            </div>
            <img src={breads} alt="A waiter serving breads"></img>
        </div>
    )
}

export default Hero;
