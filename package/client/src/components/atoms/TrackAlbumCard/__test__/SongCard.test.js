import React from 'react';
import { ReactDOM } from 'react-dom';
import '@testing-library/react'
import { fireEvent, render } from '@testing-library/react';
import TrackCard from '..';

test('renders content', () => {
     const component = render(<TrackCard />);
    });
