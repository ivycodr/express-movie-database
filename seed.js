const {Movie, Cast, Crew} = require('./index.js');
const {sequelizedb } = require('./db.js'); 


// this file is used to seed the restaurants in the db

// create the restaurant objects and place it in the array
// make sure it match the model, since you will be inserting it

const movieArray = [
    {
        name: "Panera Bread",
        address: "1219 Colleyville Blvd, Colleyville, TX, 76039"
    },
    {
        name: "Panda Express",
        address: "1217 Dallas Blvd, Dallas, TX, 76065"
    },
    
    {
        name: "Nanglo Indian Restaurant",
        address: "1220 Euless Blvd, Euless, TX, 76021"
    },

    {
        name: "Wild Wings",
        address: "1232 Southlake, Southlake, TX, 76092"
    },

    {
        name: "Chart House",
        address: "1000 PCH, Santa Monica, CA, 76039"
    }



]


const menuArray = [
  {
      name: "Lunch",
      restaurant_id : 1
     
 
  },
  {
      name: "Dinner",
      restaurant_id : 1
     
    
  },
  
  {
      name: "Buffet",
      restaurant_id : 1
     
     
  },
  
  {
    name: "Lunch",
    restaurant_id : 2
   
   
  },
  {
    name: "Lunch",
    restaurant_id : 5
   
   
  }

  




]


const menuItemArray = [
  {
      name: "Whopper",
      price: 3.12,
      menu_id : 1
 
  },
  {
    name: "Fries",
    price: 3.12,
    menu_id : 2
    
  },
  
  {
    name: "Nuggets",
    price: 3.12,
    menu_id : 3
     
  },

  {
    name: "Shake",
    price: 3.12,
    menu_id : 1
     
  },
  {
    name: "Cheeese Burger",
    price: 3.12,
    menu_id : 3
     
  },
  {
    name: "Chicken Spicy Burger",
    price: 3.12,
    menu_id : 2
     
  },
  {
    name: "Double Whopper",
    price: 3.12,
    menu_id : 3
     
  }


]


const seed = async () => {
    try {
      console.log('Seeding Start')
      await sequelizedb.sync({force: true})
      await Restaurant.bulkCreate(restaurantArray, {validate: true})
      await Menu.bulkCreate(menuArray, {validate: true})
      await MenuItem.bulkCreate(menuItemArray, {validate: true})
     
    } catch (error) {
      console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
    }finally {
      sequelizedb.close()
    }
  }
  
 
  seed()
      .then(() => {
        console.log('Seeding Complete - Success')
      })
      .catch(err => {
        console.error('Oh noes! Something went wrong!')
        console.error(err)
      })



