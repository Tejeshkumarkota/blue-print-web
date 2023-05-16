
export const ssoUserDetailswithLocationsData = (authStateStatus: any, location: any) => {
    //,userDetail: any, accessToken: any, location: any, data: any
    const t = authStateStatus?.data?.access_token != undefined ? authStateStatus?.data?.access_token : authStateStatus?.data?.access_token
    const d = authStateStatus?.data?.userProfile?.id_role
    const l = btoa(location) //engine.encrypt(data, 50000);
    const token = btoa(t)
    const roleId = btoa(d)
    const URL = process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_APP_URL}?t=${token}&d=${roleId}&l=${l}` : `${process.env.NEXT_PUBLIC_APP_URL}?t=${token}&d=${roleId}&l=${l}`
    return URL
}