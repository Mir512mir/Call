let serverURL = 'http://65.109.13.139:9191/';

let token = '';
token = localStorage.getItem('jwt');


try {
    fetch(serverURL + "me", {
        headers: {
            'x-access-token': token
        }
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data);
            const avatar = document.querySelector('.profile-image img');
            avatar.setAttribute('src', data.avatar || 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png');

            document.querySelector('.profile-user-name').textContent = data.username;

            const statCount = document.querySelectorAll('.profile-stat-count');
            statCount[0].textContent = data.posts_count;
            statCount[1].textContent = data.followers;
            statCount[2].textContent = data.following;

            document.querySelector('.profile-real-name').textContent = data.fullName || 'name not specified';
            document.querySelector('.user-bio').textContent = data.bio || 'no data 🏕️';
        });
} catch (e) { console.log('Error app'); }

let myData = {
    "username": "Sergey3",
    "avatar": "../img/myFoto.jpg",
    "age": 32,
    "bio": "I learn JS",
    "fullName": "Kiba Sergey"
}

// try {
//     fetch(serverURL + 'me', {
//         headers: {
//             "content-type": "application/json",
//             "x-access-token": token
//         },
//         "body": JSON.stringify(myData),
//         "method": "PUT"
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             reject(new Error('Произошла ошибка'));
//         });
// } catch (e) { console.log(e); }

try {
    fetch(serverURL + 'users', {
        headers: {
            'x-access-token': token
        }
    })
        .then(response => response.json())
        .then(data => console.log('Users Data', data))
} catch (e) { console.log(e); }

function getMe() {try 
    {
    fetch(serverURL + 'me', {
        headers: {
            "content-type": "application/json",
            "x-access-token": token
        },
    
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("Get data me URL");
            console.log(this.myName);
        })
        .catch(error => {
            reject(new Error('Произошла ошибка'));
        });
} catch (e) { console.log(e); }

    
}

getMe.call({myName:"Peter"});