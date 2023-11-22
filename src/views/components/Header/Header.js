import { HeaderContainer, LogoIcon, LogoText } from "./Header.styles";
import "./Header.css";

function Header() {
  return (
    <HeaderContainer className="header">
      <div className="logo">
        <LogoIcon className="logo__icon">
          <i class="fa-solid fa-music"></i>
        </LogoIcon>
        <LogoText className="logo__text">Mixit</LogoText>
      </div>
    </HeaderContainer>
  );
}

export default Header;
