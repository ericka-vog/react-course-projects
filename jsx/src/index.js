// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a react component
/** a component is a
 * function or class  that produces html to show the user (using jsx)
 * and handles feedback from the user (using event handlers)
 */

const App = function () {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h1>Warning!</h1>
        Are you sure you want to do this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Hey! Such a good post."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 6:15PM"
          comment="I hate it please delete."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Today at 8:33AM"
          comment="Nice post!"
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
