import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, error, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading</h3>}
      {error && <h3>error.message</h3>}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {posts &&
          posts.map((post) => {
            return (
              <article
                key={post.id}
                style={{
                  border: "1px solid gray",
                  margin: "10px",
                  padding: "10px",
                  backgroundColor: "black",
                }}
              >
                <h3>{post.title}</h3>
                <h6>{post.body}</h6>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostView;
