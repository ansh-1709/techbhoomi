import AppSection from "../AppSection";
import TestimonialCard from "./TestimonialCard";


export default function TestimonialSection() {
    return (
        <AppSection sectionHeading="TESTIMONIALS" sectionDescription="Feedback from our clients.">
            <TestimonialCard text="This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."
                name="Rex Watson"
                image=""
                role="Marketing" />
            <TestimonialCard text="This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."
                name="Rex Watson"
                image=""
                role="Marketing" />
            <TestimonialCard text="This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."
                name="Rex Watson"
                image=""
                role="Marketing" />
            <TestimonialCard text={`"This is just the most powerful theme I’ve ever met. Love to talk with their staff about how to explore all the capabilities of the @TechBhoomi theme."`}
                name="Rex Watson"
                image=""
                role="Marketing" />
        </AppSection>
    );
}