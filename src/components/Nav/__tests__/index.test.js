import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  // arrange
  it('inserts emoji into the h2', () => {
  const { getByLabelText } = render(<Nav />);

  // assert
  expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})  

describe('links are visible', () => {
  // arrange
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);

    //assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });

})