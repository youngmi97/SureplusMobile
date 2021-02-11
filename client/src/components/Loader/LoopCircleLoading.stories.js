// LoopCircleLoading.stories.js

import React from "react";
import LoadingCircle from "./LoopCircleLoading";

// This default export determines where your story goes in the story list
export default {
  title: "Loader/Loading Circle",
  component: LoadingCircle,
};

const Template = (args) => <LoadingCircle />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
