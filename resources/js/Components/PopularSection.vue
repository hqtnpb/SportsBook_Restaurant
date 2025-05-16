<template>
    <section class="popular">
        <div class="container">
            <div class="popular__inner">
                <div class="popular-top">
                    <h2 class="popular-top__title">Most popular food</h2>
                    <p class="popular-top__desc">
                        A list of most popular Bangladeshi food including mains,
                        drinks, and deserts you must try while in Bangladesh,
                        for an authentic experience. Check now!
                    </p>
                </div>
                <div class="popular__list">
                    <PopularCard
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
                <Link href="#!">
                    <p class="popular-more">
                        Explore All Food

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="11"
                            viewBox="0 0 18 11"
                            fill="none"
                            style="margin-left: 9px"
                        >
                            <path
                                d="M1 5.5H17M17 5.5C15.4848 5.26 12.4545 4.024 12.4545 1M17 5.5C15.4848 5.74 12.4545 6.976 12.4545 10"
                                stroke="#FB8F2C"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </p>
                </Link>
            </div>
        </div>
    </section>
</template>

<script setup>
import PopularCard from "./PopularCard.vue";
import { Link } from "@inertiajs/vue3";
defineProps({
    products: Array,
});
</script>
