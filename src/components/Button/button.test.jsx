import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonType, ButtonSize, ButtonProps } from "./Button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "kclass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>nice</Button>);
    const ele = wrapper.getByText("nice");
    expect(ele).toBeInTheDocument();
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).toHaveClass("btn btn-default");
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct  button based on different props", () => {
    const wrapper = render(<Button {...testProps}>nice</Button>);
    const ele = wrapper.getByText("nice");
    expect(ele).toBeInTheDocument();
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).toHaveClass(
      `btn btn-${testProps.btnType} btn-${testProps.size} ${testProps.className}`
    );
  });
  it("should render a link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="https://github.com">
        nice
      </Button>
    );
    const ele = wrapper.getByText("nice");
    expect(ele).toBeInTheDocument();
    expect(ele.tagName).toEqual("A");
    expect(ele).toHaveClass(`btn btn-link`);
  });
  it("should render disabled button when disabled set to be true", () => {
    const wrapper = render(<Button {...disabledProps}>nice</Button>);
    const ele = wrapper.getByText("nice");
    expect(ele).toBeInTheDocument();
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).toHaveClass(`btn`);
    expect(ele.disabled).toBeTruthy();
    fireEvent.click(ele);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
