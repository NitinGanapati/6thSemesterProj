export async function GET(request) {
    const products =[
        {id:1,title:"Boat Earbuds",Desc:"Description here",price:1000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70"},
        {id:2,title:"Boat Headphnes",Desc:"Description here",price:2000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70"},
        {id:3,title:"Boat Speakers",Desc:"Description here",price:3000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70"},
        {id:4,title:"Jbl speaker",Desc:"Description here",price:4000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/z/c/-original-imagxp8tdxnqg2ze.jpeg?q=70"},
        {id:5,title:"JBL Earbuds",Desc:"Description here",price:5000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/z/c/-original-imagxp8tdxnqg2ze.jpeg?q=70"},
        {id:6,title:"Sony Speakers",Desc:"Description here",price:6000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/z/c/-original-imagxp8tdxnqg2ze.jpeg?q=70"},
        {id:7,title:"Sony Earbuds",Desc:"Description here",price:7000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/p/f/k/-original-imagkjtjgdzhgdz5.jpeg?q=70"},
        {id:8,title:"Micromax",Desc:"Description here",price:8000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/p/f/k/-original-imagkjtjgdzhgdz5.jpeg?q=70"},
        {id:9,title:"Vivo Earbuds",Desc:"Description here",price:9000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/x/t/-original-imagzw97x6rscy3p.jpeg?q=70"},
        {id:10,title:"Nirvana Earbuds",Desc:"Description here",price:10000,
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/x/t/-original-imagzw97x6rscy3p.jpeg?q=70"},
    ]
    return new Response(JSON.stringify(products),{  
        status:200
    })
}