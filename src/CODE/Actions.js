export const SHOW_SKILLS = "SHOW_SKILLS";
export const TOGGLE_FRONTEND = "TOGGLE_FRONTEND";
export const TOGGLE_FULLSTACKDEV = "TOGGLE_FULLSTACKDEV";
export const TOGGLE_TECHNOLOGY = "TOGGLE_TECHNOLOGY";
export const TOGGLE_BACKEND = "TOGGLE_BACKEND";
export const TOGGLE_WEBDEV = "TOGGLE_WEBDEV";
export const TOGGLE_SOFTDEV = "TOGGLE_SOFTDEV";
export const TOGGLE_C_LANGUAGE = "TOGGLE_C_LANGUAGE";
export const TOGGLE_C_PLUS_PLUS = "TOGGLE_C_PLUS_PLUS";
export const TOGGLE_C_SHARP = "TOGGLE_C_SHARP";
export const TOGGLE_CSS = "TOGGLE_CSS";
export const TOGGLE_HTML = "TOGGLE_HTML";
export const TOGGLE_JAVASCRIPT = "TOGGLE_JAVASCRIPT";
export const TOGGLE_REACT_JS = "TOGGLE_REACT_JS";
export const TOGGLE_NODE_JS = "TOGGLE_NODE_JS";
export const SET_FRONTEND_TO_FALSE = "SET_FRONT_TO_FALSE";

// export function toggleFrontend(status) {
//   return {
//     type: TOGGLE_FRONTEND,
//     status: status,
//   };
// }

export function showSkills(skills) {
  return {
    type: SHOW_SKILLS,
    skills: skills,
  };
}

export function toggleFrontend() {
  return {
    type: TOGGLE_FRONTEND,
  };
}
export function toggleFullStack() {
  return {
    type: TOGGLE_FULLSTACKDEV,
  };
}
export function toggleTechnology() {
  return {
    type: TOGGLE_TECHNOLOGY,
  };
}
export function toggleBackend() {
  return {
    type: TOGGLE_BACKEND,
  };
}
export function toggleWebDev() {
  return {
    type: TOGGLE_WEBDEV,
  };
}
export function toggleSoftDev() {
  return {
    type: TOGGLE_SOFTDEV,
  };
}
export function toggleCLanguage() {
  return {
    type: TOGGLE_C_LANGUAGE,
  };
}
export function toggleCPlusPlus() {
  return {
    type: TOGGLE_C_PLUS_PLUS,
  };
}
export function toggleCSharp() {
  return {
    type: TOGGLE_C_SHARP,
  };
}
export function toggleCSs() {
  return {
    type: TOGGLE_CSS,
  };
}
export function toggleHTml() {
  return {
    type: TOGGLE_HTML,
  };
}
export function toggleJavaScript() {
  return {
    type: TOGGLE_JAVASCRIPT,
  };
}
export function toggleReactJS() {
  return {
    type: TOGGLE_REACT_JS,
  };
}
export function toggleNodetJS() {
  return {
    type: TOGGLE_NODE_JS,
  };
}

export function setFrontEndToFalse() {
  return {
    type: SET_FRONTEND_TO_FALSE,
  };
}
