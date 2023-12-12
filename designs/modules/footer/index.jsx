import "./footer.scss";
import React from "react";

const dateObj = new Date();

export default function Footer() {
    return (
        <footer>
            <div className="footer-text">
                Copyright {dateObj.getFullYear()} Argent Bank
            </div>
        </footer>
    );
}
