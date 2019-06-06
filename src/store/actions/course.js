export function toggleLesson(module, lesson) {
  const lastVideoPlayer = { module: module, lesson: lesson };
  window.localStorage.setItem(
    "lastVideoPlayed",
    JSON.stringify(lastVideoPlayer)
  );
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson
  };
}
