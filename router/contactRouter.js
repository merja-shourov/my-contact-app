import { Router } from "express";
const contactRouter = Router();

import { allContactController, createContactController, contactController, updateContactController, deleteContactController } from "../controller/contactController.js";
import validateTaken from "../middleware/validateTokenHandlar.js";

contactRouter.use(validateTaken);
contactRouter.get("/", allContactController);
contactRouter.route("/:id").get(contactController);
contactRouter.route("/:id").post(createContactController);

contactRouter.route("/:id").put(updateContactController);
contactRouter.route("/:id").delete(deleteContactController);



export default contactRouter;