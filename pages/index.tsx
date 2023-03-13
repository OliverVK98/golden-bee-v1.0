import MainPageBanner from "../components/main-page-banner/main-page-banner";
import ItemsCarouselFour from "../components/items-carousel-four/items-carousel-four";
import styled from "styled-components";
import Image from "next/legacy/image";
import EmailInput from "../components/email-input";
import React from "react";
import ItemsByCollectionOrStyle from "../components/items-by-collection-or-style/items-by-collection-or-style";
import requestItemsServer from "../utils/request-items-server";
import ItemsCarouselTwo from "../components/items-carousel-two/items-carousel-two";
import useMediaQuery from '@mui/material/useMediaQuery';
import {BANNER_IMAGE_ONE_URL, BANNER_IMAGE_TWO_URL} from "../config/const";

const MainPageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const BannerText = styled.div`
  width: 100vw;
  background-color: rgb(247,247,247);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5%;
  
  h1 {
    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 576px) {
      font-size: 20px;
    }
  }
  
  p {
    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
`

const ImageContainer = styled.div`
  height: 30vh;
  width: 100vw;
  background-size: contain;
  background-position: center;
  position: relative;
  margin-top: 35px;
`

export async function getServerSideProps() {
  const dataTrendingOne = await requestItemsServer([1, 2, 3, 4]);
  const dataTrendingTwo = await requestItemsServer([5, 6, 7, 8]);
  const dataTrendingThree = await requestItemsServer([9, 10, 11, 12]);

  const dataNewOne = await requestItemsServer([13, 14, 15, 16]);
  const dataNewTwo = await requestItemsServer([25, 18, 19, 20]);
  const dataNewThree = await requestItemsServer([21, 22, 23, 24]);

  return {
    props: {
      dataNewOne,
      dataNewTwo,
      dataNewThree,
      dataTrendingOne,
      dataTrendingTwo,
      dataTrendingThree
    }
  }
}

interface IFrontPageItem{
  productId: number,
  price: number,
  discountedPrice: number,
  frontImageUrl: string,
  rating: number,
  itemName: string,
  isAvailable: boolean
}

interface IStartProps {
  dataTrendingOne: IFrontPageItem[],
  dataTrendingTwo: IFrontPageItem[],
  dataTrendingThree: IFrontPageItem[],
  dataNewOne: IFrontPageItem[],
  dataNewTwo: IFrontPageItem[],
  dataNewThree: IFrontPageItem[],
}

const Home: React.FC<IStartProps> = ({dataNewOne,dataNewTwo, dataNewThree, dataTrendingOne,dataTrendingTwo,dataTrendingThree}) => {
  const isSmallScreen = useMediaQuery('(max-width: 1061px)');

  return (
      <div>
        <main>
          <MainPageContainer>
            <MainPageBanner/>
            {
              !isSmallScreen && <ItemsCarouselFour dataOne={dataTrendingOne} dataTwo={dataTrendingTwo} dataThree={dataTrendingThree} title={"Trending now"} />
            }
            {
                isSmallScreen && <ItemsCarouselTwo dataOne={dataTrendingOne} dataTwo={dataTrendingTwo} dataThree={dataTrendingThree} title={"Trending now"} />
            }
            <BannerText>
              <h1>
                Join our mission to save and protect our buzzy pollinators around the globe❤️
              </h1>
              <p>
                Wear your lovely Golden Bee accessories as a reminder of being part of the community. Every purchase saves the bees.
              </p>
            </BannerText>
            {
              !isSmallScreen && <ItemsCarouselFour dataOne={dataNewOne} dataTwo={dataNewTwo} dataThree={dataNewThree} title={"New Arrivals"} />
            }
            {
              isSmallScreen && <ItemsCarouselTwo dataOne={dataNewOne} dataTwo={dataNewTwo} dataThree={dataNewThree} title={"New Arrivals"} />
            }
            <ImageContainer>
              <Image src={BANNER_IMAGE_ONE_URL} alt="banner-image" layout={"fill"} objectFit="cover" />
            </ImageContainer>
            <ItemsByCollectionOrStyle isStyle={false}/>
            <EmailInput mainColor={"gray"} title={"Subscribe for exclusive deals"}/>
            <ItemsByCollectionOrStyle isStyle={true}/>
            <ImageContainer>
              <Image src={BANNER_IMAGE_TWO_URL} alt="banner-image" layout={"fill"} objectFit="cover" />
            </ImageContainer>
          </MainPageContainer>
        </main>
        <footer>
        </footer>
      </div>
  )
}

export default Home