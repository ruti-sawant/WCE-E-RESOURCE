import React from "react";
import { useParams } from "react-router";

function Content() {
  const { room } = useParams();

  return (
    <div>
      <h1>Hi in {room}</h1>
    </div>
  );
}

export default Content;
