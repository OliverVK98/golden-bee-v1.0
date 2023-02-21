import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  align-items: center;
  font-size: 30px;
  gap: 30px;
`

const CheckoutButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 360px;
  margin-left: 20px;
  height: 55px;
  border-radius: 10px;
  padding: 16px 24px;
  line-height: 1.5;
  display: inline-block;
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  text-transform: initial;
  letter-spacing: .5px;
  cursor: pointer;
`

const OrderFailed = () => {
    const router = useRouter();
    const prevPath = sessionStorage.getItem("currentPath");

    if (prevPath!="/checkout") {
        router.push("/")
        return null;
    }

    return (
        <Container>
            <p>
                Something went wrong during the checkout...
            </p>
            <p>
                Please try again.
            </p>
            <Link href="/checkout">
                <CheckoutButton>
                    Back to Checkout
                </CheckoutButton>
            </Link>
        </Container>
    )
}

export default OrderFailed