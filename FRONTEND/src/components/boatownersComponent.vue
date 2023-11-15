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
              <form @submit.prevent="saveChanges" enctype="multipart/form-data">
                <div class="mb-3">
                  <label for="profile" class="form-label">Profile Picture</label>
                  <input type="file" id="boat_owner_img" name="profile" class="form-control" @change="handleFileUpload" />
                </div>
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" v-model="formData.boat_owner_fname.value" />
                </div>
                <div class="mb-3">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" v-model="formData.boat_owner_lname.value" />
                </div>
                <div class="mb-3">
                  <label for="middlename" class="form-label">Middle Name</label>
                  <input type="text" class="form-control" id="middlename" v-model="formData.boat_owner_mname.value" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="formData.boat_owner_email.value" />
                </div>
                <div class="mb-3">
                  <label for="Address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="Address" v-model="formData.boat_owner_address.value" />
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label>
                  <select class="form-select" id="gender" v-model="formData.boat_owner_gender.value">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="Date" class="form-label">Date of Birth</label>
                  <input type="date" class="form-control" id="Date" v-model="formData.boat_owner_dob.value" />
                </div>
                <div class="mb-3">
                  <label for="nationality" class="form-label">Nationality</label>
                  <input type="nationality" class="form-control" id="nationality"
                    v-model="formData.boat_owner_nationality.value" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="text" class="form-control" id="phone" v-model="formData.boat_owner_cpnum.value" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of modal -->
    <div>
      <div class="card mx-4" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <div class="card-body">
          <div class="table-responsive" style="max-height: 450px; overflow-y: auto">
            <table class="listOfBoatOwners table table-striped" style="width: 100%">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Profile</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Add</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.boat_owner_id">
                  <td>{{ item.boat_owner_id }}</td>
                  <td> <img :src="'./uploads/' + item.boat_owner_img" style="height:35px;width:35px;" />
                  </td>
                  <td>{{ item.boat_owner_fname }}</td>
                  <td>{{ item.boat_owner_lname }}</td>
                  <td>{{ item.boat_owner_email }}</td>
                  <td>{{ item.boat_owner_gender }}</td>
                  <td>{{ item.boat_owner_cpnum }}</td>
                  <td>
                    <!--deatisl  -->

                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor"
                      class="bi bi-plus-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16" data-bs-toggle="modal"
                      :data-bs-target="'#detailsmodal-' + item.boat_owner_id" style="color:#003366; ">
                      <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                    <!-- details modal -->
                    <div class="modal fade" :id="'detailsmodal-' + item.boat_owner_id" tabindex="-1"
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
                            <form @submit="detailsData(item.boat_owner_id)" enctype="multipart/form-data">
                              <div class="mb-3">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails1" />

                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                     class="bi bi-plus-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366; " @click="addImg">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                  </svg>
                                 
                                </div>
                              </div>
                              <div class="mb-3" v-if="isImg2">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails2" />
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366;" @click="subImg2">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                  </svg>
                                </div>
                              </div>
                              <div class="mb-3" v-if="isImg3">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails3" />
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366;" @click="subImg3">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                  </svg>
                                </div>
                              </div>
                              <div class="mb-3" v-if="isImg4">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails4" />
                                
                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366;" @click="subImg4">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                  </svg>
                                </div>
                              </div>
                              <div class="mb-3" v-if="isImg5">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails5" />
                                
                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366;" @click="subImg5">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                  </svg>
                                </div>
                              </div>
                             
                         
                              <div class="mb-3">
                                <label for="boatName" class="form-label">Baot Name</label>
                                <input type="text" class="form-control" id="boatName"
                                  v-model="formDetails.boatName.value" />
                              </div>
                              <div class="mb-3">
                                <label for="Capacity" class="form-label">Baot Capacity</label>
                                <input type="number" class="form-control" id="Capacity"
                                  v-model="formDetails.boatCapacity.value" />
                              </div>

                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                  </td>
                  <td>
                    <!-- view btn -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.boat_owner_id"
                      class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded" viewBox="0 0 16 16">
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <!-- view modal -->
                    <div class="modal fade" :id="'viewmodal-' + item.boat_owner_id" tabindex="-1"
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
                              <!-- <img :src="item.boat_owner_img['image.png']" alt="" srcset="" /> -->
                            </div>
                            <div>{{ item.boat_owner_id }}</div>
                            <div>{{ item.boat_owner_img }}</div>
                            <div>{{ item.boat_owner_fname }}</div>
                            <div>{{ item.boat_owner_lname }}</div>
                            <div>{{ item.boat_owner_email }}</div>
                            <div>{{ item.boat_owner_gender }}</div>
                            <div>{{ item.boat_owner_cpnum }}</div>
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
                      data-bs-toggle="modal" :data-bs-target="'#editmodal-' + item.boat_owner_id">
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                    <!-- Edit modal -->
                    <div class="modal fade" :id="'editmodal-' + item.boat_owner_id" tabindex="-1"
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
                            <form @submit="editData(item.boat_owner_id)" enctype="multipart/form-data">
                              <div class="mb-3">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                  @change="handleFileUpload" />
                              </div>
                              <div class="mb-3">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="firstName"
                                  v-model="formData.boat_owner_fname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastName"
                                  v-model="formData.boat_owner_lname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="middlename" class="form-label">Middle Name</label>
                                <input type="text" class="form-control" id="middlename"
                                  v-model="formData.boat_owner_mname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email"
                                  v-model="formData.boat_owner_email.value" />
                              </div>
                              <div class="mb-3">
                                <label for="Address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="Address"
                                  v-model="formData.boat_owner_address.value" />
                              </div>
                              <div class="mb-3">
                                <label for="gender" class="form-label">Gender</label>
                                <select class="form-select" id="gender" v-model="formData.boat_owner_gender.value">
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="Date" class="form-label">Date of Birth</label>
                                <input type="date" class="form-control" id="Date"
                                  v-model="formData.boat_owner_dob.value" />
                              </div>
                              <div class="mb-3">
                                <label for="nationality" class="form-label">Nationality</label>
                                <input type="nationality" class="form-control" id="nationality"
                                  v-model="formData.boat_owner_nationality.value" />
                              </div>
                              <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone"
                                  v-model="formData.boat_owner_cpnum.value" />
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
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
                      data-bs-toggle="modal" :data-bs-target="'#deletemodal-' + item.boat_owner_id">
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                    <!-- Delete modal -->
                    <div class="modal fade" :id="'deletemodal-' + item.boat_owner_id" tabindex="-1"
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
                              Are you sure you delete this item {{ item.boat_owner_id }} ?
                            </h5>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                              Cancel
                            </button>
                            <button type="button" class="btn btn-primary" @click="deleteData(item.boat_owner_id)">
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
    const response = await axios.get(API_URL + 'api/getboatowner');
    items.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
// boat details

const isImg2 = ref(false);
const isImg3 = ref(false);
const isImg4 = ref(false);
const isImg5 = ref(false);
let i=1;

const addImg = () => {
  if (i !== 5) {
    i++;

    switch (i) {
      case 2:
        isImg2.value = true;
        break;
      case 3:
        isImg3.value = true;
        break;
      case 4:
        isImg4.value = true;
        break;
      case 5:
        isImg5.value = true;
        break;
      default:
        break;
    }
  }

  console.log(i);
};



const subImg2 = () => {
  isImg2.value = !isImg2.value;
  i--;
}
const subImg3 = () => {
  isImg3.value = !isImg3.value;
  i--;
}

const subImg4 = () => {
  isImg4.value = !isImg4.value;
  i--;
}

const subImg5 = () => {
  isImg5.value = !isImg5.value;
  i--;
}



const formDetails = {
  boatName: ref(''),
  boatCapacity: ref(''),
};
const handleFileUploaddetails1 = (event) => {
  formDetails.Bimag1 = event.target.files[0];
};
const handleFileUploaddetails2 = (event) => {
  formDetails.Bimag2 = event.target.files[0];
};
const handleFileUploaddetails3 = (event) => {
  formDetails.Bimag3 = event.target.files[0];
};
const handleFileUploaddetails4 = (event) => {
  formDetails.Bimag4 = event.target.files[0];
};
const handleFileUploaddetails5 = (event) => {
  formDetails.Bimag5 = event.target.files[0];
};

const detailsData = (id) => {
  console.log(id);
  const formDataObject = new FormData();
  formDataObject.append("boatName", formDetails.boatName.value);
  formDataObject.append("boatCapacity", formDetails.boatCapacity.value);
  formDataObject.append("Bimag1", formDetails.Bimag1);
  formDataObject.append("Bimag2", formDetails.Bimag2);
  formDataObject.append("Bimag3", formDetails.Bimag3);
  formDataObject.append("Bimag4", formDetails.Bimag4);
  formDataObject.append("Bimag5", formDetails.Bimag5);
  formDataObject.append("boat_owner_id", id);

  axios.post(API_URL + 'api/insert/boatdetails', formDataObject)
    .then((response) => {
      alert('Inserted boat details successfully');
      fetchData();
    })
    .catch((error) => {
      console.log(error);
      
    });
}



const formData = {
  boat_owner_fname: ref(''),
  boat_owner_lname: ref(''),
  boat_owner_mname: ref(''),
  boat_owner_email: ref(''),
  boat_owner_address: ref(''),
  boat_owner_gender: ref(''),
  boat_owner_dob: ref(''),
  boat_owner_nationality: ref(''),
  boat_owner_cpnum: ref(''),
  boat_owner_img: null,
};

const handleFileUpload = (event) => {
  formData.boat_owner_img = event.target.files[0];
};

const saveChanges = async () => {
  const formDataObject = new FormData();

  formDataObject.append("boat_owner_fname", formData.boat_owner_fname.value);
  formDataObject.append("boat_owner_lname", formData.boat_owner_lname.value);
  formDataObject.append("boat_owner_mname", formData.boat_owner_mname.value);
  formDataObject.append("boat_owner_email", formData.boat_owner_email.value);
  formDataObject.append("boat_owner_address", formData.boat_owner_address.value);
  formDataObject.append("boat_owner_gender", formData.boat_owner_gender.value);
  formDataObject.append("boat_owner_nationality", formData.boat_owner_nationality.value);
  formDataObject.append("boat_owner_dob", formData.boat_owner_dob.value);
  formDataObject.append("boat_owner_cpnum", formData.boat_owner_cpnum.value);
  formDataObject.append("boat_owner_img", formData.boat_owner_img);


  axios.post(API_URL + 'api/insert/boatowner', formDataObject)
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

  formDataObject.append("boat_owner_fname", formData.boat_owner_fname.value);
  formDataObject.append("boat_owner_lname", formData.boat_owner_lname.value);
  formDataObject.append("boat_owner_mname", formData.boat_owner_mname.value);
  formDataObject.append("boat_owner_email", formData.boat_owner_email.value);
  formDataObject.append("boat_owner_address", formData.boat_owner_address.value);
  formDataObject.append("boat_owner_gender", formData.boat_owner_gender.value);
  formDataObject.append("boat_owner_nationality", formData.boat_owner_nationality.value);
  formDataObject.append("boat_owner_dob", formData.boat_owner_dob.value);
  formDataObject.append("boat_owner_cpnum", formData.boat_owner_cpnum.value);
  formDataObject.append("boat_owner_img", formData.boat_owner_img);
  formDataObject.append("boat_owner_id", id);


  axios.post(API_URL + 'api/editboatowner', formDataObject)
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
    .post(API_URL + 'api/deleteboatowner/' + id)
    .then((response) => {
      alert('Deleted successfully');
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
};
const items = ref([]);
const datatable = () => {

  $(".listOfBoatOwners").DataTable();

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