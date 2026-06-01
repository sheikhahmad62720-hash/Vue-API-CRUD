<template>
    <div class="signup-container">
        <h2>Login</h2>
   

        <form @submit.prevent="login">
            

            <div class="form-group">
                <label for="email">Email Address</label>
                <input  v-model="email" type="email" id="email" placeholder="Enter your email" required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" id="password" placeholder="••••••••" required>
            </div>

            <button  class="signup-btn">Login</button>
        </form>

       
    </div>
</template>
<script>
    import axios from 'axios';
      export default{
        name :'Login',
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
      async login(){
        let result =await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
       if(result.status ==200&& result.data.length >0){
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                    this.$router.push({name:'Home'})
                }
    },
        },
         mounted(){
        let user =localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
        }
        }
</script>
<style scoped>
     .signup-container {
            background: #ffffff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            width: 100%;
            margin: auto;
            height: 600px;
            max-width: 500px;
        }

        .signup-container h2 {
            color:#4da63c;
            text-align: center;
            margin-bottom: 5px;
        }

        .signup-container p {
            color: #666;
            font-size: 14px;
            text-align: center;
            margin-bottom: 30px;
        }

        /* Input Fields Aur Labels */
        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #333;
            font-size: 14px;
        }

        .form-group input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 15px;
            outline: none;
            transition: border-color 0.2s;
        }

        /* Input par focus karne se blue border aayega */
        .form-group input:focus {
            border-color: #1e3c72;
        }

        /* Button Ki Styling */
        .signup-btn {
            width: 100%;
            padding: 12px;
            background-color: #4da63c;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s;
            margin-top: 10px;
        }

        .signup-btn:hover {
            background-color: #327425;
        }

        /* Niche wala link text */
        .footer-text {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #666;
        }

        .footer-text a {
            color: #1e3c72;
            text-decoration: none;
            font-weight: bold;
        }

        .footer-text a:hover {
            text-decoration: underline;
        }

</style>