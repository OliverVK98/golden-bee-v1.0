import styled from "styled-components";
import React, {useState} from "react";
import chunkArray from "../utils/chunk-array";
import FrontPageItemComponent from "./front-page-item.component";
import PaginationComponent from "./pagination.component";
import FooterContainerComponent from "./footer-container.component";
import SearchBarComponent from "./search-bar.component";

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
    dataIsLoading?: boolean
}

const ProductPageComponent: React.FC<IProductPageProps> = ({data, dataIsLoading}) => {
    if (dataIsLoading) return <div>Loading...</div>;

    const itemsPerPage: number = 20;
    const totalPages = Math.ceil(data.length/itemsPerPage);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const chunkedArr = chunkArray(data, itemsPerPage);

    return (
        <Container>
            <GridContainer>
                {chunkedArr[currentPage-1].map((itemInfo) => <FrontPageItemComponent key={itemInfo.productId} {...itemInfo}/>)}
            </GridContainer>
            <PaginationComponent totalPages={totalPages} dataArr={data} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <FooterContainerComponent />
        </Container>

    )
}

export default ProductPageComponent