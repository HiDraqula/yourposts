import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
// import { Root } from "./index";

describe("Testing Initial Flow", () => {
  // render(Root);
  test("renders home page", () => {
    render(<App />);
    const linkElement = screen.getByText(/Go to Dashboard/i);
    expect(linkElement).toBeInTheDocument(); // .toBeTruthy
  });
  test("going to Dashboard", () => {
    render(<App />);
    const dashboardBtn = screen.getByTestId("dashboard");
    fireEvent.click(dashboardBtn);
    const addButton = screen.getByText(/Add Post/i);
    expect(addButton).toBeInTheDocument();
  });
  // test("going to AddPost page", () => {
  //   render(<App />);
  //   const dashboardBtn = screen.getByTestId("dashboard");
  //   fireEvent.click(dashboardBtn);
  //   const addButton = screen.getByText(/Add Post/i);
  //   fireEvent.click(addButton);
  //   const addHead = screen.getByText(/Add/i);
  //   expect(addHead).toBeInTheDocument();
  // });
});
