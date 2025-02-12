import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";

const CustomerTable = () => {
  const [users, setUsers] = useState([
    { id: 1, avatar: " ", name: "Durgesh", gender: "Male", email: "suryadurgesh18", role: "user" },
    { id: 2, avatar: " ", name: "Prakash Ghorpade", gender: "Male", email: "prakashghorpade2001", role: "admin" },
    { id: 3, avatar: " ", name: "Durgesh", gender: "Male", email: "suryawanshidurgesh54", role: "user" },
    { id: 4, avatar: " ", name: "Abhijeet Kokat", gender: "Male", email: "abhijeetbk154", role: "admin" },
    { id: 5, avatar: " ", name: "Abu Shariya", gender: "Male", email: "abushariya31", role: "admin" },
    { id: 6, avatar: " ", name: "Ashanka Dagadu Dongare", gender: "Male", email: "ashanka710", role: "admin" },
  ]);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-200 hidden sm:table-header-group">
          <tr>
            <th className="px-4 py-2 text-left">AVATAR</th>
            <th className="px-4 py-2 text-left">NAME</th>
            <th className="px-4 py-2 text-left hidden sm:table-cell">GENDER</th>
            <th className="px-4 py-2 text-left">EMAIL</th>
            <th className="px-4 py-2 text-center">UPDATE ROLE</th>
            <th className="px-4 py-2 text-center">REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b flex flex-col sm:table-row">
              {/* Avatar */}
              <td className="px-4 py-2 flex justify-center sm:table-cell">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 object-cover rounded-full" />
              </td>

              {/* Name */}
              <td className="px-4 py-2">{user.name}</td>

              {/* Gender (hidden on small screens) */}
              <td className="px-4 py-2 hidden sm:table-cell">{user.gender}</td>

              {/* Email */}
              <td className="px-4 py-2 break-words">{user.email}</td>

              {/* Update Role Button */}
              <td className="px-4 py-2 text-center">
                <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 w-full sm:w-auto">
                  Update Role
                </button>
              </td>

              {/* Remove Button */}
              <td className="px-4 py-2 text-center">
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
