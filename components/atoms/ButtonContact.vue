<template>
  <a :href="src" target="_blank">
    <div
      class="button-contact hover:bg-[#000] bg-[#F44F1A] w-max py-2 px-4 border hover:border-white border-black rounded-[30px] cursor-pointer hover:text-[#fff] text-[#000]"
    >
      <p
        class="text-[16px] lg:text-[25px] font-normal tracking-normal mr-2 normal-case"
      >
        {{ textButton }}
      </p>
      <!-- <div class="flex items-center">
        <p
          class="text-[16px] lg:text-[25px] font-normal tracking-normal mr-2 normal-case"
        >
          {{ textButton }}
        </p>
        <svg
          class="h-[10px] w-[10px] lg:h-[15px] lg:w-[15px]"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6491 1.1756C14.6491 0.623311 14.2014 0.175596 13.6491 0.175596L4.64911 0.175597C4.09683 0.175596 3.64911 0.623312 3.64911 1.1756C3.64911 1.72788 4.09683 2.1756 4.64911 2.1756L12.6491 2.1756L12.6491 10.1756C12.6491 10.7279 13.0968 11.1756 13.6491 11.1756C14.2014 11.1756 14.6491 10.7279 14.6491 10.1756L14.6491 1.1756ZM1.70711 14.5318L14.3562 1.8827L12.942 0.46849L0.292893 13.1176L1.70711 14.5318Z"
            class="fill-[#000] hover:fill-[#fff]"
          />
        </svg>
      </div> -->
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  textButton: {
    type: String,
    default: "SEE",
  },
  src: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
