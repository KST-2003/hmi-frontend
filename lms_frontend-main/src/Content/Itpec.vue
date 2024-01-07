<template>
    <div class="container my-5">
        <h4 class="p-0 pb-2 border-bottom border-2 activity-title">
            ITPEC အကြောင်း
        </h4>
        <div class="container">
            <div class="row my-5">
                <div class="col-md-6  justify-content-center align-items-center d-flex my-2">
                    <img :src="require('@/assets/image/design2.jpg')" alt="" class="img-fluid banner_img">
                </div>
                <div class="col-md-6 justify-content-center align-items-center  my-2">
                    <p>
                        ITPEC [Information Technology
                        Professionals Examination
                        Council ] Common Examination ဆိုသည်မှာ ဂျပန်နိုင်ငံက ဦးဆောင်ပြီး နိုင်ငံပေါင်း 7 နိုင်ငံတွင် IT Skills နှင့် IT Knowledge
                        တွေကို တစ်နှစ်မှာ နှစ်ကြိမ် စစ်ဆေးသည့် Exam တစ်ခုဖြစ်ပါသည်။
                    </p>
                    <p>
                        <ul>
                            <li>IP (nformation Technology Passport Examination)</li>
                            <li>FE (Fundamental Information Technology Engineer Examination)</li>
                            <li>AP (Applied Information Technology Engineer Examination)</li>
                        </ul>
                        ဆိုပြီး Examination Level (3) မျိုးရှိပါသည်။
                    </p>
                </div>
            </div>
            <div class="row my-5">
                <p>
                    ITPEC သည် IT Career နှင့် ဂျပန်နိုင်ငံတွင် အသက်မွေးဝမ်းကြောင်း ပြုချင်သူများအတွက် IT နှင့် ဆိုင်သော 
                    နည်းပညာဗဟုသုတနှင့် ကျွမ်းကျင်မှု ဆိုင်ရာများကို အထောက်အကူပြု သက်သေပြုနိုင်တဲ့ အရေးပါသည့် Exam Certificate 
                    တစ်ခုဖြစ်သောကြောင့် ဖြစ်သည်။ ITPECရဲ့ အကျိုးအမြတ် တွေဟာဆိုရင် Japan, Philippines, Thailand, Vietnam, Myanmar, Mongolia,
                    Bangladesh စသည့် နိုင်ငံ 7 နိုင်ငံ အသိအမှတ်ပြု Certificate ဖြစ်သောကြောင့် IT engineer အဖြစ်အသက်မွေးဝမ်းကြောင်း ပြုလိုသူများအတွက် ကြီးမားတဲ့ အခွင့်အလမ်းများကို ရရှိနိုင်
                    လိမ့်မည် ဖြစ်ပါသည်။
                </p>
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
