<template>
    <div class="order">
        <div class="content">
            <h2>Заказать</h2>
            <form action="">
                <label for="meds_name">Название препарата</label>
                <input placeholder="Аспирин" id="meds_name" name="meds_name" type="text">
                <label for="meds_name">Количество</label>
                <input placeholder="100" id="meds_many" name="meds_many" type="text">
                <button @click.prevent="order" type="submit">Заказать</button>
            </form>
            <div class="info">
                <img :src="success" alt="">
                <div class="info-text">

                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import success from '../assets/info-success.svg'


    export default {
        name: 'Order',
        components: {

        },
        data(){
            return{
                success

            }
        },
        methods:{
            order(e){
                let infoText = document.querySelector('.info-text')
                let infoBlock = document.querySelector('.info')
                let inputsVals = document.querySelectorAll('input')
                let form = document.querySelector('form')
                e.target.onclick = async () => {
                    let formData = new FormData(form)
                    let response = await fetch('http://apteka-api.loc/api/orders', {
                        method: 'POST',
                        body: formData
                    });
                    let result = await response.json();
                    infoBlock.style.opacity = '1'
                    infoText.innerHTML = ''
                    infoText.insertAdjacentHTML('beforeend', '<p>Запрос на доставку препарата <span>'+inputsVals[0].value+'</span> в количестве <span>'+inputsVals[1].value+'</span> успешно отправлен!</p>')
                };
            }
        },
        created() {
            this.$http.get('http://apteka-api.loc/api/get:all/from:meds/id:all').then(function(data){
                this.meds = JSON.parse(JSON.stringify(data.body));
                console.log(data.body);
            })
        },
        mounted() {

        }
    }
</script>
