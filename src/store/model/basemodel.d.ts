export interface BaseModelResp<T>{
    status: number;
    responseMsg: number;
    responseMsgString: string;
    content: T;
}
