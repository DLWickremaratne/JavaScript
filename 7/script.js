// Book param order: title, author, ISBN, pubYear, pageNumber, currentPage, readStatus
//5 objects


import Book from "./Book.js";

const surveillanceCapitalism = new Book(
    "The Age of Surveillance Capitalism",
    "Shoshana Zuboff",
    9781610395694,
    "2019",
    691,
    691,
    "Finished"
  );


  const content = ` 
  
  <main>
      <article>
        <h1>${surveillanceCapitalism.title}</h1>
        <ul>
          <li>Author:${surveillanceCapitalism.author}</li>
          <li>ISBN:${surveillanceCapitalism.ISBN}</li>
          <li>PubYear:${surveillanceCapitalism.pubYear}</li>
          <li>PageNumber:${surveillanceCapitalism.pageNumber}</li>
          <li>CurrentPage:${surveillanceCapitalism.currentPage}</li>
          <li>ReadStatus:${surveillanceCapitalism.readStatus}</li>
        </ul>
      </article>
    </main>
  `;

  document.body.innerHTML = content;
  console.log(surveillanceCapitalism);
  
 