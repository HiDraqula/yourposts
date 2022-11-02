import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createPost,
  getPost,
  postActions,
} from "../features/post/post.reducer";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CircularProgress,
  Paper,
  TextField,
} from "@mui/material";
import HeadStepper from "./HeadStepper";
import postApis from "../services/post.apis";

export default function AddPost() {
  let { postId } = useParams();

  const [post, setPost] = useState({
    id: null,
    title: "Write Title Here...",
    body: "Write Body Here...",
  });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    let res = await postApis.createPost(data);
    setPost(res);
    dispatch(postActions.createPost(res));
  };

  return (
    <section className="editpost">
      <HeadStepper>
        <h2>Add</h2>
      </HeadStepper>
      {post?.id && (
        <Card className="px1">
          <h3 className="flex jc-sb">
            <span onClick={onSubmit}>
              {post.id}. {post.title}
            </span>
          </h3>
          <p>{post.body}</p>
        </Card>
      )}
      {/* <Paper className="p1 my1"> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my2 gap2 flex fd-col ai-stretch"
      >
        <TextField
          id="title"
          label="Title"
          variant="standard"
          fullWidth
          //   defaultValue={post.title}
          {...register("title")}
        />
        <TextField
          id="body"
          label="Body"
          variant="standard"
          fullWidth
          multiline
          rows={4}
          //   defaultValue={post.body}
          {...register("body")}
        />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <Button type="submit" variant="contained">
          submit
        </Button>
        {/* <input type="submit" /> */}
      </form>
      {/* </Paper> */}
    </section>
  );
}
