import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditAuthor = ({ id }) => {
  const [editData, setEditData] = useState(null);
  const navigate = useNavigate();
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
    navigate("/authorlist");
  };

  const validationSchema = Yup.object().shape({
    author_name: Yup.string().required("Please enter Author Name"),
    author_dob: Yup.string().required("DOB is required"),
    author_bio: Yup.string().required("Author Bio is required"),
  });

  return (
    //Form with all the necessary fields for update author details
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
                  htmlFor="author"
                  className="col-sm-12 bookname col-form-label mt-5 p-3"
                >
                  Author Name:
                </label>
                <div className="col-sm-12">
                  <Field
                    type="text"
                    className="form-control"
                    id="new"
                    name="author_name"
                  />
                  <ErrorMessage
                    name="author_name"
                    component="h6"
                    className="redText"
                  />
                </div>

                <label
                  htmlFor="author_dob"
                  className="col-sm-12 col-form-label"
                >
                  Date of Birth:
                </label>
                <div className="col-sm-12">
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
                </div>

                <label
                  htmlFor="author_bio"
                  className="col-sm-12 col-form-label"
                >
                  Author Bio:
                </label>
                <div className="col-sm-12">
                  <Field
                    as="textarea"
                    className="form-control"
                    id="description"
                    name="author_bio"
                  />
                  <ErrorMessage
                    name="author_bio"
                    component="h6"
                    className="redText"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                Update Author
              </button>
            </Form>
          </div>
        </Formik>
      )}
    </>
  );
};

export default EditAuthor;
