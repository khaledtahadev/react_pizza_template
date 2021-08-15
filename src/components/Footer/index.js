import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
	FooterContainer,
	FooterWrapper,
	SocialMediaWrap,
	SocialLogo,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<SocialMediaWrap>
					<SocialLogo to="/">Pizza</SocialLogo>
					<SocialIcons>
						<SocialIconLink href="/">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink href="/">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/">
							<FaYoutube />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
