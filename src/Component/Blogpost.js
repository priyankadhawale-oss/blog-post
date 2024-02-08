import React, { useState } from "react";
import authors from "./Blog";
const Blogpost = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    setSelectedTitle(null); // Clear selected title when a new author is selected
  };
  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            <button onClick={() => handleAuthorClick(author)}>
              {author.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedAuthor && (
        <div>
          <h2>Titles by {selectedAuthor.name}</h2>
          <ul>
            {selectedAuthor.posts.map((post, index) => (
              <li key={index}>
                <button onClick={() => setSelectedTitle(post)}>
                  {post.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedTitle && (
        <div>
          <h2>{selectedTitle.title}</h2>
          <p>{selectedTitle.content}</p>
        </div>
      )}
    </div>
  );
};

export default Blogpost;
