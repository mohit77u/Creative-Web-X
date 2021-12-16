import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'
import Services from '../components/pages/Services.vue'
import Contact from '../components/pages/Contact.vue'

import Frontend from '../components/services/Frontend.vue'
import Wordpress from '../components/services/Wordpress.vue'
import Graphics from '../components/services/Graphics.vue'
import CmsWebsite from '../components/services/CmsWebsite.vue'
import MobileApp from '../components/services/MobileApp.vue'
import Laravel from '../components/services/Laravel.vue'
import React from '../components/services/React.vue'
import Angular from '../components/services/Angular.vue'
import Vue from '../components/services/Vuejs.vue'

import Blog from '../components/blog/Blog.vue'
import SingleBlog from '../components/blog/SingleBlog.vue'
import CategoryBlog from '../components/blog/CategoryBlog.vue'

// import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import ForgotPassword from '../components/auth/ForgotPassword'
import ResetPassword from '../components/auth/ResetPassword'
import AllBlog from '../components/admin/AllBlog'
import AddNewBlog from '../components/admin/AddNewBlog'
import EditBlog from '../components/admin/EditBlog'
import AddCategory from '../components/admin/AddCategory'
import AddNewAdmin from '../components/admin/AddNewAdmin'
import AdminDashboard from '../components/admin/AdminDashboard'
import Dashboard from '../components/admin/Dashboard'



import NotFound from '../components/parts/NotFound'



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', component: Contact },
  { path: '/services', component: Services },
  { path: '/frontend-development', name: 'Frontend', component: Frontend },
  { path: '/wordpress-development', name: 'Wordpress', component: Wordpress },
  { path: '/graphics-designing', name: 'Graphics', component: Graphics },
  { path: '/cms-website-development', name: 'CMS', component: CmsWebsite },
  { path: '/app-development', name: 'Mobile', component: MobileApp },
  { path: '/laravel-development', name: 'Laravel', component: Laravel },
  { path: '/react-development', name: 'React', component: React },
  { path: '/angular-development', name: 'Angular', component: Angular },
  { path: '/vue-development', name: 'Vuejs', component: Vue },

  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:id/:slug', name: 'SingleBlog', component: SingleBlog },
  { path: '/blog/category/:id/:slug', name: 'CategoryBlog', component: CategoryBlog },

  // { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/forgot-password', component: ForgotPassword},
  { path: '/reset-password/:token', component: ResetPassword},
  { 
    path: '/dashboard',
    component: AdminDashboard,
    children: [
      {path: 'admin', component: Dashboard},
      {path: 'add-blog', component: AddNewBlog},
      {path: 'add-category', component: AddCategory},
      {path: 'add-admin', component: AddNewAdmin},
      { path: 'all-blog', component: AllBlog},
      { path: 'edit-blog/:id/:url', name: 'editBlog', component: EditBlog},
    ]
  },    
  { path: "/:catchAll(.*)", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})

export default router
