<template>
  <div class=" w-full h-full flex gap-1 ">

    <!-- ---------------LEFT SIDE---------------- -->
    <div class="w-full h-full flex relative">
            <!-- -------------------HEAPHONE IMAGE------------------ -->
    <img :src="image" class="absolute max-w-xs max-h-screen z-20 translate-x-1/2 translate-y-1/4 " alt="headphone" />
        <!-- ----------------LEFT SECTION----------- -->
        <div class="max-w-[25vw] flex flex-col justify-between items-center bg-neutral-800 w-full h-full p-5">
            <p class="text-neutral-100 text-sm -translate-x-20 translate-y-2">URBONEARS</p>
            <h1 class="text-neutral-50 rotate-90 text-[10rem] tracking-wide -translate-x-7 font-bold max-w-max">U99</h1>
            <div class="flex items-center gap-3 text-neutral-200">
                <v-icon name="co-facebook-f" />
                <v-icon name="bi-dribbble" />
                <v-icon name="co-linkedin-in" />
                <v-icon name="co-twitch" />
                <v-icon name="co-twitter" />
                <v-icon name="fa-google-plus-g" />
            </div>
        </div>

        <!-- ----------------RIGHT SECTION----------- -->
        <div class="w-full max-w-[25vw] h-full  relative flex flex-col justify-end items-center p-5 ">
            <h2 class="absolute top-5 rotate-90 text-[10rem] translate-y-1/2 translate-x-10  ">orange</h2>
            <div class="text-black">
                <p>Review Summary</p>
                <span>4.20</span>
                <div>
                    <v-icon name="bi-star-fill" class="" />
                    <v-icon name="bi-star-fill" class="" />
                    <v-icon name="bi-star-fill" class="" />
                    <v-icon name="bi-star-fill" class="" />
                    <v-icon name="bi-star-fill" class="" />
                </div>
            </div>
        </div>
    </div>

    <span class="bg-slate-300 w-[1px] h-screen " />
    <!-- ---------------RIGHT SIDE---------------- -->
    <div class="w-full max-w-[50vw] h-full"></div>
  </div>
</template>

<script>
import OhVueIcon from "oh-vue-icons";
// headphone images
// import headphone1 from '../assets/headphone3.png'
import headphone2 from '../assets/headphone6.png'
// import headphone3 from '../assets/headphone4.png'
// import headphone4 from '../assets/headphone5.png'

export default {
    components: {
        'v-icon' : OhVueIcon
    },
    data(){
        return{
            image: headphone2
        }
    }
}
</script>

<style>

</style>