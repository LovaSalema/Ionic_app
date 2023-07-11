import {PropsWithChildren, useContext, useEffect, useState } from "react";
import React from "react";
interface ContextType {
    data: object[],
    updateData: (newProfit: number)=>void,
    isRunning: boolean,
    setRunning: ()=>void
}
const InitialState: ContextType = {
    data: [{ profit: 0}],
    updateData: ()=>{},
    isRunning: false,
    setRunning: ()=>{}
}
const MineContext =React.createContext(InitialState);
type ContainerProps ={
    children: React.ReactNode;
}
const MineProvider=({children}: ContainerProps)=>{
   
    const [isRunning, setIsRunning]=useState<boolean>(false);
    const [data, setData]=useState([{profit:0}]);

    const setRunning=()=>{
        setIsRunning(!isRunning)
    }

    const updateData =(newProfit: number)=>{
        setData((data)=>[...data, {profit: newProfit}])
    }

useEffect(()=>{
        setData(data)
},[data])

    return(
        <MineContext.Provider value={{
            data,
            updateData,
            isRunning,
            setRunning
        }}>
        {children}
        </MineContext.Provider>
    );
}
const useGlobalContext=()=>{
    return useContext(MineContext);
}
export {MineContext, MineProvider, useGlobalContext};