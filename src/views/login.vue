<template>
    <div class="welcome">
        <router-link to="/" class="back-block">
            <img :src="back" alt="">
            <p>Назад</p>
        </router-link>
        <h2>Вход</h2>
        <form id="login-form" action="">
            <label for="login">Логин</label>
            <input name="login" id="login" type="text">
            <label for="password">Пароль</label>
            <input name="login" id="password" type="password">
            <div class="message-block"></div>
            <button type="button" id="enter-btn">Продолжить</button>
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
            users(){
                let request = new XMLHttpRequest();
                request.open('GET', "http://apteka-api.loc/api/get:all/from:users/id:all", false);
                request.send()
                if (request.status === 200) {
                    let subjectsRequest = JSON.parse(request.response)
                    return(subjectsRequest)
                }
            },
        },

        mounted() {
            let header = document.querySelector('.header')
            let navMenu = document.querySelector('.nav-menu')
            header.style.display = 'none'
            navMenu.style.display = 'none'
            let login = document.querySelector('#login')
            let password = document.querySelector('#password')
            let parseUsers = this.users()
            let btn = document.querySelector('#enter-btn')
            let errorFlag = false
            let messageBlock = document.querySelector('.message-block')
            btn.onclick = () => {

                messageBlock.innerHTML = ''
                for (let i=0; i<parseUsers.length; i++){
                    console.log('Логин: '+ login.value)
                    console.log('Логин (data): '+ parseUsers[i].login)
                    if (parseUsers[i].login === login.value && parseUsers[i].password === password.value){
                        localStorage.setItem('roots', parseUsers[i].roots)
                        messageBlock.remove()
                        location.pathname = '/home'
                    }
                    else{
                        errorFlag = true
                    }
                }
                if (errorFlag === true){

                    messageBlock.insertAdjacentHTML('beforeend', '<p class="error-msg">Неверный логин или пароль</p>')
                }
            };
        }

    }
</script>


