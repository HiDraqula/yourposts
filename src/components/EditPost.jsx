import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearPost,
  getPost,
  postActions,
  updatePost,
} from "../features/post/post.reducer";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CircularProgress,
  Skeleton,
  TextField,
} from "@mui/material";
import HeadStepper from "./HeadStepper";
import postApis from "../services/post.apis";

export default function EditPost() {
  let { postId } = useParams();

  useEffect(() => {
    console.log("Mounted EditPost");
    getPostAndSet();
  }, []);

  const [post, setPost] = useState({
    id: null,
    title: " ",
    body: " ",
  });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setPostAndForm(post);
    console.log("Setted", { post });
  }, [post]);

  const onSubmit = async (data) => {
    let pData = { ...post, ...data };
    let res = await postApis.updatePost(pData);
    setPostAndForm(res);
    dispatch(postActions.updatePost(pData));
  };
  const getPostAndSet = async () => {
    let res = await postApis.getPost(postId);
    setPostAndForm(res);
  };
  const setPostAndForm = (post) => {
    setPost(post);
    setValue("title", post.title);
    setValue("body", post.body);
  };
  //   if (!post.title) {
  //     return (
  //       <div className="flex" style={{ minHeight: "80vh" }}>
  //         <CircularProgress />
  //       </div>
  //     );
  //   }
  return (
    <section className="editpost">
      <HeadStepper>
        <h2>
          Edit <span className="c-grey">: {postId}</span>
        </h2>
      </HeadStepper>
      {post?.id ? (
        <Card className="px1">
          <h3 className="flex jc-sb">
            <span onClick={onSubmit}>
              {post.id}. {post.title}
            </span>
          </h3>
          <p>{post.body}</p>
        </Card>
      ) : (
        <Skeleton variant="rounded" height={120} />
        // <div className="flex my2">
        //   <CircularProgress />
        // </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my2 gap2 flex fd-col ai-stretch"
      >
        {/* <input defaultValue="test" {...register("title")} />
        <input {...register("body")} /> */}
        <TextField
          id="title"
          label="Title"
          variant="standard"
          fullWidth
          defaultValue=""
          {...register("title")}
        />
        <TextField
          id="body"
          label="Body"
          variant="standard"
          fullWidth
          multiline
          rows={4}
          defaultValue=""
          {...register("body")}
        />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <Button type="submit" variant="contained">
          submit
        </Button>
        {/* <input type="submit" /> */}
      </form>
    </section>
  );
}
