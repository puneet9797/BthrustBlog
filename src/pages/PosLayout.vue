<template>
	<q-layout view="hHh lpR fff" style="background-color: #ebf4f9;">

		<q-header elevated class="bg-grey-1 text-dark">
			<q-toolbar>
				<!-- <q-btn flat @click="miniState = !miniState" round dense icon="menu" /> -->

				<q-toolbar-title class="logo-font row">
					<!-- <q-avatar>
	        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
	      </q-avatar> -->
					<img src="../assets/logo.png" width="175" height="50" style="padding-right:8px;">
				</q-toolbar-title>

				<div style="padding: 0px 16px;">
					<q-item clickable v-ripple>
						<div class="mr-10">
							<img src="../assets/doctor.png" v-if="loggedinuser?.isdoctor==1" alt="" width="50" height="50">
							<img src="../assets/admin.png" v-if="loggedinuser?.role>=2" alt="" width="50" height="50">
						</div>
						<q-item-section class="ml-10">{{ loggedinuser.name }}</q-item-section>

						<q-menu>
							<div class="row no-wrap q-pa-md">

								<div class="column items-center">
									<!-- <q-avatar size="72px"> -->
									<div >
										<img src="../assets/doctor.png" v-if="loggedinuser?.isdoctor==1" width="100" height="100" style="border-radius:50% ;">
										<img src="../assets/admin.png" v-if="loggedinuser?.role>=2" width="100" height="100" style="border-radius:50% ;">
									</div>
									<!-- </q-avatar> -->

									<div class="mt-10 q-mb-xs">{{ loggedinuser.name }}</div>

									<q-btn color="primary" style="padding: 6px 30px" label="Logout" push size="sm" v-close-popup @click="logout()" />
								</div>
							</div>
						</q-menu>
					</q-item>
				</div>
			</q-toolbar>
		</q-header>
		<!-- Nav Bar -------------------- -->
		<q-drawer v-model="drawer" :elevated="true" style="background-color: #eeeeee;" show-if-above :mini="!drawer || miniState"
			@click.capture="drawerClick" :width="200" :breakpoint="300" bordered height="100%">
			<left-navigation></left-navigation>

			<div class="q-mini-drawer absolute" :class="miniState == false ? 'drawer-open-icon' : 'drawer-close-icon'"
				@click="miniState = !miniState">
				<i class='bx bxs-chevron-left'></i>
			</div>

		</q-drawer>

		<q-page-container>
			<div class="router-content" >
				<loading-modal></loading-modal>
				<router-view />
			</div>
		</q-page-container>

</q-layout>
</template>
<script>
import { mapGetters } from 'vuex';
import LeftNavigation from './LeftNavigation.vue';
// import LoadingImage from '../components/utilities/LoadingImage.vue'
import LoadingModal from '../components/utilities/LoadingModal.vue';
//'./components/utilities/LoadingImage.vue'
export default {
	components: { LeftNavigation, LoadingModal },
	data() {
		return {
			// leftDrawerOpen:false,
			miniState: false,
			drawer: false
		}
	},
	computed: {
		...mapGetters(['loggedinuser'])
	},
	mounted() {

	},
	methods: {

		drawerClick(e) {
			// if in "mini" state and user
			// click on drawer, we switch it to "normal" mode
			if (this.miniState.value) {
				this.miniState.value = false
				// notice we have registered an event with capture flag;
				// we need to stop further propagation as this click is
				// intended for switching drawer to "normal" mode only
				e.stopPropagation()
			}
		},
		logout() {
			localStorage.removeItem("token");
			this.$router.push({ name: 'login' })
		},
	},
}
</script>
<style scoped>
.logoutcss {
	padding: 0px 24px;
	border-radius: 10px;
}

@media screen and (max-width: 768px) {
	.logoutcss {
		font-size: 10px;
		display: none;
	}
}

.logoutcss {
	padding: 0px 24px;
	border-radius: 10px;
}

.list-item {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	cursor: pointer;
	line-height: 36px;
}

.drawer-open-icon {
	top: 2px;
	right: 0px;
	background-color: #f6f6f6;
	padding: 0px 4px;
	border-bottom-left-radius: 6px;
	cursor: pointer;
}

.drawer-close-icon {
	top: 2px;
	right: 17px;
	background-color: #f6f6f6;
	padding: 0px 4px;
	border-bottom-left-radius: 6px;
	cursor: pointer;
	transform: rotate(180deg);
}

.logo-font {
	padding-bottom: 4px;
	margin: -7px 0px 10px;
	padding-top: 12px;
	font-size: 24px;
	font-family: 'Cormorant', serif !important;
	margin-bottom: 10px;
	margin-left: 30px;
	align-items: center;
}
.row {
	margin-left: 0px;
	margin-right: 0px;
}

@media screen and (max-width: 768px) {
	.logoutcss {
		font-size: 10px;
		display: none;
	}
}
</style>