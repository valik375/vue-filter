var app = new Vue({
    el: '#app',
    data: {
        products: [
          {
            name: 'Man Nike Shoes',
            gender: 'Man',
            model: 'Shoes',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://i.insider.com/5e38419b5bc79c4c7d4e1192?width=906&format=jpeg',
          },
          {
            name: 'Woman Nike Shoes',
            gender: 'Woman',
            model: 'Shoes',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/06f36b7f-217a-446b-8ee3-0275366e2604/air-max-97-big-kids-shoe-fQk07c.jpg',
          },
          {
            name: 'Man Nike Shoes',
            gender: 'Man',
            model: 'Shoes',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://footwearnews.com/wp-content/uploads/2019/11/jordan-melo-m12-555088_062_a_prem-e1575044740922.jpg',
          },
          {
            name: 'Woman Nike Shoes',
            gender: 'Woman',
            model: 'Shoes',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://media.gq-magazine.co.uk/photos/5f2021ad0cf994bba567c374/master/w_1920,c_limit/20200728-nike-01.jpg',
          },
          {
            name: 'Man Nike T-short',
            gender: 'Man',
            model: 'Tshort',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c7843cc-449e-4be6-9deb-4eefd2007f28/sportswear-mens-t-shirt-Xjt6LN.jpg',
          },
          {
            name: 'Woman Nike T-short',
            gender: 'Woman',
            model: 'Tshort',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://www.footasylum.com/images/products/medium/4034168.jpg',
          },
          {
            name: 'Man Nike T-short',
            gender: 'Man',
            model: 'Tshort',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-17b5b8ae-c1ae-4ffa-a292-5c3022a46e5c/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-sportswear-t1RKr0.jpg',
          },
          {
            name: 'Woman Nike T-short',
            gender: 'Woman',
            model: 'Tshort',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/089c893b-56e3-4a85-af1b-7e9a2da79362/sportswear-older-t-shirt-C7Cc7J.jpg',
          },
          {
            name: 'Man Nike Pants',
            gender: 'Man',
            model: 'Pants',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/eecb8a7d-db83-4e0f-b5f2-406f5fcf9469/sportswear-nsw-mens-woven-pants-hGH6Pg.jpg',
          },
          {
            name: 'Man Nike Pants',
            gender: 'Man',
            model: 'Pants',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/064ebc90-ec87-4dd2-8861-991970cd6ed2/therma-mens-basketball-pants-2Xm3KD.jpg',
          },
          {
            name: 'Woman Nike Pants',
            gender: 'Woman',
            model: 'Pants',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ff08c040-c2a6-472c-8a96-72e44f2893cb/sportswear-essential-womens-fleece-pants-71n1Qq.jpg',
          },
          {
            name: 'Woman Nike Pants',
            gender: 'Woman',
            model: 'Pants',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5cf67d00-d028-426a-a721-1a93167e4a50/vapor-select-big-kids-boys-baseball-pants-nqGfTr.jpg',
          },
          {
            name: 'Man Nike Hoodie',
            gender: 'Man',
            model: 'Hoodie',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://yessport.com.ua/rus_pl_%D0%A5%D1%83%D0%B4%D0%B8-NIKE-HOODIE-FLEECE-TEAM-CLUB-19-AJ1313-010-27145_1.jpg',
          },
          {
            name: 'Woman Nike Hoodie',
            gender: 'Woman',
            model: 'Hoodie',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://i8.rozetka.ua/goods/16991279/nike_193655026843_images_16991279313.jpg',
          },
          {
            name: 'Man Nike Hoodie',
            gender: 'Man',
            model: 'Hoodie',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://soccer-shop.com.ua/imgs/bg38240.jpg',
          },
          {
            name: 'Woman Nike Hoodie',
            gender: 'Woman',
            model: 'Hoodie',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sequi ipsum?',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/phvts6a0rp6q2umk3eoj/%D1%84%D0%BB%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D1%8F-%D1%85%D1%83%D0%B4%D0%B8-sportswear-essential-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B5-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B-jhw2Fw.jpg',
          }
        ],
        selected: 'All',
        filteredItems: [],
        newFilteredItems: [],
        inputValue: '',
        shoes: false,
        tshort: false,
        pants: false,
        hoodie: false,
    },
    methods:{
      click(array){
        this.newFilteredItems = array

        this.filteredItems = []

        if(this.shoes === true){
          this.newFilteredItems.filter(item => {
            if(item.model === 'Shoes'){
              return this.filteredItems.push(item)
            }
          })
        }
        if(this.tshort === true){
          this.newFilteredItems.filter(item => {
            if(item.model === 'Tshort'){
              return this.filteredItems.push(item)
            } 
          })
        }
        if(this.pants === true){
          this.newFilteredItems.filter(item => {
            if(item.model === 'Pants'){
              return this.filteredItems.push(item)
            } 
          })
        }
        if(this.hoodie === true){
          this.newFilteredItems.filter(item => {
            if(item.model === 'Hoodie'){
              return this.filteredItems.push(item)
            } 
          })
        }
      },
      clickSth(){
        if(this.filteredItems.length){
          this.click(this.filteredItems)
        } else {
          this.click(this.products)
        }
      },
      inputSearch(event){
        this.inputValue = event.target.value
        this.filteredItems = [] 

        this.products.filter(item => {

          if(item.name.toUpperCase().indexOf(this.inputValue.toUpperCase()) !== -1){
            this.filteredItems.push(item)
          }
          
        }) 
      },
      filteredByGender(){
        this.filteredItems = []
        this.products.map(item => {
          if(item.gender === this.selected){
            this.filteredItems.push(item)
          }
        })
      }
    },
    computed:{
      filterProducts(){
        if(this.filteredItems.length){
          return this.filteredItems
        } else {
          return this.products
        }
      }
    }
})