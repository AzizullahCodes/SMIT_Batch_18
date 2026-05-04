// const handleApiCall = async () => {
//   const apiUrl = "https://jsonplaceholder.typicode.com/users/2";
//   const res = await fetch(apiUrl);
//   const actualData = await res.json();
//   console.log(actualData);
// };

// handleApiCall();

const inputEl = document.getElementById("custom-text");
const handleSpeak = () => {
  // console.log(inputEl.value);
  speechSynthesis.speak(new SpeechSynthesisUtterance(inputEl.value));
};
