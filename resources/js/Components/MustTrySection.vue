<script setup>
import MustTryCard from "./MustTryCard.vue";
</script>
<template>
    <section class="must-try">
        <div class="container">
            <div class="must-try__inner">
                <div class="must-try__top">
                    <p class="must-try__desc">Our menu</p>
                    <h2 class="must-try__title">
                        Choose & Taste What You Like
                    </h2>
                    <p class="must-try__desc">
                        A list of top Bangladeshi food including mains, drinks,
                        and deserts you must try while in Bangladesh, for an
                        authentic experience. Check now!
                    </p>
                </div>
                <div class="must-try__category-list">
                    <div class="must-try__category-item">All</div>
                    <div class="must-try__category-item">Appetizer</div>
                    <div class="must-try__category-item">Soup</div>
                    <div class="must-try__category-item">Dessert</div>
                    <div class="must-try__category-item">Drinks</div>
                </div>
                <div class="must-try__food-list" >
                    <MustTryCard />
                    <MustTryCard />
                    <MustTryCard />
                    <MustTryCard />
                </div>
            </div>
        </div>
    </section>
</template>
