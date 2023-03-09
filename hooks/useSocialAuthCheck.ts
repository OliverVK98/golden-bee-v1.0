import { useEffect } from "react";
import {signOut, getSession} from "next-auth/react";
import {useDispatch, useSelector} from "react-redux";
import {setIsUserAuthenticated, setProviderUserData} from "../store/slices/userSlice";
import {RootState} from "../store/store";

const useSocialAuthCheck = () => {
    const userData = useSelector((state: RootState) => state.userState.userData);

    const getSessionData = async () => {
        return await getSession();
    }
    const dispatch = useDispatch();
    const isUserAuthenticated = useSelector(
        (state: RootState) => state.userState.isUserAuthenticated
    )

    useEffect(() => {
        if (Object.keys(userData).length > 0) return;
        async function checkSession() {
            const session = await getSessionData();
            if(session === null) {
                await signOut({callbackUrl: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`});
                dispatch(setIsUserAuthenticated(false));
                dispatch(setProviderUserData({}));
            }
        }
        if (isUserAuthenticated) checkSession();
    }, [getSessionData]);

};

export default useSocialAuthCheck;