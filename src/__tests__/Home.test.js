import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("uses the 'name' and 'city' props to display the correct text", () => {
  render(<Home name="Liza" city="New York" color="firebrick" />);
  const liza = screen.queryByText(`Liza is a Web Developer from New York`);
  expect(liza).toBeInTheDocument();

  render(<Home name="Duane" city="Queens" color="firebrick" />);
  const duane = screen.queryByText(`Duane is a Web Developer from Queens`);
  expect(duane).toBeInTheDocument();
});

test("uses the 'color' prop to set the inline style color of the h1", () => {
  render(
    <Home name="Liza" city="New York" color="firebrick" />
  );
  const h1 = screen.getByRole("heading", { level: 1 });
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual("firebrick");
});

test("renders nothing if name or city is missing", () => {
  render(<Home color="blue" />);
  const h1 = screen.queryByRole("heading", { level: 1 });
  expect(h1).not.toBeInTheDocument();
});

test("renders with a different color prop", () => {
  render(
    <Home name="Alex" city="Boston" color="blue" />
  );
  const h1 = screen.getByRole("heading", { level: 1 });
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual("blue");
});

test("renders with different name and city values", () => {
  render(<Home name="Sam" city="Chicago" color="green" />);
  const sam = screen.queryByText("Sam is a Web Developer from Chicago");
  expect(sam).toBeInTheDocument();
});

test("h1 has correct text content", () => {
  render(
    <Home name="Taylor" city="Austin" color="purple" />
  );
  const h1 = screen.getByRole("heading", { level: 1 });
  expect(h1).toHaveTextContent("Taylor is a Web Developer from Austin");
});
