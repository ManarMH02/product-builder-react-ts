

export const productValidation = (product: { title: string, description: string, imageURL: string, price: string }) => {

    const errors: { title: string, description: string, imageURL: string, price: string } = {
        title: "",
        description: "",
        imageURL: "",
        price: "",
    };

    const validUrl = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/i.test(product.imageURL);

    // if a string contains only whitespace, theString.trim() will return "", which is falsy
    if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Title must be between 10 and 80 characters!"
    }

    if (!product.description.trim() || product.description.length < 10 || product.description.length > 900) {
        errors.description = "Description must be between 10 and 900 characters!"
    }

    if (!product.imageURL.trim() || !validUrl) {
        errors.imageURL = "Please, Provide a valid image URL!"
    }

    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "Valid price is required!"
    }

    return errors
}