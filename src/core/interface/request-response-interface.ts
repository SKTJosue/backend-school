export type ResponseBody = Object | Object[] | null;

export interface RequestResponseSuccess {
    success: true;
    message: string;
    data: ResponseBody;
}

export interface RequestResponseError {
    success: false;
    message: string;
    error: ResponseBody;
}