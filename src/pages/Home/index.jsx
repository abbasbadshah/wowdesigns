import { Layout } from "../../components/layout";
import HeroSlider from "./Hero";
import Section from "../../components/common/section";
import HomeMainSectionOne from "./Main";
import { News } from "./News";

export const HomePage = () => {
  return (
    <Layout headerType="header1">
      <HeroSlider />
      <Section>
        <HomeMainSectionOne />
      </Section>
      <Section>
        <News />
      </Section>
    </Layout>
  );
};
