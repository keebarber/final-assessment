
export function findMatchingUser(username, password) {
  
  //    This still doesn't make sense to me that I need to sort through it like this, but it works
  let newUser = username.user.username;
  let newPass = username.user.password;

    return userList.find(user =>
        user.username === newUser && user.password === newPass
    ) || null;
}

const userList = [
  {
    username: 'indianajones',
    password: 'coolPassword',
    name: 'Indiana Jones',
    email: 'indianajones@gmail.com',
    img: '/images/indianajones.jpg',
    location: 'Portland, OR',
    phone: '333-333-5555'
  },
  {
    username: 'taylorswift',
    password: 'awesomePassword',
    name: 'Taylor Swift',
    email: 'tswift@gmail.com',
    img: '/images/taylorswift.jpg',
    location: 'Detroit, MI',
    phone: '222-444-6666'
  },
  {
    username: 'grantchirpus',
    password: 'greatPassword',
    name: 'Grant Chirpus',
    email: 'grantChirpus@gmail.com',
    img: '/images/grantchirpus.png',
    location: 'Detroit, MI',
    phone: '111-777-3333'
  }
];
