import {
  TOGGLE_FRONTEND,
  TOGGLE_FULLSTACKDEV,
  TOGGLE_TECHNOLOGY,
  TOGGLE_BACKEND,
  TOGGLE_WEBDEV,
  TOGGLE_SOFTDEV,
  TOGGLE_C_LANGUAGE,
  TOGGLE_C_PLUS_PLUS,
  TOGGLE_C_SHARP,
  TOGGLE_CSS,
  TOGGLE_HTML,
  TOGGLE_JAVASCRIPT,
  TOGGLE_REACT_JS,
  TOGGLE_NODE_JS,
  SET_FRONTEND_TO_FALSE,
  SHOW_SKILLS,
  CLEAR_ALL_SKILLS,
} from "./Actions";

export const job = {
  front: false,
  full: false,
  tech: false,
  back: false,
  web: false,
  soft: false,
  clanguage: false,
  cplusplus: false,
  csharp: false,
  css: false,
  html: false,
  javascript: false,
  reactjs: false,
  nodejs: false,
  toggleRemaining: false,
  skillSet: [],
};

export const Reducers = (state = job, action) => {
  let status;
  switch (action.type) {
    case SHOW_SKILLS:
      return {
        ...state,
        skillSet: action.skills,
      };
    case TOGGLE_FRONTEND:
      const toggleTheFront = state.front;
      return {
        ...state,
        front: !toggleTheFront,
      };
    case TOGGLE_FULLSTACKDEV:
      const toggleTheFull = state.full;
      return {
        ...state,
        full: !toggleTheFull,
      };
    case TOGGLE_TECHNOLOGY:
      const toggleTheTech = state.tech;
      return {
        ...state,
        tech: !toggleTheTech, //Change all the states the same way. Toggle the state when assigned here. Not outside the return scope.
      };
    case TOGGLE_BACKEND:
      const toggleTheBack = state.back;
      // status = true;
      return {
        ...state,
        back: !toggleTheBack,
        // toggleRemaining: status,
      };
    case TOGGLE_WEBDEV:
      const toggleTheWeb = state.web;
      // status = true;
      return {
        ...state,
        web: !toggleTheWeb,
        // toggleRemaining: status,
      };
    case TOGGLE_SOFTDEV:
      const toggleTheSoft = state.soft;
      // status = true;
      return {
        ...state,
        soft: !toggleTheSoft,
        // toggleRemaining: status,
      };
    case TOGGLE_C_LANGUAGE:
      const toggleTheCLanguage = state.clanguage;
      return {
        ...state,
        clanguage: !toggleTheCLanguage,
      };
    case TOGGLE_C_PLUS_PLUS:
      const toggleTheCPlusPlus = state.cplusplus;
      return {
        ...state,
        cplusplus: !toggleTheCPlusPlus,
      };
    case TOGGLE_C_SHARP:
      const toggleTheCSharp = state.csharp;
      return {
        ...state,
        csharp: !toggleTheCSharp,
      };
    case TOGGLE_CSS:
      const toggleTheCss = state.css;
      return {
        ...state,
        css: !toggleTheCss,
      };
    case TOGGLE_HTML:
      const toggleTheHtml = state.html;
      return {
        ...state,
        html: !toggleTheHtml,
      };
    case TOGGLE_JAVASCRIPT:
      const toggleTheJavaScript = state.javascript;
      return {
        ...state,
        javascript: !toggleTheJavaScript,
      };
    case TOGGLE_REACT_JS:
      const toggleTheReactJS = state.reactjs;
      return {
        ...state,
        reactjs: !toggleTheReactJS,
      };
    case TOGGLE_NODE_JS:
      const toggleTheNodeJS = state.nodejs;
      return {
        ...state,
        nodejs: !toggleTheNodeJS,
      };
    case SET_FRONTEND_TO_FALSE:
      const value = false;
      return {
        ...state,
        front: value,
      };
    case CLEAR_ALL_SKILLS:
      return {
        ...state,
        skillSet: [],
      };
    default:
      return state;
  }
};

export default Reducers;
