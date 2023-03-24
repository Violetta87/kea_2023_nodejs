//task in the footer display year snd copyright symbol.
const footerDiv = document.getElementById("copyright-year");
const date = new Date();
const today = date.getFullYear();
footerDiv.innerText = "\251" + today;