import {
  Atom,
  Home,
  MessageCircleMore,
  ThermometerSun,
  Settings,
} from "lucide-react";
import { HomeMenuWrapper, MenuWrapper } from "./menuStyles";

const Menu = () => {
  return (
    <div>
      <MenuWrapper>
        <Atom color="white" />
        <HomeMenuWrapper>
          <Home color="white" />
          <MessageCircleMore color="white" />
          <ThermometerSun color="white" />
        </HomeMenuWrapper>

        <Settings color="white" />
      </MenuWrapper>
    </div>
  );
};

export default Menu;
