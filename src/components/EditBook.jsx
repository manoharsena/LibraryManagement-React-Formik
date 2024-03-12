import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditBook = ({ id }) => {
  //using useNavigate to navigate  between pages
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);
  //using useEffect to rerender  the component when data is changed
  useEffect(() => {
    //using axios to fetch data from the api
    axios
      .get(`https://65d6e9a627d9a3bc1d799da7.mockapi.io/api/v1/books/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //function to handle changes in the inputs
  const handleSubmit = async (values) => {
    await axios
      .put(
        `https://65d6e9a627d9a3bc1d799da7.mockapi.io/api/v1/books/${id}`,
        values
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/");
  };
  const validationSchema = Yup.object().shape({
    book_title: Yup.string().required("Please enter Book Name"),
    book_pub: Yup.string().required("Please enter publisher name"),
    book_year: Yup.string().required("Please enter published year"),
    book_isbn: Yup.string().required("Please enter book ISBN"),
    author_name: Yup.string().required("Author name is required"),
  });

  return (
    //Form with all the fields to update book details
    <>
      {editData && (
        <Formik
          initialValues={editData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="back">
            <Form className="container text-center userWidth">
              <div className="row mb-5">
                <label
                  htmlFor="book_title"
                  className="col-sm-12 bookname col-form-label"
                >
                  <span className="text-danger">*</span> Book Title:
                </label>
                <div className="col-sm-12">
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
                </div>

                <label
                  htmlFor="book_pub"
                  className="col-sm-12 col-form-label"
                >
                  <span className="text-danger">*</span> Published By:
                </label>
                <div className="col-sm-12">
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
                </div>

                <label
                  htmlFor="book_year"
                  className="col-sm-12 col-form-label"
                >
                  <span className="text-danger">*</span> Published Year:
                </label>
                <div className="col-sm-12">
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
                </div>

                <label
                  htmlFor="book_isbn"
                  className="col-sm-12 col-form-label"
                >
                  <span className="text-danger">*</span> Book ISBN:
                </label>
                <div className="col-sm-12">
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
                </div>

                <label
                  htmlFor="author_name"
                  className="col-sm-12 col-form-label"
                >
                  <span className="text-danger">*</span> Author Name:
                </label>
                <div className="col-sm-12">
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
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                Update Book Details
              </button>
            </Form>
          </div>
        </Formik>
      )}
    </>
  );
};

export default EditBook;
