import React from "react";

import "./Post.css";

const Post = (props) => {
  const infoPost = props.postInfo;

  const users = [
    "Alvaro",
    "Alejandro",
    "Borja",
    "Alberto",
    "Patricia",
    "Irene",
    "Ricardo",
    "Noemy",
    "Gaizka",
    "Jose",
    "Santiago",
    "Sergio",
    "Alejandro",
  ];

  const comments = [
    "Soy experto en React",
    "Que majos son los TAs",
    'Me ha encantado la película "Sharknado 27"',
    "La clase de hoy ha sido increible",
    "JavaScript salvó a mi hija",
    "Hoy invito a café",
  ];

  const randomUser = users[Math.floor(Math.random() * users.length)];
  const randomComment = comments[Math.floor(Math.random() * comments.length)];

  return (
    <div className="post">
      <h3 className="postTitle">
        {infoPost.name ? infoPost.name : randomComment}
      </h3>
      <p className="userName">@{infoPost.user ? infoPost.user : randomUser}</p>
      <p className="postText"> {infoPost.body}</p>
    </div>
  );
};

export default Post;
