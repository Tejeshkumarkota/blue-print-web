var APIs = {
    login: {
        endPoint: 'login',
        headers: { method: 'post', redirect: 'follow' },
    },
    profile: {
        endPoint: 'profile',
        headers: { method: 'post', redirect: 'follow' },
    },
    propertyFilter: {
        endPoint: "propertyFilter",
        headers: { Rmethod: "post", redirect: "follow" },
    },
}
module.exports = { APIs }