import { IProduct } from "../interfaces";
import { txtSlicer } from "../utilities/functions";
import Image from "./Image";
import Button from "./UI/Button";

interface IProp {
    product : IProduct
}

const ProductCard = ({ product }: IProp) => {
    const {id, title, description, imageURL, colors, price, category } = product
    return (
        <div className="flex flex-col border p-3 rounded-md max-w-sm md:max-w-lg mx-auto md:mx-0">
        <h3 className="mb-3">{title}</h3>
            <Image
                imageUrl={imageURL}
                alt={title}
                className="rounded-md"
            />
            
            <p className="mt-3">
                {txtSlicer(description)}
            </p>
            <div className="flex space-x-2 my-3">
                <span className="w-5 h-5 bg-orange-300 rounded-full cursor-pointer "/>
                <span className="w-5 h-5 bg-blue-800 rounded-full cursor-pointer "/>
                <span className="w-5 h-5  bg-black rounded-full cursor-pointer "/>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-xl">{price}</span>
                <Image
                    imageUrl={category.imageURL}
                    alt={category.name}
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <div className="flex space-x-2 mt-3">
                <Button className="bg-sky-400 text-white" width="w-full">Edit</Button>
                <Button className="bg-red-500 text-white" width="w-full">Delete</Button>
            </div>
        </div>
    );
};

export default ProductCard;
