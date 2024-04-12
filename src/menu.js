function menupage(){
    const container = document.querySelector('#content')
    container.textContent = ""
    const div = document.createElement("div")
    div.classList.add("menu")
    const starters = document.createElement("h3")
    starters.textContent = "Starters"
    const pStarter = document.createElement("p")
    pStarter.textContent = `French Onion Soup - A classic blend of caramelized onions, beef broth, and melted Gruyère cheese.
    Escargots à la Bourguignonne - Burgundy snails cooked in garlic herb butter, served with crusty bread.
    Pâté de Campagne - Country-style pâté made with pork, chicken liver,and herbs, served with cornichons and mustard.
    Salade Niçoise - A refreshing salad featuring mixed greens, tuna, hard-boiled eggs, olives, and anchovies, drizzled with a lemon vinaigrette.`
    
    const main = document.createElement("h3")
    main.textContent = "Main"
    const pMain = document.createElement("p")
    pMain.textContent = `French Onion Soup - A classic blend of caramelized onions, beef broth, and melted Gruyère cheese.
    Escargots à la Bourguignonne - Burgundy snails cooked in garlic herb butter, served with crusty bread.
    Pâté de Campagne - Country-style pâté made with pork, chicken liver,and herbs, served with cornichons and mustard.
    Salade Niçoise - A refreshing salad featuring mixed greens, tuna, hard-boiled eggs, olives, and anchovies, drizzled with a lemon vinaigrette.`
    
    const desserts = document.createElement("h3")
    desserts.textContent = "Desserts"
    const pDesserts = document.createElement("p")
    pDesserts.textContent = `French Onion Soup - A classic blend of caramelized onions, beef broth, and melted Gruyère cheese.
    Escargots à la Bourguignonne - Burgundy snails cooked in garlic herb butter, served with crusty bread.
    Pâté de Campagne - Country-style pâté made with pork, chicken liver,and herbs, served with cornichons and mustard.
    Salade Niçoise - A refreshing salad featuring mixed greens, tuna, hard-boiled eggs, olives, and anchovies, drizzled with a lemon vinaigrette.`

    div.appendChild(starters)
    div.appendChild(pStarter)
    div.appendChild(main)
    div.appendChild(pMain)
    div.appendChild(desserts)
    div.appendChild(pDesserts)
    container.appendChild(div)
}

export {menupage}