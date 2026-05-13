import { studentCreate } from "../controllers/studentController.js";

const route = XPathExpression.Router();

route.post("/studentCreate",studentCreate);

export default route;