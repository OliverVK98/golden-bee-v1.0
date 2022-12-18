import styled from "styled-components";
import SectionPreviewComponent from "./section-preview.component";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`

const ItemsByCollectionComponent: React.FC = () => {
   return (
       <Container>
           <h1>Shop By Collection</h1>
           <GridContainer>
               <SectionPreviewComponent title="Bracelets With Note"
                                        height={300}
                                        width={450}
                                        imageUrl="https://cdn.shopify.com/s/files/1/0457/5648/1703/collections/Bee_Bright_Flower_2_540x.jpg?v=1636309843"/>
           <SectionPreviewComponent title="Silver Style Jewelry"
                                        height={300}
                                        width={450}
                                        imageUrl="https://cdn.shopify.com/s/files/1/0457/5648/1703/collections/Bee_Bright_Flower_2_540x.jpg?v=1636309843"/>
           <SectionPreviewComponent title="Bee Theme"
                                        height={300}
                                        width={450}
                                        imageUrl="https://cdn.shopify.com/s/files/1/0457/5648/1703/collections/Bee_Bright_Flower_2_540x.jpg?v=1636309843"/>
           <SectionPreviewComponent title="Sunflower Theme"
                                        height={300}
                                        width={450}
                                        imageUrl="https://cdn.shopify.com/s/files/1/0457/5648/1703/collections/Bee_Bright_Flower_2_540x.jpg?v=1636309843"/>

           </GridContainer>
       </Container>
   )
}

export default ItemsByCollectionComponent