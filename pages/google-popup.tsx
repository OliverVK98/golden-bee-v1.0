import { signIn, useSession } from "next-auth/react";
import {ReactElement, useEffect} from "react";
import {useDispatch} from "react-redux";
import {setIsSignInModalOpen} from "../store/slices/modalSlice";

const GooglePopup = () => {
    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    dispatch(setIsSignInModalOpen(false));

    useEffect(() => {
        if (!(status === "loading") && !session) void signIn("google");
        if (session) window.close();
    }, [session, status]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                left: 0,
                top: 0,
                background: "white",
            }}
        ></div>
    );
};

export default GooglePopup;

GooglePopup.getLayout = function PageLayout(page: ReactElement) {
    return (
        <>
            {
                page
            }
        </>
    )
}