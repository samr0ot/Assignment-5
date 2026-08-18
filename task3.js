function getUser(id, callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: id, name: "Ram" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback(["post1", "post2"]);
  }, 1000);
}

function getComments(post, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback(["nice", "good"]);
  }, 1000);
}

getUser(1, function (user) {
  console.log("User:", user);

  getPosts(user.id, function (posts) {
    console.log("Posts:", posts);

    getComments(posts[0], function (comments) {
      console.log("Comments:", comments);
    });
  });
});
