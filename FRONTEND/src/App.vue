<script>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  setup() {
    const isReservationTrue = ref(true)
    const ReservationBackgroundColor = ref('')
    const ReservationColor = ref('white')

    const isMaintenanceTrue = ref(true)
    const MaintenanceBackgroundColor = ref('')
    const MaintenanceColor = ref('white')

    const isBoatdetailsTrue = ref(true)
    const BoatdetailsBackgroundColor = ref('')
    const BoatdetailsColor = ref('white')

    const isAnnouncementTrue = ref(true)
    const AnnouncementBackgroundColor = ref('')
    const AnnouncementColor = ref('white')

    const isNotificationTrue = ref(true)
    const NotificationBackgroundColor = ref('')
    const NotificationColor = ref('white')

    const isTouristdestinationTrue = ref(true)
    const TouristdestinationBackgroundColor = ref('')
    const TouristdestinationColor = ref('white')

    const isPackageTrue = ref(true)
    const PackageBackgroundColor = ref('')
    const PackageColor = ref('white')

    const Package = () => {
      PackageBackgroundColor.value = 'blue'
      TouristdestinationBackgroundColor.value = ''
      NotificationBackgroundColor.value = ''
      MaintenanceBackgroundColor.value = ''
      ReservationBackgroundColor.value = ''
      BoatdetailsBackgroundColor.value = ''
      AnnouncementBackgroundColor.value = ''
      PackageColor.value = 'white'
      const elements = [ChangeToGray1, ChangeToGray2, ChangeToGray3]

      for (let i = 0; i < elements.length; i++) {
        elements[i].value = elements[i].value === 'lightgray' ? '#f8f9fa' : '#f8f9fa'
      }
    }

    const Touristdestination = () => {
      TouristdestinationBackgroundColor.value = 'blue'
      NotificationBackgroundColor.value = ''
      MaintenanceBackgroundColor.value = ''
      ReservationBackgroundColor.value = ''
      BoatdetailsBackgroundColor.value = ''
      AnnouncementBackgroundColor.value = ''
      PackageBackgroundColor.value = ''
      TouristdestinationColor.value = 'white'
      const elements = [ChangeToGray1, ChangeToGray2, ChangeToGray3]

      for (let i = 0; i < elements.length; i++) {
        elements[i].value = elements[i].value === 'lightgray' ? '#f8f9fa' : '#f8f9fa'
      }
    }

    const Notification = () => {
      NotificationBackgroundColor.value = 'blue'
      MaintenanceBackgroundColor.value = ''
      ReservationBackgroundColor.value = ''
      BoatdetailsBackgroundColor.value = ''
      AnnouncementBackgroundColor.value = ''
      TouristdestinationBackgroundColor.value = ''
      PackageBackgroundColor.value = ''

      NotificationColor.value = 'white'
      const elements = [ChangeToGray1, ChangeToGray2, ChangeToGray3]

      for (let i = 0; i < elements.length; i++) {
        elements[i].value = elements[i].value === 'lightgray' ? '#f8f9fa' : '#f8f9fa'
      }
    }

    const Maintenance = () => {
      MaintenanceBackgroundColor.value = 'blue'
      ReservationBackgroundColor.value = ''
      BoatdetailsBackgroundColor.value = ''
      AnnouncementBackgroundColor.value = ''
      NotificationBackgroundColor.value = ''
      TouristdestinationBackgroundColor.value = ''
      PackageBackgroundColor.value = ''

      MaintenanceColor.value = 'white'
      const elements = [ChangeToGray1, ChangeToGray2, ChangeToGray3]

      for (let i = 0; i < elements.length; i++) {
        elements[i].value = elements[i].value === 'lightgray' ? '#f8f9fa' : '#f8f9fa'
      }
    }
    const Announcement = () => {
      AnnouncementBackgroundColor.value = 'blue'
      MaintenanceBackgroundColor.value = ''
      ReservationBackgroundColor.value = ''
      BoatdetailsBackgroundColor.value = ''
      NotificationBackgroundColor.value = ''
      TouristdestinationBackgroundColor.value = ''
      PackageBackgroundColor.value = ''

      AnnouncementColor.value = 'white'
      const elements = [ChangeToGray1, ChangeToGray2, ChangeToGray3]

      for (let i = 0; i < elements.length; i++) {
        elements[i].value = elements[i].value === 'lightgray' ? '#f8f9fa' : '#f8f9fa'
      }
    }

    const Boatdetails = () => {
      BoatdetailsBackgroundColor.value = 'blue'
      ReservationBackgroundColor.value = ''
      MaintenanceBackgroundColor.value = ''
      AnnouncementBackgroundColor.value = ''
      NotificationBackgroundColor.value = ''
      TouristdestinationBackgroundColor.value = ''
      PackageBackgroundColor.value = ''

      MaintenanceColor.value = 'white'
      const elements = [ChangeToGray1, ChangeToGray2, ChangeToGray3]

      for (let i = 0; i < elements.length; i++) {
        elements[i].value = elements[i].value === 'lightgray' ? '#f8f9fa' : '#f8f9fa'
      }
    }

    const ReservationList = () => {
      ReservationBackgroundColor.value = 'blue'
      MaintenanceBackgroundColor.value = ''
      BoatdetailsBackgroundColor.value = ''
      AnnouncementBackgroundColor.value = ''
      NotificationBackgroundColor.value = ''
      TouristdestinationBackgroundColor.value = ''
      PackageBackgroundColor.value = ''

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
        MaintenanceBackgroundColor.value = ''
        BoatdetailsBackgroundColor.value = ''
        AnnouncementBackgroundColor.value = ''
        NotificationBackgroundColor.value = ''
        TouristdestinationBackgroundColor.value = ''
        PackageBackgroundColor.value = ''
        ReservationColor.value = 'white'
      }
    }

    return {
      ReservationList,
      isReservationTrue,
      ReservationBackgroundColor,
      ReservationColor,
      isTrue,
      Boatdetails,
      isBoatdetailsTrue,
      BoatdetailsBackgroundColor,
      BoatdetailsColor,
      Maintenance,
      isMaintenanceTrue,
      MaintenanceBackgroundColor,
      MaintenanceColor,
      Announcement,
      isAnnouncementTrue,
      AnnouncementBackgroundColor,
      AnnouncementColor,
      Notification,
      isNotificationTrue,
      NotificationBackgroundColor,
      NotificationColor,
      Touristdestination,
      isTouristdestinationTrue,
      TouristdestinationBackgroundColor,
      TouristdestinationColor,
      Package,
      isPackageTrue,
      PackageBackgroundColor,
      PackageColor,
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
        <div class="nav-link" @click="Boatdetails">
          <div class="text-white" style="cursor: pointer;">
            <RouterLink to="/BoatdetailsView"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="currentColor" class="bi bi-calendar-check-fill reserve-icon" viewBox="0 0 16 16"
                style="color:#14243c ;">
                <path
                  d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
              <div class="Account-modal">
                Boat Details
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="nav-link" @click="Touristdestination">
          <div class="text-white" style="cursor: pointer;">
            <RouterLink to="/TouristdestinationView">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-geo-fill Touristdestination-icon" viewBox="0 0 16 16" style="color:#14243c ;">
                <path fill-rule="evenodd"
                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
              </svg>
              <div class="Account-modal">
                Island Hopping Route
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="nav-link" @click="Package">
          <div class="text-white" style="cursor: pointer;">
            <RouterLink to="/PackageView">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-box2-fill Package-icon" viewBox="0 0 16 16" style="color:#14243c ;">
                <path
                  d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z" />
              </svg>
              <div class="Account-modal">
                Packages and Price
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="nav-link" @click="Announcement">
          <div class="text-white" style="cursor: pointer;">
            <RouterLink to="/AnnouncementView">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-megaphone-fill announcement-icon" viewBox="0 0 16 16" style="color:#14243c ;">
                <path
                  d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
              </svg>
              <div class="Account-modal">
                Announcement
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="nav-link" @click="Maintenance">
          <div class="text-white" style="cursor: pointer;">
            <RouterLink to="/MaintenanceView">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-tools maintenance-icon" viewBox="0 0 16 16" style="color:#14243c ;">
                <path
                  d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
              </svg>
              <div class="Account-modal">
                Maintenance
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="nav-link" @click="Notification">
          <div class="text-white" style="cursor: pointer;">
            <RouterLink to="/NotificationView">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-bell-fill notification-icon" viewBox="0 0 16 16" style="color:#14243c ;">
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              <div class="Account-modal">
                Notification
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
      <RouterLink to="/BoatdetailsView" style="text-decoration: none;">
        <div class="nav-link" @click="Boatdetails" v-if="isBoatdetailsTrue"
          :style="{ backgroundColor: BoatdetailsBackgroundColor }">
          <div style="cursor: pointer;"><span :style="{ color: BoatdetailsColor }">Boat Details</span></div>
        </div>
      </RouterLink>
      <RouterLink to="/TouristdestinationView" style="text-decoration: none;">
        <div class="nav-link" @click="Touristdestination" v-if="isTouristdestinationTrue"
          :style="{ backgroundColor: TouristdestinationBackgroundColor }">
          <div style="cursor: pointer;"><span :style="{ color: TouristdestinationColor }">Island Hopping Route</span>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/PackageView" style="text-decoration: none;">
        <div class="nav-link" @click="Package" v-if="isPackageTrue" :style="{ backgroundColor: PackageBackgroundColor }">
          <div style="cursor: pointer;"><span :style="{ color: PackageColor }">Packages and Price</span></div>
        </div>
      </RouterLink>
      <RouterLink to="/AnnouncementView" style="text-decoration: none;">
        <div class="nav-link" @click="Announcement" v-if="isAnnouncementTrue"
          :style="{ backgroundColor: AnnouncementBackgroundColor }">
          <div style="cursor: pointer;"><span :style="{ color: AnnouncementColor }">Announcement</span></div>
        </div>
      </RouterLink>
      <RouterLink to="/MaintenanceView" style="text-decoration: none;">
        <div class="nav-link" @click="Maintenance" v-if="isMaintenanceTrue"
          :style="{ backgroundColor: MaintenanceBackgroundColor }">
          <div style="cursor: pointer; display:flex; justify-content:space-between;"><span
              :style="{ color: MaintenanceColor }">Maintenance</span>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/NotificationView" style="text-decoration: none;">
        <div class="nav-link" @click="Notification" v-if="isNotificationTrue"
          :style="{ backgroundColor: NotificationBackgroundColor }">
          <div style="cursor: pointer; display:flex; justify-content:space-between;"><span :style="{ color: NotificationColor }">Notification</span>
          </div>
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
.boat-icon:hover+.Account-modal,
.announcement-icon:hover+.Account-modal,
.maintenance-icon:hover+.Account-modal,
.notification-icon:hover+.Account-modal,
.Touristdestination-icon:hover+.Account-modal,
.Package-icon:hover+.Account-modal {
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
