import Video from "./components/Video.jsx";
import { data } from "./utils/data.js";

function App() {
  return (
    <>
      {
      data.map((item) => {
        return(

          <Video
          key={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          dateAdded={item.dateAdded}
          rate={item.rate}
          description={item.description} />
          )
      })}

    </>
  );
}

export default App;
