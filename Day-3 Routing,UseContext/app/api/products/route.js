export async function GET(request){
    const products = 
        [
            {
                "id": 1,
                "title": "Boat Earbuds",
                "desc": "Wireless earbuds with immersive sound and long battery life.",
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1529KArRZck1UtA9wlJM6wMjz9i_rdx7qjUBIXGbv-qMnd6I6vvc8cLq02OgdRSYQhJ4fwn4cOrNbvUUAqwM94obg4ItevvbGzKOOyxSR8dJIIFsyXXKO7w"
            },
            {
                "id": 2,
                "title": "Sony Headphones",
                "desc": "Noise-canceling over-ear headphones for a premium audio experience.",
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBs2As8pqg3Te-ClggtWNEpDYJ6yKmXhgmdNFP8J5S04Ols6AW4FLA4JGUYcyC6f1E2eTeW_FN8p7NT3B-nVr1Zs7yhZwAVRnr6Q0IHysTJI70ZdpntMU7C3c"
            },
            {
                "id": 3,
                "title": "Apple AirPods Pro",
                "desc": "High-quality earbuds with active noise cancellation and spatial audio.",
                "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724041669458"
            },
            {
                "id": 4,
                "title": "Samsung Galaxy Buds",
                "desc": "Compact true wireless earbuds with seamless device connectivity.",
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNW267ugIQjN4X2Iy8OP3V41NLMBDp42QwCBkrPcxhwJTHPJ7Jxj3byFzj9ycppnRjBNmGWfyT6pxkPAyIBzbHfOWFcMPjgEcjtOzHKNvPOsfebk3AQIs1"
            }
        ]        
    
    return new Response(JSON.stringify(products),{
        status: 200
    })
}