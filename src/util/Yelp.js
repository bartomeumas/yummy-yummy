const apiKey = '0iryg5YoOiS1jPlSrTAQSvh0eByMkB4EDxWOINjYlc2u-nT0YXrrES_QgT46dKuxBkkhVpMZ1juQxVoZWx7UK5plNtE1UXPiwtuPiWeyfMWB730t1cMIiDgnUnJUYXYx';
let Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: {Authorization: `Bearer ${apiKey}`}}
            ).then(response => {
                return response.json();
              }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                  return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                  }));
                }
              });
            }
          };
          
          export default Yelp;
          