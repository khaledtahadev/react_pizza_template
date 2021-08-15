import { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from "./HeroElements";

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const closeSidebar = e => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	return (
		<HeroContainer onClick={closeSidebar}>
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<HeroContent>
				<HeroItems>
					<HeroH1>Greatest Pizza Ever</HeroH1>
					<HeroP>Ready in 60 seconds</HeroP>
					<HeroBtn>Palce Order</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
