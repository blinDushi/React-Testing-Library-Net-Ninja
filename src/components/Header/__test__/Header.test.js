import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop in HEADER", () => {
  render(<Header title="Todo List" />);
  const headingElement = screen.getByText(/todo list/i);
  expect(headingElement).toBeInTheDocument();
});

it("should check if HEADER is heading", () => {
  render(<Header title="Todo List" />);
  const headingElement = screen.getByRole("heading", { name: "Todo List" });
  expect(headingElement).toBeInTheDocument();
});

it("get by HEADER title example", () => {
  render(<Header title="Todo List" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it("get by HEADER test ID example", () => {
  render(<Header title="Todo List" />);
  const getHeaderById = screen.getByTestId("header-1");
  expect(getHeaderById).toBeInTheDocument();
});

//FIND BY
it("should FIND BY TEXT", async () => {
  render(<Header title="Todo List" />);
  const headingElement = await screen.findByText(/todo list/i);
  expect(headingElement).toBeInTheDocument();
});

//Query By
it("should QUERY BY TEXT", () => {
  render(<Header title="Todo List" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

//Get all By Role
it("should GET ALL BY ROLE", () => {
  render(<Header title="Todo List" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
