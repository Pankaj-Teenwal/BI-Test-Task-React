import {
  Covid,
  HeaderTextWrapper,
  HeaderWrapper,
  IconSearchBarWrapper,
  IconWrapper,
  Icons,
  IconsWithBorder,
  SearchBarWrapper,
  SearchInput,
  Tracker,
} from "./headerStyles";
import {
  BellDot,
  ChevronDown,
  CircleUserRound,
  LogOut,
  Search,
} from "lucide-react";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTextWrapper>
        <div>
          <Covid>Covid-19</Covid>
          <Tracker>Live Tracker Dashboard</Tracker>
        </div>
      </HeaderTextWrapper>

      <IconSearchBarWrapper>
        <SearchBarWrapper>
          <SearchInput type="text" placeholder="Search..." />
          <Search size={20} strokeWidth={2} color="#C7C6CD" />
        </SearchBarWrapper>

        <IconWrapper>
          <IconsWithBorder>
            <CircleUserRound size={24} strokeWidth={1.5} color="#C7C6CD" />
            <ChevronDown size={24} strokeWidth={1.5} color="#C7C6CD" />
          </IconsWithBorder>

          <Icons>
            <BellDot size={24} strokeWidth={1.5} color="#C7C6CD" />
            <LogOut size={24} strokeWidth={1.5} color="#C7C6CD" />
          </Icons>
        </IconWrapper>
      </IconSearchBarWrapper>
    </HeaderWrapper>
  );
};

export default Header;
