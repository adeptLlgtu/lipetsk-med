<template>
    <div class="nav-menu">
        <router-link to="/home">
            <img :src="home" alt="">
            <p>Главная</p>
        </router-link>
        <router-link to="/count">
            <img :src="count" alt="">
            <p>Учет</p>
        </router-link>
        <router-link to="/order">
            <img :src="order" alt="">
            <p>Заказать</p>
        </router-link>
    </div>
</template>



<script>
    import home from '../assets/home.svg'
    import count from '../assets/count.svg'
    import order from '../assets/order.svg'
    export default {
        name: 'NavMenu',
        data(){
            return{
                home, count, order

            }
        },
    }
</script>


