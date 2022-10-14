import React, { useEffect, useState } from "react";
import PostItems from "./PostItems";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Posts = () => {
  const [posts, setposts] = useState([]);

  
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((result) => setposts(result.posts));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {posts.map((pos, i) => {
          return (
            <Grid item xs={4}>
              <PostItems
                id={pos.id}
                title={pos.title}
                body={pos.body}
                userId={pos.userId}
                tags={pos.tags}
                reactions={pos.reactions}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Posts;
