<script setup>
import { Link, Head } from "@inertiajs/vue3";
</script>
<template>
    <Head> </Head>
    <header>
        <nav>
            <ul class="nav__list">
                <li class="nav__item">
                    <Link href="/" class="nav__link">Home</Link>
                </li>
                <li>
                    <Link href="#!" class="nav__link">Menu</Link>
                </li>
                <li>
                    <Link href="#!" class="nav__link">Blog</Link>
                </li>
                <li>
                    <Link href="#!" class="nav__link">Pages</Link>
                </li>
                <li>
                    <Link href="/contact" class="nav__link">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <slot></slot>
    </main> 
    <footer></footer>
</template>
