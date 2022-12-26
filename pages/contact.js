import Contactform from "../blocks/contact-form";
import Contactinfos from "../blocks/contact-infos";
import Title from "../blocks/portfolio/title";
import Layout from "../components/layout/layout";

export default function Contact() {
  return (
    <Layout>
      <Title text="Contact Me" />
      <div className="xl:grid xl:grid-cols-2 gap-5 mt-10 md:mt-20 xl::mt-32">
        <Contactinfos />
        <Contactform />
      </div>
    </Layout>
  );
}
