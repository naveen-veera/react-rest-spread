import { getUserIpDetails, getTopThree } from "../functions/destructuring"


describe('Test Destructuring', () => {

    let userDetails = {
        userIp : '172.103.92.01',
        userName : 'Danny',
        email : 'dannytest@gmail.com',
        password : '123',
        rating : '4.5',
        dob : '31/02/2021',
        os : 'windows',
        processor : 'Ryzen 7',
        ram : '4GB'
    }

    test('testcase51', () => {

        delete userDetails.userName;

        const value = getUserIpDetails(userDetails);
        expect(value).toStrictEqual([undefined, '172.103.92.01']);

    })

    test('testcase52', () => {

        delete userDetails.userIp;
        userDetails.userName = 'Danny';

        const value = getUserIpDetails(userDetails);
        expect(value).toStrictEqual(['Danny', '0.0.0.0']);

    })

    test('testcase53', () => {

        let value = getTopThree([34, 56, 78, 32, 21, 66]);
        expect(value).toStrictEqual([34, 56, 78]);

        value = getTopThree([34, 56]);
        expect(value).toStrictEqual([34, 56, null]);

        value = getTopThree([]);
        expect(value).toStrictEqual([null, null, null]);

    })

})