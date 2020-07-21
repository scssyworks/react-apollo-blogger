import Loader from "../Loader";
import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from 'react-test-renderer';

describe('Loader component', () => {
    it('should render', () => {
        render(<Loader />);
        expect(screen.findByTestId('loader')).toBeTruthy();
    });
    it('should match snapshot', () => {
        const tree = renderer.create(<Loader />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});