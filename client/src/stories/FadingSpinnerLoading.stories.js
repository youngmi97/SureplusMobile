//FadingSpinnerLoading.stories.js

import React from "react";
import FadingSpinner from "../components/Loader/FadingSpinnerLoading";

export default {
  title: "Design System/Loader/Fading Spinner",
  component: FadingSpinner,
};

const Template = (args) => <FadingSpinner />;

export const Primary = Template.bind({});

Primary.args = {};
