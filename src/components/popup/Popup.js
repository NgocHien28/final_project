import React from "react";
import { useState } from "react";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
import "./popup.css";

export default function Popup() {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <div className="popup">
            <button id="Popover1" type="button">
                Launch Popover
            </button>
            <Popover flip target="Popover1" isOpen={popoverOpen} toggle={toggle}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
            </Popover>
        </div>
    );
}
