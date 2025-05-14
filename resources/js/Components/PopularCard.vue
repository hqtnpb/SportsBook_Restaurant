<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";
const value = ref(3.5);
</script>

<template>
    <div class="popular-item">
        <img
            src="/resources/js/assets/images/popular_img_01.png"
            alt="food"
            class="popular-item__img"
        />
        <div class="popular-item__content">
            <div class="popular-item__info">
                <h3 class="popular-item__title">Schezwan Noodles</h3>
                <span class="popular-item__price">$36</span>
            </div>
            <p class="popular-item__desc">
                Fresh toasted sourdough bread with olive oil and pomegranate.
            </p>
            <div class="popular-item__action">
                <Link href="#!" class="popular-item__link">Order Now</Link>
                <span class="popular-item__rate">
                    <el-rate
                        v-model="value"
                        disabled
                        size="large"
                        :colors="['#FB8F2C', '#FB8F2C', '#FB8F2C']"
                        show-score
                        text-color="#FB8F2C"
                        score-template=""
                        class="custom-rate"
                    />
                </span>
            </div>
        </div>
    </div>
</template>
