
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import TasksIndex from './components/tasks/TasksIndex.vue';
import TasksCreate from './components/tasks/TasksCreate.vue';
import TasksEdit from './components/tasks/TasksEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            tasksIndex: TasksIndex
        }
    },
    {path: '/create', component: TasksCreate, name: 'createTask'},
    {path: '/edit/:id', component: TasksEdit, name: 'editTask'},
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')
