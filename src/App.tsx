import React from "react";
import { Content } from "./components/content";
import Masthead from "./components/masthead";
import SearchBar from "./components/search-bar";
import useFetch from "./hooks/use-fetch";

const App = () => {
  const { data, setData, type, setType } = useFetch();
  const [value, setValue] = React.useState("");
  return (
    <div>
      <Masthead
        title='pvGallery'
        paragraph='Cool images and videos. Search, love & share!'
        imagePath='/images/img1.jpg'
      />
      <SearchBar
        placeholder='cats, bikes, mountains, etc...'
        value={value}
        onClick={() => {
          setData({ ...data, slug: value });
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <Content data={data} />
    </div>
  );
};

export default App;