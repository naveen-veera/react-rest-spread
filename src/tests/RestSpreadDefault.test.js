import { filterEven, filterOdd, generateRandomList } from '../functions/filterOddEven';

require('jest');

describe('Testing Odd Even Functionality', () => {
    test('testcase21', () => {
        let filteredEvenList = filterEven(2, 45, 67 ,78, 890, 43).toString();
        expect(filteredEvenList).toBe("2,78,890");

        filteredEvenList = filterEven(4, 5, 6 ,7, 8).toString();
        expect(filteredEvenList).toBe("4,6,8");

        let sampleSpreadList = [2, 11, 4, 5, 6];
        expect(filterEven(...sampleSpreadList).toString()).toBe("2,4,6");
    })

    test('testcase22', () => {
        let filteredOddList = filterOdd(2, 45, 67 ,78, 890, 43).toString();
        expect(filteredOddList).toBe("45,67,43");

        filteredOddList = filterEven(4, 5, 6 ,7, 8).toString();
        expect(filteredOddList).toBe("4,6,8");

        let sampleSpreadList = [2, 56, 67, 32, 567, 78, 678, 98];
        expect(filterOdd(...sampleSpreadList).toString()).toBe("67,567");
    })

    test('testcase23', () => {
        expect(generateRandomList().length).toBe(7);
        expect(generateRandomList(3).length).toBe(3);
    })

})