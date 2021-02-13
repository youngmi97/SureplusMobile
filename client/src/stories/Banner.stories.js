import React from "react";
import { action } from "@storybook/addon-actions";
import Banner from "../components/Banner";

export default {
  title: "Design System/Banner",
  component: Banner,
};

export const InternetConnectionStatus = () => <Banner>Hello Button</Banner>;
