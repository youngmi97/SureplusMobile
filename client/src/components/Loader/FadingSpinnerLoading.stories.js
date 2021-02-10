//FadingSpinnerLoading.stories.js

import React from "react";
import FadingSpinner from "./FadingSpinnerLoading";

export default {
  title: "Loader/Fading Spinner",
  component: FadingSpinner,
};

const Template = (args) => <FadingSpinner />;

export const Primary = Template.bind({});

Primary.args = {};
