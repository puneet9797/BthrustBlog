<template>
    <div class="col-md-12 mt-30">
        <div class="bs-content quick-actions-container">
            <div class="quick-actions-header">Quick Actions</div>
            <div class="quick-actions-content">
                <!-- <router-link to="/addusers" class="quick-action">
                    <div class="quick-action-icon-container">
                        <img src="../assets/newuser.png" width="50" height="50" alt="User">
                    </div>
                    <div class="quick-action-label">Add Users</div>
                </router-link> -->
                <router-link to="/doctors" class="quick-action" v-if="loggedinuser?.role >= 2">
                    <div class="quick-action-icon-container">
                        <img src="../assets/doctor.png" width="50" height="50" alt="Membership" />
                    </div>
                    <div class="quick-action-label">Add Doctor</div>
                </router-link>
                <!-- <div class="quick-action">
                    <div class="quick-action-icon-container">
                        <img src="https://app.connecteam.com/images/base-line/quickactions/add-user.svg" alt="">
                    </div>
                    <div class="quick-action-label">Send an Update</div>
                </div> -->
                <router-link to="/" class="quick-action" v-if="loggedinuser?.role >= 2">
                    <div class="quick-action-icon-container">
                        <img src="../assets/patient.png" width="50" height="50" alt="Donation" />
                    </div>
                    <div class="quick-action-label">Add Patient</div>
                </router-link>
                <router-link to="/sale" class="quick-action">
                    <div class="quick-action-icon-container">
                        <img src="../assets/add-cart.png" width="50" height="50" alt="Donation" />
                    </div>
                    <div class="quick-action-label">Add Sales</div>
                </router-link>
                <!-- <router-link to="/addposition" class="quick-action" >
                    <div class="quick-action-icon-container">
                        <img src="../assets/position.png" width="50" height="50" alt="Position">
                    </div>
                    <div class="quick-action-label">Add Position for Members</div>
                </router-link> -->
            </div>
        </div>
    </div>
    <div class="col-md-12 mt-30">
        <div class="bs-content quick-actions-container">
            <div class="quick-actions-header">Total Records</div>
            <div class="quick-actions-content">
                <!-- <router-link to="/users" class="quick-action">
                    <div class="top-label">{{ userscount }}</div>
                    <div class="quick-action-icon-container flex-between-row">
                        <img src="../assets/newuser.png" width="50" height="50" alt="User">
                    </div>
                    <div class="quick-action-label">Total Users</div>
                </router-link> -->
                <router-link to="/members" class="quick-action">
                    <div class="top-label">{{ membercount }}</div>
                    <div class="quick-action-icon-container">
                        <img src="../assets/medical-team.png" width="50" height="50" alt="Membership" />
                    </div>
                    <div class="quick-action-label">Total Doctors</div>
                </router-link>
                <router-link to="/viewsale" class="quick-action">
                    <div class="top-label">{{ salecount }}</div>
                    <div class="quick-action-icon-container">
                        <img src="../assets/add-cart.png" width="50" height="50" alt="Membership" />
                    </div>
                    <div class="quick-action-label">Total Sales</div>
                </router-link>
                <!-- <div class="quick-action">
                    <div class="quick-action-icon-container">
                        <img src="https://app.connecteam.com/images/base-line/quickactions/add-user.svg" alt="">
                    </div>
                    <div class="quick-action-label">Send an Update</div>
                </div> -->
                <router-link to="/donarlist" class="quick-action">
                    <div class="top-label">{{ donationcount }}</div>
                    <div class="quick-action-icon-container">
                        <img src="../assets/healthy.png" width="50" height="50" alt="Donation" />
                    </div>
                    <div class="quick-action-label">Total Patients</div>
                </router-link>
                <!-- <router-link to="/addposition" class="quick-action" >
                    <div class="quick-action-icon-container">
                        <img src="../assets/position.png" width="50" height="50" alt="Position">
                    </div>
                    <div class="quick-action-label">Add Position for Members</div>
                </router-link> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            leftDrawerOpen: false,
            salecount: 0,
            records: 0,
            apprecords: 0,
            membercount: 0,
            donationcount: 0,
        };
    },
    computed: {
        ...mapGetters(["loggedinuser"]),
    },
    mounted() {
        this.refresh();
    },
    methods: {
        toggleLeftDrawer() {
            this.leftDrawerOpen = !this.leftDrawerOpen;
        },
        refresh() {
            // axios.post('api/user/member/count')
            // 	.then(response=>this.processResponseCount(response.data))
            // 	.catch(error=>console.log(error));
            // let param={isconfirmed:0}
            axios.post('api/fetch/sale')
                .then(response => this.processResponseSale(response.data))
                .catch(error => console.log(error));
        },
        processResponseDonationCount(data) {
            this.donationcount = data;
        },
        processResponseSale(data) {
            this.salecount = data.count;
            // this.membercount = data.membercount;
        },
        company() {
            this.$router.push({ name: "companyform" });
        },
    },
};
</script>
<style scoped>
.grd-bg-info {
    background-color: #80d3f9;
}

.grd-orange {
    background: #ff9933;
}

.bg-green,
.bg-green>.small-box-footer {
    background-color: #138808;
    color: black;
}

.grd-white {
    background: white;
    color: black;
}

.grd-white-color {
    color: black;
}

.chakra {
    background-image: url(../assets/flagchakra2.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.top-label {
    position: relative;
    left: 30px;
    font-weight: bolder;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 58%;
    background-color: #dbe9c2;
}
</style>
