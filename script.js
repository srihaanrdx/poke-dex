async function fetchPokemon() {
    const id = document.getElementById("pokemonId").value;
    const resultDiv = document.getElementById("result");
  
    if (!id || isNaN(id) || id <= 0) {
      resultDiv.innerHTML = "<p>Please enter a valid Pokémon number.</p>";
      return;
    }
  
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) throw new Error("Pokémon not found!");
  
      const data = await res.json();
  
      resultDiv.innerHTML = `
      <h2>#${data.id} - ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <div class="poke-wrapper">
        <img src="${data.sprites.front_default}" alt="${data.name}" />
      </div>
    `;
    
    } catch (err) {
      resultDiv.innerHTML = `<p>${err.message}</p>`;
    }
  }
  function playMusic() {
    const audio = document.getElementById("theme-song");
    audio.play().catch(err => {
      console.log("Autoplay blocked:", err);
    });
  }
  data.sprites.front_shiny
  const bdt = usd * 109;

