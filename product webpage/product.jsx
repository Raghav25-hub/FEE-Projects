import { useState } from "react";
import "./Product.css";

const productList = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSno5FOW8mmbflrblNRInRPoXRIEiAD6XiDfBgkTKzaX56ot1zF48SdS2bkExlqzJm7WmIYV5erMUy1m8hgliNlD9V-8lHzXeLAqzdN1KA9ktdQ4sgO-E7_",
        title: "Sony BRAVIA 2 4K Ultra HD Smart LED Google TV",
        price: "₹47,490–₹52,990",
    },
    {
        id: 2,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRPpOTJ-IXDzPJjgkhzqlXNKdLGnm1jbYOKV4AakL97C1M2cql8qn6R1J_e0B-ETUSfPiR8BkNWLt-JABnBNTf5tcC35V1DVhBhmhkOTw28xWxKkMXRNZhq2Q",
        title: "Philips 8100 Series 4K Ultra HD Smart QLED Google TV",
        price: "₹37,999–₹38,999",
    },
    {
        id: 3,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxrP1EYhHGXqIXel6HmudhLRS9BRZwyU90pf5PycFb44XcHXYO4fNBNBQYgqAU4PTRjL-6097vQYFB_TidS0Jyuj17YzW0UtOYOBN0h-78jxGQE_u6DXvr3E4",
        title: "Foxsky 55 inches 4K Ultra HD Smart LED TV",
        price: "₹23,999–₹29,499",
    },
    {
        id: 4,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJLQD3I13jyHlSQI3piFgtuInFDgRtx3usKAPx121kzlzQABdXtl0cICfac4HzFmnaExUZ1ANJf6ifg8wO1DlfCOGU5iG7dgrUAmgzo5JL",
        title: "TCL C6K 4K QD-Mini LED Google TV",
        price: "₹47,990–₹54,990",
    },
    {
        id: 5,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQM1hPe9x6jfuCasjSDCD6u3KH5vDcxH5vIVZ4blnbC9QVOa5tdZ6wMI_Nr9kqeetDcEPAZ3YwojRoBZvH_1axL8vPBWLNG0wKMWS_DcsVcwT-GNbXu3EZHJJQ",
        title: "Croma 80 cm Smart Linux TV",
        price: "₹9,900",
    },
    {
        id: 6,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRmeBTAMO4MzjcSx6I4Ive9d8M6ljMHoctvqGoF6QmCeq-uGFHW1pzL7HcZyYpBWx-2emw9Q8SheuO1Oz7TnOGHGJ_QWAj1Q",
        title: "LG Ai Qned65 Ultra Hd 4k Mini Led Smart Webos Tv 2026 Edition Dynamic Qned",
        price: "₹85,490–₹93,090",
    },
];

function Product() {
    // one count per product, starts at 0
    const [counts, setCounts] = useState(Array(productList.length).fill(0));

    const handleAdd = (index) => {
        setCounts((prev) =>
            prev.map((c, i) => (i === index ? c + 1 : c))
        );
    };

    const handleDelete = (index) => {
        setCounts((prev) =>
            prev.map((c, i) => (i === index ? Math.max(0, c - 1) : c))
        );
    };

    function handleclick(){
        k``
    }
    return (
        <div className="main">
            {productList.map((product, index) => (
                <div className="m1" key={product.id}>
                    <div className="m3">
                        <div className="img">
                            <img src={product.img} alt={product.title} />
                        </div>
                        <div className="description">
                            <h2>{product.title}</h2>
                            <p>Price : {product.price}</p>
                        </div>
                    </div>

                    <div className="btn">
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <span className="count">{counts[index]}</span>
                        <button onClick={() => handleAdd(index)}>Add</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
