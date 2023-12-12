import { Circle } from "./circle";
import { render } from "@testing-library/react";
import { ElementStates } from "../../../types/element-states";

describe("Тестирование компонента Circle", () => {
  it("Корректная отрисовка элемента без буквы", () => {
    const view = render(<Circle />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента с буквами", () => {
    const view = render(<Circle letter="letter" />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента с head", () => {
    const view = render(<Circle head="head" />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента с react-элементом в head", () => {
    const view = render(<Circle head={<Circle />} />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента с tail", () => {
    const view = render(<Circle tail="tail" />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента с react-элементом в tail", () => {
    const view = render(<Circle tail={<Circle />} />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента с index", () => {
    const view = render(<Circle index={0} />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента с пропом isSmall", () => {
    const view = render(<Circle isSmall={true} />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента в состоянии default", () => {
    const view = render(<Circle state={ElementStates.Default} />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента в состоянии changing", () => {
    const view = render(<Circle state={ElementStates.Changing} />);
    expect(view).toMatchSnapshot();
  });

  it("Корректная отрисовка элемента в состоянии modified", () => {
    const view = render(<Circle state={ElementStates.Modified} />);
    expect(view).toMatchSnapshot();
  });
});
