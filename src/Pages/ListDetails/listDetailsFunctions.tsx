export const parseTime = (time:number) => {
    return  {
        hour: Math.floor(time/60),
        minute: time%60
    }
}
export const getParseRevenue = (revenue:string):{parseRevenue:number, char:string} => {
    let parseRevenue = 0
    let char = ''
    if (revenue) {
        parseRevenue = Math.floor(Number(revenue)/1000)
        char = 'K'
        if(parseRevenue > 1000) {
            parseRevenue = Math.floor(parseRevenue/1000)
            char = 'M'
            if(parseRevenue > 1000) {
                parseRevenue = Math.floor(parseRevenue/100)/10
                char = 'B'
            }
        }
    }
    return {parseRevenue, char}
}