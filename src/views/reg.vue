<template>
    <div class="welcome">
        <router-link to="/" class="back-block">
            <img :src="back" alt="">
            <p>Назад</p>
        </router-link>
       <h2>Регистрация</h2>
        <form id="reg-form" action="">
            <label for="login">Логин</label>
            <input name="login" id="login" type="text">
            <label for="password">Пароль</label>
            <input name="password" id="password" type="password">
            <label for="confirm-password">Подтвердите пароль</label>
            <input id="confirm-password" type="password">
            <button>Продолжить</button>
        </form>
        <div class="welcome-footer">
            <p>Липецк 2021</p>
            <p>Шкатулин Никита</p>
        </div>
    </div>
</template>

<script>
    import back from '../assets/back.svg'


    export default {
        name: 'reg',
        data: function () {
            return {
                title: 'Приветствие',
                back

            };
        },
        methods:{
            registration(){
                let form = document.querySelector('#reg-form')
                form.onsubmit = async (e) => {
                    e.preventDefault();
                    let formData = new FormData(form)
                    formData.append('roots', '1')
                    let response = await fetch('http://apteka-api.loc/api/registration', {
                        method: 'POST',
                        body: formData
                    });
                    let result = await response.json();
                    window.location.href = '/home'
                };
            }
        },
        mounted() {
            let header = document.querySelector('.header')
            let navMenu = document.querySelector('.nav-menu')
            header.style.display = 'none'
            navMenu.style.display = 'none'

            this.registration()
        }

    }
</script>


