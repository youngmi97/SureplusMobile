// LoopCircleLoading.stories.js

import React from "react";
import LoadingCircle from "../components/Loader/LoopCircleLoading";

// This default export determines where your story goes in the story list
export default {
  title: "Design System/Loader/Loading Circle",
  component: LoadingCircle,
};

const Template = (args) => <LoadingCircle />;

export const Primary = Template.bind({});

Primary.args = {
  /* the args you need here will depend on your component */
};
