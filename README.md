# Hatchways Frontend Work Simulation

## General Instructions

For this project, you are provided a starting codebase for a React front end and are to build on this starting code by adding new features. The starting code is for the application described in the section below, and you can find your assigned work on the Issues tab of this repository.

Please open a **single pull request** with all of the changes needed to implement the features described in the issue, then return to the Hatchways dashboard to mark your assessment as completed.

We will use [this rubric](https://drive.google.com/file/d/1Lfn6JnanBhuSjMDQaIdIBk1_QK7i9mNU/view) to evaluate your submission. Please note that if your submission does not attempt to complete all of the requirements, or does not pass our plagiarism screening, we will be unable to provide feedback on it. Please contact hello@hatchways.io if you have any questions or concerns.

---

# Introduction to this Application

You will be designing front-end components in React for a simple movie website. Currently the data is from the file `src/data/movies.json`.

A movie has the following structure:

```json
 {
    "id": 1,
    "bannerImage": "https://images.mubicdn.net/images/film/129405/cache-112828-1647520890/image-w1280.jpg",
    "posterImage": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cea02018401907.562c8df284c32.jpg",
    "title": "True Detective",
    "synopsis": "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
    "genre": ["action", "crime", "thriller"],
    "rating": 5
  },
```

---

### Setup

```
yarn install
```

### Format Code

```
yarn prettier --write .
```

### Development

```
yarn start
```

### Testing

```
yarn test
```
