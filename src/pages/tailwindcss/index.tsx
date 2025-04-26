import { useState, useEffect } from "react";
import { getUserData } from "../../api/services/getUserData";
import { UserType } from "../../api/types/userType";
import { SiTailwindcss } from "react-icons/si";

export function TailwindCSS() {
  const [userData, setUserData] = useState<UserType>();

  useEffect(() => {
    getUserData("Kaue-Dev", setUserData);
  }, []);

  return (
    <div className="relative flex flex-col items-center p-8 gap-4 bg-gray-100 rounded-2xl shadow-md max-w-sm mx-auto text-center">
      <SiTailwindcss  className="absolute top-4 right-4 text-3xl text-blue-500" />
      <img src={userData?.avatar_url} className="w-32 h-32 rounded-full object-cover border-2 border-blue-500" />
      <h1 className="text-2xl font-semibold text-gray-800">{userData?.login}</h1>
      <a className="mt-2 text-blue-500 font-bold hover:underline" href={userData?.html_url} target="_blank">Ver Perfil no GitHub</a>
      <a className="mt-2 text-blue-500 font-bold hover:underline" href="/">Voltar para a Home</a>
    </div>
  );
}
