import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { ALL_NOTES, CREATE_NOTE } from "./resource/api";
import toast from "react-hot-toast";
import axios from "axios";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleCloseNoteModal = () => setShow(false);
  const handleShowNoteModal = () => setShow(true);

  const getAllNotes = async () => {
    try {
      const result = await axios.get(ALL_NOTES);
      if (result.data && result.data.notes) {
        setNotes(result.data.notes);
      }
    } catch (error) {}
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
        console.log(response.data.message)
        toast.success(response.data.message);
        await getAllNotes(); // Refetch notes

        handleCloseNoteModal();
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container>
      <div>
        <h2>Note List</h2>
        <Button variant="primary" onClick={handleShowNoteModal}>
          Add note
        </Button>

        <div className="text-center">{notes.length == 0 && "No notes found"}</div>
        <div>
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
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
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

export default App;
