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

const generateImageRequest = async (prompt, size) => {
  try {
    showSpinner();

    const response = await fetch("/openai/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });
    if (!response.ok) {
      removeSpinner();
      throw new Error("That image could not be generated");
    }

    const data = await response.json();

    const imageUrl = data.data;

    document.querySelector("#image").src = imageUrl;

    if (imageUrl !== 0) {
      document.querySelector(".noImageYet").classList.add("none");
    } else {
      document.querySelector(".noImageYet").classList.remove("none");
    }

    removeSpinner();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
};

const showSpinner = () => {
  document.querySelector(".spinner").classList.add("show");
};

const removeSpinner = () => {
  document.querySelector(".spinner").classList.remove("show");
};

document.querySelector("#image-form").addEventListener("submit", onSubmit);
