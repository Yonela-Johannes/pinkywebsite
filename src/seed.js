/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: '49z4rmks6ChmwlEz7zXhaxV9DG53',
        username: 'Yonela',
        fullName: 'Yonela Johannes',
        emailAddress: 'johannesyonela@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'raphael',
        fullName: 'Raffaello Sanzio da Urbino',
        emailAddress: 'raphael@sanzio.com',
        following: [],
        followers: ['49z4rmks6ChmwlEz7zXhaxV9DG53'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'Tertia',
        fullName: 'TErtia Beukes',
        emailAddress: 'tertiabuekes@gmail.com',
        following: [],
        followers: ['49z4rmks6ChmwlEz7zXhaxV9DG53'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'Galaney',
        fullName: 'Galaney E. Goliath',
        emailAddress: 'Galaney.e@gmail.com',
        following: [],
        followers: ['49z4rmks6ChmwlEz7zXhaxV9DG53'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'Prince Niello',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'Tertia',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }