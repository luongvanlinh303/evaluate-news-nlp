import { validUrl } from "./validURL";

function handleSubmit(event) {
  event.preventDefault();

  const baseURL = "http://localhost:8081/sentimentAPI";
  const url = document.getElementById("url").value;
  console.log(url);

  if (validUrl(url)) {
    fetch(baseURL, {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((res) => res.json())
      .then(function (res) {
        console.log(res);
        document.getElementById("agreement").innerHTML = res.agreement;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("confidence").innerHTML = res.confidence;
        document.getElementById("irony").innerHTML = res.irony;
      })
      .catch((error) => {
        console.log(" an error", error);
      });
  } else {
    alert("The URL is not valid. Please isert another one.");
  }
}

export { handleSubmit };
