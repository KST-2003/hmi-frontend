<template>
    <div>

        <div class="banner col-12">
            <img :src="require('@/assets/banner.png')" class="img-fluid" alt="banner-image"
                style="width: 100%; height:250px;">
        </div>
        <div class="container my-5">
            <h4 class="p-0 pb-2 border-bottom border-2 activity-title">Student Life</h4>
            <p class="my-3">
                HMI students will be provided with standard education with complete facilities including smart and active
                learning classrooms, a good environment, and institute facilities. Students can fully use the services and
                facilities of the institute, including sport, entertainment, dormitories, transportations, and etc.
            </p>
            <div class="row ">
                <div class="col-md-6 justify-content-center align-items-center d-flex mb-2">
                    <img :src="require('@/assets/image/design2.jpg')" alt="" class="img-fluid banner_img">
                </div>
                <div class="col-md-6 justify-content-center align-items-center d-flex">
                    <img :src="require('@/assets/image/design2.jpg')" alt="" class="img-fluid banner_img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StudentActivity',
}
</script>

<style scoped>
p {
    text-align: justify;
    text-indent: 50px;
    word-spacing: 2px;
    font-size: larger;
}

@font-face {
    font-family: 'rabikiso';
    src: url('~@/assets/fonts/Jost/Jost-VariableFont_wght.ttf') format('truetype');
}

.activity-title {
    color: #21a7e0;
    font-family: 'rabikiso';
    font-size: 1.5rem;
}



.banner_img {
    height: 300px;
}
</style>
