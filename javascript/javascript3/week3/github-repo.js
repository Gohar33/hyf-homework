const container = document.createElement("container");
const userNames = ["SlaviaF", "Saidemm", "NatsGt"]
const fetchPromise = userNames.map(user => fetch(`https://api.github.com/search/repositories?q=user:${user}`))
async function createPromise() {
    try {
        const promise = await Promise.all(fetchPromise)
        const json = await Promise.all(promise.map(response => response.json()))
        const jsonArray = json.forEach(response => {
            const ul = document.createElement("ul")
            ul.innerHTML = `${response.items[0].owner.login} 's Reposotories`;
            const name = document.createElement("li")
            name.innerHTML = `Name: ${response.items[0].full_name}`;
            const url = document.createElement("li")
            url.innerHTML = `URL: ${response.items[0].url}`;
            document.body.appendChild(ul)
            ul.appendChild(name)
            ul.appendChild(url)



        })

    } catch (err) {
        console.log(err)
    }
}

createPromise()





