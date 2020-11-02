import * as React from 'react';

import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement,
    ReflexHandle
} from 'react-reflex';

import { FilledInput, Input, InputAdornment, IconButton } from '@material-ui/core/';

import {
    CrossIcon,
    FilledBlueCircle,
    EmptyBlueCircle,
    VerticalLine,
    ArrowButton,
    DepartureDate,
    ArrivalDate,
    Plus
} from '../components/Icons';
import DeparturePlaceTemplate from '../components/DeparturePlaceTemplate';
import ArrivalPlaceTemplate from '../components/ArrivalPlaceTemplate';
import ArrivalDateFieldTemplate from '../components/ArrivalDateTemplate';
import ReturnDateFieldTemplate from '../components/ReturnDateTemplate';
import Button from '@material-ui/core/Button';
import HistoryRow from '../components/HistoryRow';
import TicketDescriptionTemplate from '../components/TicketDescription';
import { withStyles } from '@material-ui/core/styles';
import { ActionType, DeparturePlaceTextTemplate, ArrivalPlaceTextTemplate } from "../store/stateType";

import { useContext  } from "react";
import { ContextApp } from "../app/main";


const SearchButton = withStyles({
    root: {
        backgroundColor: '#000000',
        height: '44px',
        width: '100%',
        borderRadius: '10px',
        fontFamily: 'SFProDisplayBold',
        fontSize: '17px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#000000',
        }
    },
})(Button);



const Flights: React.FC = () => {
    const { state, changeState } = useContext(ContextApp);

    const clearDeparturePlace = () => {
        changeState({
            type: ActionType.CLEAR_DEPARTURE_PLACE
        });
    }

    const clearDepartureDate = () => {
        changeState({
            type: ActionType.CLEAR_ARRIVAL_DATE
        });
    }

    const clearArrivalPlace = () => {
        changeState({
            type: ActionType.CLEAR_ARRIVAL_PLACE
        });
    }

    const clearReturnDate = () => {
        changeState({
            type: ActionType.CLEAR_RETURN_DATE
        });
    }

    const togglePlaces = (departurePlace: DeparturePlaceTextTemplate, arrivalPlace: ArrivalPlaceTextTemplate) => {
        changeState({
            type: ActionType.TOGGLE_VALUES,
            payload_1: arrivalPlace,
            payload_2: departurePlace
        });
    }

    return (
        <ReflexContainer orientation="horizontal" maxRecDepth={20}>
            <ReflexElement minSize={0}
                propagateDimensionsRate={200}
                propagateDimensions={true}
                flex={0.4}
                className="reflex-element-top"
            >
                <TicketDescriptionTemplate />
                    <FilledInput
                        id="filled-input-from"
                        type={'text'}
                        inputComponent={DeparturePlaceTemplate}
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                >
                                    <FilledBlueCircle />
                                </IconButton>
                            </InputAdornment>
                        }
                    endAdornment={
                        !state.departurePlace.isClear?
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onClick={() => {
                                        clearDeparturePlace();
                                    }}>
                                    <CrossIcon/>
                                </IconButton>
                            </InputAdornment>
                            : null
                        }
                    />
                    <FilledInput
                        id="filled-input-to"
                        type={'text'}
                        disableUnderline={true}
                        inputComponent={ArrivalPlaceTemplate}
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                >
                                    <EmptyBlueCircle />
                                </IconButton>
                            </InputAdornment>
                        }
                    endAdornment={
                        !state.arrivalPlace.isClear?
                            <InputAdornment position="end">
                                
                                <IconButton
                                    edge="end"
                                    onClick={() => {
                                        clearArrivalPlace();
                                    }}
                                >
                                    <CrossIcon />
                                </IconButton>
                            </InputAdornment>
                            :null
                        }
                    />
                    <div className="fieldRow">
                        <div className="fieldRowHalf">
                            <FilledInput
                            id="filled-departure-date"
                            type={'text'}
                            style={{ margin: '0', marginRight: '1.5px' }}
                            disableUnderline={true}
                            inputComponent={ArrivalDateFieldTemplate}
                            startAdornment={
                                !state.arrivalDate.isClear ?
                                <InputAdornment position="start">
                                    <IconButton
                                        edge="start"
                                        disabled={true}
                                    >
                                        <DepartureDate />
                                    </IconButton>
                                </InputAdornment>
                                :
                                    <InputAdornment position="start">
                                        <IconButton
                                            edge="start"
                                            disabled={true}
                                        >
                                            <Plus />
                                        </IconButton>
                                    </InputAdornment>
                            }
                            endAdornment={
                                !state.arrivalDate.isClear?
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                        onClick={() => { clearDepartureDate() }}
                                    >
                                        <CrossIcon />
                                    </IconButton>
                                </InputAdornment>
                                : null
                            }

                            />
                        </div>
                        <div className="fieldRowHalf">
                            <FilledInput
                                id="filled-arrival-date"
                                type={'text'}
                                style={{ margin: '0', marginLeft: '1.5px' }}
                                disableUnderline={true}
                                inputComponent={ReturnDateFieldTemplate}
                                startAdornment={
                                    !state.returnDate.isClear ?
                                    <InputAdornment position="start">
                                        <IconButton
                                            disabled={true}
                                            edge="start"
                                        >
                                            <ArrivalDate />
                                        </IconButton>
                                    </InputAdornment>
                                     :
                                    <InputAdornment position="start">
                                        <IconButton
                                            edge="start"
                                            disabled={true}
                                        >
                                            <Plus />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    !state.returnDate.isClear ?
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={() => { clearReturnDate() }}
                                        >
                                            <CrossIcon />
                                        </IconButton>
                                    </InputAdornment>
                                    : null
                                }

                            />
                        </div>
                    </div>
                <div className="fieldRow">
                    <SearchButton variant="contained" color="primary" disabled={
                        state.arrivalDate.isClear &&
                        state.arrivalPlace.isClear &&
                        state.departurePlace.isClear &&
                        state.returnDate.isClear
                    }>
                            Search
                        </SearchButton>
                    </div>
                    <div className="content-between-fields">
                        <Input
                            id="filled-adornment-password"
                            disableUnderline={true}
                            startAdornment={
                                <InputAdornment position="start" disablePointerEvents={true}>
                                    <IconButton
                                        disableFocusRipple={true}
                                        disableRipple={true}
                                        edge="start"
                                    >
                                        <VerticalLine />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className="arrow-button">
                    <IconButton
                        style={{ padding: '0' }}
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={() => { togglePlaces(state.departurePlace, state.arrivalPlace) }}
                    >
                            <ArrowButton />
                        </IconButton>
                    </div>

                </ReflexElement>

                <ReflexSplitter />

                <ReflexElement minSize={36}  className="reflex-element-bottom">
                    <ReflexHandle className="handle ">
                        <div className="bottomContent">
                        <h2>History</h2>
                        {state.historyFlights.map((historyFlight, key) => (<HistoryRow key={key} historyFlight={historyFlight} />))}                        
                        </div>
                    </ReflexHandle>

                </ReflexElement>

            </ReflexContainer>
    )
}

export default Flights;