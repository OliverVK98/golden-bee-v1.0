import PreviewFourItemsComponent from "./preview-four-items.component";
import React from "react";
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {productsByIdsQuery} from "../graphql/queries/queries";
import getFourNumbers from "../utils/get-four-numbers";

const ProposedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
`

const RelativeContainer = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  height: 390px;
  width: 1060px;
  display: block;
  overflow: hidden;
`

const ProposedTextContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,222,89);
  width: 300px;
  height: 2rem;
`

const ItemsSuggestionComponent = () => {
    const productIdArr = React.useMemo(() => getFourNumbers(), []);
    const {data} = useQuery(productsByIdsQuery, {
        variables: {id: productIdArr}
    })

    return (
        <ProposedItemsContainer>
            <ProposedTextContainer>
                You may also like
            </ProposedTextContainer>
            <RelativeContainer>
                <PreviewFourItemsComponent left={0} transitionActive={false} dataArr={data?.ProductsByMultipleIds}/>
            </RelativeContainer>
        </ProposedItemsContainer>
    )
}

export default ItemsSuggestionComponent