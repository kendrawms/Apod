fetch("https://api.nasa.gov/planetary/apod?api_key=pUdl25ITZfNd5vK9E80cTTXdfvej2MVfxNufkbSP")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then(data => {
        document.querySelector("img").src = data.url
        document.querySelector("h2").innerText = data.title
        document.querySelector(".date").innerText = data.date
        document.querySelector(".story").innerText = data.explanation

    })
    .catch(error => {
        console.log(`Opps: ${error}`)
    })