<script setup>
import HeroSection from "../Components/HeroSection.vue";
import PopularSection from "../Components/PopularSection.vue";
import InfoSection from "../Components/InfoSection.vue";
import MustTrySection from "../Components/MustTrySection.vue";
import VisitSection from "../Components/VisitSection.vue";
import { onMounted } from "vue";
import axiosClient from "../axiosClient";
import BookingSection from "../Components/BookingSection.vue";
import OfferSection from "../Components/OfferSection.vue";

onMounted(async () => {
    const response = await axiosClient.get("list.php?c=list");
    console.log(response.data);
});
defineProps({
    products: {
        type: Array,
        required: true,
    },
});
</script>
<template>
    <HeroSection />
    <div class="stat">
        <div class="stat-info">
            <div class="stat-info__num">06</div>
            <div class="stat-info__text">Number Restaurant</div>
        </div>
        <div class="stat-info">
            <div class="stat-info__num">68</div>
            <div class="stat-info__text">New Food Menu Dishes</div>
        </div>
        <div class="stat-info">
            <div class="stat-info__num">36</div>
            <div class="stat-info__text">Years of experience</div>
        </div>
    </div>
    <PopularSection :products="products" />
    <InfoSection />
    <MustTrySection />
    <VisitSection />
    <BookingSection />
    <OfferSection />
</template>
