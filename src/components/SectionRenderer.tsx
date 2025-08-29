import { sectionOrder, type SectionType } from "@/content/sections";
import Hero from "./Hero";
import About from "./About";
import CategoryGrid from "./CategoryGrid";
import Seasonal from "./Seasonal";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import HoursMap from "./HoursMap";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const sectionComponents: Record<SectionType, React.ComponentType> = {
  Hero,
  About,
  Categories: CategoryGrid,
  Seasonal,
  Gallery,
  Testimonials,
  HoursMap,
  Contact: ContactForm,
  Footer,
};

const SectionRenderer = () => {
  return (
    <>
      {sectionOrder.map((sectionName) => {
        const Component = sectionComponents[sectionName];
        return <Component key={sectionName} />;
      })}
    </>
  );
};

export default SectionRenderer;