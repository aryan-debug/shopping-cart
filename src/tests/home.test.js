import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../Homepage.js";

describe("Home component", () =>{
    it("renders heading", () => {
        const { getByText } = render(<BrowserRouter><Homepage></Homepage></BrowserRouter>);
        expect(getByText("Buy Now").textContent).toMatch("Buy  Now");
    })
    it("has watch image", () => {
        render(<BrowserRouter><Homepage></Homepage></BrowserRouter>);
        screen.getByAltText("apple watch")
    })
})
