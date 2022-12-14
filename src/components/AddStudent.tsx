import "./AddStudent.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Student } from "../models/Student";
import { StudentArray } from "../models/StudentArray";
import { StoreContext,actions } from "../store";

interface ContainerProps {}

const AddStudent: React.FC<ContainerProps> = () => {
  
  
  const handleInputAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    let img = e.target.files;

    if (!img) return;
    return (
      URL.createObjectURL(img[0])
    )
  };

  const [state, dispatch] = useContext(StoreContext)
 
  const {student, students } = state
  console.log("🚀 ~ file: AddStudent.tsx:24 ~ student", student)
  
  
  
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>
              <input
                type="text"
                name="id"
                id=""
                required
                value={student.id}
                onChange={(e) => dispatch(actions.setST({id: e.target.value}))}
              />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                id=""
                required
                value={student.name}
                onChange={(e) => dispatch(actions.setST({name: e.target.value}))}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                type="text"
                name="address"
                id=""
                required
                value={student.address}
                onChange={(e) => dispatch(actions.setST({address: e.target.value}))}
              />
            </td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>
              <input
                accept="image/*"
                type="file"
                name="avatar"
                id=""
                multiple={false}
                required
                value={student.avatar}
                onChange={(e) => dispatch(actions.setST({avatar: handleInputAvatar(e)}))}
              />
            </td>
          </tr>
          <tr>
            <td>Score</td>
            <td>
              <input
                type="number"
                name="score"
                id=""
                required
                value={student.score}
                onChange={(e) => dispatch(actions.setST({score: e.target.value}))}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="home">
        <button>Thêm</button>
      </Link>
      <Link to="back">
        <button>Quay lại</button>
      </Link>
    </div>
  );
};

export default AddStudent;
