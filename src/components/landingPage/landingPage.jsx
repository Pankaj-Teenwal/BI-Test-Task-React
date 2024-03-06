import Header from "../header/header";
import Chart from "../chart/chart";
import Aside from "../aside/aside";
import Menu from "../menu/menu";
import {
  ChartAsideWrapper,
  LandingPageWrapper,
  MainSection,
} from "./LandingPageStyles";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <div style={{ width: "4vw" }}>
        <Menu />
      </div>

      <MainSection>
        <Header />
        <ChartAsideWrapper>
          <Chart />
          <Aside/>
        </ChartAsideWrapper>
      </MainSection>
    </LandingPageWrapper>
  );
};

export default LandingPage;
