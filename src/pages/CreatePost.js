import React, { useEffect, useState } from "react";
import "./createpost.css";
import { auth, db } from "../Firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function CreatePost({isAuth}) {
  const [Title, setTitle] = useState("");
  const [posText, setPostText] = useState("");
  const postCollection = collection(db, "posts");
  let navigate = useNavigate();
  const createpost = async () => {
    await addDoc(postCollection, {
      title: Title,
      posttext: posText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if(!isAuth){
      navigate("/login")
    }
  }, []);
  return (
    <div className="createpost">
      <div className="box">
        <div className="header">Create A Post</div>
        <div className="title">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title.."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="description">
          <label>Description:</label>
          <textarea
            placeholder="Description.."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <div className="button">
          <input type="button" onClick={createpost} value="Submit Post" />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
