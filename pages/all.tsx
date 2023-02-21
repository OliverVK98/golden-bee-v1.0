import apolloClient from "../lib/apollo";
import React, {useEffect, useRef, useState} from "react";
import {
    frontPageProductDataQuery,
} from "../graphql/queries/queries";
import SearchBarComponent from "../components/search-bar.component";
import styled from "styled-components";
import ProductPageWithSearchBarComponent from "../components/product-page-with-searchbar.component";

export interface IFrontPageItem{
    productId: number,
    price: number,
    discountedPrice: number,
    frontImageUrl: string,
    rating: number,
    itemName: string,
    isAvailable: boolean,
    isImageLoadPriority?: boolean
}

interface IAllProductsProps {
    initialData: IFrontPageItem[]
}

export const CustomTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 40px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export async function getStaticProps() {
    const {data} = await apolloClient.query({
        query: frontPageProductDataQuery
    })

    return {
        props: {
            initialData: data.ProductsList,
        }
    }
}

interface IParentRef {
    searchBarRef: React.RefObject<HTMLDivElement>
    selectInputRef: React.RefObject<HTMLInputElement>
    imageRef: React.RefObject<HTMLImageElement>
}

const AllProductsComponent: React.FC<IAllProductsProps> = ({initialData}) => {
    const [displayDataIndex, setDisplayDataIndex] = useState<number>(0);
    const [filteredData, setFilteredData] = useState<IFrontPageItem[] | null>([] as IFrontPageItem[]);
    const [renderData, setRenderData] = useState(initialData);
    const [userInput, setUserInput] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const parentRef = useRef<IParentRef>()
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            setDropdownOpen(false);
            if (parentRef.current?.searchBarRef.current && dropdownOpen && parentRef.current.searchBarRef.current===event.target) {
                setDropdownOpen(true);
            }
            if (parentRef.current?.selectInputRef.current && dropdownOpen && parentRef.current.selectInputRef.current===event.target) {
                setDropdownOpen(true);
            }
            if (parentRef.current?.imageRef.current && dropdownOpen && parentRef.current.imageRef.current===event.target) {
                setDropdownOpen(true);
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [dropdownOpen, parentRef.current]);

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleEscapeKeyPress);
        return () => {
            document.removeEventListener("keydown", handleEscapeKeyPress);
        };
    }, []);

    return (
        <ContentContainer>
            <CustomTitle>All Products</CustomTitle>
            <SearchBarComponent ref={parentRef} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} userInput={userInput} setUserInput={setUserInput} renderData={renderData} setFilteredData={setFilteredData} setDisplayDataIndex={setDisplayDataIndex}/>
            <ProductPageWithSearchBarComponent userInput={userInput} filteredData={filteredData} setRenderData={setRenderData} renderData={renderData} displayDataIndex={displayDataIndex} initialData={initialData}/>
        </ContentContainer>
    )
}

export default AllProductsComponent
