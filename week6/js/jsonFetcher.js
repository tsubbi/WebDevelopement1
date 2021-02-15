async function fetchJson(url, dataName, callback) {
    const response = await fetch(url)
        .then(response => response.json())
        .then(data => callback(data[dataName]));
}