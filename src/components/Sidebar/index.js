import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	Sidebarlink,
	SidebarBtnWrap,
	SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggleSidebar}>
				<CloseIcon />
			</Icon>
			<SidebarMenu onClick={toggleSidebar}>
				<Sidebarlink to="/">Pizza</Sidebarlink>
				<Sidebarlink to="/">Desserts</Sidebarlink>
				<Sidebarlink to="/">Full Menu</Sidebarlink>
			</SidebarMenu>
			<SidebarBtnWrap>
				<SidebarRoute to="/">Order Now</SidebarRoute>
			</SidebarBtnWrap>
		</SidebarContainer>
	);
};

export default Sidebar;
