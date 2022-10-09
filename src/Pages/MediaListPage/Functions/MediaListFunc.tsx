import {mediaType} from "../../../Common/types";

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
    setSearch: (section:{section: string})=>void
}

export const loadData = ({mediaType, value, setSearch}:loadDataParams) => {
    if (mediaType === 'movie') {
        switch (value) {
            case 0:
                setSearch({section: 'topRated'})
                break
            case 1:
                setSearch({section: 'popular'})
                break
            case 2:
                setSearch({section: 'upcoming'})
                break
            case 3:
                setSearch({section: 'nowPlaying'})
                break
        }
    }else {
        switch (value) {
            case 0:
                setSearch({section: 'topRated'})
                break
            case 1:
                setSearch({section: 'popular'})
                break
            case 2:
                setSearch({section: 'onAir'})
                break
        }
    }
}