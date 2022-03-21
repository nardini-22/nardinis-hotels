import { useRouter } from "next/router";
import { Logo } from "svg";
import { HeaderContainer, LogoContainer, LogoWrapper } from "./styles";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <HeaderContainer>
        <LogoWrapper onClick={() => router.push("/")}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <h1>Nardinis Hotels</h1>
        </LogoWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
