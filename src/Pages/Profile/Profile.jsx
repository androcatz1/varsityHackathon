import React, { useContext, useState } from "react";
import { LoginContext, userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Profile icon
import "./Profile.css";

const Profile = () => {
  const { formData, setFormData } = useContext(userContext);
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(formData);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setFormData(editedData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn)
    navigate("/login");
  };


  return (
    <div className="profile-container">
        <div className="profile-card">
        
            <div className="profile-header">
            <FaUserCircle className="profile-icon" />
            <h2>{formData.name || "User Name"}</h2>
            <div className="profile-buttons">
            {isEditing ? (
                <button className="save-btn" onClick={handleSave}>Save</button>
            ) : (
                <button className="edit-btn" onClick={handleEdit}>Edit Profile</button>
            )}
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
            </div>

            <div className="right">
            <div className="profile-details">
            {Object.keys(formData).map((key, index) => (
                <div className="profile-row" key={index}>
                <span className="profile-label">{key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}</span>
                {isEditing ? (
                    <input
                    type="text"
                    name={key}
                    value={editedData[key]}
                    onChange={handleChange}
                    />
                ) : (
                    <span className="profile-value">{formData[key] || "Not Provided"}</span>
                )}
                </div>
            ))}
            </div>


            </div>
        </div>
    </div>
  );
};

export default Profile;
