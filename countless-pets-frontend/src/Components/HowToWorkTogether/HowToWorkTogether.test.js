import { render, screen } from '@testing-library/react';
import HowToWorkTogether from './index';

test('should render the correct text', () => {  
render(<HowToWorkTogether/>);
 const heading = screen.getByText(/How to work together/i)
 expect (heading).toBeInTheDocument();
})