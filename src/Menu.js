import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import menu1 from './assets/images/menu/thengai papii.jpg';
import menu2 from './assets/images/menu/ell-urundai.png';
import menu3 from './assets/images/menu/rava laddu.jpg';
import menu4 from './assets/images/menu/nilakadalai urundai.jpeg';
import menu5 from './assets/images/menu/thenai mixere.png';
import menu6 from './assets/images/menu/snacks3.png';
import menu7 from './assets/images/menu/karuppu kavuni.jpg';
import menu8 from './assets/images/menu/mappilai samba.png';
import menu9 from './assets/images/menu/seraga samba.png';
import menu10 from './assets/images/menu/navarasa.jpg';
import menu11 from './assets/images/menu/irungu-cholam.png';
import menu12 from './assets/images/menu/sivappu-cholam.png';
import menu13 from './assets/images/menu/manjal-cholam.png';
import menu14 from './assets/images/menu/pachai payaru.jpg';
import menu15 from './assets/images/menu/adai.png';
import menu16 from './assets/images/menu/appam.png';



import menu17 from './assets/images/menu/mappilai samba.png';

function Menu() {
    const [filter, setFilter] = useState('all');

    const menuData = [
        {id: 1, heading: "தேங்காய்  பர்பி ", price: "$10", subtitle: "நாட்டு சக்கரை ", img: menu1, category: "Sweets"},
        {id: 2, heading: "எள் உருண்டை", price: "$10", subtitle: "பனங்கருப்பட்டி + உரலில் இடித்தது ", img: menu2, category: "Sweets"},
        {id: 3, heading: "ரவா லட்டு", price: "$10", subtitle: "நாட்டு சக்கரை", img: menu3, category: "Sweets"},
        {id: 4, heading: "நிலக்கடலை உருண்டை", price: "$10", subtitle: "நாட்டு சக்கரை", img: menu4, category: "Snacks"},
        {id: 5, heading: "திணை மிக்சர்", price: "$10", subtitle: "திணை", img: menu5, category: "Snacks"},
        {id: 6, heading: "ரிப்பன் முறுக்கு", price: "$10", subtitle: "திணை", img: menu6, category: "Snacks"},
        {id: 7, heading: "கருப்பு கவுனி", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu7, category: "Dosa flour"},
        {id: 8, heading: "மாப்பிள்ளை சம்பா", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu8, category: "Dosa flour"},
        {id: 9, heading: "சீரகச்சம்பா", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu9, category: "Dosa flour"},
        {id: 10, heading: "நவரா அரிசி", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu10, category: "Dosa flour"},
        {id: 11, heading: "இருங்கு சோளம்", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu11, category: "Dosa flour"},
        {id: 12, heading: "சிவப்புச்சோளம்", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu12, category: "Dosa flour"},
        {id: 13, heading: "மஞ்சள் சோளம்", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu13, category: "Dosa flour"},
        {id: 14, heading: "பச்சைப்பயறு", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu14, category: "Dosa flour"},
        {id: 15, heading: "அடை மாவு", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu15, category: "Dosa flour"},
        {id: 16, heading: "ஆப்பம் மாவு ", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu16, category: "Dosa flour"},
        {id: 17, heading: "பூங்கார்  ", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்து", img: menu17, category: "Dosa flour"},
    ];

    const filteredMenuData = filter === 'all' ? menuData : menuData.filter(item => item.category === filter);

    return (
        <section className="bg-04" id="our-menu">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading">
                            <span style={{fontSize:"40px",fontWeight:"bold"}}>Menu</span>
                            <h2>Explore Our Best Menu</h2>
                            <p>
                            Indulge in the rich flavors of our traditional Rava Laddu, made with pure organic ingredients. Each bite transports you to the heart of India, blending the sweetness of natural country sugar with the aromatic essence of roasted semolina. Perfect for celebrating special moments or enjoying a nostalgic treat.
                            </p>
                        </div>
                        <div className="filter-buttons" align="center">
                            <button
                                className={`btn btn-default filter-button ${filter === 'all' ? 'active btn-outline-warning' : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All
                            </button>
                            <button
                                className={`btn btn-default filter-button ${filter === 'Sweets' ? 'active btn-outline-warning' : ''}`}
                                onClick={() => setFilter('Sweets')}
                            >
                             இனிப்புகள்
                            </button>
                            <button
                                className={`btn btn-default filter-button ${filter === 'Dosa flour' ? 'active btn-outline-warning' : ''}`}
                                onClick={() => setFilter('Dosa flour')}
                            >
                             மாவு வகைகள் 
                            </button>
                            <button
                                className={`btn btn-default filter-button ${filter === 'Snacks' ? 'active btn-outline-warning' : ''}`}
                                onClick={() => setFilter('Snacks')}
                            >
                              சிற்றுண்டிகள் 
                            </button>
                            
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            {filteredMenuData.map((item, index) => (
                                <div className="col-md-4 col-sm-6" key={index}>
                                    <div className="wrapper">
                                        <div className="tab-content">
                                            <figure>
                                                <img src={item.img} alt='img' />
                                            </figure>
                                            <div className="sentence">
                                                <h3>
                                                    {item.heading}<span>{item.price}</span>
                                                </h3>
                                                <h6><strong>குறிப்பு : </strong>{item.subtitle}</h6>
                                                {/* <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Repellendus unde fuga saepe accusantium hic iusto qui
                                                </p> */}
                                            </div>
                                            <div className="rate-box">
                                                <ol>
                                                    <li>
                                                        <span className="flaticon-star"><FaStar /></span>
                                                    </li>
                                                    <li>
                                                        <span className="flaticon-star"><FaStar /></span>
                                                    </li>
                                                    <li>
                                                        <span className="flaticon-star"><FaStar /></span>
                                                    </li>
                                                    <li>
                                                        <span className="flaticon-star"><FaStar /></span>
                                                    </li>
                                                </ol>
                                                <div className="plus">
                                                <a href="https://wa.me/7010652833" target='blank'>
                                                        <span className="flaticon-plus"><AiOutlineShop style={{fontSize:"40px",fontWeight:"bold",color:"black"}} /> </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
