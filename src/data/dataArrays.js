export const categories = [
  {
    id: 3,
    name: 'Cookies',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Fri Food',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Fast Food',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Hot Drink',
    photo_url:
    'https://images.unsplash.com/photo-1503240778100-fd245e17a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 0,
    name: 'Cold Drink',
    photo_url: 'https://images.unsplash.com/photo-1543363950-c78545037afc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Snacks',
    photo_url: 'https://www.thehindubusinessline.com/companies/xe9fgw/article24454276.ece/ALTERNATES/LANDSCAPE_1200/BL19P3LAYS'
  },
];

export const recipes = [
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Fries',
    photo_url: 'https://feelgoodfoodie.net/wp-content/uploads/2019/10/Air-Fryer-Sweet-Potato-Fries-6.jpg',
    photosArray: [
      'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2018/04/Spicy-Baked-Sweet-Potato-Fries-Primavera-Kitchen-1.jpg',
      'https://dinnerthendessert.com/wp-content/uploads/2016/06/Crispy-Sweet-Potato-Fries-500x453.jpg',
      'https://www.thecomfortofcooking.com/wp-content/uploads/2013/10/CrispyBakedSweetPotatoFries-1-600x858.jpg'
      
    ],
    time: '25',
    price:'50',
    quantity: 1,
    ingredients: [
      [0],
      [40],
      [4],
      [67]
    ]
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Chicken Shawarma',
    photo_url: 'https://i.dlpng.com/static/png/4794098-shawarma-chicken-shawarma-png-transparent-png-570x570-free-shawarma-png-820_616_preview.png',
    photosArray: [
      'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/owk_3069_chicken_shawarma_horizontal_1.jpg',
      'https://www.wellplated.com/wp-content/uploads/2015/10/Slow-Cooker-Chicken-Shawarma-recipe.-A-garlic-yogurt-chicken-with-warm-spices-that-tastes-just-like-Greek-chicken-shawarma-but-less-work-600x759.jpg',
      'https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg',
      
    ],
    time: 25,
    price: 100,
    quantity: 1,
    ingredients: [
      [0], [1], [70], [19], [40], [69], [74]
    ]
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Chicken Burger',
    photo_url: 'https://i.pinimg.com/originals/5a/3c/68/5a3c68f374ce7f8b767e57ba89d4476e.jpg',
    photosArray: [
      'https://2.bp.blogspot.com/-BZcYbqzkD54/XGlFI-hbY-I/AAAAAAAAGSo/EzkYmprdvrA8dyMZYUKNi9yvbvlz3UvOACLcBGAs/s1600/Homemade%2BShami%2BBurger.jpg',
      'https://www.batoor.pk/wp-content/uploads/2019/10/shami-e1570432547556.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/17/00/d4/d2/photo2jpg.jpg'
    ],
    time: 25,
    price: 100,
    quantity: 1,
    ingredients: [
      [0], [1], [16], [19], [40], [69], [74]
    ]
  },
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Naan Khatai',
    photo_url: 'https://dailydukan.pk/wp-content/uploads/2018/09/bakeri-nankhatai-6-snack-packs-600x600.jpg',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX37XSetIkULsaO8EqyBp-TPzXfaOImweLPA&usqp=CAU',
      'https://lh3.googleusercontent.com/proxy/IsxZWr87BqWngyJ0_7WRfJrhAyGST1O4fCDiQTZ4TT9-yLjiWw3sZv_-wFL2slkjKzx8TGE8W8mflBObHnsFZtZ-ejdVbEzULx7326Xbg4zlqL_n_Os',
      'https://i.ndtvimg.com/i/2016-03/nankhatai-625_625x350_81459145289.jpg', 
    ],
    time: '15',
    price: '20',
    quantity: 1,
    ingredients: [[0], [1], [55], [12], [16], [42]]
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Tea',
    photo_url:
      'https://images.indianexpress.com/2020/03/teas_759.jpg',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQqWOM5PNIzxz2a4E5GUWqa0AzUDhVx4l6aQ&usqp=CAU',
      'https://ministryofcurry.com/wp-content/uploads/2015/12/ginger-tea-3.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsf2Lxq5mIoeHEqMX88xOZ9Z9em_W1Re95GQ&usqp=CAU'
    ],
    time: '10',
    price:'30',
    quantity: 1,
    ingredients: [
     [55],[62],[18]
    ],
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Sooper',
    photo_url: 'https://mir-s3-cdn-cf.behance.net/projects/404/afe8ab36697105.Y3JvcCwxNDEyLDExMDUsMTIwLDA.jpg',
    photosArray: [
      'https://www.pakistantribe.com/wp-content/uploads/2014/10/Sooper-Biscuit.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT70-nFKA7ODhVDrlOvT22Rz0rttI7xDmS6YQ&usqp=CAU',
      'https://s1.dmcdn.net/v/Ea9yq1M_sRth0wWoU/x1080'
    ],
    time: '15',
    price:'20',
    quantity: 1,
    ingredients: [
      [0,], [16], [12],[18], [55]
    ],
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Zeera Plus',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0136/8522/7574/products/lu-zeera-plus-biscuit-71-5-gm-13818852016182.png?v=1576743466',
    photosArray: [
      'https://www.continentalbiscuits.com.pk/home/zeera.jpg',
      'https://www.masala.tv/wp-content/uploads/2017/09/1-47.jpg',
      'https://i.ytimg.com/vi/3jW_cSofBhE/hqdefault.jpg'
    ],
    time: '15',
    price:'20',
    quantity: 1,
    ingredients:
     [
      [63], [64], [65], [16],[44]
    ],
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Rio',
    photo_url: 'https://tribune-reloaded.s3.amazonaws.com/media/images/1795754-image-1536135655/1795754-image-1536135655.png',
    photosArray: [
      'https://www.brandsynario.com/wp-content/uploads/2018/09/Peek-Freans-RIO.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiyw2_qMB2k4AcwrZTNyGjyvQd3WGaJ-do2g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT25cDjH_l7OLOovrk5Rhadarup2dYVNtW71g&usqp=CAU',
      ],
    time: '15',
    price:'20',
    quantity: 1,
    ingredients: [
      [0],[16],[12],[18],[55],[44],[64],[66]
    ]
  },
 
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Chicken Samosa',
    photo_url:
      'https://static.toiimg.com/photo/61050397.cms',
    photosArray: [
      'https://sifu.unileversolutions.com/image/en-SA/recipe-topvisual/2/1260-709/smoked-chicken-samosa-with-mango-chutney-50261565.jpg',
      'https://i.ytimg.com/vi/trdvyYvyuXI/maxresdefault.jpg',
      'https://images.herzindagi.info/image/2019/Oct/maggi-samosa-recipe-m.jpg',
    ],
    time: 25,
    price: 60,
    quantity: 1,
    ingredients: [
      [0], [1], [19], [35], [36], [37], [38], [67],[4],[68],[69],[70]
    ]
    },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Chicken Sandwich',
    photo_url:
      'https://www.clipartkey.com/mpngs/m/100-1002017_chicken-mayo-sandwich-png.png',
    photosArray: [
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/321B0566-0E4A-4961-98EA-FE365DB82587/Derivates/32452275-72d0-442d-933d-e11ff99a1761.jpg',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/08/egg-cress-club-sandwich.jpg',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/08/coronation-egg-mayo-sandwiches.jpg?itok=iz7i3wuy'
    ],
    time: 25,
    price: 60,
    quantity: 1,
    ingredients: [
        [0], [16], [70], [69], [61], [71], [72], [73]
    ]
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Big Apple',
    photo_url: 'https://pk.all.biz/img/pk/catalog/2660.jpeg',
    photosArray: [
      'https://murreebrewery.com/oldwebsite/images/1.jpg',
      'https://grozar.pk/wp-content/uploads/2019/09/Murree-Brewery-Big-Apple-Bottle-1.5L.jpg',
    ],
    time: '15',
    price: 100,
    quantity: 1,
    ingredients: [
      [18], [30], [74], [75]
  ]
  },
 
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Oil',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Salt',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Russet potatoes',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Black Pepper',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Celery salt',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Dried sage',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Garlic powder',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Ground allspice',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Dried oregano',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Dried basil',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Dried marjoram',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'All-purpose flour',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Brown sugar',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://www.wishtv.com/wp-content/uploads/2020/03/CROP-Eggs-hypatia-h_bcdda256340f68287a2e0ebced64dac0-h_b422392013797decae81d659f46ca31e.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'Milk',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Straberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
  {
    ingredientId: 62,
    name: 'Chai Patti',
    photo_url:
      'https://mly6rr6kzije.i.optimole.com/vZ68UyA.Sq9e~3828f/w:600/h:400/q:55/https://groceryplus.online/wp-content/uploads/2020/04/8baab537cfb13a515ea051b4cd3a74c8.jpg',
  },
  {
    ingredientId: 63,
    name: 'Wheat Flour',
    photo_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB_UB4cG1DbesXs4s7RRo2iRVv4P_4-gBf1Q&usqp=CAU',
  },
  {
    ingredientId: 64,
    name: 'Baking Powder',
    photo_url:'https://res.cloudinary.com/droz/image/upload/c_fill,f_auto,h_480,w_720/v1558214284/prod-store/Baking728x480.jpg?itok=VtLsgXKX',
  },
  {
    ingredientId: 65,
    name: 'Cumin Seeds',
    photo_url:'https://images-na.ssl-images-amazon.com/images/I/51WXn0g0duL.jpg',
  },
  {
    ingredientId: 66,
    name: 'Cream',
    photo_url:'https://www.spendwithpennies.com/wp-content/uploads/2014/05/How-to-Make-Whipped-Cream-SpendWithPennies-4.jpg',
  },
  {
    ingredientId: 67,
    name: 'Potatoes',
    photo_url:'https://thumbor.thedailymeal.com/zj3qNJ9k0uTZpTI4UpsQ4biRBek=/870x565/filters:focal(1060x707:1061x708)/https://www.thedailymeal.com/sites/default/files/story/2018/iStock-675072230.jpg',
  },
  {
    ingredientId: 68,
    name: 'green Coriander',
    photo_url:'https://orbis.pk/wp-content/uploads/2017/04/0000329_coriander-_550.jpeg',
  },
  {
    ingredientId: 69,
    name: 'Chicken',
    photo_url:'https://i.ytimg.com/vi/Hq2pavmew58/maxresdefault.jpg',
  },
{
  ingredientId: 70,
  name: 'Mayo',
  photo_url:'https://beetsandbluecheese.files.wordpress.com/2016/01/mayonnaise.jpg?w=760'
},
{
  ingredientId: 71,
  name: 'Corma Currey Paste',
  photo_url:'https://d34fwv6oip74zt.cloudfront.net/uploads/1471862988korma-spice-paste-290g.png'
},
{
  ingredientId: 72,
  name: 'Mango Chutney',
  photo_url:'https://www.liveeatlearn.com/wp-content/uploads/2018/08/mango-chutney-photo-6.jpg'
},
{
  ingredientId: 73,
  name: 'Sandwich Bread',
  photo_url:'https://www.wellfloured.com/wp-content/uploads/2019/04/easy-pullman-loaf.jpg'
},
{
  ingredientId: 75,
  name: 'Apple Cider vinegar',
  photo_url:'https://images-prod.healthline.com/hlcmsresource/images/AN_images/apple-cider-vinegar-weight-loss-732x549-thumbnail.jpg'
},
{
  ingredientId: 74,
  name: 'Buns',
  photo_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT9wafojAGT5D5ZvBasXw5BUfgkmXVL2xgEA&usqp=CAU'
},
];
