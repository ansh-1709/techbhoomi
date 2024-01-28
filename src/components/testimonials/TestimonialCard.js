import "./TestimonialCard.css"

export default function TestimonialCard({ text, image, name, role }) {
    return (
        <div>
            <p>{text}</p>
            <div className="testimonial-client">
                <img className="client-img" src={image} alt="placeholder" />
                <div className="client-info">
                    <h6 className="client-name">{name}</h6>
                    <span className="client-role">{role}</span>
                </div>
            </div>

        </div>
    );
}