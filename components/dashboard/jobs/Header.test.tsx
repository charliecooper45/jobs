import { render } from "@testing-library/react";
import Home from "./Header";

describe("Header", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
