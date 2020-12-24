[...document.getElementsByTagName('article')].forEach(async (ele) => {
    const response = await fetch(`https://api.github.com/repos/spiralhalo/${ele.dataset.repo}/releases/latest`);
    const data = await response.json();
    ele.querySelector('.badge').textContent = data.tag_name;
});