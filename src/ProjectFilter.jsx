import React, { useState } from "react";
import { filters } from "./data.js";

export function ProjectFilter({activeFilter, setActiveFilter}) {

    return (
        <>
            <div className="filters-list">
                {filters.map((item, index) => (
                    <button
                        key={item}
                        className={`button-filter ${activeFilter == item && "active"}`}
                        onClick={() =>setActiveFilter(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </>
    );
}
