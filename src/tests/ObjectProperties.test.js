
import ObjectProperties from "../functions/ObjectProperties";
require('jest')

describe('Object Properties', () => {

    const studentDetails = [
        {
            name : 'Harry',
            grade : 'VI',
            contactNumber : '9876543210',
            address : {
                street : '7th',
                city : 'Melbourne',
                country : 'America'
            }
        },
        {
            name : 'Tom',
            grade : 'I',
            contactNumber : '1234567890',
            address : {
                street : '7th',
                city : 'Manchester',
                country : 'America'
            }
        },
        {
            name : 'Albus',
            grade : '0',
            contactNumber : '5432167890',
            address : {
                street : '7th',
                city : 'New York',
                country : 'America'
            }
        }
    ]

    test('testcase1', () => {

        const answer1 = {
            name : 'Harry',
            grade : 'VI',
            contactNumber : '9876543210',
            address : {
                street : '7th',
                city : 'Melbourne',
                country : 'America'
            }
        }

        let temp = ObjectProperties(studentDetails, 'Harry', 'Hyrakuren')
        expect(temp['Harry']).toEqual(answer1);

    })

    test('testcase2', () => {

        const answer1 = {
            name : 'Harry',
            grade : 'VI',
            contactNumber : '9876543210',
            address : {
                street : '7th',
                city : 'Melbourne',
                country : 'America'
            }
        }

        let temp = ObjectProperties(studentDetails, 'Melbourne', 'Hyrakuren')
        expect(temp['Harry']).not.toEqual(answer1);

    })

    test('testcase3', () => {

        const answer1 = {
            'Harry' : {
                name : 'Harry',
                grade : 'VI',
                contactNumber : '9876543210',
                address : {
                    street : '7th',
                    city : 'Melbourne',
                    country : 'America'
                }
            },
            'Albus' : {
                name : 'Albus',
                grade : '0',
                contactNumber : '5432167890',
                address : {
                    street : '7th',
                    city : 'New York',
                    country : 'America'
                }
            }

        }

        let temp = ObjectProperties(studentDetails, 'Harry', 'Albus')
        expect(temp).toEqual(answer1);

    })



})