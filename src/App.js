import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route index element={<h1>Movies Site for portfolio</h1>}/>
        </Routes>
    </div>
  );
}

export default App;
