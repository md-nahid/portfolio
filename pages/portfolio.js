import Layout from "../components/layout/layout";
import Portfolios from "../blocks/portfolio/portfolios";
import Tab from "../blocks/portfolio/tab";
import Title from "../blocks/portfolio/title";
import Skillcard from "../blocks/portfolio/skillcard";
import Skills from "../blocks/portfolio/skills";

export default function Portfolio() {
  return (
    <Layout>
      <Title text="Works" />
      <Tab />
      <Portfolios />
      <Title text="Skills" />
      <Skills />
    </Layout>
  );
}
