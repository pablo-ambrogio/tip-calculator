import { tipOptions } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";

type TipPercentageFormProps = {
    tip: number;
    dispatch: React.Dispatch<OrderActions>;
};

export const TipPercentageForm = ({
    tip,
    dispatch,
}: TipPercentageFormProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">Propinas</h3>

            <form action="">
                {tipOptions.map((tipOption) => (
                    <div className="flex gap-2" key={tipOption.id}>
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            type="radio"
                            id={tipOption.id}
                            name={"tip"}
                            value={tipOption.value}
                            onChange={(e) =>
                                dispatch({
                                    type: "add-tip",
                                    payload: { value: +e.target.value },
                                })
                            }
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    );
};
