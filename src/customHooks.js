import { useState } from "react";

function App() {
  const [isToggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!isToggle);
  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>
      {isToggle.toString()}
    </div>
  );
}
export default App;
