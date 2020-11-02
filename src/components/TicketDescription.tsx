import * as React from 'react';
import { TicketDescription } from '../store/stateType'

import { useContext } from "react";
import { ContextApp } from "../app/main";

import { Person } from '../components/Icons';

const TicketDescriptionTemplate: React.FC = () => {
    const { state } = useContext(ContextApp);
    const desc: TicketDescription = state.ticketDesc;

    return (
        <div className="fieldRowLeft">
            <Person />
            {
                !state.arrivalDate.isClear ||
                !state.arrivalPlace.isClear ||
                !state.departurePlace.isClear ||
                    !state.returnDate.isClear
                    ? <span>{desc.qty} {desc.personType}, {desc.ticketType}, {desc.currency}</span> : null}
        </div>
    );
}

export default TicketDescriptionTemplate;