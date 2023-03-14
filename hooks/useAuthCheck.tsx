import {useEffect} from "react";
import axios from "axios";
import {IAuthResponse} from "../utils/auth-api-helpers/auth-service";
import {setIsUserAuthenticated, setUserData} from "../store/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {WEBSITE_URL} from "../config/const";

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const { isUserAuthenticated, providerUserData } = useSelector((state: RootState) => state.userState);

    useEffect( ()=> {
        if (Object.keys(providerUserData).length > 0) return;
        const isLoggedIn = async () => {
            try {
                await axios.get(`${WEBSITE_URL}/api/auth/refresh-token-exist`, {withCredentials: true})
            } catch (e) {
                localStorage.removeItem("accessToken");
                dispatch(setIsUserAuthenticated(false));
                dispatch(setUserData({}));
                return;
            }

            if (localStorage.getItem("accessToken")) {
                try {
                    const response = await axios.get<IAuthResponse>(`${WEBSITE_URL}/api/auth/refresh`, {withCredentials: true});
                    if (response.status===200) {
                        localStorage.setItem("accessToken", response.data.accessToken);
                        dispatch(setUserData(response.data.user));
                    } else {
                        dispatch(setIsUserAuthenticated(false));
                        dispatch(setUserData({}));
                    }
                } catch (e: any) {
                    dispatch(setIsUserAuthenticated(false));
                    dispatch(setUserData({}));
                }
            } else {
                dispatch(setIsUserAuthenticated(false));
                dispatch(setUserData({}));
            }
        }
        if (isUserAuthenticated) isLoggedIn();
    }, []);
}

export default useAuthCheck