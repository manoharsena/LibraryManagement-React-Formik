import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddAuthor = () => {
  //using useNavigate  to redirect to the add author page
  const navigate = useNavigate();
  //using useState to manage the state of the Field fields
  const [createData, setCreateData] = useState({
    book_title: "",
    book_pub: "",
    book_year: "",
    book_isbn: "",
    author_name: "",
    author_dob: "",
    author_bio: "",
    book_image: "",
  });

  //post  request to add a new author using axios
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://65d6e9a627d9a3bc1d799da7.mockapi.io/api/v1/books/",
        values
      );
      console.log(response.data);
      navigate("/authorlist"); // Redirect to home page after adding new author
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const validationSchema = Yup.object().shape({
    book_title: Yup.string().required("Please enter Book Title"),
    book_pub: Yup.string().required("Please enter publisher name"),
    book_year: Yup.string().required("Please enter published year"),
    book_isbn: Yup.string().required("isbn is required"),
    author_name: Yup.string().required("Please enter author name"),
    author_dob: Yup.string().required("Please enter author dob"),
    author_bio: Yup.string().required("Please enter author bio"),
    book_image: Yup.string().required("Book image URL is required"),
  });

  return (
    //Form with all the necessary fields for adding a new author
    <Formik
      initialValues={createData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <div className="back">
        <Form className="container">
          <div className="row">
            <div className="col-sm-12 mt-2">
              <label htmlFor="author_name" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Author Name:
              </label>
              <Field
                type="text"
                className="form-control"
                id="author"
                name="author_name"
              />
              <ErrorMessage
                name="author_name"
                component="h6"
                className="redText"
              />

              <label htmlFor="author_dob" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Author DOB:
              </label>
              <Field
                type="text"
                className="form-control"
                id="date"
                name="author_dob"
              />
              <ErrorMessage
                name="author_dob"
                component="h6"
                className="redText"
              />

              <label htmlFor="author_bio" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Author Bio:
              </label>
              <Field
                type="text"
                className="form-control"
                id="author"
                name="author_bio"
              />
              <ErrorMessage
                name="author_bio"
                component="h6"
                className="redText"
              />

              <label htmlFor="book_title" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Book Title:
              </label>
              <Field
                type="text"
                className="form-control"
                id="book"
                name="book_title"
              />
              <ErrorMessage
                name="book_title"
                component="h6"
                className="redText"
              />

              <label htmlFor="book_pub" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Published By:
              </label>
              <Field
                type="text"
                className="form-control"
                id="book"
                name="book_pub"
              />
              <ErrorMessage
                name="book_pub"
                component="h6"
                className="redText"
              />

              <label htmlFor="book_year" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Published Year:
              </label>
              <Field
                type="text"
                className="form-control"
                id="book"
                name="book_year"
              />
              <ErrorMessage
                name="book_year"
                component="h6"
                className="redText"
              />

              <label htmlFor="book_isbn" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Book ISBN:
              </label>
              <Field
                type="text"
                className="form-control"
                id="book"
                name="book_isbn"
              />
              <ErrorMessage
                name="book_isbn"
                component="h6"
                className="redText"
              />

              <label htmlFor="book_image" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Book Image URL:
              </label>
              <Field
                type="text"
                className="form-control"
                id="book"
                name="book_image"
              />
              <ErrorMessage
                name="book_image"
                component="h6"
                className="redText"
              />
            </div>
          </div>
          <br />
          <center>
            <button type="submit" className="btn btn-primary">
              Add Author to Library
            </button>
          </center>
        </Form>
      </div>
    </Formik>
  );
};

export default AddAuthor;
