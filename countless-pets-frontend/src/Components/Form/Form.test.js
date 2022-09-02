import Form from './index.js'
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {test, expect, jest} from '@jest/globals';



//testing if the submit button Works
test('submit button works on click', () => {
    render(<Form />);
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
    });


//testing  if the submit button has "Submit" as a text
test('submit button has "submit" as text', () => {
    render(<Form />);
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('Submit');
    });


//testing if the clear button Works
test('clear button works on click', () => {
    render(<Form />);
    const clearButton = screen.getByText('Clear');
    expect(clearButton).toBeInTheDocument();
    }
    );


//test if the h2 tag has "Offer a Study Session" as a text
test('h2 tag has "Offer a Study Session" as text', () => {
    render(<Form />);
    const h2 = screen.getByText('Offer a Study Session');
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('Offer a Study Session');
    }
    );

    test ("ClearButton handleClick", function () {
        const submitForm = jest.fn()
    //ARRANGE:
    // Render the Form + pass it the props that it needs
        render(<Form onClick={submitForm}/>);
        
    //ACT:
        //Click the button
        //How do we click something in out test?
        //How do we select the button?
    const button = screen.getByText('Submit');
    userEvent.click(button)
    
    //ASSERT:
    //Assert that the handlecClick props was called
    expect(submitForm).toHaveBeenCalled()
    });
    
    

