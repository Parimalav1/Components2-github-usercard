/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
/* <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div> */

function usercardMaker(attributes) {

  let { name, avatar_url, login, email, location, followers, following, bio } = attributes;
  name = name ? name : 'Anonymous';
  email = email ? email : '';
  // const imageURL = attributes.imageURL;
  // const name = attributes.name;

  const cardDiv = document.createElement('div');
  const userImage = document.createElement('img');
  const cardinfoDiv = document.createElement('div');
  const heading = document.createElement('h3');
  const githubName = document.createElement('p');
  const place = document.createElement('p');
  const profilePara = document.createElement('p');
  const followersPara = document.createElement('p');
  const followingPara = document.createElement('p');
  const bioPara = document.createElement('p');

  cardDiv.appendChild(userImage);
  cardDiv.appendChild(cardinfoDiv);
  cardinfoDiv.appendChild(heading);
  cardinfoDiv.appendChild(githubName);
  cardinfoDiv.appendChild(place);
  cardinfoDiv.appendChild(profilePara);
  cardinfoDiv.appendChild(followersPara);
  cardinfoDiv.appendChild(followingPara);
  cardinfoDiv.appendChild(bioPara);

  cardDiv.classList.add('card');
  cardinfoDiv.classList.add('card-info');
  heading.classList.add('name');
  githubName.classList.add('username');

  userImage.src = avatar_url;
  heading.textContent = `${name}`;
  githubName.textContent = `${login}`;
  profilePara.textContent = `Profile: ${email}`;
  place.textContent = `Location: ${location}`;
  followersPara.textContent = `Followers: ${followers}`;
  followingPara.textContent = `Following: ${following}`;
  bioPara.textContent = `Bio: ${bio}`;

  return cardDiv;
}

function getUser() {
  axios.get('https://api.github.com/users/Parimalav1')
    .then(response => {
      console.log('This is the user');
      console.log(response);

      const usercardInfo = response.data;
      const usercard = usercardMaker(usercardInfo);
      const containerPoint = document.querySelector('.container')
      containerPoint.appendChild(usercard);
    })
    .catch(error => {
      console.error('Error, change the code.');
    })
    .finally(() => {
      console.log('Hope it works');
    })
}
getUser();


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const friendsArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];
function getFriend(name) {
  axios.get(`https://api.github.com/users/${name}`)
    .then(response => {
      console.log('This is the user');
      console.log(response);

      const usercardInfo = response.data;
      const usercard = usercardMaker(usercardInfo);
      const containerPoint = document.querySelector('.container')
      containerPoint.appendChild(usercard);
    })
    .catch(error => {
      console.error('Error, change the code.');
    })
    .finally(() => {
      console.log('Hope it works');
    })
}
friendsArray.forEach(x => {
  getFriend(x);
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
// const followersArray = [];
// function getFollowers(name) {
//   axios.get(`https://api.github.com/users/Parimalav1'/${name}`)
//     .then(response => {
//       console.log('This might be the follower');
//       console.log(response);

//       const audience = followerList => {
//         return  new Promise((resolve, reject) => {
//           if (`${name}` === )
//           resolve(`${name} is the follower`);
//         } else {
//           reject(new console.error();
//           )
//         }
//       }
//       const usercardFollowerInfo = response.data;
//       usercardFollowerInfo.forEach(x => {
//         const usercardFollower = usercardMaker(x);
//         containerPoint.appendChild(usercardFollower);
//       })
//     })
//     .catch(error => {
//       console.log('Error, change the code.');
//     })
//     .finally(() => {
//       console.log('Hope it works');
//     })
// }
// getFollowers();
// const parseTime = ms => {
//   return new Promise((resolve, reject) => {
//     const timeString = time / 1000;
//     if (ms > 999) {
//       resolve(`${timeString} seconds have passed`);
//     } else {
//       reject(new Error(`ms is less than 1 second promise rejected!`));
//     }
//   });
// };
// timeMachine()
// .then(parseTime)
// .then(timePassed => {
//   console.log(timePassed); --> OUTPUT: DOES NOT RUN
// })
// .catch(err => {
//   console.log(err); --> OUTPUT: ​​​​​[Error: ms is less than 1 second promise rejected!]​​​​​
// });
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
