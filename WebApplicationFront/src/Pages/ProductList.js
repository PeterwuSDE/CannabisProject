import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import "../css/ProductList.css";

export default function ProductList() {
    return (
        <div className="productlist">
            <div className="Header">  
                    <FontAwesomeIcon className="IconHeader" icon= {['fas', 'bars']} size="2x"/>
                    <p className="TextHeader">DCRP</p>
            </div>
            <div className="product-buttons">
                <Link to="addproduct">
                    <button className="add-product-box">
                        <h2>Add Cannabis Product</h2>
                    </button>
                </Link>
                <button className="product-list-box">
                    <h2>List of Cannabis Products</h2>
                </button>
                <hr/>
            </div>
            <div className="list-section">
                <div className="list-item__container">
                    <h2 className="item-type">Orals</h2>
                    <h3 className="item-subtype">Edibles</h3>
                    <div className="item-chemo-type">
                        <h3 className="item-thc">THC 96%</h3> <h3 className="item-cbd">CBD 0%</h3>
                    </div>
                </div>

                <hr/>
            </div>    
        </div>
    )
}


