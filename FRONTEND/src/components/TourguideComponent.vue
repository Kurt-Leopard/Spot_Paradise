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
              <form @submit="saveChanges" enctype="multipart/form-data">
                <div class="mb-3">
                  <label for="profile" class="form-label">Profile</label>
                  <input type="file" id="tg_img" name="profile" class="form-control" @change="handleFileUpload" />
                </div>
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" v-model="formData.tg_fname.value" />
                </div>
                <div class="mb-3">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" v-model="formData.tg_lname.value" />
                </div>
                <div class="mb-3">
                  <label for="middlename" class="form-label">Middle Name</label>
                  <input type="text" class="form-control" id="middlename" v-model="formData.tg_mname.value" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="formData.tg_email.value" />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="address" v-model="formData.tg_address.value" />
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label>
                  <select class="form-select" id="gender" v-model="formData.tg_gender.value">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="birthday" class="form-label">Birthdate</label>
                  <input type="date" class="form-control" id="birthday" v-model="formData.tg_dob.value" />
                </div>
                <div class="mb-3">
                  <label for="status" class="form-label">Status</label>
                  <input type="text" class="form-control" id="status" v-model="formData.tg_status.value" />
                </div>
                <div class="mb-3">
                  <label for="nationality" class="form-label">Nationality</label>
                  <input type="nationality" class="form-control" id="nationality"
                    v-model="formData.tg_nationality.value" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="text" class="form-control" id="phone" v-model="formData.tg_cpnum.value" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="card mx-4"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;">
        <div class="card-body">
          <div class="table-responsive" style="max-height: 450px; overflow-y: auto">
            <table class="list table table-striped" style="width: 100%">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Profile</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.tg_id">
                  <td>{{ item.tg_id }}</td>
                  <td> <img :src="'./uploads/' + item.tg_img" alt="" srcset="" style="height:35px;width:35px;" /></td>
                  <td>{{ item.tg_fname }}</td>
                  <td>{{ item.tg_lname }}</td>
                  <td>{{ item.tg_email }}</td>
                  <td>{{ item.tg_gender }}</td>
                  <td>{{ item.tg_cpnum }}</td>
                  <td>
                    <!-- view btn -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.tg_id"
                      class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded" viewBox="0 0 16 16">
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <!-- view modal -->
                    <div class="modal fade" :id="'viewmodal-' + item.tg_id" tabindex="-1"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              View Information
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div>
                              <!-- <img :src="item.profile['image.png']" alt="" srcset="" /> -->
                            </div>
                            <div>{{ item.tg_id }}</div>
                            <div>{{ item.tg_img }}</div>
                            <div>{{ item.tg_fname }}</div>
                            <div>{{ item.tg_lname }}</div>
                            <div>{{ item.tg_email }}</div>
                            <div>{{ item.tg_gender }}</div>
                            <div>{{ item.tg_phone }}</div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
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
                      class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded" viewBox="0 0 16 16"
                      data-bs-toggle="modal" :data-bs-target="'#editmodal-' + item.tg_id">
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                    <!-- Edit modal -->
                    <div class="modal fade" :id="'editmodal-' + item.tg_id" tabindex="-1"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content" style="max-height: 550px; overflow-y: auto">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Edit Information
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form @submit="editData(item.tg_id)" enctype="multipart/form-data">
                              <div class="mb-3">
                                <label for="profile" class="form-label">Profile</label>
                                <input type="file" id="tg_img" name="profile" class="form-control"
                                  @change="handleFileUpload" />
                              </div>
                              <div class="mb-3">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="firstName"
                                  v-model="formData.tg_fname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastName" v-model="formData.tg_lname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="middlename" class="form-label">Middle Name</label>
                                <input type="text" class="form-control" id="middlename"
                                  v-model="formData.tg_mname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="formData.tg_email.value" />
                              </div>
                              <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address"
                                  v-model="formData.tg_address.value" />
                              </div>
                              <div class="mb-3">
                                <label for="gender" class="form-label">Gender</label>
                                <select class="form-select" id="gender" v-model="formData.tg_gender.value">
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="birthday" class="form-label">Birthdate</label>
                                <input type="date" class="form-control" id="birthday" v-model="formData.tg_dob.value" />
                              </div>
                              <div class="mb-3">
                                <label for="status" class="form-label">Status</label>
                                <input type="text" class="form-control" id="status" v-model="formData.tg_status.value" />
                              </div>
                              <div class="mb-3">
                                <label for="nationality" class="form-label">Nationality</label>
                                <input type="nationality" class="form-control" id="nationality"
                                  v-model="formData.tg_nationality.value" />
                              </div>
                              <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone" v-model="formData.tg_cpnum.value" />
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">
                                  Save changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <!-- delete btn -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn" viewBox="0 0 16 16"
                      data-bs-toggle="modal" :data-bs-target="'#deletemodal-' + item.tg_id">
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                    <!-- Delete modal -->
                    <div class="modal fade" :id="'deletemodal-' + item.tg_id" tabindex="-1"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Confirm Deletion?
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <h5>
                              Are you sure you delete this item {{ item.tg_id }} ?
                            </h5>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                              Cancel
                            </button>
                            <button type="button" class="btn btn-primary" @click="deleteData(item.tg_id)">
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
import { ref, onMounted } from "vue";
import axios from 'axios';

const clientIP = ref('');

let API_URL = "" || "http://localhost:3000/";

const fetchClientIP = async () => {
  try {
    const response = await axios.get('http://localhost:3000/get-local-ip');
    clientIP.value = response.data;
    console.log(clientIP.value['localIpAddress']);
    API_URL = `http://${clientIP.value['localIpAddress']}:3000/`;
    console.log(API_URL);
  } catch (error) {
    console.error('Error fetching client IP:', error);
  }
};

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + 'api/gettourguide');
    items.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const formData = {
  tg_fname: ref(''),
  tg_lname: ref(''),
  tg_mname: ref(''),
  tg_email: ref(''),
  tg_address: ref(''),
  tg_gender: ref(''),
  tg_dob: ref(''),
  tg_status: ref(''),
  tg_nationality: ref(''),
  tg_cpnum: ref(''),
  tg_img: null,
};

const handleFileUpload = (event) => {
  formData.tg_img = event.target.files[0];
};

const saveChanges = async () => {
  const formDataObject = new FormData();

  formDataObject.append("tg_fname", formData.tg_fname.value);
  formDataObject.append("tg_lname", formData.tg_lname.value);
  formDataObject.append("tg_mname", formData.tg_mname.value);
  formDataObject.append("tg_email", formData.tg_email.value);
  formDataObject.append("tg_address", formData.tg_address.value);
  formDataObject.append("tg_gender", formData.tg_gender.value);
  formDataObject.append("tg_dob", formData.tg_dob.value);
  formDataObject.append("tg_status", formData.tg_status.value);
  formDataObject.append("tg_nationality", formData.tg_nationality.value);
  formDataObject.append("tg_cpnum", formData.tg_cpnum.value);
  formDataObject.append("tg_img", formData.tg_img);


  axios.post(API_URL + 'api/insert/tourguide', formDataObject)
    .then((response) => {
      alert('Inserted successfully');
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
};

const editData = (id) => {
  const formDataObject = new FormData();

  formDataObject.append("tg_fname", formData.tg_fname.value);
  formDataObject.append("tg_lname", formData.tg_lname.value);
  formDataObject.append("tg_mname", formData.tg_mname.value);
  formDataObject.append("tg_email", formData.tg_email.value);
  formDataObject.append("tg_address", formData.tg_address.value);
  formDataObject.append("tg_gender", formData.tg_gender.value);
  formDataObject.append("tg_nationality", formData.tg_nationality.value);
  formDataObject.append("tg_dob", formData.tg_dob.value);
  formDataObject.append("tg_status", formData.tg_status.value);
  formDataObject.append("tg_cpnum", formData.tg_cpnum.value);
  formDataObject.append("tg_img", formData.tg_img);
  formDataObject.append("tg_id", id);


  axios.put(API_URL + 'api/edittourguide', formDataObject)
    .then((response) => {
      alert('Edited successfully');
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteData = (id) => {
  axios
    .post(API_URL + 'api/deletetourguide/' + id)
    .then((response) => {
      alert('Deleted successfully', +id);
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
};
const items = ref([]);
const datatable = () => {

  $(".list").DataTable();

}
// onMounted(() => {
//   fetchClientIP();
//   console.log('Component mounted');
//   fetchData().then(() => {
//     datatable();
//   });
// });

onMounted(async () => {
  await fetchClientIP();

  console.log('Component mounted');
  await fetchData();
  datatable();
});
</script>
<style scoped></style>

  