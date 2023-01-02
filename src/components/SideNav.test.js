import { render, screen } from '@testing-library/react';
import SideNav from "./SideNav";

test('tests whether all the buttons have rendered on DOM', () => {
  render(<SideNav />);

  const lineButtonElement = screen.getByTitle("Line");
  const rectangleButtonElement = screen.getByTitle("Rectangle");
  const circleButtonElement = screen.getByTitle("Circle");
  const triangleButtonElement = screen.getByTitle("Triangle");
  const pencilButtonElement = screen.getByTitle("Pencil");
  const eraserButtonElement = screen.getByTitle("Eraser");

   expect(lineButtonElement).toBeInTheDocument();
   expect(rectangleButtonElement).toBeInTheDocument();
   expect(circleButtonElement).toBeInTheDocument();
   expect(triangleButtonElement).toBeInTheDocument();
   expect(pencilButtonElement).toBeInTheDocument();
   expect(eraserButtonElement).toBeInTheDocument();

});