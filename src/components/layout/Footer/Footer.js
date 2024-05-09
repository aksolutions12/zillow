import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme/theme";
import googlePlayIcon from "../../../assets/images/google-play-badge.svg"; 
import appStoreIcon from "../../../assets/images/app-store-badge.svg"; 
import facebookIcon from "../../../assets/icons/facebook.svg"; 
import instagramIcon from "../../../assets/icons/instagram.svg"; 
import tiktokIcon from "../../../assets/icons/tiktok.svg"; 
import logoImage from "../../../assets/images/zil-logo.png";
import footerart from "../../../assets/images/footer-art.svg";
import { Rowing } from "@mui/icons-material";
import Icon from '@mui/material/Icon';
const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
`;
const Logo = styled.img`
  width: auto;
  height: 35px; /* Increased logo height */
  margin: 0 20px; /* Added margin for spacing */

  @media (max-width: ${theme.breakpoints.md}) {
    margin: 0;
  }
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.gray700};
  margin: 20px 0;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Link = styled.a`
 
  text-decoration: none;
  margin: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

const BlueText = styled.span`
  color: ${theme.colors.blue};
  text-decoration: underline
`;

const FooterParagraph = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  padding: 20px
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ItalicSpan = styled.span`
  font-style: italic;
  font-size: 12px;
  font-weight: lighter;
`;

const FollowUsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <HorizontalLine />
      <FooterLinks>
        <Link href="#">About</Link>
        <Link href="#">Zestimates</Link>
        <Link href="#">Research</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Careers - U.S. Privacy Notice</Link>
        <Link href="#">Careers - Mexico Privacy Notice</Link>
        <Link href="#">Help</Link>
        <Link href="#">Advertise</Link>
        <Link href="#">Fair Housing Guide</Link>
        <Link href="#">Advocacy</Link>
        <Link href="#">Terms of use</Link>
      </FooterLinks>
      <FooterLinks>
        <Link href="#">Privacy Portal</Link>
        <Link href="#">Cookie Preference</Link>
        <Link href="#">Learn</Link>
        <Link href="#">AI</Link>
        <Link href="#">Mobile Apps</Link>
      </FooterLinks>
      <FooterLinks>
        <Link href="#">Trulia</Link>
        <Link href="#">StreetEasy</Link>
        <Link href="#">HotPads</Link>
        <Link href="#">Out East</Link>
        <Link href="#">ShowingTime+</Link>
      </FooterLinks>
      
      <FooterLinks>
        <Link href="#" ><BlueText style={{fontSize:14}}>Do Not Sell or Share My Personal Information→</BlueText></Link>
      </FooterLinks>
      <HorizontalLine />
      <FooterParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        faucibus ultrices odio.
      </FooterParagraph>
      <FooterParagraph>
      Zillow, Inc. holds real estate brokerage <BlueText>licenses</BlueText> in multiple states. Zillow (Canada), Inc. holds real estate brokerage <BlueText>licenses</BlueText> in multiple provinces. 
      <br />
      <BlueText>§ 442-H New York Standard Operating Procedures</BlueText>
      <br />
      <BlueText>§ New York Fair Housing Notice</BlueText>
      <br />
      TREC: <BlueText>Information about brokerage services, Consumer protection notice</BlueText>
      <br />
      California DRE #1522444
      <br />
      <br />

     
      <BlueText style={{fontSize:14 }}>Contact XYZ, Inc. Brokerage</BlueText>
      
      </FooterParagraph>

      
       
      
      <FooterParagraph className="md:mx-40 lg:mx-80">
        For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
        REALTOR® logo are controlled by The Canadian Real Estate Association
        (CREA) and identify real estate professionals who are members of CREA.
        The trademarks MLS®, Multiple Listing Service® and the associated
        logos are owned by CREA and identify the quality of services provided
        by real estate professionals who are members of CREA. Used under
        license.
      </FooterParagraph>{" "}
      
      <CenteredContainer>
        <div style={{display:"flex", flexDirection:"row", gap:5, paddingTop: 20 }}>
          <img src={googlePlayIcon} alt="Google Play" height="32" width="96" />
          <img src={appStoreIcon} alt="App Store" height="32" width="96" />
        </div>
        <div style={{display:"flex", flexDirection:"row",gap:5, paddingTop: 20 }} >
          <Logo src={logoImage} alt="Logo" />
          <FollowUsContainer>
            <ItalicSpan>Follow us:</ItalicSpan>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={facebookIcon} alt="Facebook" height="32" width="32" />
              <img src={instagramIcon} alt="Instagram" height="32" width="32" />
              <img src={tiktokIcon} alt="TikTok" height="32" width="32" />
            </div>
          </FollowUsContainer>
          <FollowUsContainer>
          <ItalicSpan>© 2006-2024 XYX</ItalicSpan>
          <Icon>HomeRounded</Icon>
          </FollowUsContainer>
          
        
        </div>
        <img style={{paddingTop:30}} src={footerart} alt="FooterArt"  />
      </CenteredContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
