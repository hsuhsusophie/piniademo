const { defineStore } = Pinia;

export default defineStore('productsStore',{
    //data, methods, computed
    //state, actions, getters
    state: () => ({
        products: [
            {
                id: 1,
                title: '	Blend Coffee-招牌咖啡',
                imageUrl: 'https://caffecorsini.com/cdn/shop/articles/Immagine_come_preparare_il_caffe_all_Americana.jpg?v=1695982216&width=2048',
                price: 180
            },
            {
                id: 2,
                title: 'Americano-美式咖啡',
                imageUrl: 'https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                price: 180
            },
            {
                id: 3,
                title: 'Espresso coffee-濃縮咖啡',
                imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2023/03/TOH-espresso-GettyImages-1291298315-JVcrop.jpg',
                price: 160,
            },
            {
                id: 4,
                title: 'Cappuccino-卡布奇諾',
                imageUrl: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                price: 220
            },
            {
                id: 5,
                title: 'Coffee latte-拿鐵咖啡',
                imageUrl: 'https://static.tildacdn.com/tild3534-3735-4536-b333-383730623731/Cafe_Latte.jpg',
                price: 220
            },
            {
                id: 6,
                title: 'Coffee mocha-摩卡咖啡',
                imageUrl: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                price: 220
            },
            {
                id: 7,
                title: 'Soymilk coffee lattee-豆奶拿鐵',
                imageUrl: 'https://t4.ftcdn.net/jpg/07/12/96/23/360_F_712962319_wCW7EIdnBmYLmRzmSRayiu5ycG52rS5J.jpg',
                price: 220
            },
            {
                id: 8,
                title: 'Royal milk tea-皇家奶茶',
                imageUrl: 'https://asianinspirations.com.au/wp-content/uploads/2020/07/R02665_Hot_Thai_Milk_Tea.jpg',
                price: 180
            },
            {
                id: 9,
                title: 'Uji matcha latte-宇治抹茶拿鐵',
                imageUrl: 'https://images.pexels.com/photos/12201274/pexels-photo-12201274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                price: 200
            },
            {
                id: 10,
                title: 'Cocoa-可可',
                imageUrl: 'https://s3.images-iherb.com/blog/uploads/hot-cocoa-an-unexpected-post-workout-superfood-large.jpg',
                price: 180
            },
            {
                id:11,
                title: 'Orange juice-鮮橙汁',
                imageUrl: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/05/orange-juice-scaled.jpg',
                price: 220
            },
            {
                id: 12,
                title: 'Fresh milk- 鮮奶',
                imageUrl: 'https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1643983013/BW%20BLOG/Untitled-design---2022-02-04T192644.467_11zon.jpg',
                price: 220
            },
            {
                id: 13,
                title: 'Plain butter Croissant-牛油可頌',
                imageUrl: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                price: 120
            },
            {
                id: 14,
                title: 'Roast beef Croissant Sandwich-牛肉可頌三明治',
                imageUrl: 'https://images.pexels.com/photos/7390/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                price: 180
            },
            {
                id: 15,
                title: 'Soufflé-舒芙蕾',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcKIgl4uVJK165d9ybh7Yk_5RG1lOe9tq8g&usqp=CAU',
                price: 160
            }
        ]
    }),
    getters:{
        sortProducts: ( { products } ) => {
            return products.sort( (a,b) => a.price - b.price ); //價格倆倆比對 從小到大
        }
    }
})