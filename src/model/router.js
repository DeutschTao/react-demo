import Home from '../components/Home.js'
import News from '../components/News.js'
import Plan from '../components/Plan'
import Login from '../components/Login'
import User from '../components/User'
import Info from '../components/User/Info'
import Main from '../components/User/Main'
let routes = [
    {
        exact: true,
        path: '/',
        component: Home
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/plan',
        component: Plan
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/user',
        component: User,
        routes: [
            {
                path: '/user/',
                component: Main
            }, 
            {
                path: '/user/info',
                component: Info
            }, 
        ]
    },
]

export default routes