import axios from "axios";

// Létrehozunk egy axios példányt a baseURL-lel
const http = axios.create({
    baseURL: "http://localhost:5173"
});

// Exportáljuk az http példányt
export { http };

// Máshol aCz alkalmazásban, például egy Vue komponensben importáljuk és használjuk
//import { http } from "@/utils/http"; // Importálás az http.js fájlból

//Példa egy API hívásra
http.get('/login')
  .then(response => {
    // Kezeljük a választ, például tároljuk a felhasználókat egy state-ben
    console.log(response.data);
  })
  .catch(error => {
    // Kezeljük az esetleges hibákat
    console.error('API hiba: ', error);
  });
