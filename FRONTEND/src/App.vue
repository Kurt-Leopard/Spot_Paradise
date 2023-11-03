<script>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  setup() {
    const isReservationTrue = ref(true)
    const ReservationBackgroundColor = ref('')
    const ReservationColor = ref('white')

    const ReservationList = () => {
      ReservationBackgroundColor.value = 'blue'
      ReservationColor.value = 'white'
      const elements = [ChangeToGray1, ChangeToGray2, ChangeToGray3]

      for (let i = 0; i < elements.length; i++) {
        elements[i].value = elements[i].value === 'lightgray' ? '#f8f9fa' : '#f8f9fa'
      }
    }

    const isTrue = ref(false)
    const AccountList = () => {
      isTrue.value = !isTrue.value
      ReservationColor.value = isTrue.value ? 'white' : 'white'
    }
    const accountBackgroundColor = computed(() => isTrue.value ? 'blue' : '')
    const Color = computed(() => isTrue.value ? 'white' : 'white')

    const menuIsTrue = ref(true)
    const menuIsFalse = ref(false)
    const Paddingblock = ref('3px')
    const Paddingleft = ref('5px')
    const BorderRadius = ref('5px')
    const Left = ref('17px')
    const Display = ref('none')
    const darkBlue = ref('#14243c')

    const menuBtn = () => {
      menuIsFalse.value = !menuIsFalse.value
      menuIsTrue.value = !menuIsTrue.value
      Paddingblock.value = menuIsTrue.value ? '3px' : '0'
      Paddingleft.value = menuIsTrue.value ? '5px' : '0'
      BorderRadius.value = menuIsTrue.value ? '5px' : '0'
      Left.value = menuIsTrue.value ? '17px' : '13px'
      Display.value = menuIsTrue.value ? 'none' : 'block'
    }

    const menuBack = () => {
      menuIsFalse.value = !menuIsFalse.value
      menuIsTrue.value = !menuIsTrue.value
      Paddingblock.value = menuIsTrue.value ? '3px' : '0'
      Paddingleft.value = menuIsTrue.value ? '5px' : '0'
      BorderRadius.value = menuIsTrue.value ? '5px' : '0'
      Left.value = menuIsTrue.value ? '17px' : '13px'
      Display.value = menuIsTrue.value ? 'none' : 'block'
    }

    const ChangeToGray1 = ref('#f8f9fa')
    const ChangeToGray2 = ref('#f8f9fa')
    const ChangeToGray3 = ref('#f8f9fa')

    const Gray = (index) => {
      const elements = [ChangeToGray1, ChangeToGray2, ChangeToGray3]

      for (let i = 0; i < elements.length; i++) {
        elements[i].value = i === index ? (elements[i].value === 'lightgray' ? '#f8f9fa' : 'lightgray') : '#f8f9fa'
        ReservationBackgroundColor.value = ''
        ReservationColor.value = 'white'
      }
    }

    return {
      isReservationTrue,
      ReservationBackgroundColor,
      ReservationColor,
      ReservationList,
      isTrue,
      AccountList,
      accountBackgroundColor,
      Color,
      menuIsTrue,
      menuIsFalse,
      Paddingblock,
      Paddingleft,
      BorderRadius,
      Left,
      Display,
      darkBlue,
      menuBtn,
      menuBack,
      ChangeToGray1,
      ChangeToGray2,
      ChangeToGray3,
      Gray
    }
  }
}
</script>
<template>
  <header class="d-flex">
    <nav class="menu-icon" :style="{ paddingBlock: Paddingblock, paddingLeft: Paddingleft }">
      <div class="menu-icon-container" :style="{ borderRadius: BorderRadius }">
        <div class="nav-link" style="margin-bottom: 27px;">
          <RouterLink to="">
            <img src="./assets/island.png" class="logo-icon" :style="{ left: Left }">
          </RouterLink>
        </div>
        <div class="nav-link" v-if="menuIsFalse" :style="{ display: Display }">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" @click="menuBack"
            class="bi bi-arrow-right-square-fill back-icon" viewBox="0 0 16 16" :style="{ color: darkBlue }">
            <path
              d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
          </svg>
          <div class="back-modal">
            Back
          </div>
        </div>
        <div class="nav-link">
          <RouterLink to="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-house-fill Home-icon" viewBox="0 0 16 16" style="color:#14243c ;">
              <path
                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
            </svg>
            <div class="Account-modal">
              Dashboard
            </div>
          </RouterLink>
        </div>
        <div class="nav-link" @click="AccountList">
          <div class="text-white" style="cursor: pointer;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-person-vcard-fill   Account-icon" viewBox="0 0 16 16" style="color:#14243c ;">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
            </svg>
            <div class="Account-modal">
              Account Management
            </div>
          </div>
        </div>
        <div v-if="isTrue">
          <div class="nav-link nav-link-list">
            <RouterLink to="/tourist"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-people-fill tourist-icon" viewBox="0 0 16 16" style="color:#14243c ;">
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <div class="Account-modal">
                Tourist Account
              </div>
            </RouterLink>

          </div>
          <div class="nav-link nav-link-list">
            <RouterLink to="/tourguide"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-people-fill tourguide-icon" viewBox="0 0 16 16" style="color:#14243c ;">
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <div class="Account-modal">
                TourGuide Account
              </div>
            </RouterLink>
          </div>
          <div class="nav-link nav-link-list">
            <RouterLink to="/boat"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-people-fill boat-icon" viewBox="0 0 16 16" style="color:#14243c ;">
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <div class="Account-modal">
                Boat Owner's Account
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="nav-link" @click="ReservationList">
          <div class="text-white" style="cursor: pointer;"> 
            <RouterLink to="/AdminReservationView"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              fill="currentColor" class="bi bi-calendar-check-fill reserve-icon" viewBox="0 0 16 16"
              style="color:#14243c ;">
              <path
                d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
            <div class="Account-modal">
              Reservation Management
            </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <nav class="menu" v-if="menuIsTrue" style="width: 20vw;">
      <div>
        <h5 class="text-white py-2 px-3 title" style="display: flex; justify-content: space-between;">Spot Paradise
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            class="bi bi-arrow-left-square-fill closebar-icon" @click="menuBtn" viewBox="0 0 16 16">
            <path
              d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
          </svg>
        </h5>
      </div>

      <div class="nav-link">
        <RouterLink to="/">Dashboard</RouterLink>
      </div>
      <div class="nav-link" @click="AccountList" :style="{ backgroundColor: accountBackgroundColor }">
        <div class="text-white" style="cursor: pointer;"><span :style="{ color: Color }"> Account Management</span>
        </div>
      </div>
      <div v-if="isTrue">

        <RouterLink to="/tourist" style="text-decoration: none;">
          <div class="nav-link" @click="Gray(0)" :style="{ backgroundColor: ChangeToGray1 }">
            <span class="text-dark">Tourist</span>
          </div>
        </RouterLink>

        <RouterLink to="/tourguide" style="text-decoration: none;">
          <div class="nav-link" @click="Gray(1)" :style="{ backgroundColor: ChangeToGray2 }">
            <span class="text-dark">Tour guide</span>
          </div>
        </RouterLink>
        <RouterLink to="/boat" style="text-decoration: none;">
          <div class="nav-link " @click="Gray(2)" :style="{ backgroundColor: ChangeToGray3 }">
            <span class="text-dark"> Boat Owners</span>
          </div>
        </RouterLink>
      </div>
      <RouterLink to="/AdminReservationView" style="text-decoration: none;">
        <div class="nav-link" @click="ReservationList" v-if="isReservationTrue"
          :style="{ backgroundColor: ReservationBackgroundColor }">
          <div style="cursor: pointer;"><span :style="{ color: ReservationColor }"> Reservation Management</span></div>
        </div>
      </RouterLink>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.Account-modal {
  display: none;
  position: fixed;
  height: 40px;
  width: 200px;
  left: 150px;
  transform: translateX(-50%);
  padding-top: 7px;
  background-color: white;
  color: black;
  border-radius: 5px;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  z-index: 2;
}

.back-modal {
  display: none;
  position: fixed;
  height: 40px;
  width: 100px;
  left: 100px;
  transform: translateX(-50%);
  padding-top: 7px;
  background-color: white;
  color: black;
  border-radius: 5px;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  z-index: 2;
}

.Account-icon:hover+.Account-modal,
.Home-icon:hover+.Account-modal,
.reserve-icon:hover+.Account-modal,
.tourist-icon:hover+.Account-modal,
.tourguide-icon:hover+.Account-modal,
.boat-icon:hover+.Account-modal {
  display: block;
}

.back-icon:hover+.back-modal {
  display: block;
}

.menu-icon {
  width: 60px;
}

.menu-icon-container {
  background-color: white;
  height: 100%;
}

.logo-icon {
  width: 30px;
  height: 30px;
  position: fixed;
  /* left: 17px;  */
  top: 6px;
}

@media (max-width: 960px) {

  .menu {
    display: none;
  }

  .menu-icon {
    width: 60px;
    padding-inline: 5px;
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  }
}

@media (max-width: 568px) {

  .menu-icon {
    display: none;

  }

}

header {
  height: 100vh;
  background-color: #14243c;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

main {
  flex-grow: 1;
  overflow: auto;
}

.title {
  box-shadow: rgba(1, 41, 71, 0.3) 0px 1px 2px 0px, rgba(8, 51, 85, 0.15) 0px 1px 3px 1px;

}

.closebar-icon:hover {
  color: lightgray;
}

.nav-link a {
  text-decoration: none;
  list-style: none;
  color: white;
}

span:hover {
  color: lightgrey;
}</style>
