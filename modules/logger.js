import * as constants from "./constants.js";
function logger(log, type = constants.TYPE_log) {
  console[type](log);
}
export default logger;
