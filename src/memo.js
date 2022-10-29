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
  // logging statements run every time someone types into the input field:
  console.log("Render: App");

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} />
    </div>
  );
};

const List = ({ list }) => {
  console.log("Render: List");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  console.log("Render: ListItem");
  return <li>{item.name}</li>;
};

export default App;
