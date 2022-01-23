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

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  tasks.map((element) => {
    fireEvent.change(inputElement, { target: { value: element.task } });
    expect(inputElement.value).toBe(element.task);
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(`${element.task}`);
    expect(divElement).toBeInTheDocument();
    return expect(inputElement.value).toBe("");
  });
};

describe("Todo", () => {
  it("should render elements", () => {
    render(<MockTodo />);
    addTask([
      { task: "Kryje kursin mire" },
      { task: "normal qe qishtu osht" },
      { task: "ne rregull" },
    ]);
  });

  it("should check if length is right", () => {
    render(<MockTodo />);
    let addTodoListAsItem = [
      { task: "Kryje kursin mire" },
      { task: "normal qe qishtu osht" },
      { task: "ne rregull" },
    ];
    addTask(addTodoListAsItem);

    const todoListElement = screen.getAllByTestId("task-container");
    expect(todoListElement.length).toBe(addTodoListAsItem.length);
  });
});
