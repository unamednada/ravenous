const Yelp = {
  ID: 'G6ChgkSQjjwli4uzDJc6lA',
  apiKey: 'WhorSdrpjQgt8Oax8fA9wGYNh0AUeVqzoN8B8reMBUcuoy6JL72mPlMTSawyjf4AjKE-IYAyj8o7ZU1_cUMvhP5LHEBJ0EVktfrbnHYbbYUDhQL7EvKHqyRpNM0wYXYx',

  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(({ id, image_url, name, location, categories, rating, review_count }) => ({
          id,
          imageSrc: image_url,
          name,
          address: location.address1,
          city: location.city,
          state: location.state,
          zipCode: location.zip_code,
          category: categories[0].title,
          rating: rating,
          reviewCount: review_count,
        }))
      }
    })
  }
}

export default Yelp;