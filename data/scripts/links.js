const baseURL = "https://sartentooth.github.io/wdd230/";
const linksURL = "https://sartentooth.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    
  }
  
  getLinks();