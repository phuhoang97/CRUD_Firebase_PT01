import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function HomePage() {
  const [users, setUsers] = useState([]);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8000/users");
    console.log(result.data);
    setUsers(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h1>Home Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr className='bg-dark text-white'>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Button variant='outline-info' onClick={handleShow}>
                  View
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Hello World</Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
              <td>
                <Link to={`/user/edit/${user.id}`}>
                  <Button variant='outline-warning'>Edit</Button>
                </Link>
              </td>
              <td>
                <Button
                  variant='outline-danger'
                  onClick={(id) => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage;
