<template>
	<q-scroll-area class="fit">

		<q-list style="padding: 10px 10px;margin-top: 26px;">
			<!-- To make Active class just type active befor clickable-->
			<router-link to="/dashboard" v-if="loggedinuser?.role == 2">
				<q-item clickable v-ripple class="nav-item">
					<span class="nav-icon">
						<img src="../assets/layout.png" width="20" height="20">
					</span>
					<q-item-section class="nav-label">
						Overview
					</q-item-section>
				</q-item>
			</router-link>
			<div v-if="loggedinuser?.role == 2">
				<q-separator></q-separator>

				<q-item-section class="text-weight-bolder">
					Doctors
				</q-item-section>
				<router-link to="/doctors">
					<q-item clickable v-ripple class="nav-item">
						<span class="nav-icon">
							<img src="../assets/doctor.png" width="20" height="20">
						</span>
						<q-item-section class="nav-label">
							Add Doctor
						</q-item-section>
					</q-item>
				</router-link>
				<router-link to="/members">
					<q-item clickable v-ripple class="nav-item">
						<span class="nav-icon">
							<img src="../assets/medical-team.png" width="20" height="20">
						</span>
						<q-item-section class="nav-label">
							Dcotors List
						</q-item-section>
					</q-item>
				</router-link>
			</div>
			<q-separator></q-separator>
			<div v-if="loggedinuser?.role == 2">
				<q-item-section class="text-weight-bolder">
					Product Manager
				</q-item-section>
				<router-link to="/addcategory">
					<q-item clickable v-ripple class="nav-item">
						<span class="nav-icon">
							<img src="../assets/category.png" width="20" height="20">
						</span>
						<q-item-section class="nav-label">
							Add Category
						</q-item-section>
					</q-item>
				</router-link>
				<router-link to="/addproduct">
					<q-item clickable v-ripple class="nav-item">
						<span class="nav-icon">
							<img src="../assets/box.png" width="20" height="20">
						</span>
						<q-item-section class="nav-label">
							Add Product
						</q-item-section>
					</q-item>
				</router-link>
			</div>
			<q-separator></q-separator>
			
			<div  v-if="loggedinuser?.role>=2">
			<q-separator></q-separator>
			<q-item-section class="text-weight-bolder">
				Manage Orders
			</q-item-section>
			<router-link to="/orders/0">
				<q-item clickable v-ripple class="nav-item">
					<span class="nav-icon">
						<img src="../assets/pending-order.png" width="20" height="20">
					</span>
					<q-item-section class="nav-label">
						Pending Orders
					</q-item-section>
				</q-item>
			</router-link>
			<router-link to="/orders/1">
				<q-item clickable v-ripple class="nav-item">
					<span class="nav-icon">
						<img src="../assets/shopping-bag.png" width="20" height="20">
					</span>
					<q-item-section class="nav-label">
						Approved Orders
					</q-item-section>
				</q-item>
			</router-link>
			<router-link to="/orders/3">
				<q-item clickable v-ripple class="nav-item">
					<span class="nav-icon">
						<img src="../assets/shipped.png" width="20" height="20">
					</span>
					<q-item-section class="nav-label">
						Dispatched Orders
					</q-item-section>
				</q-item>
			</router-link>
			<router-link to="/orders/4">
				<q-item clickable v-ripple class="nav-item">
					<span class="nav-icon">
						<img src="../assets/tracking.png" width="20" height="20">
					</span>
					<q-item-section class="nav-label">
						On the Way Orders
					</q-item-section>
				</q-item>
			</router-link>
			<router-link to="/orders/5">
				<q-item clickable v-ripple class="nav-item">
					<span class="nav-icon">
						<img src="../assets/delievered.png" width="20" height="20">
					</span>
					<q-item-section class="nav-label">
						Delivered Orders
					</q-item-section>
				</q-item>
			</router-link>
			<router-link to="/orders/2">
				<q-item clickable v-ripple class="nav-item">
					<span class="nav-icon">
						<img src="../assets/cancel-order.png" width="20" height="20">
					</span>
					<q-item-section class="nav-label">
						Rejected Orders
					</q-item-section>
				</q-item>
			</router-link>
			</div>
			<div v-if="loggedinuser?.role>=2">
			<q-separator></q-separator>
			<q-item-section class="text-weight-bolder">
				Master
			</q-item-section>
			<router-link to="/master">
				<q-item clickable v-ripple class="nav-item">
					<span class="nav-icon">
						<img src="../assets/scrum.png" width="20" height="20">
					</span>
					<q-item-section class="nav-label">
						Master
					</q-item-section>
				</q-item>
			</router-link>
			</div>
			<!-- 
      <q-item clickable v-ripple class="nav-item">
        <span class="nav-icon">
          <i class='bx bx-user icon-font'></i>
        </span>
        <q-item-section class="nav-label">
          Users
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="nav-item">
        <span class="nav-icon">
          <i class='bx bx-group icon-font'></i>
        </span>
        <q-item-section class="nav-label">
          Smart groups
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="nav-item">
        <span class="nav-icon">
          <i class='bx bx-gift icon-font'></i>
        </span>
        <q-item-section class="nav-label">
          Rewards
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="nav-item">
        <span class="nav-icon">
          <i class='bx bx-copy-alt icon-font'></i>
        </span>
        <q-item-section class="nav-label">
          Documents
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="nav-item">
        <span class="nav-icon">
          <i class='bx bx-star icon-font'></i>
        </span>
        <q-item-section class="nav-label">
          Recognitions
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="nav-item">
        <span class="nav-icon">
          <i class='bx bx-calendar-star icon-font'></i>
        </span>
        <q-item-section class="nav-label">
          Calender
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

      <q-item-section class="text-weight-bolder">
        Operations
      </q-item-section> -->

			<!-- <router-link to="/quicktasks">
      <q-item clickable v-ripple class="nav-item">
        <span class="nav-icon">
          <i class='bx bx-grid-alt icon-font'></i>
        </span>

        <q-item-section class="nav-label">
          Quick Tasks
        </q-item-section>
      </q-item>
    </router-link> -->

		</q-list>


	</q-scroll-area>

	<!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
</template>
<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			isactive: false,
			// icon:"iconshow",
			showMenu: false,
			miniState: false
		}
	},
	mounted() {
		this.$store.dispatch("getloggedinuser")
		this.$store.dispatch("fetchmaster")
	},
	computed: {
		...mapGetters(["loggedinuser"]),
	},
	methods: {
		logout() {
			localStorage.removeItem("token");
			this.$router.push({ name: 'login' })
		}
	},

};
</script>
<style scoped>
.icon-font {
	font-size: 20px;
	color: grey;
}

.nav-icon {
	margin-top: 6px;
}

.nav-item {
	border-radius: 10px;
}

a {
	text-decoration: none;
	color: black;
}

.nav-label {
	letter-spacing: 0.5px;
	margin-left: 6px;
}
</style>