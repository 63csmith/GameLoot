import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: '63csmith',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Chris',
      email: '63csmith@gmail.com',
      password: bcrypt.hashSync('football'),
      isAdmin: true,
    }
  ],
  products: [
    {
      name: 'John Marstons Hat',
      // slug: 'John Marstons Hat',
      category: 'Hats',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Hat Co.',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
        {
      name: 'Master Cheifs Helmet',
      // slug: 'Master Cheifs Helmet',
      category: 'Helmets',
      image: '/images/117.jpg',
      price: 1000,
      countInStock: 1,
      brand: 'MJOLNIR',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
