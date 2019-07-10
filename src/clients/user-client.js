const domainUrl = "http://localhost:8080/dzo";

let UserClient = {
    userLogin(login,comp) {
        fetch(domainUrl + "/users/login",{
            method: "POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(login)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (login) {
                comp.logins = [...comp.logins, login]
            });
    },
    loadUsers(comp) {
        fetch(domainUrl + "/users/all")
            .then(function (response) {
                return response.json();
            })
            .then(function (usersVal) {
                comp.users = usersVal;
            });
    },

    addUser(user, comp) {  
        fetch(domainUrl + "/users/add", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(user) {
            comp.users = [...comp.users, user]
          });
      }
}

export default UserClient
