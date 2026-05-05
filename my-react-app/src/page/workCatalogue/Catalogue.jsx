import { Key } from 'lucide-react'
import ProductCard from '../../component/ui/ProductCard/ProductCard.jsx'
import './Catalogue.css'



function Catalogue() {
    const Products = [
        {
            key: 1, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 400.00,
            Desc: "POS-Invintory-Tables Mangment-Sales"
        },
        {
            key: 2, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 400.00,
            Desc: "POS-Invintory-Tables Mangment-Sales"
        },
        {
            key: 3, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 400.00,
            Desc: "POS-Invintory-Tables Mangment-Sales"
        },
        {
            key: 4, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 400.00,
            Desc: "POS-Invintory-Tables Mangment-Sales"
        },
        {
            key: 5, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 400.00,
            Desc: "POS-Invintory-Tables Mangment-Sales"
        },
        {
            key: 6, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 400.00,
            Desc: "POS-Invintory-Tables Mangment-Sales"
        },
    ]
    return (
        <div>
            <div></div>
            <div className="ProductContainer">
                {Products.map((item) => (
                    <ProductCard key={item.key} product={item} />
                ))}
            </div>
        </div>
    )
}
export default Catalogue
