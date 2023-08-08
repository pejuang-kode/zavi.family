"use client";

import * as React from "react";

export const Button = () => {
  return (
    <button className="ui-bg-gray-300" onClick={() => alert("boop")}>
      Boop
    </button>
  );
};
