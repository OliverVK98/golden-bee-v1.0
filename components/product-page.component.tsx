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
  margin-bottom: 120px;
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
    initialData: IFrontPageItem[],
}

const ProductPageComponent: React.FC<IProductPageProps> = ({initialData}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage: number = 20;
    const totalPages = Math.ceil(initialData.length/itemsPerPage);
    const chunkedArr = chunkArray(initialData, itemsPerPage);

    return (
        <Container>
            <GridContainer>
                {chunkedArr[currentPage-1].map((itemInfo) => <FrontPageItemComponent key={itemInfo.productId} {...itemInfo}/>)}
            </GridContainer>
            <PaginationComponent totalPages={totalPages} dataArr={initialData} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <FooterContainerComponent />
        </Container>

    )
}

export default ProductPageComponent