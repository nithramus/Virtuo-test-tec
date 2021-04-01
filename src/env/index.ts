let env;
import localEnv from "./local";
if (process.env.NODE_ENV !== "local") {
  env = process.env;
} else {
  env = localEnv;
}
export default env;
