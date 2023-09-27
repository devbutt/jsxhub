import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About JsxHub"
        description="We are a small team of web developers, trying to find our way through a sea of web development information.
        After trying just about every web development framework, we decided to stick with NextJs. We hope to have you along on this journey with us."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
