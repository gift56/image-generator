const onSubmit = (e) => {
  e.preventDefault();

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;
};

document.querySelector("#image-form").addEventListener("submit", onSubmit);
