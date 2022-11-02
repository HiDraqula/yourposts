import { Button, TextField } from "@mui/material";

export default function PostForm({ register, handleSubmit, onSubmit }) {
  return (
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
  );
}
