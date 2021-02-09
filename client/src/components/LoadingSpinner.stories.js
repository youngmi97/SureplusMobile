// YourComponent.stories.js

import React from "react";
import LoadingSpinner from "./LoadingSpinner";

// This default export determines where your story goes in the story list
export default {
  title: "LoadingSpinner",
  component: LoadingSpinner,
};

const Template = (args) => <LoadingSpinner />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
