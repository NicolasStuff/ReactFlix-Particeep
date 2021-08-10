const movies = [
    {
      id: 1,
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      image: "https://tse3.mm.bing.net/th?id=OIP.FHyiyTJYbKttdEOeY6_pDgHaK-&pid=Api&P=0&w=300&h=300"    
    }, {
      id: 2,
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      image: "https://tse3.mm.bing.net/th?id=OIP.ivXZgfaJzk5OHdKcgfeAtwHaKj&pid=Api&P=0&w=300&h=300"
    }, {
      id: 3,
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      image: "https://tse3.mm.bing.net/th?id=OIP.wMG5lU1H5DxzdVAONkPQFAHaKl&pid=Api&P=0&w=300&h=300"
    }, {
      id: 4,
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      image: "https://tse1.mm.bing.net/th?id=OIP.s2uvNkvcajBkazygOEiLqwHaKD&pid=Api&P=0&w=300&h=300"
    }, {
      id: 5,
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      image: "https://tse4.mm.bing.net/th?id=OIP.C7XT3Dh-k3ZROdsBMswKGgHaIk&pid=Api&P=0&w=300&h=300"
    }, {
      id: 6,
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      image: "https://tse2.explicit.bing.net/th?id=OIP.oVSXJArra_OG8yixpwMZ6wHaLH&pid=Api&P=0&w=300&h=300"
    }, {
      id: 7,
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      image: "https://tse3.mm.bing.net/th?id=OIP.rzD69e4naObvPrZRWyLGJAHaKj&pid=Api&P=0&w=300&h=300"
    }, {
      id: 8,
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      image: "https://tse2.mm.bing.net/th?id=OIP.E__mbHUy6Ay5zDcYH5SvHwHaLH&pid=Api&P=0&w=300&h=300"
    }, {
      id: 9,
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      image:
      "https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg"
    }, {
      id: 10,
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      image: "https://tse2.mm.bing.net/th?id=OIP.HzdNvwsSeK0pCivtRefR4wHaKj&pid=Api&P=0&w=300&h=300"
    },
  ]
  
  let moviess = new Promise((resolve, reject) => setTimeout(resolve, 100, movies));
  console.log(moviess)
  export default moviess;

  // export default movies;
