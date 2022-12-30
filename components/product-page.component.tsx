import styled from "styled-components";
import React, {useState} from "react";
import chunkArray from "../utils/chunk-array";
import FrontPageItemComponent from "./front-page-item.component";
import PaginationComponent from "./pagination.component";
import FooterContainerComponent from "./footer-container.component";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  min-width: 1200px;
  margin-top: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const CustomTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: -10px;
  font-size: 40px;
`

export interface IFrontPageItem{
    productId: number,
    price: number,
    discountedPrice: number,
    frontImageUrl: string,
    rating: number,
    itemName: string,
    isAvailable: boolean
}

interface IProductPageProps {
    data: IFrontPageItem[],
    title: string
}

const ProductPageComponent: React.FC<IProductPageProps> = ({data, title}) => {
    const itemsPerPage: number = 20;
    const totalPages = Math.ceil(data.length/itemsPerPage);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const chunkedArr = chunkArray(data, itemsPerPage);

    return (
        <Container>
            <CustomTitle>{title}</CustomTitle>
            <GridContainer>
                {chunkedArr[currentPage-1].map((itemInfo) => <FrontPageItemComponent key={itemInfo.productId} {...itemInfo}/>)}
            </GridContainer>
            <PaginationComponent totalPages={totalPages} dataArr={data} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <FooterContainerComponent />
        </Container>

    )
}

export default ProductPageComponent