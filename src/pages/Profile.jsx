import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(user?.avatar || "/images/default-avatar.png");

  // Sync preview when user context updates
  useEffect(() => {
    if (user?.avatar) {
      setPreview(user.avatar);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setUser((prev) => ({ ...prev, avatar: reader.result })); // Save image in UserContext
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>My Profile</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={preview}
          alt="User Avatar"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #ccc",
          }}
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginTop: "10px" }}
          />
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user?.name || ""}
          onChange={handleChange}
          disabled={!isEditing}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user?.email || ""}
          onChange={handleChange}
          disabled={!isEditing}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <button
        onClick={() => setIsEditing(!isEditing)}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: isEditing ? "#00b894" : "#0984e3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
    </div>
  );
}

export default Profile;
