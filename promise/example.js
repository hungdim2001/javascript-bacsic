var users = [
  {
    id: 1,
    name: "hung nguyen",
  },
  {
    id: 2,
    name: "nguyen van cuong",
  },
  {
    id: 3,
    name: "nguyen thi thuy",
  },
];
var comments = [
  {
    id: 1,
    user_id: 1,
    content: "anh Son chua ra video a`?",
  },
  {
    id: 2,
    user_id: 2,
    content: "vua ra xong em oi!",
  },
];
function getComment(comments) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}
function getUserById(UserId) {
  return new Promise(function (resolve) {
    var result = users.filter(function (item) {
      return UserId.includes(item.id);
    });
    resolve(result);
  });
}
getComment(comments).then(function (comments) {
  var UserId = comments.map(function (item) {
    return item.user_id;
  });
  getUserById(UserId)
    .then(function (user) {
      return {
        nguoidung: user,
        binhluan: comments,
      };
    })
    .then(function (data) {
      var commentId = document.getElementById("comment-block");
      var html = "";
      data.binhluan.forEach(function (itembl) {
        var use = data.nguoidung.find(function (itemnd) {
          return itembl.user_id === itemnd.id;
        });
        html += `<li>${use.name}:${itembl.content} </li>`;
        console.log( `<li>${use.name}:${itembl.content} </li>`)
      });
      commentId.innerHTML= html;
    });
});

//     var UserIds = data.map(function (item) {
//       return item.user_id;
//     });
//     return UserIds;
//   })
//   .then(function (UserIds) {
//     getUserById(UserIds).then(function (data) {
//     return {
//       user:data,
//     }
//     });
//   })
//  .then(function(data){
//    console.log(data);
//  })
