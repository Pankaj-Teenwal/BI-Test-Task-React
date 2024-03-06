import img from "../../images/covidImg.png";
import { MoveRight } from "lucide-react";
import {
  CovidCardWrapper,
  ImageWrapper,
  Img,
  ListWrapper,
  Symptoms,
  SymptomsDescription,
  SymptomsWrapper,
  AsideWrapper,
} from "./asideStyles";
const Aside = () => {
  const data = [
    "2 new cases in Pakistan",
    "2 new cases in Singapore",
    "1 new case in Thailand",
    "5 new cases in Taiwan",
    "8 new cases in Japan",
    "1 new cases in Brazil",
    "1st case in Ecuador",
    "1st case in Morocco",
  ];

  return (
    <AsideWrapper>
      <ListWrapper>
        {data.map((item) => {
          return (
            <div key={item}>
              <li>{item}</li>
            </div>
          );
        })}
      </ListWrapper>
      <CovidCardWrapper>
        <ImageWrapper>
          <Img src={img} alt="" />
        </ImageWrapper>

        <SymptomsWrapper>
          <div>
            <Symptoms>Symptoms</Symptoms>
            <SymptomsDescription>
              Read carefully symptoms of covid-19
            </SymptomsDescription>
          </div>
          <MoveRight color="#FFFFFF" />
        </SymptomsWrapper>
      </CovidCardWrapper>
    </AsideWrapper>
  );
};

export default Aside;
