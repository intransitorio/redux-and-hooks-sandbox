import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../store/actions/course";
import { bindActionCreators } from "redux";

const Sidebar = ({ modules, toggleLesson }) => {
  const LastViewedVideo = JSON.parse(
    window.localStorage.getItem("lastVideoPlayed")
  );

  useEffect(() => {
    LastViewedVideo
      ? toggleLesson(LastViewedVideo.module, LastViewedVideo.lesson)
      : toggleLesson(modules[0], modules[0].lessons[0]);
  });

  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>
                  selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={() => window.localStorage.clear()}>
        Limpar Storage
      </button>
    </aside>
  );
};

const mapStateToProps = state => ({
  modules: state.course.modules
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
