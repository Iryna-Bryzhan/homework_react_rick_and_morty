import React, { useState, useEffect } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Получите данные персонажей из API при загрузке компонента
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowList(value !== "");

    // Проверяем, был ли выбран персонаж из списка
    const selectedCharacter = characters.find(
      (character) => character.name === value
    );
    if (selectedCharacter) {
      navigate(`/character/${selectedCharacter.id}`); // Перенаправляем пользователя
    }
  };

  return (
    <div className="container box">
      <div className="search">
        <input
          type="search"
          placeholder="Name character"
          value={searchTerm}
          onChange={handleSearchChange}
          list="characters-list"
        />
        {showList && ( // Показываем список только при наличии введенного запроса
          <datalist id="characters-list">
            {characters.map((character) => (
              <option key={character.id} value={character.name} />
            ))}
          </datalist>
        )}
      </div>
    </div>
  );
}

export default Search;
