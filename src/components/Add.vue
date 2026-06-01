ya lo ya is ma fix kr do <template>
    <Header />

    <div class="container">
        <h2>Add User Form</h2>

        <form @submit.prevent="submitForm">
            <input type="text" v-model="Todo.name" placeholder="Enter Name" required />

            <input type="email" v-model="Todo.email" placeholder="Enter Email" required />

            <textarea v-model="Todo.description" placeholder="Enter Description" required></textarea>

            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";

export default {
    name: "Add",

    components: {
        Header,
    },

    data() {
        return {
            Todo: {
                name: "",
                email: "",
                description: "",
            },
        };
    },

    methods: {
        async submitForm() {
  try {
  
    let result = await axios.post(
      "http://localhost:3000/Todo", {
  name: this.Todo.name,
  email: this.Todo.email,
  description: this.Todo.description
}
    );

    console.log("Saved:", result.data);

    // 5. reset form
    this.Todo = {
      name: "",
      email: "",
      description: "",
    };

 
    this.$router.push({ name: "Home" });

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
}

    },
};
</script>

<style scoped>
.container {
    background: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 500px;
    margin: 50px auto;
}

.container h2 {
    color: #4da63c;
    text-align: center;
    margin-bottom: 20px;
}

.container input,
.container textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 15px;
}

.container textarea {
    min-height: 120px;
    resize: none;
}

.container button {
    width: 100%;
    padding: 12px;
    background-color: #4da63c;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

.container button:hover {
    background-color: #327425;
}
</style>