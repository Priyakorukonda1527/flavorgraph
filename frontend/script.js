async function fetchRecipes() {
    const input = document.getElementById("ingredients").value;
    const ingredients = input.split(",").map(i => i.trim()).filter(i => i);

    if (ingredients.length === 0) {
        alert("Please enter at least one ingredient.");
        return;
    }

    const res = await fetch("http://127.0.0.1:8000/suggest", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(ingredients)
    });

    const data = await res.json();
    displayRecipes(data.recipes);
}

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // clear previous results

    recipes.forEach(r => {
        const div = document.createElement("div");
        div.className = "recipe";
        div.innerHTML = `
            <h2>${r.recipe} (${r.score * 100}% match)</h2>
            <p><b>Have:</b> ${r.have.join(", ") || "None"}</p>
            <p><b>Missing:</b> ${r.missing.join(", ") || "None"}</p>
            ${Object.keys(r.substitutions).length > 0 ? `<p><b>Substitutions:</b> ${Object.entries(r.substitutions).map(([k,v]) => `${k} → ${v.join("/")}`).join(", ")}</p>` : ""}
        `;
        resultsDiv.appendChild(div);
    });
}
