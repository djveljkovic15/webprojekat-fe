const domainUrl = "http://localhost:8080/dzo";

let CouponClient = {
    loadCoupons(comp) {
        fetch(domainUrl + "/coupons/all")
            .then(function (response) {
                return response.json();
            })
            .then(function (couponsVal) {
                comp.coupons = couponsVal;
            });
    },
    loadActiveCoupons(comp) {
      fetch(domainUrl + "/coupons/active")
          .then(function (response) {
              return response.json();
          })
          .then(function (couponsVal) {
              comp.coupons = couponsVal;
          });
  },
  loadPaginatedCoupons(firstResult,maxResult,comp) {
    fetch(domainUrl + "/coupons/all/paginated/"+firstResult+"-"+maxResult)
        .then(function (response) {
            return response.json();
        })
        .then(function (couponsVal) {
            comp.couponsPaginated = couponsVal;
        });
},

    addCoupon(coupon, comp) {  
        fetch(domainUrl + "/coupons/add", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(coupon)
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(coupon) {
            comp.coupons = [...comp.coupons, coupon]
          });
      },
    deleteCoupon(int,comp){
      fetch(domainUrl + "/coupons/delete/" + int) 
      .then(function(coupon) {
        comp.coupons = [...comp.coupons, coupon]
      });
    },
    loadCouponsFromShop(id,comp) {
      fetch(domainUrl + "/coupons/find/shop/" + id)
          .then(function (response) {
              return response.json();
          })
          .then(function (couponsVal) {
              comp.coupons = couponsVal;
          });
  },
}


export default CouponClient
