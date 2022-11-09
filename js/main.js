
// elForm.addEventListener("click", function (evt) {
//     evt.preventDefault()
//     let email = elInputEmail.value;
//     let password = elInputPassword.value;

// })

// elBtnCheck.addEventListener("mousedown", function (evt) {
//     evt.preventDefault()
//     elInputPassword.textContent = password;
// })



let elForm = document.querySelector(".form")
let elInputSearch = document.querySelector(".search");
let elList = document.querySelector(".list");
let elTemplate = document.querySelector(".template").content;
let elDocumentFragment = document.createDocumentFragment();

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    
    fetch(`https://newsapi.org/v2/everything?q=${elInputSearch.value}&apiKey=82760c805ef145f0a44979084b431330`)
    .then(res => res.json())
    .then(data => {
        let dates = data.articles
        dates.forEach(element => {
            let elTemplateClone = elTemplate.cloneNode(true);
            elTemplateClone.querySelector(".image").src = element.urlToImage;
            elTemplateClone.querySelector(".title").textContent = element?.title;
            elTemplateClone.querySelector(".text").textContent = element?.publishedAt;
            elTemplateClone.querySelector(".link").textContent = "link"
            elTemplateClone.querySelector(".link").href = element.url
            
            elDocumentFragment.appendChild(elTemplateClone);
        });
        elList.appendChild(elDocumentFragment);
    })
    .catch(err => console.log(err))
})

