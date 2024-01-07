<template>
    <div class="container my-5">
        <h4 class="p-0 pb-2 border-bottom border-2 activity-title">
            On Job Training
        </h4>
        <div class="container">
            <div class="row my-5">
                <div class="col-md-6  justify-content-center align-items-center d-flex my-2">
                    <img :src="require('@/assets/image/design2.jpg')" alt="" class="img-fluid banner_img">
                </div>
                <div class="col-md-6 justify-content-center align-items-center  my-2">
                    <p>
                            According to the curriculum of the <strong>2-Year Software Engineer Certificate Program of Host
                            Myanmar Institute</strong>, every final year students must participate in <strong>On Job Training Program </strong>to
                            have practical work experience at local IT industries. The objective of this training is to
                            expose our students to the working environment and other related experiences prior to
                            going to the working environments. The duration must be <strong>at least 480 hours (about 3
                            months)</strong>, normally scheduled for December-February and May-July.
                   </p>
                    <p>
                            After 3 months of On Job Training, <strong>HMI</strong>  arranges for the students to have a chance to sit
                            interviews for <strong> Software Engineer</strong> or <strong>Network Engineer</strong> jobs not only at IT companies but also
                            at banks and Telecom industries.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
    text-align: justify;
    text-indent: 50px;
    word-spacing: 2px;
    font-size: larger;
}

.activity-title {
    color: #21a7e0;
    font-family: Cambria;
    font-size: 1.6rem;
}

.banner_img {
    height: 300px;
}
</style>
