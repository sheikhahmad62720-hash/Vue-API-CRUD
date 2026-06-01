<template>
    <div class="navbar">
        <h1>Todo</h1>
        <div class="navlinks">
            <router-link to="/">Home</router-link>
            <router-link to="/add">Add</router-link>
            <!-- <router-link to="/update">Update</router-link> -->
        </div>
        <div v-on:click="logout" class="btn">Logout</div>
    </div>
</template>
<script>

export default {
    name: 'Headers',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'Signup' })
        },
    },
}

</script>
<style scoped>
.navbar {
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar h1 {
  color: #4da63c;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
}

.navlinks {
  display: flex;
  align-items: center;
  gap: 25px;
}

.navlinks a {
  text-decoration: none;
  color: #333;
  font-size: 17px;
  font-weight: 600;
  transition: 0.3s;
  position: relative;
}

.navlinks a:hover {
  color: #4da63c;
}

.navlinks a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0%;
  height: 2px;
  background-color: #4da63c;
  transition: 0.3s;
}

.navlinks a:hover::after {
  width: 100%;
}

.btn {
  background-color: #4da63c;
  color: white;
  padding: 10px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  user-select: none;
}

.btn:hover {
  background-color: #34782a;
  transform: translateY(-2px);
}

@media (max-width: 768px) {

  .navbar {
    flex-direction: column;
    height: auto;
    padding: 20px;
    gap: 15px;
  }

  .navlinks {
    flex-direction: column;
    gap: 15px;
  }

  .navbar h1 {
    font-size: 24px;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
