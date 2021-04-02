import { render, fireEvent, screen, waitFor, findByTestId } from '@testing-library/react';
import ImageLoader from '../components/ImageLoader/ImageLoader';
import jest from 'jest';


describe('Test Image Loader', () => {


    test('testcase1', async () => {
        render(<ImageLoader />);


        const  inputElement1  = screen.queryByTestId('imageinput1');
        const  inputElement2 = screen.queryByTestId('imageinput2');
        const  inputElement3 = screen.queryByTestId('imageinput3');
        const submit = screen.queryByTestId('submit');

        await fireEvent.change(inputElement1, {target : { value : 'https://picsum.photos/536/354'}});
        await expect(inputElement1.value).toBe('https://picsum.photos/536/354')
        await fireEvent.change(inputElement2, {target : { value : 'https://picsum.photos/536/354'}});
        await expect(inputElement2.value).toBe('https://picsum.photos/536/354')
        await fireEvent.change(inputElement3, {target : { value : 'https://picsum.photos/536/354'}});
        await expect(inputElement3.value).toBe('https://picsum.photos/536/354');

        await fireEvent.click(submit);

        expect(screen.getAllByRole('img')).toBeTruthy();

        // await waitFor(() => {
        //     expect(screen.queryByTestId('image')).toBeInTheDocument();
        //   })

        // await expect(screen.queryByTestId('image')).toBeInTheDocument();
        
    })
})