const getURL = window.location.search;


console.log(getURL);

const params = new URLSearchParams(getURL); // or new URLSearcchParams(window.location.search);
console.log(params);
console.log(params.get('first'));

document.getElementById("results").innerHTML = 
`<p>Appointement for: ${params.get('first')}</p>
<p>Proxy ${params.get("ordinance")} on ${params.get("date")} in the ${params.get("location")}</p>
<p>Your phone number: ${params.get("phone")}</p>
<p>Your email: ${params.get("email")}</p>`;