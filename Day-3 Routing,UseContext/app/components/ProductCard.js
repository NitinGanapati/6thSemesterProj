import { useContext } from "react"
import { useRouter } from "next/navigation"
import { ecomContext } from "../contexts/EcomContext"

export default function ProductCard({id,title,desc,img}){
    const { cart,addProductToCart,removeProductFromCart } = useContext(ecomContext)
    const router = useRouter()
    return (
        <div className="w-[200px] h-[300px] bg-gray-100 rounded shadow-lg">
            <img src={img} width={100} height={150}/>
            <br />
            <p className="font-bold text-lg">{title}</p>
            <p className="font-medium text-md">{desc}</p>
            <button
             onClick={(event)=> {
                    addProductToCart({
                        title:title,
                        desc:desc,
                        img:img,
                        id:id
                    })
                  //  router.push('/cart')
             }}
            className="
            bg-blue-500
             text-white
             p-3
             rounded-full
             shadow
             m-2
              font-bold">Cart</button>
               <button
             onClick={(event)=> {
                removeProductFromCart({
                        title:title,
                        desc:desc,
                        img:img,
                        id:id
                    })
             }}
            className="
            bg-blue-500
             text-white
             p-3
             rounded-full
             shadow
             m-2
              font-bold">Delete</button>
            <button className="
            p-3
            bg-red-400
            rounded-full
            shadow
            m-2
             text-white
              font-bold">Favourite</button>

        </div>
    )

}