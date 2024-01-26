import "./ExpertiseCard.css";

export default function ExpertiseCard({image, title, desc }) {
    return (
        <div className="expertiseCard" >
           <img src= {image} alt="ansh" />
           <h4> {title} </h4>
           <p> {desc} </p>
        </div>
    );
}