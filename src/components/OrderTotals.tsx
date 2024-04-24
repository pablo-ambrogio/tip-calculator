import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderActions, OrderState } from "../reducers/order-reducer";

type OrderTotalsProps = {
    state: OrderState;
    dispatch: React.Dispatch<OrderActions>;
};

export const OrderTotals = ({ state, dispatch }: OrderTotalsProps) => {
    const { order, tip } = state;

    const subTotal = useMemo(
        () =>
            order.reduce(
                (total, item) => total + item.quantity * item.price,
                0
            ),
        [order]
    );

    const tipAmount = useMemo(() => subTotal * tip, [tip, order]);

    const totalAmount = useMemo(() => subTotal + tipAmount, [tip, order]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                <p>
                    Subtotal a pagar:{" "}
                    <span className="font-bold">
                        {formatCurrency(subTotal)}
                    </span>
                </p>
                <p>
                    Propina:{" "}
                    <span className="font-bold">
                        {formatCurrency(tipAmount)}
                    </span>
                </p>
                <p>
                    Total a pagar:{" "}
                    <span className="font-bold">
                        {formatCurrency(totalAmount)}
                    </span>
                </p>
            </div>
            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={() => dispatch({ type: "reset-item" })}
            >
                Guardar Orden
            </button>
        </>
    );
};
