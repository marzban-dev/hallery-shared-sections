import { fireEvent, render, screen } from "test-utils";
import Badge from ".";
import { IBadgeProps } from "./badge.types";

const defaultProps: IBadgeProps = {
    id: "1",
    onSelect: jest.fn(),
    selected: false,
    text: "Badge Text",
};

describe("Badge Component", () => {
    test("renders without error", () => {
        render(<Badge {...defaultProps} />);
        expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
    });

    test("applies selected styles when selected prop is true", () => {
        render(<Badge {...defaultProps} selected={true} />);
        expect(screen.getByText(defaultProps.text)).toHaveClass("text-blue-400");
    });

    test("calls onSelect function when clicked", () => {
        render(<Badge {...defaultProps} />);
        fireEvent.click(screen.getByTestId("badge-container"));
        expect(defaultProps.onSelect).toHaveBeenCalledTimes(1);
        expect(defaultProps.onSelect).toHaveBeenCalledWith(defaultProps.id);
    });
});
