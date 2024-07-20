import Image from "./Image";
import Button from "./UI/Button";

// interface IProp {

// }

const ProductCard = () => {
    return (
        <div className="flex flex-col border p-3 rounded-md">
            <h3 className="mb-3">Product title</h3>
            <Image
                imageUrl="https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="product name"
                className="rounded-md"
            />
            <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quod vel
                esse quibusdam? Dolore, porro.
            </p>
            <div className="flex space-x-2 my-3">
                <span className="w-5 h-5 bg-orange-300 rounded-full cursor-pointer "/>
                <span className="w-5 h-5 bg-blue-800 rounded-full cursor-pointer "/>
                <span className="w-5 h-5  bg-black rounded-full cursor-pointer "/>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-xl">300$</span>
                <Image
                    imageUrl="https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="electronics"
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <div className="flex space-x-2 mt-3">
                <Button className="bg-sky-400" width="w-full">Edit</Button>
                <Button className="bg-red-500" width="w-full">Delete</Button>
            </div>
        </div>
    );
};

export default ProductCard;
