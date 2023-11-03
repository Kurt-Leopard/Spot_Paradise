<template>
    <section>
        <!-- Button trigger modal -->
        <div class="pt-5">
            <button class="btn create-button m-4" data-bs-toggle="modal" data-bs-target="#exampleModal"
                style="background:#003366;">
                <span class="button-text">Create new</span>
                <span class="plus-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-plus text-white" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></span>
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style="max-height: 550px; overflow-y: auto">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="profile" class="form-label">Profile</label>
                                    <input type="file" id="profilePicture" name="profile" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="firstName" />
                                </div>
                                <div class="mb-3">
                                    <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" />
                                </div>
                                <div class="mb-3">
                                    <label for="boatType" class="form-label">Boat Type</label>
                                    <select class="form-select" id="boatType" v-model="boatType"
                                        @change="handleBoatTypeChange(boatType)">
                                        <option value="sigelang">Sigelang</option>
                                        <option value="Tornado">Tornado</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="Date" class="form-label">Date</label>
                                    <input type="date" class="form-control" id="Date" v-model="date" @input="validateDate"
                                        placeholder="DD/MM/YYYY" />
                                    <p class="text-danger">{{ errorMessage }}</p>
                                </div>

                                <div class="mb-3">
                                    <label for="Status" class="form-label">Status</label>
                                    <select class="form-select" id="Status">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="phone" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary" :disabled="errorMessage !== ''">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="card mx-4" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <div class="card-body">
                    <div class="table-responsive" style="max-height: 450px; overflow-y: auto">
                        <table class="list table table-striped" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Phone</th>
                                    <th>View</th>
                                    <th>ReBook</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" :key="item.id">
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.firstName }}</td>
                                    <td>{{ item.lastName }}</td>
                                    <td>{{ item.Date }}</td>
                                    <td>{{ item.Time }}</td>
                                    <td>
                                        <button class="status-button bg-completed" v-if="item.Status === 'Completed'">{{
                                            item.Status }}</button>
                                        <button class="status-button bg-reserve" v-else-if="item.Status === 'Reserve'">{{
                                            item.Status }}</button>
                                        <button class="status-button bg-canceled" v-else-if="item.Status === 'Canceled'">{{
                                            item.Status }}</button>
                                    </td>
                                    <td>{{ item.phone }}</td>
                                    <td>
                                        <!-- view btn -->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                            data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.id"
                                            class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path
                                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        <!-- view modal -->
                                        <div class="modal fade" :id="'viewmodal-' + item.id" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                            View Information
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div>
                                                            <img :src="item.profile['image.png']" alt="" srcset="" />
                                                        </div>
                                                        <div>{{ item.id }}</div>
                                                        <div>{{ item.profile }}</div>
                                                        <div>{{ item.firstName }}</div>
                                                        <div>{{ item.lastName }}</div>
                                                        <div>{{ item.Date }}</div>
                                                        <div>{{ item.Status }}</div>
                                                        <div>{{ item.phone }}</div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                            Close
                                                        </button>
                                                        <button type="button" class="btn btn-primary">
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <!-- Edit btn-->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                            class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded"
                                            viewBox="0 0 16 16" data-bs-toggle="modal"
                                            :data-bs-target="'#editmodal-' + item.id">
                                            <path
                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                        <!-- Edit modal -->
                                        <div class="modal fade" :id="'editmodal-' + item.id" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content" style="max-height: 550px; overflow-y: auto">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                            Edit Information
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="profile" class="form-label">Profile</label>
                                                                <input type="file" id="profilePicture" name="profile"
                                                                    class="form-control" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="firstName" class="form-label">First Name</label>
                                                                <input type="text" class="form-control" id="firstName"
                                                                    v-model="item.firstName" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="lastName" class="form-label">Last Name</label>
                                                                <input type="text" class="form-control" id="lastName"
                                                                    v-model="item.lastName" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="Date" class="form-label">Date & Time</label>
                                                                <div class="d-flex justify-content-between">
                                                                    <input type="date" class="form-control" id="Date"
                                                                        v-model="item.Date" />
                                                                    <input type="time" class="form-control" id="Date"
                                                                        v-model="item.Date" />
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="Status" class="form-label">Status</label>
                                                                <select class="form-select" id="Status"
                                                                    v-model="item.Status">
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                </select>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="phone" class="form-label">Phone</label>
                                                                <input type="text" class="form-control" id="phone"
                                                                    v-model="item.phone" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                            Close
                                                        </button>
                                                        <button type="button" class="btn btn-primary">
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <!-- delete btn -->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                            class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn"
                                            viewBox="0 0 16 16" data-bs-toggle="modal"
                                            :data-bs-target="'#deletemodal-' + item.id">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>
                                        <!-- Delete modal -->
                                        <div class="modal fade" :id="'deletemodal-' + item.id" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                            Confirm Deletion?
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h5>
                                                            Are you sure you delete this item {{ item.id }} ?
                                                        </h5>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                            Cancel
                                                        </button>
                                                        <button type="button" class="btn btn-primary">
                                                            Yes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script setup>
import { ref, watch } from "vue";
const items = ref([
    {
        id: 1,
        profile: "image.png",
        firstName: "Mark",
        lastName: "Angelou",
        Boatname: "Toyota",
        Date: "2023-11-12",
        Time: "7-12 am",
        Status: "Reserve",
        phone: "0925618842",
    },
    {
        id: 2,
        profile: "image.png",
        firstName: "Jessica",
        lastName: "Miller",
        Boatname: "sigelang",
        Date: "2023-11-12",
        Time: "7-12 am",
        Status: "Reserve",
        phone: "0812345678",
    },
    {
        id: 3,
        profile: "image.png",
        firstName: "John",
        lastName: "Smith",
        Boatname: "Tornado",
        Date: "10/23/2023",
        Time: "7-12 am",
        Status: "Canceled",
        phone: "0755533221",
    },
    {
        id: 4,
        profile: "image.png",
        firstName: "Linda",
        lastName: "Johnson",
        Boatname: "sigelang",
        Date: "2023-11-21",
        Time: "7-12 am",
        Status: "Completed",
        phone: "0666123456",
    },
    {
        id: 5,
        profile: "image.png",
        firstName: "Robert",
        lastName: "Davis",
        Boatname: "sigelang",
        Date: "11/10/2023",
        Time: "7-12 am",
        Status: "Reserve",
        phone: "0988776543",
    },
]);


const date = ref("");
const errorMessage = ref("");
const boatType = ref("");
let name = ref("");

const handleBoatTypeChange = () => {

   name=boatType.value;
};
const validateDate = () => {
    const inputDate = new Date(date.value);
    const formattedDate = inputDate.toISOString().split('T')[0];
    console.log(name);
    console.log(formattedDate);
    const dateExists = items.value.some((item) => item.Date === formattedDate && item.Boatname===name);
    errorMessage.value = dateExists ? ""+name+" boat is already been reserved for that day." : "";
};

watch(date, validateDate);

$(document).ready(function () {
    $(".list").DataTable();
});
</script>
<style scoped>
.status-button {
    display: inline-block;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: white;
}

.bg-completed {
    background-color: #198754;
}

.bg-reserve {
    background-color: #0d6efd;
}

.bg-canceled {
    background-color: #dc3545;
}
</style>
  
  
  
    