
export default function setupAxios(axios: any, authStateStatus: any) {
	axios.interceptors.request.use(
		(config: any) => {
			// const {
			// 	auth: { accessToken },
			// } = store.getState();
			if (authStateStatus?.loggedIn && authStateStatus?.data?.access_token) {
				config.headers.Authorization = `Bearer ${authStateStatus?.data?.access_token}`;
			}
			return config;
		},
		(err: any) => Promise.reject(err)
	);
}
