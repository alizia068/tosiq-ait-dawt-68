import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { ALL_NOTES, CREATE_NOTE, DELETE_NOTE } from "./resource/apis";
import toast from "react-hot-toast";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router";
const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleCloseNoteModal = () => setShow(false);
  const handleShowNoteModal = () => setShow(true);

  const getAllNotes = async () => {
    try {
      const result = await axios.get(ALL_NOTES);
      if (result.data && result.data.notes) {
        setNotes(result.data.notes);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleSaveNote = async (data) => {
    if (!data.title || !data.description) {
      toast.error("Form fields are required!");
      return;
    }

    try {
      const response = await axios.post(CREATE_NOTE, data);
      if (response) {
        console.log(response.data.message);
        toast.success(response.data.message);
        await getAllNotes(); // Refetch notes
        reset();
        handleCloseNoteModal();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleDelete = async (e, note) => {
    e.preventDefault();
    if (!note._id) {
      toast.error("Note id not found");
      return;
    }

    if (!window.confirm("Are you sure your want to delete this?")) {
      toast.success("You saved the record");
      return;
    }
    try {
      const result = await axios.delete(`${DELETE_NOTE}/${note._id}`);
      if (result && result.data) {
        toast.success(result.data.message);
        await getAllNotes(); // Refetch notes
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container>
      <div>
        <div className="my-4 notes-header">
          <h2>Note List</h2>
          <div>
            <Button variant="primary" onClick={handleShowNoteModal}>
              Add note
            </Button>
          </div>
        </div>

        <div className="text-center">
          {notes.length == 0 && "No notes found"}
        </div>
        <div className="mt-4">
          <Row className="g-3">
            {notes.map((note, i) => {
              return (
                <Col key={i} xs={12} sm={6} md={6} lg={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{note.title}</Card.Title>
                      <Card.Text className="my-2 text-muted">
                        {note.description}
                      </Card.Text>
                      <div className="action-links">
                        {/* detail page link */}
                        <NavLink
                          className="edit-icon"
                          to={`/notes/edit/${note._id}`}
                        >
                          <FaEdit className="icon" /> Edit note
                        </NavLink>

                        {/* delete note link */}
                        <NavLink
                          className="delete-icon"
                          onClick={(e) => handleDelete(e, note)}
                        >
                          <FaTrash className="icon" /> Delete note
                        </NavLink>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      {/* Notes model */}
      <Modal show={show} onHide={handleCloseNoteModal}>
        <Form onSubmit={handleSubmit(handleSaveNote)}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                {...register("title")}
                type="text"
                placeholder="Enter note title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                {...register("description")}
                as="textarea"
                rows={3}
                placeholder="Enter note description"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseNoteModal}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Note
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default NotesList;
