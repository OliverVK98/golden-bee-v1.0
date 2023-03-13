import {useQuery} from "@apollo/client";
import {pastOrdersByUserId, providerPastOrdersByUserId} from "../../graphql/queries/queries";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import styled from "styled-components";
import PastOrder from "../../components/past-order/past-order";
import {IPastOrder} from "../../components/past-order/past-order";
import {useEffect} from "react";
import {useRouter} from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextContainer = styled.h1`
  margin-top: 30px;
  font-size: 40px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const PastOrders = () => {
    const router = useRouter()
    const isAuth = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const userId = useSelector((state: RootState) => state.userState.userData.userId);
    const providerId = useSelector((state: RootState) => state.userState.providerUserData.providerId);
    const {data, loading} = useQuery(userId ? pastOrdersByUserId : providerPastOrdersByUserId, {
        variables: {
            [userId ? "userId" : "providerId"] : userId || providerId,
        }
    })
    const userOrders = data && data[userId ? "PastOrdersQuery" : "ProviderPastOrdersQuery"];

    useEffect(() => {
        if (!isAuth) {
            router.push('/404');
        }
    }, [isAuth]);

    if (!isAuth) {
        return null;
    }

    return(
        <Container>
            <TextContainer>
                Past Orders
            </TextContainer>

            {
                loading && <OrdersContainer>
                {
                    <>
                        <PastOrder productList={[0]} quantity={[1]} createdAt="skeleton" isSkeleton={true}/>
                        <PastOrder productList={[0]} quantity={[1]} createdAt="skeleton" isSkeleton={true}/>
                    </>
                }
                </OrdersContainer>
            }

            {
                !loading && <OrdersContainer>
                {
                    userOrders?.map((order: IPastOrder, index: number) => <PastOrder key={index} {...order}/>)
                }
                </OrdersContainer>
            }
        </Container>
    )
}

export default PastOrders