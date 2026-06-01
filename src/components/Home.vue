<template>
    <Header />
    <!-- <h1>Hello {{name}}</h1> -->
    <div class="table-container">
      <h2>Todo List</h2>
      
      <table class="todo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
          <tr v-for="item in Todo" :key="item.id">
  <td>{{ item.id }}</td>
  <td>{{ item.name }}</td>
  <td>{{ item.email }}</td>
  <td>{{ item.description }}</td>
  <td>
  <button class="edit-btn" @click="editUser(item.id)">
  Edit
</button>
<button class="delete-btn" @click="deleteUser(item.id)">
      Delete
    </button>
  </td>
</tr>
          <!-- Agar data khali ho ya load ho raha ho -->
          <tr v-if="Todo.length === 0">
            <td colspan="4" class="no-data">No data found</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
import axios from 'axios';
import Header from "../components/Header.vue";
export default{
    name:'Home',

    data(){
        return{
            name:'',
            Todo:[],
        }
    },
    components:{
        Header
    },
   methods: {
  editUser(id) {
      this.$router.push(`/update/${id}`);
    },

    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:3000/Todo/${id}`);

        this.Todo = this.Todo.filter(
          item => item.id !== id
        );

      } catch (error) {
        console.log(error);
      }
    }
  },

  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/Todo"
    );

    this.Todo = result.data;
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
  color: #2c3e50;
  font-size: 32px;
  font-weight: bold;
}

.table-container {
  width: 90%;
  max-width: 1000px;
  margin: 40px auto;
  background: #ffffff;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.table-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #4da63c;
  font-size: 28px;
}

.todo-table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 10px;
}

.todo-table thead {
  background-color: #4da63c;
  color: white;
}

.todo-table th {
  padding: 15px;
  text-align: left;
  font-size: 16px;
}

.todo-table td {
  padding: 14px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 15px;
  color: #444;
}

.todo-table tbody tr {
  transition: 0.3s;
}

.todo-table tbody tr:hover {
  background-color: #f5fdf3;
  /* transform: scale(1.03); */
}

.no-data {
  text-align: center;
  color: #999;
  padding: 20px;
  font-size: 16px;
}
.edit-btn {
  background-color: #4da63c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.edit-btn:hover {
  background-color: #327425;
  transform: translateY(-2px);
}

.edit-btn:active {
  transform: translateY(0);
}
.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
}

.delete-btn:hover {
  background-color: #b02a37;
}
@media (max-width: 768px) {

  .table-container {
    width: 95%;
    padding: 15px;
  }

  .todo-table th,
  .todo-table td {
    padding: 10px;
    font-size: 13px;
  }

  h1 {
    font-size: 24px;
  }

  .table-container h2 {
    font-size: 22px;
  }
}
</style>