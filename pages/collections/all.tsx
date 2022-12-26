import styled from "styled-components";
import {gql} from "@apollo/client";
import apolloClient from "../../lib/apollo";
import React, {useState} from "react";
import FrontPageItemComponent from "../../components/front-page-item.component";
import PaginationComponent from "../../components/pagination.component";
import chunkArray from "../../utils/chunk-array";
import FooterContainerComponent from "../../components/footer-container.component";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 250px;
  justify-items: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export async function getStaticProps() {
    const frontPageProductDataQuery = gql`
        query {
            ProductsList {
                productId
                itemName
                rating
                price
                discountedPrice
                frontImageUrl
                isAvailable
            }
        }
    `;

    const {data} = await apolloClient.query({
        query: frontPageProductDataQuery
    })

    return {
        props: {
            data: data.ProductsList,
        }
    }
}

export interface IFrontPageItem{
    productId: number,
    price: number,
    discountedPrice: number,
    frontImageUrl: string,
    rating: number,
    itemName: string,
    isAvailable: boolean
}

interface IAllProductsProps {
    data: IFrontPageItem[]
}

const AllProducts: React.FC<IAllProductsProps> = ({data}) => {
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
            <FooterContainerComponent/>
        </Container>

    )
}

export default AllProducts