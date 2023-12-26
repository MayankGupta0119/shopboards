import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("error");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className="max-w-screen">
      <div className="w-screen">
        {loading ? (
          <Spinner />
        ) : posts.length > 0 ? (
          <div className="flex w-full flex-wrap p-2 mx-auto max-w-6xl space-y-10 space-x-5">
            {posts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div>
            <p>No Posts Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
