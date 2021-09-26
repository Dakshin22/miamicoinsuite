import React, { useState, useEffect } from "react";
import workspaces from "../services/workspacesService";
const WorkspacePage = ({ match }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = window.setInterval(() => {
        setSeconds(seconds => seconds + 1);
        window.location.reload(false);
      }, 5000);
      return () => window.clearInterval(interval);
    }, [seconds]);

  const id = match.params.id;
  const workspace = workspaces.find((workspace) => {
    return parseInt(workspace.id) === parseInt(id);
  });

  return (

    <div classNameName="container">
      <h1 className="my-4" style= {{marginLeft: "200px"}}>{workspace.title}</h1>
      <div style={{ float: "left", position: "relative", left: "200px"}} className="col-md-8">
        <img className="img-fluid" src={workspace.imgUrl} alt="" />
      </div>
      <div className="row" style={{position: "relative", right: "200px"}}>
        <div className="col-md-20">
          <h3 className="my-3">Workspace Description</h3>
          <p>{workspace.description}</p>
          <h3 className="my-3">Workspace Metrics</h3>
          <ul style= {{listStyleType: "none", fontSize: "20px"}}>
            <li>How many $MIA holders are currently here?: {workspace.currentlyAt}</li>
            <li>How many $MIA holders have accessed this workspace?: {workspace.accessed}</li>
            <li>Location: {workspace.address}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;