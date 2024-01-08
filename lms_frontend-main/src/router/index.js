import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/HomeComponent'
import AboutHmi from '../Content/AboutHmi'
import studentactivity from '../Content/StudentActivity'
// import newsevent from '../content/NewsEvent'
import academicprogram from '../Content/TwoYearProgram'
import Ojt from '../Content/Ojt'
import Itpec from '../Content/Itpec'
// import PostItem from '../content/PostItem'

import News from '../Content/NewsComponent'
import NewsPost from '../Content/NewsPost'
import Event from '../Content/EventComponent'
import CareerOpportunity from '../Content/CareerOpportunity'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: AboutHmi,
        },
        {
            path: '/studentactivity',
            component: studentactivity,
        },
        {
            path: '/News',
            name:'News',
            component: News,
        },
        {
            path: '/News/:id',
            name: 'NewsPost',
            component: NewsPost,
            
        },
        {
            path: '/Event',
            name:'Event',
            component: Event,
        },
        {
            path: '/academicprogram',
            component: academicprogram,
        },
        {
            path: '/careeroppotunity',
            component: CareerOpportunity,
        },
        {
            path: '/ojt',
            component : Ojt,
        },
        {
            path:'/itpec',
            component : Itpec,
        }
    
    ]
});
export default router