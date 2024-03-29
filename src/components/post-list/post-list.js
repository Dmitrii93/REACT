import React from "react";

import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  if (!posts.length) {
    const elements = <p>Таких постов нету(</p>;
    return <ul className="app-list list-group">{elements}</ul>;
  }
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleLike={() => onToggleLike(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
