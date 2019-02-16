const initState = {
  projects: [
    { id: "1", title: " title one", content: "content 1" },
    { id: "2", title: " title two", content: "content 2" },
    { id: "3", title: " title three", content: "content 3" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return {
        ...state
      };
  }
  return state;
};
export default projectReducer;
