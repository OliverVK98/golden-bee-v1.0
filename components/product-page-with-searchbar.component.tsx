import styled from "styled-components";
import React, {useEffect, useState} from "react";
import chunkArray from "../utils/chunk-array";
import FrontPageItemComponent from "./front-page-item.component";
import PaginationComponent from "./pagination.component";
import FooterContainerComponent from "./footer-container.component";
import {useQuery} from "@apollo/client";
import {
    productsFromSpecificCollection,
} from "../graphql/queries/queries";
import SkeletonProductListComponent from "./skeleton-product-list.component";

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

const BadInputContainer = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 26px;
`

interface IProductPageProps {
    initialData: IFrontPageItem[],
    displayDataIndex?: number,
    renderData:  IFrontPageItem[],
    setRenderData: React.Dispatch<React.SetStateAction<IFrontPageItem[]>>,
    filteredData: IFrontPageItem[] | null,
    userInput: string
}

const ProductPageWithSearchBarComponent: React.FC<IProductPageProps> = ({userInput, setRenderData, filteredData, renderData, displayDataIndex, initialData}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {data, loading} = useQuery(productsFromSpecificCollection, {
        variables: {
            collectionId: displayDataIndex
        }
    });

    useEffect(() => {
        if (displayDataIndex!=0 && data) setRenderData(data.ProductsByCollectionId);
        if (displayDataIndex==0) setRenderData(initialData);
    }, [displayDataIndex, data])

    if (displayDataIndex!=0&&loading) return (
        <>
            {
                new Array(4).fill(0).map((_, index) => <SkeletonProductListComponent key={index}/>)
            }
        </>
    )

    const itemsPerPage: number = 20;
    const filter = filteredData ? chunkArray(filteredData.length>0 ? filteredData : renderData, itemsPerPage) : null;
    const totalPages: number | null = filteredData ? Math.ceil(filteredData.length>0 ? filteredData.length/itemsPerPage : renderData.length/itemsPerPage) : null;

    return (
        <Container>
            {filter===null ? (
                <BadInputContainer>
                    No results matching "{userInput}"
                </BadInputContainer>
            ) : (
                    <GridContainer>
                        {filter[currentPage-1].map((itemInfo) => <FrontPageItemComponent isImageLoadPriority={true} key={itemInfo.productId} {...itemInfo}/>)}
                    </GridContainer>
                )}
            <PaginationComponent totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <FooterContainerComponent />
        </Container>

    )
}

export default ProductPageWithSearchBarComponent