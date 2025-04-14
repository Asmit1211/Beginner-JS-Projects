
const API = "https://catfact.ninja/fact";
const getFacts = async () => {
  console.log("Fetching data...");

  let Response = await fetch(API);
  let data = await Response.json();
  //  console.log(Response);
  console.log(data); // this will log the cat fact

  document.getElementById("fact").innerText = data.fact;
};

document.getElementById("getFactBtn").addEventListener("click", getFacts);

document.getElementById("getFactBtn").addEventListener("dblclick",()=>{
  alert("Please Wait,The fact is Loading....!")
});

// getFacts(); // Call the function to fetch data when the page loads