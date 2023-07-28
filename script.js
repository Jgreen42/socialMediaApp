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

    var loginForm = document.querySelector('#login-form form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Logged in!');
    });

    var signupForm = document.querySelector('#signup-form form');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Signed up!');
    });
};
