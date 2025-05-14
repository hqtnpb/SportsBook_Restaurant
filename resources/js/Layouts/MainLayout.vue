<script setup>
import { Link, Head } from "@inertiajs/vue3";
</script>
<template>
    <Head> </Head>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <nav>
                    <ul class="nav__list">
                        <li class="nav__item">
                            <Link href="/" class="nav__link">Home</Link>
                        </li>
                        <li class="nav__item">
                            <Link href="#!" class="nav__link">Menu</Link>
                        </li>
                        <li class="nav__item">
                            <Link href="#!" class="nav__link">Blog</Link>
                        </li>
                        <li class="nav__item">
                            <Link href="#!" class="nav__link">Pages</Link>
                        </li>
                        <li class="nav__item">
                            <Link href="#!" class="nav__link">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div class="header__logo">
                    <Link href="#!" class="header__logo-link">
                        <img
                            src="/resources/js/assets/icon/Logo.svg"
                            alt="SportsBook Restaurant"
                            class="header__logo-img"
                        />
                    </Link>
                </div>
                <div class="header__action">
                    <span class="header__action-time">11:24 We're open</span>
                    <Link href="#!" class="header__action-link"
                        >Table Reservation</Link
                    >
                </div>
            </div>
        </div>
    </header>

    <main>
        <slot></slot>
    </main>
    <footer></footer>
</template>
