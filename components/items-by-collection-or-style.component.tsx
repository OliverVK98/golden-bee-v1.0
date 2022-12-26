import styled from "styled-components";
import SectionPreviewComponent from "./section-preview.component";
import React from "react";
import {gql, useQuery} from "@apollo/client";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

interface IGridProps {
    isStyle: boolean
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props: IGridProps) => props.isStyle ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  grid-template-rows: ${(props: IGridProps) => props.isStyle ? "" : "repeat(2, 1fr)"};
  gap: 20px;
`

interface IItemsProps {
    isStyle: boolean
}

interface ICollectionItem {
    name: string,
    imageUrl: string,
    collectionId: number
}

const ItemsByCollectionOrStyleComponent: React.FC<IItemsProps> = ({isStyle}) => {
    const collectionsByTypeQuery = gql`
        query ($condition: Boolean!) {
            CollectionsList(condition: $condition) {
                name
                imageUrl
                collectionId
            }
        }
    `;

    const {data} = useQuery(collectionsByTypeQuery, {
        variables: {
            condition: isStyle
        }
    })

    return (
       <Container>
           <h1>Shop By {isStyle ? "Style" : "Collection"}</h1>
           <GridContainer isStyle={isStyle}>
               {
                   data?.CollectionsList.map((element: ICollectionItem) => <SectionPreviewComponent title="Bracelets With Note" height={300} width={isStyle ? 330: 450}
                                                                                   key={element.collectionId} imageUrl={element.imageUrl}/>)
               }
           </GridContainer>
       </Container>
   )
}

export default ItemsByCollectionOrStyleComponent