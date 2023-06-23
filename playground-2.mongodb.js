// Select the database to use.
use('test');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
        {
            id: 1,
            image: '"C:\Users\FOFIE\Desktop\year 2 courses\portfolio\portfolio\src\assets\portfolio.png"',
            title: 'My portfolio',
            github: 'https://github.com/FOFIE2002/portfolio',
            demo: 'https://fofie-portfolio.netlify.app',
          },
          {
            id: 2,
            image: '"C:\Users\FOFIE\Desktop\year 2 courses\portfolio\portfolio\src\assets\foodlie.png"',
            title: 'Foodlie',
            github: 'https://github.com/FOFIE2002/Foodlie',
            demo: '',
          }
    ]
);

// Insert a few documents into the PortfolioData collection.
 db.getCollection('testimonials').insertMany(
  [
    {
        avatar: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\avatar1.jpeg',
        name: 'Elma Jackson',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
        },
        {
          avatar: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\avatar2.jpeg',
          name: 'Avery Simpson',
          review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
          },
          {
            avatar: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\avatar3.jpeg',
            name: 'Nathaniel Blanco',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
            },
            {
              avatar: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\avatar4.jpeg',
              name: 'Cody Lynch',
              review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
              },
      
             ]
 );
