import { useEffect, useState } from "react";
import { StyledCard } from "./styles";
import { UserType } from "../../api/types/userType";
import { getUserData } from "../../api/services/getUserData";
import { SiStyledcomponents } from "react-icons/si";

export function StyledComponents() {
  const [userData, setUserData] = useState<UserType>();

  useEffect(() => {
    getUserData('Kaue-Dev', setUserData);
  }, []);

  return (
    <StyledCard>
      <SiStyledcomponents />
      <img src={userData?.avatar_url} />
      <h1>{userData?.login}</h1>
      <a href={userData?.html_url} target="_blank">Ver Perfil no GitHub</a>
      <a href="/">Voltar para a Home</a>
    </StyledCard>
  );
}
