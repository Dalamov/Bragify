import React from 'react';
import { ReactDOM } from 'react-dom';
import '@testing-library/react'
import { fireEvent, render } from '@testing-library/react';
import MusicPlayer from '..';

test('renders content', () => {
     const component = render(<MusicPlayer />);
});
