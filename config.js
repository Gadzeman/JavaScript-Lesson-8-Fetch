


fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(users => {
        let container = document.createElement("div")
        container.classList.add("wrap")
        container.style.background = "gray"
        document.body.style.margin = "0"
        for (const user of users) {

            let h3 = document.createElement("h3")
            h3.innerText = `${user.id} Name: ${user.name} `
            container.appendChild(h3)
            h3.style.background = "silver"

            let a = document.createElement("a")
            a.innerText = "Details"
            a.href = `userDetails.html?user=${JSON.stringify(user)}`
            h3.appendChild(a)

        }
        document.body.appendChild(container)
    })