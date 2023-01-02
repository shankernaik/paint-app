import { render , screen } from "@testing-library/react";
import { Line , Circle , Triangle , Rectangle , Pencil , Eraser } from "./svg";


test('testing of Line icons', () => {
    render(<Line/>);
    const lineIcon = screen.getByTestId("line");
    expect(lineIcon).toBeInTheDocument();

});
test('testing of rectangle icons', () => {
    render(<Rectangle/>);
    const lineIcon = screen.getByTestId("rectangle");
    expect(lineIcon).toBeInTheDocument();

});
test('testing of circle icons', () => {
    render(<Circle/>);
    const lineIcon = screen.getByTestId("circle");
    expect(lineIcon).toBeInTheDocument();

});
test('testing of triangle icons', () => {
    render(<Triangle/>);
    const lineIcon = screen.getByTestId("triangle");
    expect(lineIcon).toBeInTheDocument();

});
test('testing of pencil icons', () => {
    render(<Pencil/>);
    const lineIcon = screen.getByTestId("pencil");
    expect(lineIcon).toBeInTheDocument();

});
test('testing of eraser icons', () => {
    render(<Eraser/>);
    const lineIcon = screen.getByTestId("eraser");
    expect(lineIcon).toBeInTheDocument();

});