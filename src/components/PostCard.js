import { Card, Skeleton } from "@mui/material";

export default function PostCard({ post, skeleton = true }) {
  return (
    <>
      {post?.id ? (
        <Card className="px1">
          <h3 className="flex jc-sb">
            <span>
              {post.id}. {post.title}
            </span>
          </h3>
          <p>{post.body}</p>
        </Card>
      ) : (
        skeleton && <Skeleton variant="rounded" height={120} />
        // <div className="flex my2">
        //   <CircularProgress />
        // </div>
      )}
    </>
  );
}
