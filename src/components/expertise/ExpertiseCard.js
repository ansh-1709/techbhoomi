import "./ExpertiseCard.css";

export default function ExpertiseCard({image, title, desc }) {
    return (
        <div className="expertiseCard" >
           <img className="expertise-logo" src= {image} alt="placeholder" />
           <h4 className="expertise-heading"> {title} </h4>
           <p className="expertise-description"> {desc} </p>
        </div>
    );
}
