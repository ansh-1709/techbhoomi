import hero from '../../assets/hero-section/hero.jpg';
import logo from '../../assets/hero-section/logo.png';
import mouse from '../../assets/hero-section/mouse.png';
import "./HeroSection.css"

export default function HeroSection() {
    return (
        <div className='hero-section' style={{ backgroundImage: `url(${hero})`, height: "100vh", backgroundSize: "contain", backgroundRepeat: "no-repear"}}>
            <img className="logo" src={logo} alt="placeholder" />
            <div className="container">
                <h2 className="desc"> TechBhoomi - Product & Software Development Hub </h2>
               
            </div>
            <div>
                <h6> Scroll for more</h6>
            <img className="mouse" src={mouse} alt="placeholder" />
            </div>
        </div>

    );

}