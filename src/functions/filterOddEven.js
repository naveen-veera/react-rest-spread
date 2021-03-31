

export const filterOdd = (...args) => {
    return args.filter(item => item % 2 !== 0);
}

export const filterEven = (...args) => {
    return args.filter(item => item % 2 === 0);
}

export const generateRandomList = (n = 7) => {

    const newList = [];
    for(let i = 0; i < n; i++) {
        newList.push(Math.floor(Math.random() * 100) + 1)
    }
    return newList;
}