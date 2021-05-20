import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer flLUh2llpmZ6VXQZdzoxswz-oGrJ2IiXKVj87vSUN-2O7k1xE-JRSQSqSBHKl2G8rSZB2GAFtOyhVeJHLedfPzQlYEmXCQaHxSEjbCKYgpQxJEmbZOIClNn209KmYHYx",
  },
});

// yelp.get('/search')
