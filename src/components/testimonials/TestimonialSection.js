import AppSection from "../AppSection";
import TestimonialCard from "./TestimonialCard";
import p1 from '../../assets/people/p1.jpg';
import p2 from '../../assets/people/p2.jpg';
import p3 from '../../assets/people/p3.jpg';
import p4 from '../../assets/people/p4.jpg';



export default function TestimonialSection() {
    return (
        <AppSection sectionHeading="TESTIMONIALS" sectionDescription="Feedback from our clients.">
            <TestimonialCard text="This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."
                name="Mis Jarina"
                image={p1}
                role="HR & Admin" />
            <TestimonialCard text="This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."
                name="John Doe"
                image={p2}
                role="Developer" />
            <TestimonialCard text="This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."
                name="Dr. Sokina"
                image={p3}
                role="UI/UX" />
            <TestimonialCard text={`"This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."`}
                name="Rex Watson"
                image={p4}
                role="Marketing" />
        </AppSection>
    );
}
