import toast from "react-hot-toast";
export const copyContent = async () => {
  try {
    let text = document.getElementById("copyText").innerHTML;
    const textContent = copyText.innerText;

    await navigator.clipboard.writeText(textContent);
    toast.success("Copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
