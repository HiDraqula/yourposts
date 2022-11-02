import { Button, Card, IconButton, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getPosts } from "./post.reducer";
import EditIcon from "@mui/icons-material/Edit";
// import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
// import { dispatch } from "../../app/store";

export function Posts() {
  const list = useSelector((state) => state.post.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const hPostDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <section className="posts">
      {/* <div className="flex jc-sb">
        <h2>Posts</h2>
      </div> */}
      <Link to={"/post/add"}>
        <Button
          variant="outlined"
          className="mb1"
          startIcon={<AddIcon />}
          // size="large"
          fullWidth
        >
          Add Post
        </Button>
      </Link>
      {(list.length &&
        list?.map((post) => (
          <Card key={post.id} className="p1 mb1">
            <h3 className="flex jc-sb mt0">
              <span>
                {post.id}. {post.title}
              </span>
              <span className="flex fd-row gap1">
                <Link to={"/post/edit/" + post.id}>
                  <IconButton color="primary" size="large">
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton
                  color="error"
                  size="large"
                  onClick={() => hPostDelete(post.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </span>
            </h3>
            <p>{post.body}</p>
            {/* <Divider /> */}
          </Card>
        ))) ||
        [...Array(10)].map((a, b) => (
          <Skeleton key={b} variant="rounded" height={120} className="p1 mb1" />
        ))}
    </section>
  );
}
