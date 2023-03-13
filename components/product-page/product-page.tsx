import styled from "styled-components";
import React, {useState} from "react";
import chunkArray from "../../utils/chunk-array";
import FrontPageItem from "../front-page-item/front-page-item";
import Pagination from "../pagination/pagination";
import FooterContainer from "../footer-container/footer-container";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  min-width: 1200px;
  margin-top: 20px;
  margin-bottom: 120px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    min-width: 800px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    min-width: 576px;
  }

  @media (max-width: 576px) {
    min-width: 320px;
  }
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

const ProductPage: React.FC<IProductPageProps> = ({initialData}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage: number = 20;
    const totalPages = Math.ceil(initialData.length/itemsPerPage);
    const chunkedArr = chunkArray(initialData, itemsPerPage);

    return (
        <Container>
            <GridContainer>
                {chunkedArr[currentPage-1].map((itemInfo) => <FrontPageItem key={itemInfo.productId} {...itemInfo}/>)}
            </GridContainer>
            <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <FooterContainer />
        </Container>

    )
}

export default ProductPage