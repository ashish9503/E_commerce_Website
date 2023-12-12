export const initialState = {
    basket: [],
    user: null,
    products: [
        {
            id: 12321341,
            title: "Eco-friendly IP66 street light with LED",
            price: 800,
            rating: 5,
            image: "l1.jpeg",
            vendor_name : "BrightBazaar"
        },
        {
            id: 49538094,
            title: "AC 9watt LED Bulb (White)",
            price: 100,
            rating: 4,
            image: "l2.jpeg",
            vendor_name : "RadiantCorner"

        },
        {
            id: 4903850,
            title: "0.5W RAINBOW LED LAMP",
            price: 15.0,
            rating: 4,
            image: "l3.jpeg",
            vendor_name : "GleamHaven"
        },
        {
            id: 23445930,
            title: "AC DC 9watt 12v LED Bulb (White)",
            price: 150,
            rating: 4,
            image: "l4.jpeg",
            vendor_name : "LuminaireHub"
        },
        {
            id: 3254354345,
        title: "AC DC 12watt 12v LED Bulb (White)",
            price: 250,
            rating: 4,
            image: "l4.jpeg",
            vendor_name : "BrightBazaar"
        },
        {
            id: 90829332,
            title: "DOM BULB 30W",
            price: 500,
            rating: 4,
            image: "https://rukminim2.flixcart.com/image/416/416/xif0q/bulb/6/h/a/2-30w-dome-bulb-pack-of-2-new-india-lighting-original-imagnuzphzmuw3ja.jpeg?q=70",
            vendor_name : "RadiantCorner"
        },


        {
            id: 90829322,
            title: "FAN Light 20W",
            price: 200,
            rating: 4,
            image: "https://5.imimg.com/data5/ANDROID/Default/2022/9/XP/FF/OP/28056775/product-jpeg-500x500.jpg",
            vendor_name : "GleamHaven"
        },

        {
            id: 90829332,
            title: "FLOD LIGHT 100W",
            price: 999,
            rating: 4,
            image: "https://surya.co.in/wp-content/uploads/2022/03/FLOOD-LIGHT-2-600x600-1.png",
            vendor_name : "LuminaireHub"
        },

      
        {
            id: 90829332,
            title: " 10W LED Tube Light ",
            price: 200,
            rating: 4,
            image: "https://rukminim2.flixcart.com/image/416/416/xif0q/tube-light/n/s/c/-original-imagrzvk2ykga6yq.jpeg?q=70",
            vendor_name : "BrightBazaar"
        },

    ]
}

// selector
export const getBasketTotal = (basket) =>
    basket?.reduce((acc, item) => acc + item.price, 0)

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in the basket! `
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
};

export default reducer;