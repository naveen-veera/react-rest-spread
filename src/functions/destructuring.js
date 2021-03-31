

export const getUserIpDetails = ( userResponse = {} ) => {
    const { userName, userIp = '0.0.0.0' } = userResponse;
    return [userName, userIp];
} 

export const getTopThree = ( studentMarks ) => {
    const [first = null, second = null, third = null, ...rest] = studentMarks;
    return [first, second, third];
}