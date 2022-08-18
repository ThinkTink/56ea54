import { render, screen, within } from "@testing-library/react";

import HatchwaysCinema from "./HatchwaysCinema";
// import blogs from "./data/blogs.json";
import userEvent from "@testing-library/user-event";

// ---------------------------------------------------------------- //
//                                                                  //
//                 PLEASE DO NOT MODIFY THIS FILE.                  //
//               Hatchways automation depends on it.                //
//                                                                  //
// ---------------------------------------------------------------- //

test("Search bar should exists", async () => {
  render(<HatchwaysCinema />);
  const searchTitleInput = screen.getByRole("textbox", {
    name: "search by title",
  });

  expect(searchTitleInput).toBeInTheDocument();
});
