import {signIn, useSession} from "next-auth/react";
import {useDispatch} from "react-redux";
import {setIsSignInModalOpen} from "../store/slices/modalSlice";
import {ReactElement, useEffect} from "react";

const GithubPopup = () => {
    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    dispatch(setIsSignInModalOpen(false));

    useEffect(() => {
        if (!(status === "loading") && !session) void signIn("github");
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

export default GithubPopup

GithubPopup.getLayout = function PageLayout(page: ReactElement) {
    return (
        <>
            {
                page
            }
        </>
    )
}