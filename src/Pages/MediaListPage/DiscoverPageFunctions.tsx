import {mediaType} from "../../Common/types";

export const getValueFromURL = (section:string | null) => {
    switch (section) {
        case 'topRated': return 0
        case 'popular': return 1
        case 'upcoming':
        case 'onAir': return 2
        case 'nowPlaying': return 3
        default: return 0
    }
}

type loadDataParams = {
    mediaType:string | undefined,
    value:number,
    setSearch: (section:{section: string, page: string})=>void
}

export const loadData = ({mediaType, value, setSearch}:loadDataParams) => {
    if (mediaType === 'movie') {
        switch (value) {
            case 0:
                setSearch({section: 'topRated', page: '1'})
                break
            case 1:
                setSearch({section: 'popular', page: '1'})
                break
            case 2:
                setSearch({section: 'upcoming', page: '1'})
                break
            case 3:
                setSearch({section: 'nowPlaying', page: '1'})
                break
        }
    }else {
        switch (value) {
            case 0:
                setSearch({section: 'topRated', page: '1'})
                break
            case 1:
                setSearch({section: 'popular', page: '1'})
                break
            case 2:
                setSearch({section: 'onAir', page: '1'})
                break
        }
    }
}

export const createArray = (size:number) => {
    const array = []
    for (let i = 1; i <= size; i++) {
        array.push(i)
    }
    return array
}
