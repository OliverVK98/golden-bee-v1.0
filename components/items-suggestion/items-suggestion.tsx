import PreviewItems from "../preview-items/preview-items";
import React from "react";
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {productsByIdsQuery} from "../../graphql/queries/queries";
import getFourNumbers from "../../utils/get-four-numbers";
import arraySplit from "../../utils/array-split";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProposedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const DoubleRelativeContainer = styled.div`
  padding: 0;
  margin: 0 auto;
  position: relative;
  height: 390px;
  width: 520px;
  display: block;
  overflow: hidden;
`

const TripleRelativeContainer = styled.div`
  padding: 0;
  margin: 0 auto;
  position: relative;
  height: 280px;
  width: 320px;
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

const ItemsSuggestion = () => {
    const productIdArr = React.useMemo(() => getFourNumbers(), []);
    const {data} = useQuery(productsByIdsQuery, {
        variables: {id: productIdArr}
    })
    const [dataOne, dataTwo] = arraySplit(data?.ProductsByMultipleIds);
    const isLaptopScreen = useMediaQuery('(max-width: 1064px)');
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    return (
        <ProposedItemsContainer>
            <ProposedTextContainer>
                You may also like
            </ProposedTextContainer>
            {!isLaptopScreen && !isMobileScreen && <RelativeContainer>
                <PreviewItems left={0} transitionActive={false} dataArr={data?.ProductsByMultipleIds}/>
            </RelativeContainer>}
            {
                isLaptopScreen && !isMobileScreen &&
                <>
                    <DoubleRelativeContainer>
                        <PreviewItems left={0} transitionActive={false} dataArr={dataOne}/>
                    </DoubleRelativeContainer>
                    <DoubleRelativeContainer>
                        <PreviewItems left={0} transitionActive={false} dataArr={dataTwo}/>
                    </DoubleRelativeContainer>

                </>

            }
            {
                isMobileScreen &&
                <>
                    <TripleRelativeContainer>
                        <PreviewItems left={0} transitionActive={false} dataArr={dataOne}/>
                    </TripleRelativeContainer>
                    <TripleRelativeContainer>
                        <PreviewItems left={0} transitionActive={false} dataArr={dataTwo}/>
                    </TripleRelativeContainer>

                </>

            }
        </ProposedItemsContainer>
    )
}

export default ItemsSuggestion