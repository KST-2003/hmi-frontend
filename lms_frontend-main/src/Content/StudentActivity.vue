<template>
    <div>
        <div class="banner col-12">
            <img :src="require('@/assets/banner.png')" class="img-fluid" alt="banner-image">
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
        <div class="container my-5">
            <div class="row">
                <div class="offset-md-1 col-md-4">
                    <ul>
                        <li>Lab and Practical</li>
                        <ul>
                            <li>Programming</li>
                            <li>Computer System and Networking</li>
                        </ul>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="row rowA">
                        <div class="col-md-6 col-sm-6 col-6">
                            <img :src="require('@/assets/banner.png')" class="img-fluid a1" alt="banner-image">
                        </div>
                        <div class="col-md-6 col-sm-6 col-6">
                            <img :src="require('@/assets/banner.png')" class="img-fluid a2" alt="banner-image">
                        </div>
                    </div>
                    <div class="row rowB">
                        <div class="col-md-6 col-sm-6 col-6">
                            <img :src="require('@/assets/banner.png')" class="img-fluid a3" alt="banner-image">
                        </div>
                        <div class="col-md-6 col-sm-6 col-6">
                            <img :src="require('@/assets/banner.png')" class="img-fluid a4" alt="banner-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container my-5">
            <div class="row">
                <div class="offset-md-1 col-md-7 col-sm-7">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <img :src="require('@/assets/banner.png')" class="img-fluid b1" alt="banner-image">
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="row">
                                <img :src="require('@/assets/banner.png')" class="img-fluid b2" alt="banner-image">
                            </div>
                            <div class="row">
                                <img :src="require('@/assets/banner.png')" class="img-fluid b3" alt="banner-image">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <ul>
                        <li>Seminars</li>
                        <ul>
                            <li>Seminal Talks from Industrial<br>Experts and Researcher</li>
                            <!-- <li>Computer System and Networking</li> -->
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container my-5">
            <ul>
                <li>Activities</li>
            </ul>
            <div class="row rowC">
                <div class="col-md-3 col-sm-6 col-6 px-2">
                    <img :src="require('@/assets/banner.png')" class="img-fluid c1" alt="banner-image">
                </div>
                <div class="col-md-3 col-sm-6 col-6 px-2">
                    <img :src="require('@/assets/banner.png')" class="img-fluid c2" alt="banner-image">
                </div>
                <div class="col-md-3 col-sm-6 col-6 px-2">
                    <img :src="require('@/assets/banner.png')" class="img-fluid c3" alt="banner-image">
                </div>
                <div class="col-md-3 col-sm-6 col-6 px-2">
                    <img :src="require('@/assets/banner.png')" class="img-fluid c4" alt="banner-image">
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

/* bootstrap lg */
@media (min-width: 992px) {}

/* small devices */
@media (min-width: 320px) and (max-width:575px) {
    .rowA div:first-child,.rowB div:first-child{
        padding-right:0;
    }
    .rowA div:last-child,.rowB div:last-child{
        padding-left: 0;
    }
    .rowC div:first-child,.rowC div:nth-child(3) 
    {
        padding-right:0 !important;
    }
    .rowC div:nth-child(2),.rowC div:last-child{
        padding-left: 0 !important;
    }

    


}

/* bootstrap small*/
@media (min-width: 576px) and (max-width:649px) {
    .a2{
        margin-top: 0.7rem;
    }
    .a4{
        margin-top: 0.9rem;
        border:2px solid rgb(251, 63, 63);
    }
    .b1{
        margin-top: 1.3rem;
    }
    .b3{
        margin-top: 0.7rem;
        /* border:2px solid rgb(248, 251, 63); */
    }
    .c2{
        /* border:2px solid red; */
        margin-bottom: 0.5rem;
    }
}

@media (max-width: 767px) and (min-width:650px) {
    .a1 {
        margin-top: 0.7rem;
    }
    .a2{
        margin-top: 1.7rem;
    }
    .a4{
        margin-top: 1.4rem;
    }
    .b1{
        margin-top: 1.3rem;
    }
    .b3{
        margin-top: 0.7rem;
    }
    .c2{
        margin-bottom: 0.5rem;
    }
}


/* bootstrap md and large*/
@media (min-width: 768px) {
    .a1 {
        margin-top: -1rem;
        border:2px solid rgb(28, 226, 68);
    }

    .a4 {
        margin-top: 1rem;
    }
    .b1{
        margin-top: 2.5rem;
    }
    .b3{
        margin-top: 1rem;
    }

    .c1,.c3{
        margin-top: 1.5rem;
    }
}

</style>
