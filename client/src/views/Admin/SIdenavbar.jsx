import { LayoutDashboard, Package, Users, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-white p-4 flex flex-col ${expanded ? "w-64" : "w-20"}`}> 
      <button onClick={() => setExpanded(!expanded)} className="mb-4 p-2 text-center bg-gray-800 rounded">
        {expanded ? "Collapse" : "->"}
      </button>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <LayoutDashboard size={24} />
          {expanded && <span className="ml-2">Dashboard</span>}
        </Link>
        <Link to="/product" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <Package size={24} />
          {expanded && <span className="ml-2">Product</span>}
        </Link>
        <Link to="/customer" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <Users size={24} />
          {expanded && <span className="ml-2">Customer</span>}
        </Link>
        <Link to="/orders" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <ShoppingCart size={24} />
          {expanded && <span className="ml-2">Orders</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

