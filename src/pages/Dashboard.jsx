import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = new URLSearchParams(hash.substring(1)).get("access_token");
      if (token) {
        fetch("https://discord.com/api/users/@me", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then((data) => setUser(data));
      }
    }
  }, []);

  return (
    <div className="p-10">
      {user ? (
        <div>
          <h2 className="text-xl font-bold">Welcome, {user.username}</h2>
          <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} className="w-20 rounded-full mt-4" />
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default Dashboard;
