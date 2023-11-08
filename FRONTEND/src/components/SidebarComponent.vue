<template>
  <nav class="navbar navbar-expand-sm head navbar-light bg-light" style="padding: 1px;position: fixed; width: 100vw; z-index: 5;">
    <div class="container-fluid" >
      <a class=" m-2 text-dark" href="#" style="text-decoration: none;">ADMINISTRATOR</a>
      <div class="d-none d-sm-flex" style=" width:60%; display: flex; justify-content: end;">
        <img src="/admin.png" alt="" srcset="" style="width:30px; height: 30px; margin-inline: 10px; border-radius: 50%;">
        <span style="margin-inline: 10px;">Roger Kazaktan Tornado</span>
      </div>
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-sm-none">
          <RouterLink to="/" class="nav-item" style="text-decoration: none;">
            <a class="nav-link active" aria-current="page">Home</a>
          </RouterLink>
          <RouterLink to="/tourist" class="nav-item" style="text-decoration: none;">
            <a class="nav-link active" aria-current="page">Tourist</a>
          </RouterLink>
          <RouterLink to="/tourguide" class="nav-item" style="text-decoration: none;">
            <a class="nav-link active" aria-current="page">Tour guide</a>
          </RouterLink>
          <RouterLink to="/boat" class="nav-item" style="text-decoration: none;">
            <a class="nav-link active" aria-current="page" >Boat Owner</a>
          </RouterLink>
          <RouterLink to="/AdminReservationView" class="nav-item" style="text-decoration: none;">
            <a class="nav-link active" aria-current="page">Reservation</a>
          </RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.head {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

@media (max-width: 1100px) {
  .head {
    border-left: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
}

.navbar-toggler {
  padding: 1px;
}
</style>
