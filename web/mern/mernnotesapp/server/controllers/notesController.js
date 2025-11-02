import Notes from "../models/notesModel.js";

export const getAllNotes = async (req, res) => {
  const notes = await Notes.find({}).sort({ updatedAt: -1 });
  return res.send({ status: true, notes });
};

export const getSingleNote = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Notes.findById({ _id: id });
    if (!note) {
      return res.send({status: false, code: 404, message: "Note not found or maybe  deleted"});
    }
    if (note) {
      return res.send({ status: true, note });
    } else {
      return res.send({
        status: false,
        message: "Note not found or maybe deleted",
      });
    }
  } catch (error) {}
};

export const createNote = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description)
    return res.send({ status: false, message: "Form fields are required!" });

  try {
    const result = await Notes.create({ title, description });
    if (result) {
      return res.send({ status: true, message: "Note added successfully!" });
    } else {
      return res.send({ status: false, message: "Failed to add new note" });
    }
  } catch (error) {
    return res.send({ status: false, message: "Something went wrong!" });
  }
};

export const deleteNote = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Notes.findByIdAndDelete({ _id: id });
    if (result) {
      return res.send({ status: true, message: "Note has been deleted" });
    } else {
      return res.send({ status: true, message: "Note not found" });
    }
  } catch (error) {
    return res.send({ status: false, message: "Something went wrong" });
  }
};

export const updateNode = async (req, res) => {
  const id = req.params.id;
  const note = req.body;
  if (!id)
    return res.send({
      status: false,
      code: 404,
      message: "Note id note found!",
    });

  try {
    const updated = await Notes.findByIdAndUpdate({ _id: id }, note);
    if (updated) {
      return res.send({ status: true, message: "Note updated successfully" });
    } else {
      return res.send({ status: false, message: "Failed to update note" });
    }
  } catch (error) {
    return res.send({ status: false, message: "Something went wrong" });
  }
};
