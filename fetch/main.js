var postApi = "https://jsonplaceholder.typicode.com/posts";
fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var post = data.map(function (item) {
      return `<li> <h2>  ${item.title} </h2>
     <p> ${item.body} </p>
      </li>`;
    });
    console.log(post);
var posts = post.join('')
    document.getElementById("block").innerHTML = posts;
  });
