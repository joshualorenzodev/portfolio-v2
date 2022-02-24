import { CTAButton } from "../../styles/common/CTAButton.styled";
import { StyledHero, HeroContainer } from "./Hero.styled";

export const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <h1>Joshua Lorenzo</h1>
        <h3>{"{Front-End Web Developer}"}</h3>
        <p>HTML . CSS . JavaScript . React . Next.js</p>

        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contact" margin="0 0 0 20px" primary>
            Contact
          </CTAButton>
        </div>
      </HeroContainer>
    </StyledHero>
  );
};
