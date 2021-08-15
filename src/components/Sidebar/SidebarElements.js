import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	position: fixed;
	top: 0;
	right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: #ffc500;
	transition: 0.3s ease-in-out;

	@media (min-width: 400px) {
		width: 350px;
	}
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	font-size: 2rem;
	cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
	color: #000;
`;

export const SidebarMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Sidebarlink = styled(Link)`
	height: 60;
	line-height: 60px;
	text-decoration: none;
	color: #000;
	font-size: 1.5rem;
	transition: 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #e31837;
		transition: 0.2s ease-in-out;
	}
	@media (min-width: 480px) {
		height: 80px;
		line-height: 80px;
	}
`;

export const SidebarBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const SidebarRoute = styled(Link)`
	color: #fff;
	font-size: 16px;
	text-decoration: none;
	background-color: #e31837;
	white-space: nowrap;
	padding: 16px 64px;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover {
		transition: 0.2s ease-in-out;
		background-color: #fff;
		color: #010606;
	}
`;
