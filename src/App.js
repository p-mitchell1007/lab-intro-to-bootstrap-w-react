import images from "./images";
import postData from "./data/posts.json"
import Header from "./Components/Header";
import Quote from "./Components/Quote";
import Search from "./Components/Search";
import Posts from "./Components/Posts";
import Table from "./Components/Table";
import Footer from "./Components/Footer";

import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(postData);
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    // console.log(event.target.value.toLowerCase());
    setSearch(event.target.value);
    let filtered = postData.filter(post => post.location.toLowerCase().includes(event.target.value.toLowerCase()));
    // console.log(filteredPosts)
    setPosts(filtered);
  }

  return (
    <main>
      <Header/>
      <Quote/>
      <section className="container">
      <Search
          postData={postData}
          setPosts={setPosts}
          handleSearch={handleSearch}
        />
        <section className="row row-gap-4">
        <Posts
            posts={posts}
            search={search}
          />
          <Table
            posts={postData}
          />
        </section>
      </section>
      <Footer/>
    </main>
  );
}
export default App;