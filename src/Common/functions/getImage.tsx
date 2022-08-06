export const getImage = (size: string, path: string | null | undefined) => {
    if (path) {
        return `https://image.tmdb.org/t/p/${size + path}`
    } else return undefined
}