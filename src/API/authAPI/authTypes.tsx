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
    "success": boolean
    "expires_at": string
    "request_token": string
    "status_code": number
    "status_message": string
}
export type createGuestSession = {
    "success": boolean,
    "guest_session_id": string,
    "expires_at": string
}

