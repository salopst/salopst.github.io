//Get query params
const params = new URLSearchParams(window.location.search);
const query = params.get("query");

// Define and configure an index for Lunr.
const idx = lunr(function () {
  this.ref("id");
  this.field("title", {
    boost: 20,
  });
  this.field("date");
  this.field("categories");
  this.field("tags");
  this.field("content", {
    boost: 10,
  });

  // Add documents from search index to
  // provide the data to idx
  for (const key in window.store) {
    this.add({
      id: key,
      title: window.store[key].title,
      date: window.store[key].date,
      tags: window.store[key].tag,
      content: window.store[key].content,
    });
  }
});

// execute the search and store results with:
const results = idx.search(query);

/*
Display results
*/

//a function that builds a list of results and displays them on your search page.
// Recall the id from the ul element in layouts/search/list.html and store it as a variable:
const searchResults = document.getElementById("results");

// Make dates prettier
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const locale = "en-US";
  // const options = { month: "short", day: "numeric" }
  return new Date(dateString).toLocaleDateString(locale, options);
  // return new Date(dateString).Intl.DateTimeFormat(locale, options)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
};

//Iterate over results and build a <li> element for each one.
if (results.length) {
  let resultList = "";
  for (const n in results) {
    // Use unique ref from results list to get the full item build its <li>
    const item = store[results[n].ref];
    resultList += '<li class="post-item">';
    resultList +=
      '<a style="hover:this.style.color=`red`" href="' +
      item.url +
      '"><span class="post-title" style="font-size:110%">' +
      item.title +
      "</span></a>";
    resultList +=
      '<span class="post-day">' +
      formatDate(item.date.substring(0, 19), "en-US") +
      "</span>";
    // Add a snippet of the content
    resultList += `<p style="font-size:95%"> ${item.content.substring(0,150)} ... </p>`;
    resultList += "</li>";
  }
  searchResults.innerHTML = resultList;
} else {
  searchResults.innerHTML = "<h1>😭 No results found</h1>";
}
