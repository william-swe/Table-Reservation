import "./Main.css"
import breads from "./images/Breads served by a waiter.jpg"

const Main = () => {
    return (
        <main>
            <div id='container'>
                <div id='text'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <input id="reserve-button" type="button" value="Reserve a table"/>
                </div>
                <div id="image">
                    <img src={breads} alt="A waiter serving breads"></img>
                </div>
            </div>
        </main>
    )
}

export default Main;