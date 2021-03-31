
import { getAreaOfCircle } from "../functions/areaCalculator";


describe('Test Area Calculator', () => {
    test('testcase11', () => {
        expect(getAreaOfCircle(1)).toBe("3.14");  
    })

    test('testcase12', () => {
        expect(getAreaOfCircle(3)).toBe("28.27");
    })

    test('testcase13', () => {
        expect(getAreaOfCircle(45)).toBe("6361.73");
    })

    test('testcase14', () => {
        expect(getAreaOfCircle(0)).toBe("0.00");
    })

    test('testcase15', () => {
        expect(getAreaOfCircle(-1)).toBe("3.14");
    })
})
