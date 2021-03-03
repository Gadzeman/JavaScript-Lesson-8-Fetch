


let url = new URL(location.href)
console.log(url)

let userS = url.searchParams.get("user")
console.log(userS)

let user = JSON.parse(userS)
console.log(user)

let logo = document.createElement("h3")
logo.innerText = `Name: ${user.name}`

let info = document.createElement("p")
info.innerHTML = `Email: ${user.email}<br>City: ${user.address.city}`

document.body.appendChild(logo)
document.body.appendChild(info)