export const addItemToCart = (count: number) => ({
	type: 'ADD_ITEM_TO_CART',
	payload: {count: count},
})
