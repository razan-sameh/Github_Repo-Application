let input = document.getElementsByTagName("input")[0];
let button = document.getElementsByTagName("button")[0];
let output = document.querySelector(".output-container");
let span = document.querySelector(".output-container span");
button.onclick = function () {
    getrepo();
}
function getrepo() {
    if (input.value == "") {
        span.innerHTML = "Please write Github username.";
    }
    else{
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((response) => response.json())
        .then((data) => {
        span.remove();
        data.forEach(repo => {
            let div = document.createElement("div");
            div.setAttribute("class","main");
            output.appendChild(div);
            let text = document.createElement("p");
            text.innerHTML = repo.name;
            div.appendChild(text);

            let links = document.createElement("div");
            links.setAttribute("class","submain");

            let visit = document.createElement("a");
            visit.innerHTML = "visit";
            visit.href = `https://github.com/${input.value}/${repo.name}`;
            visit.setAttribute('target', '_blank');
            let stars = document.createElement("span");
            stars.innerHTML = `Stars ${repo.stargazers_count}`;
            stars.setAttribute("class","stars")
            
            div.appendChild(links);
            links.appendChild(stars);
            links.appendChild(visit);
            text.style.cssText = "padding: 0px 10px;"
            
        });
    });
    }
}
