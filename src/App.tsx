import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/UI/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/UI/ErrorMsg";

function App() {
  const emptyProduct: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  // ------STATE--------
  const [isOpen, setIsOpen] = useState(false);

  const [product, setProduct] = useState<IProduct>(emptyProduct);
  const { title, price, description, imageURL } = product
  
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: ""
  })


  // ------Handlers------
  function openModel() {
    setIsOpen(true);
  }
  function closeModel() {
    setIsOpen(false);
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    setErrors({...errors, [name]:""})
  };

  const onCancel = () => {
    setProduct(emptyProduct);
    closeModel();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = productValidation({
      title: title,
      description: description,
      imageURL: imageURL,
      price: price
    })

    const hasErrorMsg= Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "")
    if (!hasErrorMsg) {
      setErrors(errors)
      return;
    }
    
    console.log(errors)
    console.log(product);
    
  };

  // ------RENDER-------
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputsList = formInputsList.map((input) => (
    <div className="flex flex-col mb-3" key={input.id}>
      <label htmlFor={input.id} className="">
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      ></Input>
      <ErrorMsg msg={errors[input.name]}/>
    </div>
  ));

  return (
    <main className="container mx-auto">
      <Button
        onClick={openModel}
        className="mt-5 px-20 block mx-auto bg-sky-500 text-white "
        width="w-fit"
      >
        Add Product
      </Button>
      <div className="p-10 flex flex-col gap-3 md:flex-row md:gap-4">
        {renderProductList}
        <Model title="Add a Product" closeModel={closeModel} isOpen={isOpen}>
          <form action="" onSubmit={submitHandler}>
            {renderFormInputsList}
            <div className="mt-5 flex space-x-2">
              <Button className="bg-sky-500 text-white" width="w-full">
                ADD
              </Button>
              <Button
                className="bg-slate-50 border border-gray-400 text-gray-500"
                width="w-full"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Model>
      </div>
    </main>
  );
}

export default App;
