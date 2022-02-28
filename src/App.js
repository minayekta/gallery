import Category from "./components/Category";
import Gallery from "./components/Gallery";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-200 mx-3 my-3 rounded-md">
      <div className="mx-5 my-3 mt-0">
        <h1 className="font-bold text-2xl mb-2">My Portfolio</h1>
        <p className="mb-2">Click on the buttons to filter a category : </p>
      </div>
      <Category/>
      <Gallery/>
    </div>
  );
}

export default App;
