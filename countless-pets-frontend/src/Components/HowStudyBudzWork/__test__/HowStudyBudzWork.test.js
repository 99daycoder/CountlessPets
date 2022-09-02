import { render, screen } from '@testing-library/react';
import HowStudyBudzWork from '../index';

test('should render the correct text', () => {  
render(<HowStudyBudzWork/>);
 const h1 = screen.getByRole('heading', { name: /How StudyBudz work/i })
 expect (h1).toBeInTheDocument();
})



