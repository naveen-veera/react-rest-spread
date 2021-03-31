import { makeHttpRequestUrl } from "../functions/urlValidator";

describe('Test Url Validator', () => {

    test('testcase31', () => {
        expect(makeHttpRequestUrl('https://typicodejson.com', 'post 1', 'GET', {})).toBe('https://typicodejson.com/post/1');
    })

    test('testcase32', () => {
        expect(makeHttpRequestUrl('https://typicodejson.com', 'posts', 'POST', {name : 'France'})).toBe('https://typicodejson.com/posts');
    })

    test('testcase33', () => {
        expect(makeHttpRequestUrl('https://typicodejson.com', 'post 1', 'PUT', {})).toBe('Enter a body');
    })


    test('testcase34', () => {
        expect(makeHttpRequestUrl('https://typicodejson.com', 'post 1', 'POST', {})).toBe('Enter a body');
    })

    test('testcase35', () => {
        expect(makeHttpRequestUrl('https://typicodejson.com', 'posts', 'GET', {name : 'HI', course : 'DV'})).toBe('https://typicodejson.com/posts?name=HI&course=DV');
    })


})