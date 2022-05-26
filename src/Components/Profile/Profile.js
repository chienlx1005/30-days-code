import React from "react";
import { BsFacebook, BsYoutube, BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import "./Profile.scss";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile_img">
          <img src="./assets/img/chien.jpg" alt="avatar" />
        </div>
        <h2>Xuan Chien</h2>
        <p>Front-end Developer</p>
        <div className="social">
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsYoutube />
          </a>
          <a href="#">
            <BsGithub />
          </a>
          <a href="#">
            <FaTiktok />
          </a>
        </div>
        <button>Contact me</button>
      </div>
    </>
  );
}

export default Profile;
