import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div>
            <h3>Home</h3>
            <Link to="/todo">todo</Link>
        </div>

    );
}