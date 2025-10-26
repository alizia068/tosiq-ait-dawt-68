import Notes from "../models/notesModel.js"

export const getAllNotes = async (req, res) => {
    const notes = await Notes.find({}).sort({ updatedAt: -1 })
    return res.send({status: true, notes})
}

export const createNote = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) return res.send({status: false, message:"Form fields are required!"});

    try {
        const result = await Notes.create({ title, description })
        if (result) {
            return res.send({status: true, message: "Note added successfully!"});
        } else {
            return res.send({status: false, message: "Failed to add new note"});
        }
    } catch (error) {
        return res.send({status: false, message: "Something went wrong!"});
    }
}