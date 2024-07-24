import { IFormInput, IProduct } from "../interfaces";

export const productList:IProduct[] = [ 
    {
        id: "1",
        title: "Product one",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis repellendus maxime delectus quia dolor nobis numquam velit, id animi atque eos pariatur voluptatum suscipit voluptates. Doloribus pariatur tempora debitis quis!",
        imageURL: "https://picsum.photos/640/480",
        price: "300$",
        colors: ["black", "blue"],
        category: {
            name: "category 1",
            imageURL:"https://picsum.photos/640/480",
        }
    },
    {
        id: "2",
        title: "Product two",
        description: "Nam porta vitae augue ut viverra. Aenean non commodo velit. Vestibulum dui mauris, pharetra eu pulvinar in, porta a tortor. Donec mattis diam sed arcu sollicitudin sodales. Donec in scelerisque ipsum, quis dictum nisl. Aliquam pharetra rhoncus diam",
        imageURL: "https://picsum.photos/640/480",
        price: "480$",
        colors: ["black", "blue"],
        category: {
            name: "category 2",
            imageURL:"https://picsum.photos/640/480",
        }
    },
    {
        id: "3",
        title: "Product three",
        description: "Cras fringilla, nunc id suscipit luctus, nunc magna accumsan velit, quis gravida velit turpis ut mi. Morbi blandit semper metus et congue. In sit amet eros mattis magna laoreet posuere. Proin egestas turpis est, in convallis urna condimentum quis. Praesent consequat pellentesque turpis at blandit. Nunc semper laoreet magna, eu lobortis lacus. Vivamus maximus ves",
        imageURL: "https://picsum.photos/640/480",
        price: "300$",
        colors: ["black", "blue"],
        category: {
            name: "category 1",
            imageURL:"https://picsum.photos/640/480",
        }
    },
    {
        id: "4",
        title: "Product four",
        description: "Cras fringilla, nunc id suscipit luctus, nunc magna accumsan velit, quis gravida velit turpis ut mi. Morbi blandit semper metus et congue. In sit amet eros mattis magna laoreet posuere. Proin egestas turpis est, in convallis urna condimentum quis. Praesent consequat pellentesque turpis at blandit. Nunc semper laoreet magna, eu lobortis lacus. Vivamus maximus ves",
        imageURL: "https://picsum.photos/640/480",
        price: "300$",
        colors: ["black", "blue"],
        category: {
            name: "category 1",
            imageURL:"https://picsum.photos/640/480",
        }
    },
]

export const formInputsList:IFormInput[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text",
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "text",
    },
    {
        id: "imageURL",
        name: "imageURL",
        label: "Product imageURL",
        type: "text",
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text",
    },
]
