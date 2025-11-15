import axios from "axios";
import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useParams } from "react-router";
import { SINGLE_NOTE, UPDATE_NOTE } from "../resource/apis";
import toast from "react-hot-toast";
import Nav from "../components/Nav";

const DetailNote = () => {
  const { register, handleSubmit, reset } = useForm();
  const params = useParams();
  const noteId = params.id;

  useEffect(() => {
    getSingleNote();
  }, [noteId]);

  const getSingleNote = async () => {
    try {
      const result = await axios.get(`${SINGLE_NOTE}/${noteId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (result.data.code === 404) {
        toast.error(result.data.message);
        return;
      }
      if (result.data && result.data.note) {
        reset(result.data.note);
      } else {
        toast.error(result.data.message);
        return;
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // update
  const handleUpdateNote = async (data) => {
    try {
      const updatedNote = { title: data.title, description: data.description };
      const response = await axios.patch(
        `${UPDATE_NOTE}/${noteId}`,
        updatedNote,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.status == true) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        return;
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container>
      
        <Nav> 
          <div>
            <NavLink variant="primary" to="/">
              All notes
            </NavLink>
          </div>
        </Nav>
      <div>
        <div>
          <Form onSubmit={handleSubmit(handleUpdateNote)}>
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
            <div className="edit-form-btn">
              <NavLink to={"/"}>Cancel</NavLink>
              <Button type="submit" variant="primary">
                Update Note
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default DetailNote;
