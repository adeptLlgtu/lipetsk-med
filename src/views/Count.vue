<template>
    <div class="count">
        <div class="content">
            <h2>Учет</h2>
            <form class="iterate-form" action="">
                <h3>Отметить продажу</h3>
                <label for="id">Id препарата</label>
                <input name="id" id="id" type="text">
                <div class="button-block">
                    <button @click="iterate" type="button" class="iterate-form__btn">Отметить продажу</button>
                    <img class="button-block-mark" :src="mark" alt="">
                </div>
            </form>
            <form class="get-form" action="">
                <h3>Получение нового товара</h3>
                <label for="meds_name">Название препарата</label>
                <input placeholder="Анальгин" name="meds_name" id="meds_name" type="text">
                <label for="meds_many">Количество</label>
                <input placeholder="100" name="meds_many" id="meds_many" type="text">
                <label for="meds_contraindications">Противопоказания</label>
                <textarea placeholder="Противопоказания" name="meds_contraindications" id="meds_contraindications"></textarea>
                <label for="side_effects">Побочные эффекты</label>
                <textarea placeholder="Побочные эффекты" name="side_effects" id="side_effects"></textarea>
                <label for="meds_form">Форма препарата</label>
                <input placeholder="Таблетки" name="meds_form" id="meds_form" type="text">
                <label for="meds_structure">Состав препарата</label>
                <textarea placeholder="Состав препарата" name="meds_structure" id="meds_structure"></textarea>
                <label for="meds_instruction">Инструкция по применению</label>
                <textarea placeholder="Инструкция по применению" name="meds_instruction" id="meds_instruction"></textarea>
                <label for="price">Цена</label>
                <input placeholder="Цена" name="price" id="price" type="text">
                <div class="button-block">
                    <button @click="newMeds" type="button" class="get-form__btn">Записать</button>
                    <img class="button-block-mark" :src="mark" alt="">
                </div>
            </form>
            <form class="reload-form" action="">
                <h3>Обновление товара</h3>
                <label for="id-ref">Id препарата</label>
                <input placeholder="" name="id" id="id-ref" type="text">
                <label for="meds_many_ref">Количество</label>
                <input placeholder="100" name="meds_many" id="meds_many_ref" type="text">
                <div class="button-block">
                    <button @click="realoadMeds" type="button" class="reload-form__btn">Добавить</button>
                    <img class="button-block-mark" :src="mark" alt="">
                </div>
            </form>
            <form class="reload-form" action="">
                <h3>Удаление товара</h3>
                <label for="id-del">Id препарата</label>
                <input placeholder="" name="id" id="id-del" type="text">
                <div class="button-block">
                    <button @click="deleteMeds" type="button" class="reload-form__btn">Удалить</button>
                    <img class="button-block-mark" :src="mark" alt="">
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import mark from '../assets/mark.svg'

    export default {
        name: 'Count',
        components: {

        },
        data(){
            return{
                mark
            }
        },
        methods:{
            meds(){
                let request = new XMLHttpRequest();
                request.open('GET', "http://apteka-api.loc/api/get:all/from:meds/id:all", false);
                request.send()
                if (request.status === 200) {
                    let subjectsRequest = JSON.parse(request.response)
                    return(subjectsRequest)
                }
            },
            iterate(e){
                let meds = this.meds()
                let btn = e.target
                let formIterate = e.target.parentNode.parentNode
                let inputIterate = formIterate.querySelector('input')
                let btnBlockMark = formIterate.querySelector('.button-block-mark')
                btnBlockMark.className = 'button-block-mark'
                for (let i=0; i<meds.length; i++){
                    if (meds[i].id === inputIterate.value){
                        let parceIterate = parseInt(meds[i].meds_many)
                        let form = document.querySelector('.iterate-form')
                        btn.onclick = async (e) => {
                            e.preventDefault();
                            let formData = new FormData(form)
                            formData.append('id', inputIterate.value)
                            formData.append('meds_many',parceIterate-1 )
                            let response = await fetch('http://apteka-api.loc/api/iterate', {
                                method: 'POST',
                                body: formData
                            });
                            let result = await response.json();
                            btnBlockMark.className = 'button-block-mark animate-mark'
                        };
                    }

                }
            },
            newMeds(e){
                let btn = e.target
                let formIterate = e.target.parentNode.parentNode
                let btnBlockMark = formIterate.querySelector('.button-block-mark')
                btnBlockMark.className = 'button-block-mark'

                btn.onclick = async (e) => {
                    btnBlockMark.className = 'button-block-mark animate-mark'
                    e.preventDefault();
                    let formData = new FormData(formIterate)
                    let response = await fetch('http://apteka-api.loc/api/new', {
                        method: 'POST',
                        body: formData
                    });
                    let result = await response.json();
                    window.location.reload()
                };
            },
            realoadMeds(e){
                let btn = e.target
                let formIterate = e.target.parentNode.parentNode
                let btnBlockMark = formIterate.querySelector('.button-block-mark')
                btnBlockMark.className = 'button-block-mark'

                btn.onclick = async (e) => {
                    btnBlockMark.className = 'button-block-mark animate-mark'
                    e.preventDefault();
                    let formData = new FormData(formIterate)
                    let response = await fetch('http://apteka-api.loc/api/iterate', {
                        method: 'POST',
                        body: formData
                    });
                    let result = await response.json();
                };
            },
            deleteMeds(e){
                let btn = e.target
                let formIterate = e.target.parentNode.parentNode
                let btnBlockMark = formIterate.querySelector('.button-block-mark')
                btnBlockMark.className = 'button-block-mark'

                btn.onclick = async (e) => {
                    btnBlockMark.className = 'button-block-mark animate-mark'
                    e.preventDefault();
                    let formData = new FormData(formIterate)
                    let response = await fetch('http://apteka-api.loc/api/delete', {
                        method: 'POST',
                        body: formData
                    });
                    let result = await response.json();
                };
            }
        },
        created() {

        },
        mounted() {
            let meds = this.meds()

        }
    }
</script>
