const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: 1, title: "aula 1", video: "c0oy0vQKEZE" },
        { id: 2, title: "aula 2", video: "rUUazNIZW7I" },
        { id: 3, title: "aula 3", video: "p5hgDLc618M" },
        { id: 4, title: "aula 4", video: "SH88jkuzICU" }
      ]
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 1, title: "aula 1", video: "vPDcHQJCNaI" },
        { id: 2, title: "aula 2", video: "nJ1D8r75y1o" },
        { id: 3, title: "aula 3", video: "MnrJzXM7a6o" },
        { id: 4, title: "aula 4", video: "IFmDSUIts40" }
      ]
    }
  ]
};
export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }
  return state;
}
