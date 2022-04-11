export type createRequestTokenType = {
    "success": boolean,
    "expires_at": string
    "request_token": string
}
export type createSessionType = {
    "success": boolean
    "session_id": string
}
export type createSessionWithLoginType = {
    "success": boolean,
    "expires_at": string
    "request_token": string
}