interface Props {
  data: string[];
  onDelete:(id:number) =>void;
}

const TaskList = ({ data, onDelete }: Props) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.task} <button onClick={()=> onDelete(index)} className="text-white btn btn-danger">X</button></li>
      ))}
    </ul>
  );
};

export default TaskList;
