import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postActions } from "../features/post/post.reducer";
import { useForm } from "react-hook-form";

import HeadStepper from "./HeadStepper";
import postApis from "../services/post.apis";
import PostForm from "./PostForm";
import PostCard from "./PostCard";

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

  return (
    <section className="editpost">
      <HeadStepper>
        <h2>
          Edit <span className="c-grey">: {postId}</span>
        </h2>
      </HeadStepper>

      <PostCard post={post} />
      <PostForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </section>
  );
}
