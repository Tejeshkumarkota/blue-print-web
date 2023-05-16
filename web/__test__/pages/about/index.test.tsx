import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import AboutIndexPage from '@/pages/about'

describe('about page', () => {
    it('should render', () => {
        render(<AboutIndexPage />)
        const header = screen.getByTestId('about');
        const headerText = 'Coming soon about page!'
        expect(header).toHaveTextContent(headerText)
    })
})