import Cover from "../Shared/Cover/Cover";
import coverOrder from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../assets/hook/menuHook";
import OrderTab from "./OrderTab";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    const pizza = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <Cover img={coverOrder} title={'Order Food'}></Cover>
            <Tabs >
                <TabList defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>

                <TabPanel>
                   <OrderTab items={salad} ></OrderTab>
                </TabPanel>

                <TabPanel>
                   <OrderTab items={pizza} ></OrderTab>
                </TabPanel>

                <TabPanel>
                   <OrderTab items={soup} ></OrderTab>
                </TabPanel>

                <TabPanel>
                   <OrderTab items={dessert} ></OrderTab>
                </TabPanel>

                <TabPanel>
                   <OrderTab items={drinks} ></OrderTab>
                </TabPanel>
               
            </Tabs>
        </div>
    );
};

export default Order;