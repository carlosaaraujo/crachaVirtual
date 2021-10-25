// ele ler da esquerda pra direita, seguindo o modelo em cascata de cima para baixo
const socialMedia = {
  github: 'carlosaaraujo',
  instagram: 'c4rlosaraujo',
  facebook: 'whoiscarlosdelima',
  youtube: 'garottosapeka',
  twitter: 'carlosaaraujo'
}

for (let li of socialIcons.children) {
  const social = li.getAttribute('class')
  li.children[0].href = `https://${social}.com/${socialMedia[social]}`
}

const getGitHubProfileInfos = () => {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      gitHubLink.href = data.html_url
      profilePicture.src = data.avatar_url
      profileGithub.textContent = data.login
    })
}

getGitHubProfileInfos()
