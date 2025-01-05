

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <figure>
                <img
                    src={image}
                    alt="food" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;