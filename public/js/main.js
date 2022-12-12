const onSubmit = (e) => {
  e.preventDefault();

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Please add some image description");
    return;
  }
  generateImageRequest(prompt, size);
};

const generateImageRequest = async (prompt, size) => {};

const showSpinner = () => {
  document.querySelector(".spinner").classList.add("show");
};

const removeSpinner = () => {
  document.querySelector(".spinner").classList.remove("show");
};

document.querySelector("#image-form").addEventListener("submit", onSubmit);
