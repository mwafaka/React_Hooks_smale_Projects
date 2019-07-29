import React from "react";

const ProjectDetail = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">project {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur reiciendis exercitationem itaque non voluptas sit, quo
            sint unde nostrum nulla eius ipsum ullam! Eveniet adipisci fugit
            enim, vitae commodi repellat.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>#welcome</div>
          <div>07.02.2019</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
