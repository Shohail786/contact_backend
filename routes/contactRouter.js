const express = require("express");
const contactRouter = express.Router();

const {
  contactAll,
  createContact,
  oneContact,
  contactUpdate,
  contactDelete,
} = require("../controllers/contactController.js");

contactRouter.route("/").get(contactAll).post(createContact);
contactRouter
  .route("/:id")
  .get(oneContact)
  .put(contactUpdate)
  .delete(contactDelete);

module.exports = contactRouter;
