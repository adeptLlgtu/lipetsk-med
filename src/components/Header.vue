<template>
    <div class="header">
        <img :src="logo" alt="">
        <h1>ЛИПЕЦКМЕД</h1>
    </div>
</template>

<script>
    import logo from '../assets/logo.svg'
    export default {
        name: 'Header',
        data: function () {
            return {
                title: 'Журнал новостей',
                logo

            };
        },

    }
</script>


