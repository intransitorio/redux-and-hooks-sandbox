import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => {
  return (
    <div>
      <strong>Modulo: {activeModule.title}</strong> <br />
      <span>Aula: {activeLesson.title}</span>
      <div>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${activeLesson.video}`}
          title={activeLesson.title}
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
}))(Video);
