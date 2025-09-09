import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../features/authSlice";
import { updateMember } from "../../features/membersSlice";
import "./Profile.css";

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState(user || {});
  const [editMode, setEditMode] = useState(false);

  if (!user) return <p>No user data</p>;

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    if (parts.length >= 2)
      return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    return parts[0][0].toUpperCase();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!formData.id && user?.id) {
      formData.id = user.id;
    }
    dispatch(updateProfile(formData));
    dispatch(updateMember(formData));
    setEditMode(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        {formData.profileImage ? (
          <img
            src={formData.profileImage}
            alt={formData.name}
            className="profile-pic"
          />
        ) : (
          <div className="profile-initials">{getInitials(formData.name)}</div>
        )}

        {editMode ? (
          <>
            <div className="profile-info-item">
              <label htmlFor="name">👤 Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>

            <div className="profile-info-item">
              <label htmlFor="phone">📞 Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>

            <div className="profile-info-item">
              <label htmlFor="address">🏠 Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                placeholder="Address"
              />
            </div>

            <div className="profile-info-item">
              <label htmlFor="profileImage">🖼️ Profile Image</label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
            </div>

            <button onClick={handleSave} className="save-btn">Save</button>
          </>
        ) : (
          <div className="profile-info">
            <h2>{formData.name}</h2>
            <p>
              <b>📧 Email:</b> {formData.email}
            </p>
            <p>
              <b>📞 Phone:</b> {formData.phone || "Not provided"}
            </p>
            <p>
              <b>👔 Role:</b> {formData.role}
            </p>
            <p>
              <b>🏠 Address:</b> {formData.address || "Not provided"}
            </p>
            <button onClick={() => setEditMode(true)} className="edit-btn">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
