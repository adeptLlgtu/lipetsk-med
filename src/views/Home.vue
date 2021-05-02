<template>
  <div class="home">
    <div class="content">
      <input
              placeholder="Поиск"
              class="search"
              type="search"
              v-model="search"
      >
      <div :id="med.id" @click="getFullMed" class="med-item" v-for="med in filteredMeds">
        <p class="med-item__id">{{ med.id }}</p>
        <p class="med-item__name">{{ med.meds_name }}</p>
        <p class="med-item__name">{{ med.price }}</p>
        <div :id="'sub-'+med.id" class="med-subitem">
          <div @click="closeSub" :id="'close-'+med.id" class="sub-close">
            <div class="sub-close__item"></div>
            <div class="sub-close__item"></div>
          </div>
          <div class="med-subitem__scroll">
            <p class="med-placeholder">Инвентарный номер</p>
            <p class="med-info">{{ med.id }}</p>
            <p class="med-placeholder">Название</p>
            <p class="med-info">{{ med.meds_name }}</p>
            <p class="med-placeholder">Количество на складе</p>
            <p class="med-info">{{ med.meds_many }}</p>
            <p class="med-placeholder">Противопазания</p>
            <p class="med-info">{{ med.meds_contraindications }}</p>
            <p class="med-placeholder">Побочные эффекты</p>
            <p class="med-info">{{ med.side_effects }}</p>
            <p class="med-placeholder">Форма препарата</p>
            <p class="med-info">{{ med.meds_form }}</p>
            <p class="med-placeholder">Состав</p>
            <p class="med-info">{{ med.meds_structure }}</p>
            <p class="med-placeholder">Инструкция к пременению</p>
            <p class="med-info">{{ med.meds_instruction }}</p>
            <p class="med-placeholder">Цена</p>
            <p class="med-info">{{ med.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      meds: [],
      search: ''

    }
  },
  methods:{
    getFullMed(e){
      let targetBlock = e.target
      if (targetBlock.className === 'med-item__id'){
        let targetParent = targetBlock.parentNode.id
        let subItem = targetParent.querySelector('#sub-'+targetParent)
        subItem.style.left = '0'
      }
      if (targetBlock.className === 'med-item__name'){
        let targetParent = targetBlock.parentNode
        let subItem = targetParent.querySelector('#sub-'+targetParent.id)
        subItem.style.left = '0'

      }
      if (targetBlock.className === 'med-item'){
        let subItem = targetBlock.querySelector('#sub-'+targetBlock.id)
        subItem.style.left = '0'
      }
    },
    closeSub(e){
      let targetBlock = e.target.parentNode.parentNode
      targetBlock.style.left = '-100%'
    }
  },
  created() {
    this.$http.get('http://apteka-api.loc/api/get:all/from:meds/id:all').then(function(data){
      this.meds = JSON.parse(JSON.stringify(data.body));
      console.log(data.body);
    })
  },
  computed:{
    filteredMeds(){
      return this.meds.filter((med)=>{
        return med.meds_name.match(this.search)
      })
    }
  },
  mounted() {

  }
}
</script>
