import { useRouter } from 'next/router';

const OrderSuccessful = () => {
    const router = useRouter();

    console.log(router)

    if (!router.query.redirect) {
        return (
            <div>
                <h1>Access Denied</h1>
                <p>You are not authorized to access this route.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Restricted Route</h1>
            <p>Welcome! You are authorized to access this route.</p>
        </div>
    );
}

export default OrderSuccessful