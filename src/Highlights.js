import Card from "./Card";
import "./css/Highlights.css"
import img1 from "./images/Salad smaller size.jpg"
import img2 from "./images/Tomato breads smaller size.jpg"
import img3 from "./images/Nui smaller size.jpg"

const Highlights = () => {
    const descriptions = [
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    ]
    return (
        <div id="highlight">
            <div id="highlight-header">
                <p>Specials</p>
                <input type="button" value="Online Menu"/>
            </div>
            <div id="cards">
                <Card image={img1} title="Greek salad" price="$12.99" description={descriptions[0]} />
                <Card image={img2} title="Bruchetta" price="$5.99" description={descriptions[1]} />
                <Card image={img3} title="Lemon Dessert" price="$5.00" description={descriptions[2]}/>
            </div>
        </div>
    )
}

export default Highlights;