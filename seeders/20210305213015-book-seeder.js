'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('books', [
      {
        book_name: '1984',
        book_author: "George Orwell",
        book_desc: "The story takes place in an imagined future, the year 1984, when much of the world has fallen victim to perpetual war, omnipresent government surveillance, historical negationism, and propaganda.",
        book_image_link: "https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg",
        book_genre: "Fiction",
        book_page_count: 328,
        book_rating: 5,
        book_published_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_name: 'Starship Troopers',
        book_author: "Robert Heinlein",
        book_desc: "The story is set in a future society ruled by a human interstellar government dominated by a military elite, referred to as the Terran Federation.[6] The first-person narrative follows Juan Johnny Rico through his military service in the Mobile Infantry.",
        book_image_link: "https://upload.wikimedia.org/wikipedia/en/a/a9/Starship_Troopers_%28novel%29.jpg",
        book_genre: "Fiction",
        book_page_count: 263,
        book_rating: 5,
        book_published_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_name: "Ender's Game",
        book_author: "Orson Scott Card",
        book_desc: "The classic of modern science fiction--Front cover.",
        book_image_link: "http://books.google.com/books/content?id=jaM7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        book_genre: "Fiction",
        book_page_count: 448,
        book_rating: 4,
        book_published_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_name: 'Kenobi',
        book_author: "John Jackson Miller",
        book_desc: "Exiled to Tatooine, Obi-Wan Kenobi works to hide his Jedi powers and establish an alternate identity for himself as an eccentric hermit while protecting an infant Luke Skywalker and aiding the residents of Tatooine.",
        book_image_link: "http://books.google.com/books/content?id=EBXTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        book_genre: "Fiction",
        book_page_count: 442,
        book_rating: 3.5,
        book_published_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
