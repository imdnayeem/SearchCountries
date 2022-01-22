import React from "react";
import countries from "../data/countries.json";

export const SearchCountry = () => {
  const [search, setSearch] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState([]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setFilteredCountries(
            countries.filter(({ country, city }) =>
              country.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
      />
      <ul>
        {filteredCountries.map(({ country, city }) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
};
