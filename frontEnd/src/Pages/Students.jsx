import axios from "axios";
import { useEffect, useState } from "react";
import "./Students.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function Student() {
  // Logic
  const [studentName, setName] = useState("");
  const [studentAddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setStudents] = useState([]);
  const [age, setAge] = useState("");
  const [college, setCollege] = useState([]);

  const studId = useSelector((state) => state.storeData.id);
  const token = useSelector((state) => state.storeData.token);

  useEffect(() => {
    //const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

    if (!token) {
      alert("Unauthorized access. Please log in.");
      window.location.href = "/login"; // Redirect to login page
      return;
    }
    (async () => await Load())();
  }, []);

  // Load students
  async function Load() {
    //const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8089",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await axiosInstance.get("/getStuds");
    setStudents(result.data);
  }

  // Save student
  async function save(event) {
    event.preventDefault();
    //const token = localStorage.getItem("token");
    console.log(token);
    
    console.log(studId);
    console.log('http://localhost:8089/${studId}/addStud')

    const axiosInstance = axios.create({
      baseURL: "http://localhost:8089",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    try {
      
      await axiosInstance.put(studId + '/addStud', {
        studentName: studentName,
        studentAddress: studentAddress,
        mobile: mobile,
        age: age,
        college: college,
      });
      alert("Student Registration Successfully");

      setName("");
      setAddress("");
      setMobile("");
      setAge("");
      setCollege("");
      Load();
    } catch (err) {
      alert("User Registration Failed");
    }
  }

  // Edit student
  async function editStudent(student) {
    setName(student.studentName);
    setAddress(student.studentAddress);
    setMobile(student.mobile);
    setAge(student.age);
    setCollege(student.college);
  }

  // Delete student
  async function DeleteStudent(studentId) {
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8089",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await axiosInstance.delete(`/api/v1/student/delete/${studentId}`);
    alert("Student deleted Successfully");
    Load();
  }

  // Update student
  async function update(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8089",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    try {
      await axiosInstance.put(`/api/v1/student/edit/${studentName}`, {
        studentName: studentName,
        studentAddress: studentAddress,
        mobile: mobile,
        age: age,
        college: college,
      });
      alert("Registration Updated");
      setName("");
      setAddress("");
      setMobile("");
      setAge("");
      setCollege("");
      Load();
    } catch (err) {
      alert("Student Update Failed");
    }
  }

  // Design
  return (
    <div>
      <div className="background"></div>
      <h1 className="header">Student Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              className="form-control"
              value={studentName}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Student Address</label>
            <input
              type="text"
              className="form-control"
              value={studentAddress}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Student Age</label>
            <input
              type="text"
              className="form-control"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Student College</label>
            <input
              type="text"
              className="form-control"
              value={college}
              onChange={(event) => setCollege(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button className="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br />
      
    </div>
  );
}

export default Student;
