import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";


test("allows the user to type a name and submit the form", () => {
  const handleAddItem = jest.fn();

  render(<ItemForm onAddItem={handleAddItem} />);

  // Find the input and select elements
  const nameInput = screen.getByLabelText(/Name/i);
  const categorySelect = screen.getByLabelText(/Category/i);

  // Type in the name
  fireEvent.change(nameInput, { target: { value: "Ice Cream" } });
  fireEvent.change(categorySelect, { target: { value: "Dessert" } });

  // Submit the form
  const submitButton = screen.getByRole("button", { name: /add item/i });
  fireEvent.click(submitButton);

  // Check if the callback was called correctly
  expect(handleAddItem).toHaveBeenCalledWith({
    name: "Ice Cream",
    category: "Dessert",
  });

  // Input should be cleared after submission
  expect(nameInput.value).toBe("");
});
