import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import "./style.css";
const Table = ({ data, loading, handelDeleteTodo, handelStatusTodo }) => {
  return (
    <table className="tableWrapper">
      <TableHead />
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <tbody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              list={item.title}
              status={item.completed ? "Completed" : "Pending"}
              handelDeleteTodo={() => handelDeleteTodo(item.id)}
              handelStatusTodo={() => handelStatusTodo(item.id)}
            />
          ))}
        </tbody>
      )}
    </table>
  );
};

export default Table;
