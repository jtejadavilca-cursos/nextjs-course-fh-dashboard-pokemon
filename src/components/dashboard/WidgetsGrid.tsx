"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
    const count = useAppSelector((state) => state.counter.count);

    return (
        <div className="flex flex-wrap p-2">
            <SimpleWidget
                title="Cart"
                subTitle="Products in cart"
                label={`Count: ${count}`}
                icon={<IoCartOutline size={70} />}
                href="counter"
            />
        </div>
    );
};
