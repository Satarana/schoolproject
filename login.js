



    
    document.addEventListener('DOMContentLoaded', () => {
        const savedUsername = localStorage.getItem('username');
        const message = document.getElementById('message');

        if(savedUsername) {
            message.textContent = `Welcome back, ${savedUsername}!`;
        }

        const form = document.getElementById('usernameForm');
        form.addEventListener('submit', function(event){
            event.preventDefault();

        const usernameInput = document.getElementById('username').value;

        localStorage.setItem('username', usernameInput)

        message.textContent = `Username saved: ${usernameInput}`
        });

    })


    function validate(){
        const usernameArray = [];
        const passwordArray = [];
    
    
        // document.getElementById("rank1").innerHTML = "None";
        var rang = document.getElementById("username").value;
        
        // document.getElementById("rank1").innerHTML = rang;
    
        usernameArray.push(rang);
    
    
    
    
    
    // function ranking(){
        let tes = "";
        const rankArray = [];
        rankArray.push(rang);
    
        rankArray.forEach(rankins);
    
        document.getElementById("rank1").innerHTML += tes;
    
        function rankins(item, index){
             tes += index  + ": " + item + "<br>";
        }
    
    
    
    
        document.getElementById("")
    
    
    }


