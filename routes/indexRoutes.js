const   express         =require('express'),
        router          =express.Router();


router.get('/', (req,res)=>{
    res.render('home');
});

router.get('/cart', (req,res)=>{
    res.render('cart');
});

router.get('/checkout', (req,res)=>{
    res.render('checkout');
});

router.get('/product-details', (req,res)=>{
    res.render('product-details');
});

router.get('/sal', (req,res)=>{
    res.render('sal');
});

router.get('/esarp', (req,res)=>{
    res.render('esarp');
});

router.get('/kutu', (req,res)=>{
    res.render('kutu');
});

router.get('/aksesuar', (req,res)=>{
    res.render('aksesuar');
});



module.exports = router;