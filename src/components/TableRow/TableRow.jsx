import DeleteIcon from "@mui/icons-material/Delete";
import Button from "./../Button/Button";
import "./style.css";
const TableRow = ({ list, status, handelDeleteTodo, handelStatusTodo }) => {
  return (
    <tr className="tableRowWrapper">
      <td className="tableRowList">{list}</td>
      <td className="tableRowStatus">
        <div onClick={handelStatusTodo}>
          <Button
            className={
              status.toLowerCase() === "pending" ? "bg-pending" : "bg-green"
            }
            text={status}
          />
        </div>
      </td>
      <td className="tableRowDelete">
        <button
          onClick={handelDeleteTodo}
          className={`btn-default ${status === "Pending" && "disabled"}`}
          disabled={status === "Pending" ? true : false}
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
