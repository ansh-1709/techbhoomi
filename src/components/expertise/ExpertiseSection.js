import ExpertiseCard from "./ExpertiseCard";
import AppSection from "../AppSection";

export default function ExpertiseSection() {
    return (
        <AppSection sectionHeading="WHAT WE DO" sectionDescription="Innovative agility. Transforming brands, campaigns, and apps. Elevate your digital presence with TechBhoomi's expertise.">
            <ExpertiseCard title="Modern Design" desc="Strategic Branding: Craft unique visual identities that resonate with your target audience and leave a lasting impression." />
            <ExpertiseCard title="Creative Design" desc="Seamless App Development: Transform your ideas into user-friendly applications that enhance engagement and usability." />
            <ExpertiseCard title="Create Plan" desc="Cutting-Edge Solutions: Develop innovative tech solutions for industries like sports, hospitality, and travel, redefining experiences." />
        </AppSection>
    );
}