import React, { useEffect, useState } from "react";

export default function MyProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user info from localStorage if available
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>My Profile</h2>
        <p>No user information available. Please sign in.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
