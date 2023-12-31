

window.onload = function() {
    // ... rest of your code ...

    async function addSampleData() {
        try {
            await setDoc(doc(db, "testCollection", "testDocument"), {
                field1: "Hello",
                field2: "World"
            });
            console.log("Document written successfully!");
        } catch (error) {
            console.error("Error writing document: ", error);
        }
    }

    addSampleData();
};


window.onload = function() {
    var footer = document.querySelector('footer');
    var date = new Date();
    footer.innerHTML = '© ' + date.getFullYear() + ' Non-scroll Social Media';

    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#555';
            this.style.transition = 'background-color 0.5s';
        });
        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transition = 'background-color 0.5s';
        });
    });

    var postForm = document.querySelector('#post-creation form');
    var posts = document.querySelector('#posts');
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var postContent = this.querySelector('textarea').value;
        var postElement = document.createElement('div');
        var postText = document.createElement('p');
        postText.textContent = postContent;
        var postTime = document.createElement('small');
        postTime.textContent = new Date().toLocaleString();
        var likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        var likeCount = document.createElement('span');
        likeCount.textContent = '0 likes';
        likeButton.addEventListener('click', function() {
            var count = parseInt(likeCount.textContent);
            likeCount.textContent = (count + 1) + ' likes';
        });
        postElement.appendChild(postText);
        postElement.appendChild(postTime);
        postElement.appendChild(likeButton);
        postElement.appendChild(likeCount);
        posts.appendChild(postElement);
        this.querySelector('textarea').value = '';
    });

    var friends = ['Alice', 'Bob', 'Charlie', 'Dave'];
    var friendsList = document.querySelector('#friends-list');
    friends.forEach(function(friend) {
        var friendElement = document.createElement('li');
        friendElement.textContent = friend;
        friendsList.appendChild(friendElement);
    });

    document.getElementById('post-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var postInput = document.getElementById('post-input');
        var posts = document.getElementById('posts');
        var newPost = document.createElement('p');
        newPost.textContent = postInput.value;
        posts.appendChild(newPost);
        postInput.value = '';
    });
    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var usernameInput = document.getElementById('username-input');
        var bioInput = document.getElementById('bio-input');
        var usernameDisplay = document.getElementById('username-display');
        var bioDisplay = document.getElementById('bio-display');
        usernameDisplay.textContent = usernameInput.value;
        bioDisplay.textContent = bioInput.value;
        usernameInput.value = '';
        bioInput.value = '';
    });
    const auth = firebase.auth();

function createNewUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User created successfully
      console.log("User created: ", userCredential.user);
    })
    .catch((error) => {
      // Error creating user
      console.error("Error: ", error.message);
    });
}

createNewUser("test@example.com", "testPassword");

    
};
