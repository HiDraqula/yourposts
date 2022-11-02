import { useState } from "react";
import { useDispatch } from "react-redux";

import { postActions } from "../features/post/post.reducer";
import { useForm } from "react-hook-form";

import HeadStepper from "./HeadStepper";
import postApis from "../services/post.apis";
import PostForm from "./PostForm";
import PostCard from "./PostCard";

export default function AddPost() {
  const [post, setPost] = useState({
    id: null,
    title: "Write Title Here...",
    body: "Write Body Here...",
  });
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

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
      <PostCard post={post} skeleton={!!post.id} />
      {/* <Paper className="p1 my1"> */}
      <PostForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      {/* </Paper> */}
    </section>
  );
}
