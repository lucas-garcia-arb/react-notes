import { useEffect, useState } from "react";
import Video from "./components/Video";
import { data } from "./utils/data";
import { fetchData } from "./utils/fetchData";

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetchData(data, 2000)
      .then(() => setDatos(data))
      .catch((error) => console.log(error));
  }, []);

  const deleteVideo = (id) => {
    const filtered = data.filter((item) => item.id !== id);
    setDatos(filtered);
  };

  return (
    <>
      {datos.map((item) => {
        return (
          <Video
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            dateAdded={item.dateAdded}
            rate={item.rate}
            description={item.description}
            deleteItem={deleteVideo}
          />
        );
      })}
    </>
  );
}

export default App;
