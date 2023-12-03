import React, { useState } from "react";
import Reply from "./Reply";
const Comments = (props) => {
  const { com } = props;
  const [showComments, setShowComments] = useState(true);

  return (
    <div>
      {com.length > 0 &&
        com?.map((c) => {
          if (c.children) {
          }

          return (
            <>
              <div className="comment">{c.comment}</div>
              <Reply />
              {c?.children?.length > 0 ? (
                <div className="reply">
                  <button onClick={() => setShowComments(!showComments)}>
                    {showComments ? "Hide Comments" : "Show Commnets"}
                  </button>

                  {showComments && <Comments com={c.children} />}
                </div>
              ) : null}
            </>
          );
        })}
    </div>
  );
};

export default Comments;
