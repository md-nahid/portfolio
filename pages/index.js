import HeroBlock from "../blocks/hero-block";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <HeroBlock />
      </div>
    </Layout>
  );
}
