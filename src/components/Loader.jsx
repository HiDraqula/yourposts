import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

export default function Loader() {
  const ref = useRef(null);
  let loader = useSelector((state) => state.app.loader);

  useEffect(() => {
    loader ? ref.current.continuousStart() : ref.current.complete();
  }, [loader]);
  return (
    <>
      <LoadingBar color="#f11946" ref={ref} />
    </>
  );
}
