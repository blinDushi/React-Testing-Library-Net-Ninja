import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Todo", () => {
  it("should render same text passed into title prop in HEADER", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "Kryje kursin mire" } });
    expect(inputElement.value).toBe("Kryje kursin mire");
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Kryje kursin mire/i);
    expect(divElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");
  });
});
