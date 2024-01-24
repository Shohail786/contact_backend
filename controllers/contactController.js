const Handler = require("express-async-handler");
const Contact = require("../models/contactModel.js");

const contactAll = Handler(async (req, res) => {
  const allContacts = await Contact.find();
  res.status(200);
  res.json(allContacts);
});

const createContact = Handler(async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(200);
  res.json(newContact);
});

const oneContact = Handler(async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  res.status(200);
  res.json(contact);
});

const contactUpdate = Handler(async (req, res) => {
  const id = req.params.id;

  const updateOne = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200);
  res.json(updateOne);
});

const contactDelete = Handler(async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  await contact.deleteOne();
  res.status(200);
  res.json(contact);
});

module.exports = {
  contactAll,
  createContact,
  oneContact,
  contactUpdate,
  contactDelete,
};
