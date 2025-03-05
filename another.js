// exercise

let database = [
    {usernam: 'baba',
        password: '1234'
    },

    {usernam: 'mamaa',
        password: '12345'
    },

    {usernam: 'masa',
        password: '12346'
    }
];

let newsfeed = [
    {usernam: 'babatu',
        timeline: 'my back is good'
    },
    {usernam: 'batu',
        timeline: 'someone going home'
    }
];


let userNameprompt = prompt("What is your username");
                   let passWordprompt = prompt("What is your password");

function isUservalid(username, password) {

    for (let index = 0; index < database.length; index++) {
        if (username === database[index].usernam && 
            password === database[index].password) {
                return true;
            
        }
    }
        return false;
    }

                   
function signIn(username, password) {
        if (isUservalid(username, password)) {
                console.log(newsfeed);
            
        } else { alert('wrong username and password');
            
        }

        
    } 

signIn(userNameprompt, passWordprompt);