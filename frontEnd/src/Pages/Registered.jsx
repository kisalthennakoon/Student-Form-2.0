import axios from "axios";
import { useEffect, useState } from "react";

function Registered() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

    if (!token) {
      alert("Unauthorized access. Please log in.");
      window.location.href = "/login"; // Redirect to login page
      return;
    }

    (async () => await Load())();
  }, []);

  async function Load() {
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8089",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await axiosInstance.get("/getStuds");
    setStudents(result.data);
    /*console.log(result.data);*/
  }

  return (
    <div>
      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Student Address</th>
            <th scope="col">Student Age</th>
            <th scope="col">Student College</th>
            <th scope="col">Student Mobile</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        {students.map(function fn(student) {
          return (
            <tbody>
              <tr>
                <td>{student.studentName}</td>
                <td>{student.studentAddress}</td>
                <td>{student.age}</td>
                <td>{student.college}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteStudent(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Registered;
