import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../Firebase-config";
import "./home.css";
function Home({isAuth}) {
  const [postLists, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(postCollectionRef);
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  
  return (
    <div className="side">
    <div className="homepage">
      {postLists.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <label>{post.title}</label>
              <>
              {isAuth && auth.currentUser && post.author.id === auth.currentUser.uid&&<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
                onClick={()=>{deletePost(post.id)}}
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
              }
              </>
            </div>
            <div className="postTextContainer">{post.posttext}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Home;
