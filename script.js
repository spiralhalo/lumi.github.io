[...document.getElementsByTagName('article')].forEach(async (ele) => {
    const badge = ele.querySelector('.badge');
    const repo = ele.dataset.repo;
    if(badge != null && repo != null) {
        const response = await fetch(`https://api.github.com/repos/spiralhalo/${repo}/releases/latest`);
        const data = await response.json();
        badge.textContent = data.tag_name;
        if (data.tag_name == undefined) {
            console.log(data.message);
        }
    }
});
