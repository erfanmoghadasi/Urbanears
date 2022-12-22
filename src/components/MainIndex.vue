<template>
  <div class="w-full h-full flex gap-1">
    <!-- ---------------LEFT SIDE---------------- -->
    <div class="w-full h-full flex relative">
      <!-- -------------------HEAPHONE IMAGE------------------ -->
      <img
        :src="selectedHeadphone.headphoneImage"
        class="drop-shadow-2xl scale-110 absolute max-w-xs max-h-screen z-20 translate-x-1/2 translate-y-1/4"
        alt="headphone"
      />
      <!-- ----------------LEFT SECTION----------- -->
      <div
        class="max-w-[25vw] flex flex-col justify-between items-center bg-neutral-800 w-full h-full p-5"
      >
        <p class="text-neutral-100 text-sm -translate-x-20 translate-y-2">
          URBANEARS
        </p>
        <h1
          class="text-neutral-50 rotate-90 text-[10rem] tracking-wide -translate-x-7 font-bold max-w-max"
        >
        {{ selectedHeadphone.headphoneTitle }}
        </h1>
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
      <div
        class="w-full max-w-[25vw] h-full relative flex flex-col justify-end items-center p-5"
      >
        <h2
          class="absolute top-5 rotate-90 text-[10rem] translate-y-1/2 translate-x-10 text-gray-300"
        >
        {{ selectedHeadphone.colorTitle }}
        </h2>
        <div class="text-left">
          <p class="font-semibold text-sm mb-3 text-stone-900">
            Review Summary
          </p>
          <span class="text-xl text-stone-900">{{ selectedHeadphone.score }}</span>
          <div>
            <v-icon name="bi-star-fill" class="text-black" />
            <v-icon name="bi-star-fill" class="text-black" />
            <v-icon name="bi-star-fill" class="text-black" />
            <v-icon name="bi-star-fill" class="text-black" />
            <v-icon name="bi-star-fill" class="" />
          </div>
        </div>
      </div>
    </div>

    <span class="bg-slate-200 w-[1px] h-screen" />
    <!-- ---------------RIGHT SIDE---------------- -->
    <div
      class="w-full gap-20 max-w-[49.9vw] h-full pt-7 px-10 flex flex-col justify-between"
    >
      <!-- ------------------HEADER SECTION------------------- -->
      <div class="flex justify-between items-center">
        <ul class="flex gap-5 text-sm">
          <li class="text-slate-800 flex flex-col relative">
            <span>Headphones</span>
            <span
              class="w-6 h-[1px] rounded bg-black absolute -bottom-3"
            ></span>
          </li>
          <li>Speakers</li>
          <li>Accessories</li>
          <li>Inside Urbanears</li>
        </ul>
        <span class="w-[1px] h-7 bg-slate-200" />
        <div class="pr-5 flex items-center gap-2">
          <v-icon name="bi-question-square-fill" class="text-black" />
          <span>Cart</span>
        </div>
      </div>

      <!-- --------------------------MIDDLE SECTION--------------------- -->
      <div class="flex justify-between gap-20 h-full">
        <!-- ----------------------TEXT SECTION----------------------- -->
        <div class="flex flex-col justify-between text-black">
          <h6 class="text-sm font-semibold">{{ selectedHeadphone.textTitle }}</h6>
          <h3 class="text-4xl">{{ selectedHeadphone.textMark }}</h3>
          <p class="text-[#98a0a8] text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            exercitationem voluptatem, ab doloribus eos error. Labore impedit
            esse ipsa repellat nesciunt odit fugiat, tempore saepe sapiente
            libero necessitatibus provident? Sit?
          </p>
          <div class="flex items-center gap-10 w-64 justify-between">
            <span class="font-bold text-lg scale-125">${{ selectedHeadphone.price }}</span>
            <button class="bg-black text-zinc-200 text-xs w-40 h-9">
              ADD TO CART
            </button>
          </div>
        </div>
        <!-- ----------------------HEADPHONES SECTION----------------------- -->
        <div class="w-80 flex flex-col justify-around items-center">
          <v-icon
            class="text-black border cursor-pointer border-zinc-500 rounded-full p-2 w-10 h-10"
            name="la-headphones-alt-solid"
            @click="selectHandler(0)"
          />
          <v-icon
            class="text-black border cursor-pointer border-zinc-300 rounded-full p-2 w-10 h-10"
            name="gi-headphones"
            @click="selectHandler(1)"
          />
          <v-icon
            class="text-black border cursor-pointer border-zinc-300 rounded-full p-2 w-10 h-10"
            name="la-headphones-solid"
            @click="selectHandler(2)"
          />
          <v-icon
            class="text-black border cursor-pointer border-zinc-300 rounded-full p-2 w-10 h-10"
            name="md-headphones-outlined"
            @click="selectHandler(3)"
          />
        </div>
      </div>

      <!-- -------------------------GALLERY SECTION--------------------------- -->
      <div class="h-40 w-[35rem] flex bg-red-400">
        <div
          class="w-1/2 bg-stone-300 overflow-hidden z-10 shadow-[0px_-8px_15px_3px_rgba(30,30,30,0.15)]"
        >
          <img
            class="w-full h-full cover object-cover"
            src="../assets/hp1.jpg"
          />
        </div>

        <div class="w-1/2 flex flex-col relative overflow-hidden">
          <v-icon
            name="md-arrowright-round"
            class="absolute right-0 top-0 text-stone-900 -rotate-45"
          />
          <v-icon
            name="md-arrowright-round"
            class="absolute right-0 bottom-0 text-cyan-600 rotate-45 z-20"
          />
          <div
            class="flex justify-center items-center text-center h-2/5 bg-white text-stone-900 text-xs font-semibold"
          >
            <p>URBANEARS</p>
          </div>
          <div class="h-3/5 bg-stone-700 overflow-hidden brightness-[.35]">
            <img src="../assets/hp2.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OhVueIcon from "oh-vue-icons";

// headphone images
import headphone1 from "../assets/headphone6.png";
import headphone2 from "../assets/headphone3.png";
import headphone3 from "../assets/headphone4.png";
import headphone4 from "../assets/headphone5.png";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
  data() {
    return {
      allHeadphoneInfo: [
        {
          headphoneTitle: "U99",
          headphoneImage: headphone1,
          colorTitle: "orange",
          textTitle: "PLATIN ADV WIRELESS",
          textMark: "The Classic Wireless Headphone",
          price: 299,
          score: '4.20'
        },
        {
          headphoneTitle: "R119",
          headphoneImage: headphone2,
          colorTitle: "rust",
          textTitle: "SUPER WIRELESS",
          textMark: "The Awesome #1 Headphone",
          price: 109,
          score: '4.10'
        },
        {
          headphoneTitle: "D12",
          headphoneImage: headphone3,
          colorTitle: "red",
          textTitle: "HELLAS",
          textMark: "The Sweat-Friendly Headphone",
          price: 399,
          score: '4.20'
        },
        {
          headphoneTitle: "RX6",
          headphoneImage: headphone4,
          colorTitle: "stone",
          textTitle: "PLATIN 2x",
          textMark: "The Perfect Classic Headphone",
          price: 149,
          score: '4.30'
        },
      ],
      selectedHeadphone: {
        headphoneTitle: "U99",
        headphoneImage: headphone1,
        colorTitle: "orange",
        textTitle: "PLATIN ADV WIRELESS",
        textMark: "The Classic Wireless Headphone",
        price: 299,
      },
    };
  },
  methods:{
    selectHandler(index){
        console.log(this.selectedHeadphone)
        this.selectedHeadphone = this.allHeadphoneInfo[index]
        console.log(this.selectedHeadphone)
    }
  }
};
</script>

<style></style>
