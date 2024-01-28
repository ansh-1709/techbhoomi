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
                name="Rex Watson"
                image={p1}
                role="Marketing" />
            <TestimonialCard text="This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."
                name="Rex Watson"
                image={p2}
                role="Marketing" />
            <TestimonialCard text="This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."
                name="Rex Watson"
                image={p3}
                role="Marketing" />
            <TestimonialCard text={`"This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."`}
                name="Rex Watson"
                image={p4}
                role="Marketing" />
        </AppSection>
    );
}