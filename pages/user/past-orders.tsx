import {useQuery} from "@apollo/client";
import {pastOrdersByUserId, providerPastOrdersByUserId} from "../../graphql/queries/queries";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import styled from "styled-components";
import PastOrderComponent from "../../components/past-order.component";
import {IPastOrder} from "../../components/past-order.component";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextContainer = styled.h1`
  margin-top: 30px;
  font-size: 40px;
`

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

//TODO: PAGINATION FOR PAST ORDERS

const PastOrders = () => {
    const router = useRouter()
    const isAuth = useSelector((state: RootState) => state.userState.isUserAuthenticated);

    useEffect(() => {
        if (!isAuth) {
            router.push('/404');
        }
    }, [isAuth]);

    if (!isAuth) {
        return null;
    }

    const userId = useSelector((state: RootState) => state.userState.userData.userId);
    const providerId = useSelector((state: RootState) => state.userState.providerUserData.providerId);
    const {data, loading} = useQuery(userId ? pastOrdersByUserId : providerPastOrdersByUserId, {
        variables: {
            [userId ? "userId" : "providerId"] : userId ? userId : providerId,
        }
    })
    const userOrders = data && data[userId ? "PastOrdersQuery" : "ProviderPastOrdersQuery"];

    return(
        <Container>
            <TextContainer>
                Past Orders
            </TextContainer>

            {
                loading && <OrdersContainer>
                {
                    <>
                        <PastOrderComponent productList={[0]} quantity={[1]} createdAt="skeleton" isSkeleton={true}/>
                        <PastOrderComponent productList={[0]} quantity={[1]} createdAt="skeleton" isSkeleton={true}/>
                    </>
                }
                </OrdersContainer>
            }

            {
                !loading && <OrdersContainer>
                {
                    userOrders?.map((order: IPastOrder, index: number) => <PastOrderComponent key={index} {...order}/>)
                }
                </OrdersContainer>
            }
        </Container>
    )
}

export default PastOrders