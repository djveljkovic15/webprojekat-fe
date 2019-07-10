const domainUrl = "http://localhost:8080/dzo";

let ShopClient = {
    loadShops(comp) {
      fetch(domainUrl + "/shops/all")
        .then(function(response) {
          return response.json();
        })
        .then(function(shops) {
          comp.shops = shops;
        });
    },
    addShop(shop, comp) {  
      fetch(domainUrl + "/shops/add", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(shop)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(shop) {
          comp.shops = [...comp.shops, shop]
        });
    },
    deleteShop(id,comp){
      fetch(domainUrl + "/shops/delete/" + id) 
      .then(function(shop) {
        comp.shops = [...comp.shops, shop]
      });
    },
    findShopById(id,comp) {
      fetch(domainUrl + "/shops/find/" + id)
        .then(function(response) {
          return response.json();
        })
        .then(function(shopVal) {
          comp.shops = shopVal;
        });
    }

}


export default ShopClient
