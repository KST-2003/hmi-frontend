<template>
    <div class="banner col-12">
        <img :src="require('@/assets/banner.png')" class="img-fluid" alt="banner-image" style="width: 100%; height:250px;">
    </div>
    <div class="container mt-4">
        <div v-if="foundPost">
            <div class="container">
                <div class="row">
                    <div class="title">
                        <h3>{{ foundPost.title }}</h3>
                    </div>

                    <!-- {{ this.postIds }} -->
                    <!-- <div v-for="id in this.postIds">{{ id }}</div> -->

                    <div class="row my-3">
                        <div class="col-md-1">
                            <button :disabled="!hasPrevious" class="btn btn-secondary" @click="goToPrevious">
                                <i class="fas fa-arrow-left"></i>
                            </button>
                        </div>
                        <div class="col-md-1">
                            <router-link :to="`/News`" class="btn btn-info view-more">
                                Back
                            </router-link>
                        </div>
                        <div class="col-md-1 ms-3">
                            <button :disabled="!hasNext" class="btn btn-primary" @click="goToNext">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <img :src="getBase64Image(foundPost.featured_image)"
                        class="img-fluid rounded-0 post-img border featured" alt="">
                </div>
                <p>{{ foundPost.description }}</p>
           {{ getPhotos}}
            </div>

            <div class="container">
                <div class="row images">
                    <div v-for="image in images" :key="image.id" class="col-md-4 mx-auto">
                        <div class="mb-2 ">
                            <img :src="getBase64Image(image.image)" class="img-fluid rounded-0 post-img border" alt="">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            // post: {},
            // id: '',
        };
    },
    computed: {
        ...mapGetters(['getPosts']),//adding a computed property named getPosts to your component that maps to the getPosts getter from the Vuex store.
        posts() {  //computed property posts provides a local variable (posts) that holds the value of the getPosts getter from the Vuex store.This allows you to use this.posts in the template        
            return this.getPosts;
        },
        ...mapGetters(['getPostId']),
        postIds() {
            return this.getPostId;
        },
        ...mapGetters(['getImages']),
        images() {
            return this.getImages;
        },
        foundPost() {
            return this.getPosts.find(post => post.id === parseInt(this.$route.params.id));
        },
        currentId() {
            return parseInt(this.$route.params.id);
        },
        currentIndex() {
            return this.postIds.indexOf(this.currentId);
        },
        hasNext() {
            return this.currentIndex < this.postIds.length - 1; //true false
        },
        hasPrevious() {
            return this.currentIndex > 0;
        },
        getPhotos(){
            let id = this.$route.params.id;
        this.$store.dispatch('getPostById', id);
        }
    },
    created() {
        // this.id = this.$route.params.id;
        // axios.get(`http://127.0.0.1:8000/api/posts/${this.id}`).then((res) => {
        //     if (res.data.code === 200 && res.data.success) {
        //         this.post = res.data.post;
        //         console.log(this.post);
        //     } else {
        //         console.error('Error fetching post data:', res.data);
        //     }
        // });
    },
    mounted(){
        // let id = this.$route.params.id;
        // this.$store.dispatch('getPostById', id);
    },
    methods: {
        getBase64Image(base64Data) {
            return `data:image/jpeg;base64,${base64Data}`;
        },
        goToNext() {
            if (this.hasNext) {
                const nextId = this.postIds[this.currentIndex + 1];
                this.$router.push({ name: 'NewsPost', params: { id: nextId } });
            }
        },
        goToPrevious() {
            if (this.hasPrevious) {
                const previousId = this.postIds[this.currentIndex - 1];
                this.$router.push({ name: 'NewsPost', params: { id: previousId } });
            }
        },
    },

};
</script>
<style scoped>
.banner_img {
    height: 300px;
}

.featured {
    margin: 1rem auto;
    height: auto;
    width: 50vw !important;
}

.images {
    display: flex;
    align-items: center;
    justify-self: center;

}

.images img {
    width: 30vw;
}
</style>
