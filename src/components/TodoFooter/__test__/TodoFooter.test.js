import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const h1Element = screen.getByText(/5 tasks left/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("should render the task singular when the number of incomplete tasks is 0", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const h1Element = screen.getByText(/1 task left/i);
    expect(h1Element).toBeTruthy();
  });

  it("should look is element is visible", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const h1Element = screen.getByText(/1 task left/i);
    expect(h1Element).toBeVisible();
  });

  it("should look if element is paragraph", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toContainHTML("p");
  });

  it("should contain text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByTestId("para");
    expect(pElement).toHaveTextContent("1 task left");
  });
});
