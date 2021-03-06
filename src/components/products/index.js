import {
	ProductContainer,
	ProductHeading,
	ProductWrapper,
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductTitle,
	ProductDesc,
	ProductPrice,
	ProductButton,
} from "./productsElements";

const Products = ({ heading, data }) => {
	return (
		<ProductContainer>
			<ProductHeading>{heading}</ProductHeading>
			<ProductWrapper>
				{data.map((product, indx) => (
					<ProductCard key={indx}>
						<ProductImg src={product.img} alt={product.alt} />
						<ProductInfo>
							<ProductTitle>{product.name}</ProductTitle>
							<ProductDesc>{product.desc}</ProductDesc>
							<ProductPrice>{product.price}</ProductPrice>
							<ProductButton>{product.button}</ProductButton>
						</ProductInfo>
					</ProductCard>
				))}
			</ProductWrapper>
		</ProductContainer>
	);
};

export default Products;
