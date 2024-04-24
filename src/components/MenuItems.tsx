import { OrderActions } from "../reducers/order-reducer";
import { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem;
    dispatch: React.Dispatch<OrderActions>;
};

export const MenuItems = ({ item, dispatch }: MenuItemProps) => {
    return (
        <button
            className="border-2 border-teal-400 hover:bg-teal-200 rounded-md w-full p-3 flex justify-between"
            onClick={() =>
                dispatch({ type: "add-item", payload: { item: item } })
            }
        >
            <p>{item.name}</p>
            <p>{item.price}</p>
        </button>
    );
};
