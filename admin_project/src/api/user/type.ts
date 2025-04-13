//登陆接口的入参类型
export interface loginRequest {
username: string;
password: string;
}

//登陆接口返回data的type
interface dataType{
    token: string;
    message: string;
}

//登陆接口返回值的type
export interface loginResponse{
    code: number;
    data: dataType
}

//获取用户信息的type
interface userInfo{
    userId: string;
    avatar: string;
    username: string;
    password: string;
    desc: string;
    roles: string[];
    buttons: string[];
    routes: string[];
    token: string;
}
interface user{
    checkUser: userInfo;
}

export interface userInfoResponse {
    code: number;
    data: user
}