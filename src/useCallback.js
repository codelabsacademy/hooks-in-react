import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [users, setUsers] = useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" },
  ]);

  const [text, setText] = useState("");
  
  const handleText = (event) => {
    setText(event.target.value);
  };
  
  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };
  
  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>
      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

const List = ({ list, onRemove }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};

const ListItem = ({ item, onRemove }) => {
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default App;
