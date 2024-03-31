import React from "react";

export const copyContent = async () => {
  try {
    let text = document.getElementById("copyText").innerHTML;
    const textContent = copyText.innerText;

    await navigator.clipboard.writeText(textContent);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
