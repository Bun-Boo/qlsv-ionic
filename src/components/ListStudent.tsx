import "./ListStudent.css";
import { Link } from "react-router-dom";
import { StudentArray } from "../models/StudentArray";
import { useEffect, useState } from "react";
interface ContainerProps {}

const ListStudent: React.FC<ContainerProps> = () => {


  const [arr, setArr] = useState(StudentArray);

  return (
    <div className="container">
      <Link to="add">
        <button>Thêm sinh viên</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Avatar</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item) => (
            <tr key={item.getId()}>
              <td>{item.getId()}</td>
              <td>{item.getName()}</td>
              <td>{item.getAddress()}</td>
              <td id="avatar">
                <img src={item.getAvatar()} alt="" />
              </td>
              <td>{item.getScore()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudent;
