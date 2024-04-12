var sortPeople = function(names, heights) {
     const pairs = [];
    for (let i = 0; i < names.length; i++) {
        pairs.push({ name: names[i], height: heights[i] });
    }
    
    pairs.sort((a, b) => b.height - a.height);
    
    const sortedNames = pairs.map(pair => pair.name);
    
    return sortedNames;

};
