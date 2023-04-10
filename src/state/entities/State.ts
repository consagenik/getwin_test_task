import Auth from "./Auth";
import { SessionContainer } from "./Session";

export default interface State {
  session: SessionContainer;
  auth: Auth;
}
