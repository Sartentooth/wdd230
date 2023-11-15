const baseURL = "https://sartentooth.github.io/wdd230/";
const linksURL = "https://sartentooth.github.io/wdd230/data/links.json";
const list = document.querySelector(".list");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

const displayLinks = (weeks) => {

  weeks.forEach((week) => {
    let listItem = document.createElement("li");
    listItem.textContent = `Lesson ${week.lesson}: `;
    
    week.link.forEach((link, linkIndex) => {
      let linkElement = document.createElement("a");
      linkElement.setAttribute("href", link.url);
      linkElement.setAttribute("target", "_blank");
      
      if (linkIndex < week.link.length -1){
        linkElement.textContent = ` ${link.title} |`;
      } else {
        linkElement.textContent = ` ${link.title}`;
      }
      
      listItem.append(linkElement);
      
    });
    
    list.append(listItem);
  });
}

getLinks();