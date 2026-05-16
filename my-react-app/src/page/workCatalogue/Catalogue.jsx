import { Key } from 'lucide-react'
import { useState } from 'react'
import ProductCard from '../../component/ui/ProductCard/ProductCard.jsx'
import './Catalogue.css'
import { button } from 'motion/react-client';



function Catalogue() {
    const [activeCat, setActiveCat] = useState('All');
    const Cats = ['All', 'Web', 'Mobile', 'AI', 'Automation'];
    const [sortBy, setSortBy] = useState("")
    const Products = [
        {
            key: 1, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 399.00,
            Desc: "POS-Invintory-Tables Mangment-Sales",
            categories: ['Web', 'Automation']
        },
        {
            key: 2, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 300.00,
            Desc: "POS-Invintory-Tables Mangment-Sales",
            categories: ['Web','Mobile']
        },
        {
            key: 3, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 700.00,
            Desc: "POS-Invintory-Tables Mangment-Sales",
            categories: ['Web','AI']
        },
        {
            key: 4, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 100.00,
            Desc: "POS-Invintory-Tables Mangment-Sales",
            categories: ['Web']
        },
        {
            key: 5, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 400.00,
            Desc: "POS-Invintory-Tables Mangment-Sales",
            categories: ['Mobile']
        },
        {
            key: 6, ImageSrc:
                ["https://i.postimg.cc/tgs2MG3z/sky.jpg", "https://i.postimg.cc/tgs2MG3z/sky.jpg",
                    "https://i.postimg.cc/tgs2MG3z/sky.jpg"],

            Title: "POS",
            Price: 400.00,
            Desc: "POS-Invintory-Tables Mangment-Sales",
            categories: ['Web', 'AI']
        },
    ]
    const getSortedFilteredProducts = () => {
        const filtered = Products.filter(
            (product) => activeCat === "All" || product.categories?.includes(activeCat));
        if (sortBy === "low-high") {
            return [...filtered].sort((a, b) => Number(a.Price) - Number(b.Price));
        }
        if (sortBy === "high-low") {
            return [...filtered].sort((a, b) => Number(b.Price) - Number(a.Price));
        }
        return filtered;
    };
    const sortedProduct = getSortedFilteredProducts()
    return (
        <div>
            <div className='catalog-header'>
                <h1 className="Title">Our <span className='highlight'>Product Catalog.</span></h1>
                <p className="subTitle">Browse our suite of premium digital solutions designed to empower your technology infrastructure.</p>
                <div className='catalog_nav_bar'>
                    <div className='catalog_nav_buttons'> 
                        {Cats.map((Cat) => (
                            <button key={Cat} className={`catalog_nav_button ${activeCat === Cat ? 'active' : ''} `}
                                onClick={() => setActiveCat(Cat)}>{Cat}</button>
                        ))}
                    </div>
                    <select
                        name="sort"
                        id="sort"
                        className="catalog_sort_dropdown"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Sort: Default</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="ProductContainer">
                {sortedProduct
                    .filter(product => activeCat === 'All'
                        || product.categories.includes(activeCat))

                    .map((product) => (
                        <ProductCard key={product.key} product={product} />
                    ))}
            </div>
        </div>
    )
}
export default Catalogue
