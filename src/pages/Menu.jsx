import { Helmet } from "react-helmet-async";
import dessertImg from '../../src/assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../src/assets/menu/pizza-bg.jpg';
import saladImg from '../../src/assets/menu/salad-bg.jpg';
import soupImg from '../../src/assets/menu/soup-bg.jpg';

import useMenu from "../assets/hook/menuHook";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MenuCategory from "./Shared/MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <div>
                <Helmet>
                    <title>Bistro Boss | Menu</title>
                </Helmet>
                
            </div>
            {/* main cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>        
            {/* offerd */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory 
            items={pizza}
            title={'pizza'}
            coverImg={pizzaImg}
             ></MenuCategory>
            <MenuCategory items={dessert} title={'dessert'} coverImg={dessertImg}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} coverImg={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;