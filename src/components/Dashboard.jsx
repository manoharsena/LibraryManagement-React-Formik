import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setId }) => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);
  useEffect(() => {
    //using axios to fetch data from the api
    axios
      .get("https://65d6e9a627d9a3bc1d799da7.mockapi.io/api/v1/books")
      .then((res) => setUsers(res.data));
  }, [deleteData]);
  const handleEdit = (id) => {
    setId(id);
    navigate(`/editbook/${id}`);
  };

  //delete book from library
  const handleDel = (id) => {
    axios
      .delete(`https://65d6e9a627d9a3bc1d799da7.mockapi.io/api/v1/books/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    //To display the available books in cards
    <div className="container">
      <h3 className="text-center heading">Book List</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 mt-3">
              <div className="card-body">
                <center>
                  <img
                    variant="top"
                    src={item.book_image}
                    height={270}
                    width={200}
                  />
                </center>
                <h5 className="card-title text-center">{item.book_title}</h5>
                <hr />
                <p className="card-text text-center">
                  <b>Author:</b> {item.author_name}
                </p>
                <p className="card-text text-center">
                  <b>ISBN number:</b> {item.book_isbn}
                </p>
                <p className="card-text text-center">
                  <b>Published by:</b> {item.book_pub}
                </p>
                <p className="card-text text-center">
                  <b>Published Year:</b> {item.book_year}
                </p>
              </div>
              <div className="d-flex justify-content-around">
                <button
                  className="btn new mb-3"
                  onClick={() => {
                    handleEdit(item.id);
                  }}
                >
                  <i
                    className="fa-solid fa-pen-to-square icon3"
                    style={{ color: "#42ae8d" }}
                  ></i>{" "}
                  <span style={{ color: "#42ae8d" }}>Edit</span>
                </button>
                <button
                  className="btn new mb-3"
                  onClick={() => {
                    handleDel(item.id);
                  }}
                >
                  <i
                    className="fa-solid fa-trash icon3"
                    style={{ color: "red" }}
                  ></i>{" "}
                  <span style={{ color: "red" }}>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Dashboard;
