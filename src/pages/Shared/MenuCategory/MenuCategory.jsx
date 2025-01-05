
import { Link } from 'react-router-dom';
import Cover from '../Cover/Cover';
import MenuItem from '../MenuItem/MenuItem';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='pt-10'>
           {title &&  <Cover img={coverImg} title={title} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/orderFood/${title}`} className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</Link>
        </div>
    );
};

export default MenuCategory;