import "./List.scss";

export default function List({ title, active, setSelected, id}) {
  return (
    <div>
      <li className={active ? "list active" : "list"} onClick={() => setSelected(id)}>{title}
      
      </li>
    </div>
  );
}
