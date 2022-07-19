import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header.js";
import { BrowserRouter } from "react-router-dom";


describe("Header component", () => {
    it("renders correct heading", () => {
        const { container } = render(<BrowserRouter><Header /></BrowserRouter>)
        expect(container).toMatchSnapshot();
    })
})
