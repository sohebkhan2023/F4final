import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import homeArrowIcon from "../images/Vector 12.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/reducers/postThunkMiddleware";
import { useParams, useNavigate } from "react-router-dom";
import heartIcon from "../images/heart_icon.png";
import shareIcon from "../images/share_icon.png";
import { ColorRing } from "react-loader-spinner";

const DetailPage = () => {
  const navigate = useNavigate();
  const [showUserInfo, setShowUserInfo] = useState(false);
  const { id } = useParams();


  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ width: "100%", height: "100vh", textAlign: "center" }}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="detailPage-side-heading">
        <div className="arrowIcon">
          <img
            src={homeArrowIcon}
            alt="arrow-icon"
            onClick={() => navigate("/")}
          />
        </div>
        <h1>Post Number #{id}</h1>
      </div>

      <div className="specific-post-detail">
        <div className="specific-post-image">
          <img src={`https://picsum.photos/200?random=${id}`} alt="post-img" />
          <div className="share-like-icon">
            <p>
              {posts && posts.length > 0
                ? posts
                    .find((post) => post.id.toString() === id)
                    .title.substring(0, 10) + "..."
                : null}
            </p>
            <div className="icon">
              <img src={shareIcon} alt="share_image" />
              <img src={heartIcon} alt="heart_image" />
            </div>
          </div>
        </div>

        <div className="post-content">
          <button
            className={showUserInfo ? "inactive-btn" : "active-btn"}
            onClick={() => setShowUserInfo(false)}
          >
            Detail
          </button>
          <button
            className={showUserInfo ? "active-btn" : "inactive-btn"}
            onClick={() => setShowUserInfo(true)}
          >
            User Info
          </button>
          {showUserInfo ? (
            <p className="post-text">
              Post Was Posted By{" "}
              {posts && posts.length > 0
                ? posts.find((post) => post.id.toString() === id).userId
                : null}
              .
            </p>
          ) : (
            <p className="post-text">
              {posts && posts.length > 0
                ? posts.find((post) => post.id.toString() === id).body
                : null}
            </p>
          )}
        </div>
      </div>

      <div className="page-side-heading">More Posts</div>
      <Card posts={posts} />
    </div>
  );
};

export default DetailPage;
