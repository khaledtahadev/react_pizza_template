import styled from "styled-components";
import FeaturePic from "../../images/featured3.jpg";

export const FeatureContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		url(${FeaturePic}) center;
	background-size: cover;
	height: 100vh;
	max-height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 0 1rem;

	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
		margin-bottom: 1rem;
		font-size: clamp(1rem, 3vw, 2rem);
	}
`;

export const FeatureButton = styled.button`
	padding: 0.6rem 3rem;
	font-size: 1.4rem;
	color: #000;
	background-color: #ffc500;
	border: none;
	transition: 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #fff;
		background-color: #e31837;
	}
`;
