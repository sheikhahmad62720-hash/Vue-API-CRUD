<template>
<Header />
<div class="container">
        <h2>Update</h2>

    <form @submit.prevent="updateForm">
  <input
    type="text"
    v-model="Todo.name"
    placeholder="Name"
  />

  <input
    type="email"
    v-model="Todo.email"
    placeholder="Email"
  />

  <textarea
    v-model="Todo.description"
    placeholder="Description"
  ></textarea>

  <button type="submit">
    Update
  </button>
</form>
    </div>
</template>
<script>
import Header from "../components/Header.vue";
 import axios from "axios";
export default {
  name: "Update",

  components: {
    Header
  },

  data() {
    return {
      Todo: {
        id: "",
        name: "",
        email: "",
        description: "",
      },
    };
  },

  async mounted() {
    let id = this.$route.params.id;

    let result = await axios.get(
      `http://localhost:3000/Todo/${id}`
    );

    this.Todo = result.data;
  },

  methods: {
    async updateForm() {
      try {
        await axios.put(
          `http://localhost:3000/Todo/${this.Todo.id}`,
          this.Todo
        );

        alert("Updated Successfully");
        this.$router.push({ name: "Home" });

      } catch (error) {
        console.log(error);
      }
    },

    logout() {
      localStorage.clear();
      this.$router.push({ name: "Signup" });
    }
  }
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

