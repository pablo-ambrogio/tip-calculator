import { MenuItem, OrderItem } from "../types/index.ts";

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } }
    |
    { type: 'delete-item', payload: { id: MenuItem['id'] } }
    |
    { type: 'reset-item' }
    |
    { type: 'add-tip', payload: { value: number } }


export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
): OrderState => {
    if (action.type === 'add-item') {

        const itemExist = state.order.find(order => order.id === action.payload.item.id)

        let updateOrder: OrderItem[] = []

        if (itemExist) {

            updateOrder = state.order.map(orderItem =>
                orderItem.id === action.payload.item.id
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    :
                    orderItem
            )

        } else {
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
            updateOrder = [...state.order, newItem]
        }

        return {
            ...state,
            order: updateOrder
        }
    }

    if (action.type === 'delete-item') {

        const newItem = state.order.filter(item => item.id !== action.payload.id)

        return {
            ...state,
            order: newItem
        }
    }

    if (action.type === 'reset-item') {

        return initialState
    }

    if (action.type === 'add-tip') {

        return {
            ...state,
            tip: action.payload.value
        }
    }

    return state

}