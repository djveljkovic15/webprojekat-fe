<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>

        <h2> {{error}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                error: ''
            }
        },
     
        methods: {

            login() {
                const xHttp = new XMLHttpRequest();
                const vue = this;

                xHttp.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 200) {
                            const user = JSON.parse(this.response);

                            vue.$emit('authenticated', true);
                            
                            //vue.$emit('firstName', user.firstName); 
                            //vue.$emit('lastName', user.lastName);
 

                            if (user.privilegeLevel === 'ADMIN') {
                                vue.$router.replace({ name: 'admin' });
                            } else {
                                if(user.privilegeLevel === 'USER') {
                                    vue.$router.replace({ name: 'user' })
                                }else {
                                vue.error = 'Invalid username or password!';
                                }
                            } 
                        } else {
                            vue.error = 'Invalid username or password!';
                        }
                    } 
                };

                xHttp.open('POST', 'http://localhost:8080/dzo/users/login', true);
                xHttp.setRequestHeader('Content-Type', 'application/json');
                xHttp.send(JSON.stringify({
                    username: this.input.username,
                    password: this.input.password
                }));
                /** if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }*/
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>