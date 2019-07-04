# React-Card &middot; [![Build Status](https://travis-ci.org/subhanahmed047/react-card.svg?branch=master)](https://travis-ci.org/subhanahmed047/react-card)

A simple react component that uses the flexbox and styled-components to create a card layout.

Demo: https://subhanahmed047.github.io/react-card/

## Getting Started

Clone the project and run the following command to get started:
```
yarn start
```

## Running the tests

To run the test just run the following command:

```
yarn test
```

## TDD
The following tools are used for testing:

- Jest
- React-Test-Renderer

The following tests are performed in this project:

1. Smoke Testing
    - Why? Because this test provides you with Build Verification by ensuring that the most important features work.
    - I test the root component (app.js in this case) to see if the component and its children work without crashing. 
2. Snapshot Testing
    - Why? Beacuse it ensures that a UI does not change unexpectedly. 
    - I have written snapshots for several child components of the card to compare their mounted output with a snapshot created at the start. 
    - This test works best with components that do not change a lot. 

## CI Process
I have used [_travis CI_](https://travis-ci.org/) to automate the build and test process for this project. 
- On every build it tests the app and deploys it to github pages. 
## Styling

* [Styled-Components](https://www.styled-components.com) is used to write the component specific styles. 

## Approach Used:
I have used css flexbox to design this component because of its space distribution and alignment capabilities. It makes a difficult task very easy and clean as you don't have to write a lot of styles yourself. 

