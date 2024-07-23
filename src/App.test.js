import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AlertProvider } from "./context/alertContext"; // Ensure correct import
import Form from "./components/Form";

describe("Form Submission", () => {
  test("User is able to submit the form", async () => {
    render(
      <AlertProvider>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </AlertProvider>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: "Henry" } });
    fireEvent.change(screen.getByLabelText(/Email Address/), { target: { value: "john_henry@gmail.com" } });
    fireEvent.change(screen.getByLabelText(/Comments \(Optional\)/), { target: { value: "This is a comment" } });

    // Submit the form
    fireEvent.click(screen.getByText(/Submit/));

    // Wait for the form to reset or for the success message to appear
    await waitFor(() => {
      // Check if form fields are reset
      expect(screen.getByLabelText(/First Name/)).toHaveValue('');
      expect(screen.getByLabelText(/Last Name/)).toHaveValue('');
      expect(screen.getByLabelText(/Email Address/)).toHaveValue('');
      expect(screen.getByLabelText(/Comments \(Optional\)/)).toHaveValue('');
    });
  });

  test("Form cannot be submitted if the first name is not provided", async () => {
    render(
      <AlertProvider>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </AlertProvider>
    );

    // Leave the first name field empty and fill in other fields
    fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: "Henry" } });
    fireEvent.change(screen.getByLabelText(/Email Address/), { target: { value: "john_henry@gmail.com" } });
    fireEvent.change(screen.getByLabelText(/Comments \(Optional\)/), { target: { value: "This is a comment" } });

    // Attempt to submit the form
    fireEvent.click(screen.getByText(/Submit/));

    // Check for validation error messages
    await waitFor(() => {
      expect(screen.getByText(/Required/)).toBeInTheDocument();
    });
  });
});
