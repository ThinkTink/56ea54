import { render, screen, within } from "@testing-library/react";

import StarRating from "./StarRating";
// import blogs from "./data/blogs.json";
import userEvent from "@testing-library/user-event";

// ---------------------------------------------------------------- //
//                                                                  //
//                 PLEASE DO NOT MODIFY THIS FILE.                  //
//               Hatchways automation depends on it.                //
//                                                                  //
// ---------------------------------------------------------------- //

test("Ratings should have 5 stars", async () => {
  render(<StarRating rating={4} />);

  const ratingsList = screen.getByRole("list", { name: "ratings" });
  const stars = within(ratingsList).getAllByRole("listitem");

  expect(stars).toHaveLength(5);
});

test("4 star rating should have 4 stars filled", async () => {
  render(<StarRating rating={4} />);

  const ratingsList = screen.getByRole("list", { name: "ratings" });
  const stars = within(ratingsList).getAllByRole("listitem");

  for (let i = 0; i < 5; i++) {
    const star = stars[i];

    if (i < 4) {
      const filledStar = within(star).getByLabelText("filled star");
      expect(filledStar).toBeInTheDocument();
    } else {
      const emptyStar = within(star).getByLabelText("empty star");
      expect(emptyStar).toBeInTheDocument();
    }
  }
});
