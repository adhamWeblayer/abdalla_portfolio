import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};

const page = (props: Props) => {
  return <div>page</div>;
};

export default page;
