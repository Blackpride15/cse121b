/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:'Blessing Aniedi',
    profilePicture:'./images/myimage.png',
    favoriteFoods: ['Pizza', 'Rice', 'Chocolate', 'Burgers', 'Ice Cream'],
    hobbies:['teaching', 'Cocking', 'dancing'],
    placesLived: []
  }



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Portharourt, Nigeria',
      length: '10 year'
    }
  );

// Add additional placesLived
myProfile.placesLived.push(
    {
      place: 'Calabar, Nigeria',
      length: '2 years'
    },
    {
      place: 'uyo, Nigeria',
      length: '8 years'
    }
  );




/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.profilePicture; 
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
// Use a forEach loop to iterate over the favoriteFoods array.
myProfile.favoriteFoods.forEach(food => {
    // create an HTML <li> element
    let li = document.createElement('li');
    
    // place the value of the favoriteFoods array element into the textContent of this new li element
    li.textContent = food;
    
    // append this new <li> element with content as a child of the HTML <ul> element with an ID of favorite-foods
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
// Use a forEach loop to iterate over the hobbies array.
myProfile.hobbies.forEach(hobby => {
    // create an HTML <li> element
    let li = document.createElement('li');
    
    li.textContent = hobby;
    
    document.querySelector('#hobbies').appendChild(li);
  });


/* Places Lived DataList */

 // Use a forEach loop to iterate over the placesLived array.
 myProfile.placesLived.forEach(place => {

    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
