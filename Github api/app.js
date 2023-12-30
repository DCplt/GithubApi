const gitHubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new gitHub();
const ui = new UI();


eventLsiteners();


function eventLsiteners(){
    gitHubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){
    let username = nameInput.value.trim();
    if(username === ""){
        ui.showError("Lütfen bir kullanıcı giriniz");
    }
    else{
        github.getGithubData(username)
        .then(response =>{
            if(response.user.message === "Not Found"){
                ui.showError("Geçerli bir kullanıcı giriniz!");
            }
            else{
                ui.showUserİnfo(response.user);
                ui.showRepoİnfo(response.repo);
                
                
            }
        } )
        .catch(err => console.log(err));
    }

    ui.clearInput();
    e.preventDefault();
}
function clearAllSearched(){
    
}
function getAllSearched(){

}