> Sytac React-js task

# Sytac.io test assignment

## Introduction

With this test assignment we want to assess the candidates knowledge of react, and following implementation requirements. Please read carefully the project setup and the requirements bellow.

## Project setup

This project is made with a simple installation of `npx create-react-app` using typescript.

In `src/App.tsx` you can find a data structure called `DATA`. This is used to render a list of drinks using the `DisplayItem` component located in `src/components/DisplayItem.tsx`.

On the top of the list we have added a component called `SearchInput` that needs to be used to search the `DATA` and update the list of drinks displayed.

To start the development environment you need to run `yarn install` and `yarn start`

## Requirements

Your assignment is to create an implementation of `DisplayItem` and `SearchInput`.

`DisplayItem` needs to present the name of the drinks and a list of ingredients. It needs to have a button to toggle between showing and not showing the ingredients. Add an `data-testid` `displayitem-name` to the name element, `displayitem-list` to the list of ingredients container (`<ul data-testid="displayitem-list">`) and `displayitem-toggle` to the toggle button so the QA engineer can asses the implementation.

`SearchInput` needs to display an text input where the user will enter the search term. Add an `data-testid="search-box"` to the input so the QA engineer can asses the implementation.

The implementation of search functionality needs to be handled as the user types. When the user stops typing the list of items needs to be re rendered with the items that contain a substring of the input in the name of the drink. This needs to be done with optimization in mind.
