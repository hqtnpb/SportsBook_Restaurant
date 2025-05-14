<template>
    <section class="booking-section">
        <div class="container">
            <div class="booking-section__inner">
                <div class="booking-left">
                    <h3 class="booking-left__title">Reserve ! Book Now</h3>
                    <div class="booking-left__form">
                        <div class="booking-left__date">
                            <h4 class="booking-left__date-title">Set date</h4>
                            <label for="date">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="7"
                                    viewBox="0 0 12 7"
                                    fill="none"
                                    class="booking-left__date-icon"
                                >
                                    <path
                                        d="M1 1L6 6L11 1"
                                        stroke="#111114"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </label>
                            <input
                                type="number"
                                name="date"
                                id="date"
                                class="booking-left__date-input"
                                min="1"
                                max="12"
                            />
                        </div>
                        <div class="booking-left__guests">
                            <h4 class="booking-left__date-title">Guests</h4>
                            <label for="guests">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="7"
                                    viewBox="0 0 12 7"
                                    fill="none"
                                    class="booking-left__guests-icon--increase"
                                >
                                    <path
                                        d="M11 6L6 1L1 6"
                                        stroke="#111114"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </label>
                            <input
                                type="number"
                                name="guests"
                                id="guests"
                                class="booking-left__date-input"
                                min="1"
                                max="10"
                            />
                            <label for="guests">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="7"
                                    viewBox="0 0 12 7"
                                    fill="none"
                                    class="booking-left__guests-icon--decrease"
                                >
                                    <path
                                        d="M1 1L6 6L11 1"
                                        stroke="#111114"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </label>
                        </div>
                    </div>
                    <button class="booking-left__action">Book Now</button>
                </div>

                <div class="booking-right">
                    <img src="/resources/js/assets/images/booking_img_01.png" alt="SportBook" class="booking-right__img" />
                </div>
            </div>
        </div>
    </section>
</template>
