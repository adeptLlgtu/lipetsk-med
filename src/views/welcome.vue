<template>
    <div class="welcome">
        <div class="logo-block">
            <img :src="logo" alt="">
            <h1>ЛИПЕЦКМЕД</h1>

        </div>
        <div class="welcome-links">
            <router-link to="/registration">Регистрация</router-link>
            <router-link to="/login">Вход</router-link>
        </div>
        <div class="welcome-footer">
            <p>Липецк 2021</p>
            <p>Шкатулин Никита</p>
        </div>

    </div>
</template>

<script>

    import logo from '../assets/logo.svg'

    export default {
        name: 'welcome',
        data: function () {
            return {
                title: 'Приветствие',
                logo

            };
        },
        mounted() {
            let header = document.querySelector('.header')
            let navMenu = document.querySelector('.nav-menu')
            header.remove()
            navMenu.remove()
        }

    }
</script>


