import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggleSidebar }) => {
	return (
		<Nav>
			<NavLink to="/">Pizza</NavLink>
			<NavIcon onClick={toggleSidebar}>
				<p>Menu</p>
				<Bars />
			</NavIcon>
		</Nav>
	);
};

export default Navbar;
