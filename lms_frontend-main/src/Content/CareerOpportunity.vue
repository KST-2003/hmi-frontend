<template>
    <div>
        <div v-for="post in posts" :key="post.id" class="col-md-8 offset-md-2">
            <div class="card my-4 rounded-1">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        {{ post.id }}
                        <h5 class="card-title fs-5">{{ post.title }}</h5>
                        <div class="card-subtitle mb-2 text-body-secondary">
                            <i class="fa-solid fa-calendar-days"></i>
                            DeadLine | {{ formatDate(post.Deadline) }}
                        </div>
                    </div>
                    <div>
                        <p class="card-text m-0 g-0" id="ptext_{{ post.id }}">
                            {{ isExpanded(post.id) ? post.description : truncateText(post.description, 200) }}
                        </p>
                        <span class="text-primary" @click="toggleExpansion(post.id)" id="seeMoreBtn">
                            &nbsp;{{ isExpanded(post.id) ? 'hidden...' : 'see more...' }}
                        </span>
                    </div>
                    <div>
                        <button class="btn btn-sm border-0">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button class="btn btn-sm border-0">
                            <i class="fa-solid fa-share"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class=" mb-1" id="accordionExample">
                <button class="accordion px-4 py-3">
                    <p class="mt-2">
                    <div class="row">
                        <div class="col-md-6">
                            <strong style="font-size: 1.3rem;">1. Mya Mandalar Company Limited </strong>
                        </div>
                        <div class="col-md-4">
                            <strong style="font-size: 1.3rem;">DeadLine | January 19, 2024</strong>
                        </div>
                        <div class="col-md-1 ms-5">
                            <strong style="font-size: 1.3rem;"><i
                                    class="fa-solid fa-plus float-end accordion-icon mt-1"></i>
                            </strong>
                        </div>

                    </div>
                    </p>


                </button>
                <div class="panel">
                    <div class="panel-intro pt-3">
                        To be eligible for the diploma in software enginering, students must
                        succesfuly complete 80 credit hours, including all courses outlined for
                        the Programming.
                    </div>
                </div>
            </div>
        </div>

        <div class="container mb-5">
            <div class=" mb-1" id="accordionExample">
                <button class="accordion px-4 py-3">
                    <p class="mt-2">
                    <div class="row">
                        <div class="col-md-6">
                            <strong style="font-size: 1.3rem;">2. Host Myanmar IT Solutions </strong>
                        </div>
                        <div class="col-md-4">
                            <strong style="font-size: 1.3rem;">DeadLine | January 19, 2024</strong>
                        </div>
                        <div class="col-md-1 ms-5">
                            <strong style="font-size: 1.3rem;"><i
                                    class="fa-solid fa-plus float-end accordion-icon mt-1"></i>
                            </strong>
                        </div>

                    </div>
                    </p>


                </button>
                <div class="panel">
                    <div class="panel-intro pt-3">
                        To be eligible for the diploma in software enginering, students must
                        succesfuly complete 80 credit hours, including all courses outlined for
                        the Programming.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { accordion } from '@/assets/js/accordion.js';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            expandedPosts: [],
            posts: [],
        };
    },
    computed: {
        ...mapGetters(['getJobs']),
        posts() {           //not necessay, can use for job in getJobs instead
            return this.getJobs;
        },
    },
    mounted() {

        // axios.get('http://127.0.0.1:8000/api/careeropportunity').then((res) => {
        //     this.posts = res.data.career;
        //     this.expandedPosts = new Array(this.posts.length).fill(false);
        //     console.log(this.expandedPosts)
        // });
        accordion();

    },

    methods: {
        formatDate(dateTimeString) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            const date = new Date(dateTimeString);
            return date.toLocaleDateString('en-US', options);
        },
        toggleExpansion(postId) {
            console.log(postId)
            console.log(this.expandedPosts)
            this.expandedPosts[postId] = !this.expandedPosts[postId];
            console.log(this.expandedPosts[postId])
        },
        isExpanded(postId) {
            return this.expandedPosts[postId];
        },
        truncateText(text, limit) {
            return text.length > limit ? text.slice(0, limit) + '...' : text;
        },
    },
};
</script>

<style scoped>
.hidden {
    display: none;
}

#seeMoreBtn {
    cursor: pointer;
}

.btn {
    font-size: 16px;
    transition: font-size 0.2s, transform 0.2s;
}

.fa-heart:hover,
.fa-share:hover {
    color: red;
    font-size: 19px;
    transform: scale(1.1);
    transition: ease-in all 0.1s;
}


.accordion {
    background-color: #4B80C2;
    color: #fff;
    cursor: pointer;
    width: 100%;
    height: 12vh;
    border: none;
    text-align: left;
    outline: none;
    transition: 0.4s;
}

.active,
.accordion:hover {
    background-color: #133d70e7;
}

.panel-intro {
    font-size: 0.9rem;
    font-weight: bold;
}

.panel {
    padding: 0 40px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    border: 1px solid #133d70de;
    transition: max-height 0.2s ease-out;
}
</style>
