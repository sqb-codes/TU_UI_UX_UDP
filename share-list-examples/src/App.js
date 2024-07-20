import './App.css';

const names = ["John", "Max", "Sam", "Nick", "Smith"];

// const updateNames = names.map((name) => {
//   return <li>{name}</li>;
// });

function Users(props) {
  const list = props.names;
  
  const updateNames = list.map((name) => {
    return <li key={name}>{name}</li>;
  });
  
  return (
    <ul>
      {updateNames}
    </ul>
  )
}

function App() {
  return (
    <div>
      <h1>Rendering Lists</h1>
      {/* <ul>
        {updateNames}
      </ul> */}
      <Users names = {names} />
    </div>
    
  );
}

export default App;
