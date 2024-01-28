import "./AppSection.css";
import SectionDescription from "./sectionDescription/SectionDescription";
import SectionHeading from "./sectionHeading/SectionHeading";

export default function AppSection({ sectionHeading, sectionDescription, children }) {
    return (

        <section className="app-section">
            <SectionHeading className="section-heading">{sectionHeading}</SectionHeading>
            <SectionDescription className="section-description">{sectionDescription}</SectionDescription>
            <div className="section-row">
                {children}
            </div>
        </section>
    );
}