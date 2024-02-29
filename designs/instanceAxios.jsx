import axios from "axios";
import { useContext } from "react";
import { ConnexionTokenContext } from "./context/ConnexionTokenContext";

// Créer une instance d'Axios
const instance = axios.create();

// Créer un Hook personnalisé pour utiliser deleteToken dans l'intercepteur
function useAxiosWithInterceptor() {
  const { deleteToken } = useContext(ConnexionTokenContext);

  // Ajouter un intercepteur de réponse
  instance.interceptors.response.use(
    (response) => {
      // Si la réponse est OK, retournez simplement les données
      return response;
    },
    (error) => {
      // Si une erreur se produit, vérifiez si le statut est 401
      if (error.response && error.response.status === 401) {
        deleteToken();
        window.location.href = "/signin";
      }

      // Renvoyer l'erreur pour être traitée plus loin
      return Promise.reject(error);
    }
  );

  return instance;
}

export default useAxiosWithInterceptor;
