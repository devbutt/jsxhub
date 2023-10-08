import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.02] py-16 md:py-20 lg:py-28"
      >
        <div className="container ">
          <SectionTitle
            title="What we Do!"
            paragraph="There are easy ways of doing things and sometimes there are easier ways, but when it comes to web developement there are no short cuts."
            center
          />

          <div className="grid mx-12 grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
