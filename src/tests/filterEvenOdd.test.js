import { fireEvent, queryByTestId, render, screen, waitFor } from '@testing-library/react'
import FilterEvenOdd from '../components/FilterEvenOdd/FilterEvenOdd'


describe('Test Filter Odd Even', () => {


    test('testcase41', async () => {

        render(<FilterEvenOdd />);

        const inputEl = screen.queryByTestId('numberOfInput');
        const generatebuttonEl = screen.queryByTestId('generateNumber');

        fireEvent.change(inputEl, { target : { value : '34 57 68 79 80' }});
        fireEvent.click(generatebuttonEl);

        let originalListArray = screen.queryAllByTestId('originalList');
        
        const arrayValueForRef = originalListArray.map(item => {
            return item.textContent;
        });

        const oddbutton = screen.queryByTestId('oddbutton');

        fireEvent.click(oddbutton);

        let filteredList = screen.queryAllByTestId('filteredList');
        const arrayValueForRefFiltered = filteredList.map(item => {
            return item.textContent;
        });

        expect(arrayValueForRefFiltered.toString()).toBe("57,79");

    })


    test('testcase42', async () => {

        render(<FilterEvenOdd />);

        const inputEl = screen.queryByTestId('numberOfInput');
        const generatebuttonEl = screen.queryByTestId('generateNumber');

        fireEvent.change(inputEl, { target : { value : '34 57 68 79 80' }});
        fireEvent.click(generatebuttonEl);

        let originalListArray = screen.queryAllByTestId('originalList');
        
        const arrayValueForRef = originalListArray.map(item => {
            return item.textContent;
        });

        const evenbutton = screen.queryByTestId('evenbutton');

        fireEvent.click(evenbutton);

        let filteredList = screen.queryAllByTestId('filteredList');
        const arrayValueForRefFiltered = filteredList.map(item => {
            return item.textContent;
        });

        expect(arrayValueForRefFiltered.toString()).toBe("34,68,80");

    })

})