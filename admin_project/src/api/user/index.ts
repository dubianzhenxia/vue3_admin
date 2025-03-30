//统一管理用户相关接口

import request from "@/utils/request.ts";
import {loginRequest, loginResponse, userInfoResponse} from "./type.ts"
enum API{
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info",
}

export const reqLogin = (data: loginRequest) => request.post<any, loginResponse>(API.LOGIN_URL, data);

export const reqUserInfo = () => request.get<any, userInfoResponse>(API.USERINFO_URL);