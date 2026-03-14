

function fetchUserProfile(username){
    return fetch(`https://api.github.com/users/${username}`).then (raw=>{
        if(!raw.ok)throw new Error("User Not Found");
    return raw.json();
});
        

    }

fetchUserProfile("async").then(function(data){
    console.log(data);
    
})
function getUserRepos(username){
    return fetch(`https://api.github.com/users/${username}/repos`).then ((raw)=>
    raw.json());

}
getUserRepos("asynchronousJavascriptor").then(function(data){
    console.log(data);
    
})