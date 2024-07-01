import React, { useState } from "react";

export const filterProductData = async (data) => {
  const inputText = data?.technical_specifications_detail;
  // const sections = inputText?.split("#");
  inputText?.shift();
  const filteredData = inputText?.map((section) => {
    const lines = section.trim().split(/\r?\n/);
    const title = lines.shift().trim();
    const data = lines.map((line) => {
      const [label, value] = line.trim().split("///");
      return { label, value };
    });

    return { title, data };
  });
  return filteredData;
};
