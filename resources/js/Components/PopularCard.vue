<!-- resources/js/Components/Cards/PopularCard.vue -->
<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="popular-item">
        <img
            :src="product.image_url"
            :alt="product.name"
            class="product-image"
        />
        <div class="popular-item__content">
            <div class="popular-item__info">
                <h3 class="popular-item__title">{{ product.name }}</h3>
                <span class="popular-item__price">${{ product.price }}</span>
            </div>
            <p class="popular-item__desc">
                {{ product.description || "No description available" }}
            </p>
            <div class="popular-item__action">
                <Link href="#!" class="popular-item__link"> Order Now </Link>
                <span class="popular-item__rate">
                    <el-rate
                        :model-value="product.rate"
                        disabled
                        size="large"
                        :colors="['#FB8F2C', '#FB8F2C', '#FB8F2C']"
                        show-score
                        text-color="#FB8F2C"
                        score-template="{value}"
                    />
                </span>
            </div>
        </div>
    </div>
</template>
