import { Link } from "react-router-dom";

const Navbar = () => {
  const DISCORD_CLIENT_ID = "YOUR_CLIENT_ID";
  const redirectURI = "http://localhost:5173/dashboard"; // Or your Vercel URL
  const discordAuthURL = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectURI)}&response_type=token&scope=identify`;

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">GameItemsHub</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <a href={discordAuthURL} className="bg-indigo-600 px-4 py-2 rounded">
          Login with Discord
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
