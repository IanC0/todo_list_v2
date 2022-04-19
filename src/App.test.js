import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react'
import App from './App';


test("tasks submitted are displayed", () => {
  render(<App />)
  //finding input field first
  let inputField = screen.getByTestId("input")
  fireEvent.change(inputField, {target: {value: 'test input'}})
  expect(inputField.value).toBe('test input')

  //finding submit button next, submitting with the 'test input' from above
  const submitButton = screen.getByText("Submit")
  fireEvent.click(submitButton)

  const listItem = screen.getByTestId(/inputtedText/i)
  expect(listItem).toHaveTextContent('test input')
})

test("submission button adds task (fireEvent)", () => {
  render(<App />)
  const submitButton = screen.getByText("Submit")
  fireEvent.click(submitButton)
  fireEvent.click(submitButton)
  fireEvent.click(submitButton)
  fireEvent.click(submitButton)
  const numberOfListItems = screen.getAllByTestId(/outstandingListItem/i)
  expect(numberOfListItems.length).toBe(4)
})

test("delete button visible on all list items", () => {
  render(<App />)
  const submitButton = screen.getByText("Submit")
  fireEvent.click(submitButton)
  fireEvent.click(submitButton)
  fireEvent.click(submitButton)
  fireEvent.click(submitButton)
  const deleteButton = screen.getAllByText("x")
  expect(deleteButton.length).toBe(4)
})