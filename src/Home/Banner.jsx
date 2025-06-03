import { useState } from "react";
import productData from "../products.json"
import { Link } from "react-router-dom";

    const title = <h2>Search Your One From <span>Thousand</span> of Products</h2>;
    const desc = "We have largest collection of products";
    const bannerList = [
{
iconName: "icofont-users-alt-4",
text: "1.5 Million Customers",
},
{
iconName: "icofont-notification",
text: "More then 2000 Marchent",
},
{
iconName: "icofont-globe",
text: "Buy Anything Online",
},
];



function Banner() {
    const [searchInput,setSearchInput] = useState("")
    const [filteredProducts,setFilteredProducts] = useState(productData)
    

    //Search functionality
    const searchHandler = (e) =>{ 
        const searchTerm = e.target.value
        setSearchInput(searchTerm)

        //filltering products based on search
        const filtered = productData.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setFilteredProducts(filtered)
    }

  return (
    <div className="banner-section style-4">
        <div className="container">
            <div className="banner-content">
                {title}
                <form>
                    <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Search your product"
                    value={searchInput}
                    onChange={searchHandler}
                    />
                    <button type="submit">
                        <i className="icofont-search"></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul className="lab-ul">
                    {searchInput && filteredProducts.map((product,i)=>
                    <li key={i}>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner