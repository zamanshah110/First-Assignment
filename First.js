document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from actually submitting

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data); // Logs the input field values as an object
  });



