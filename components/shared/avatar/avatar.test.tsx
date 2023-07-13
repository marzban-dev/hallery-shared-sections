import { render, screen } from "test-utils";
import Avatar from ".";

describe("Avatar", () => {
  const imageSrc = "http://example.com/image.jpg";
  const title = "John Doe";

  it("renders an image with the given source and alt text", () => {
    render(<Avatar picture={imageSrc} title={title} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src");
    expect(imageElement).toHaveAttribute("alt");
  });

  it("renders a placeholder when no picture is given", () => {
    render(<Avatar picture={null} title={title} />);
    const placeholderElement = screen.getByTestId("loading-overlay");
    expect(placeholderElement).toBeInTheDocument();
  });

  it("applies the rounded-full class when square prop is not given", () => {
    render(<Avatar picture={imageSrc} title={title} />);
    const containerElement = screen.getByTestId("avatar-container");
    expect(containerElement).toHaveClass("rounded-full");
    expect(containerElement).not.toHaveClass("rounded-[15px]");
  });

  it("applies the rounded-[15px] class when square prop is true", () => {
    render(<Avatar picture={imageSrc} title={title} square />);
    const containerElement = screen.getByTestId("avatar-container");
    expect(containerElement).toHaveClass("rounded-[15px]");
    expect(containerElement).not.toHaveClass("rounded-full");
  });
});