window.addEventListener('load', () => {
    const Wall = document.querySelector('.wall')
    Posts.forEach((post) => Wall.insertAdjacentHTML('afterbegin', post.GenHTML()))
})