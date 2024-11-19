"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, initCounterState } from "@/store/counter/counterSlice";
import { init } from "next/dist/compiled/webpack/webpack";
import { useEffect } from "react";

interface Props {
    value?: number;
}

interface CounterResponse {
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch("/api/counter").then((res) => res.json());
    return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(initCounterState(value));
    // }, [dispatch, value]);

    useEffect(() => {
        getApiCounter().then((data) => {
            dispatch(initCounterState(data.count));
        });
    }, [dispatch]);

    return (
        <>
            <span className="text-9xl">{count}</span>

            <div className="flex">
                <button
                    onClick={() => dispatch(increment())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                >
                    +1
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                >
                    -1
                </button>
            </div>
        </>
    );
};
