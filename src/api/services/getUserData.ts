import { UserType } from "../types/userType";

export async function getUserData(username: string, setUser: (user: UserType) => void): Promise<void> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar dados do usuário");
    }

    const data: UserType = await response.json();
    setUser(data);
    
  } catch (error) {
    console.error(error);
  }
}
