export type EpisodeStats = {
    "id": number
    "rated": {"value":number} | false
}
export type ratingStatus = {
    "status_code": number
    "status_message": string
    success: boolean
}