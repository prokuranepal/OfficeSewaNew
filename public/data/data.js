export const cart = {
    name: 'cartItems',
    items: [
        { id: 1, name: 'Dell Laptop', quantity: 1, price: 10000 },
        { id: 2, name: 'Dell Laptop', quantity: 2, price: 10000 },

    ]
};

export const addressess = {
    items: [
        {
            firstName: 'Sajan',
            lastName: 'Amatya',
            companyName: "Atharva tech",
            streetAddress1: "Province 3",
            streetAddress2: "Lalitpur",
            city: "LALITPUR",
            cityArea: "",
            postalCode: "45600",
            country: {
                country: "Nepal",
                code: "NP"
            },
            isDefaultBillingAddress: true,
            isDefaultShippingAddress: false,
            countryArea: "",
            phone: "+9779841122040"
        },
        {
            firstName: 'Swain',
            lastName: 'Shrestha',
            companyName: "Asterisk Tech",
            streetAddress1: "Province 1",
            streetAddress2: "Morang",
            city: "BIRATNAGAR BAZAR",
            cityArea: "",
            postalCode: "45601",
            country: {
                country: "Nepal",
                code: "NP"
            },
            countryArea: "",
            phone: "+9779841122041",
            isDefaultBillingAddress: false,
            isDefaultShippingAddress: true,
        }
    ]
}