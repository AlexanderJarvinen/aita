import * as React from 'react';
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement,
    ReflexHandle
} from 'react-reflex';

import { FilledInput, Input, InputAdornment, IconButton } from '@material-ui/core/';
import CrossIcon from '../assets/icons/cross';
import FilledBlueCircle from '../assets/icons/filledBlueCircle';
import EmptyBlueCircle from '../assets/icons/emptyBlueCircle';
import VerticalLine from '../assets/icons/verticalLine';
import ArrowButton from '../assets/icons/arrowButton';
import DepartureDate from '../assets/icons/departureDate';
import ArrivalDate from '../assets/icons/arrivalDate';
import Person from '../assets/icons/person';

import TextFieldTemplate from '../components/TextFieldTemplate';
import DateFieldTemplate from '../components/DateFieldTemplate';
import Button from '@material-ui/core/Button';
import HistoryRow from '../components/HistoryRow';
import { withStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers'


import { InputBase } from '@material-ui/core/';
type Props = {

}

type State = {
    from: string,
    to: string,
    departureDate: string,
    arrivalDate: any

}

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

class Flights extends React.Component<Props, State> {
    readonly state: State = {
        from: "From",
        to: "To",
        departureDate: new Date().toString().split(' ').slice(0, 3).join(' '),
        arrivalDate: new Date().toString().split(' ').slice(0, 3).join(' '),
    }

    handleClearFrom = () => {
        this.setState({from:''});
    }

    handleClearTo = () => {
        this.setState({ to: '' });
    }

    handleClearDeparturDate = () => {
        this.setState({ departureDate: '' });
    }

    handleClearArrivalDate = () => {
        this.setState({ arrivalDate: '' });
    }

    render() {
        const { handleClearFrom, handleClearTo, handleClearDeparturDate, handleClearArrivalDate } = this;
        const { from, to, departureDate, arrivalDate } = this.state;

        return (
            <ReflexContainer orientation="horizontal">
                <ReflexElement minSize={36} className="reflex-element-top">
                    <div className="fieldRowLeft">
                        <Person />
                        <span>1 Adult, Economy, USD</span>
                    </div>
                    <FilledInput
                        id="filled-input-from"
                        type={'text'}
                        value={from}
                        inputComponent={TextFieldTemplate}
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
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClearFrom}
                                    edge="end"
                                >
                                    <CrossIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FilledInput
                        id="filled-input-to"
                        type={'text'}
                        value={to}
                        disableUnderline={true}
                        inputComponent={TextFieldTemplate}
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
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClearTo}
                                    edge="end"
                                >
                                    <CrossIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <div className="fieldRow">
                        <div className="fieldRowHalf">
                            <FilledInput
                                id="filled-departure-date"
                                type={'text'}
                                style={{margin: '0', marginRight: '1.5px'}}
                                value={departureDate}
                                disableUnderline={true}
                                inputComponent={DateFieldTemplate}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                            edge="start"
                                            disabled={true}
                                        >
                                            <DepartureDate />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClearDeparturDate}
                                            edge="end"
                                        >
                                            <CrossIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                               
                            />
                        </div>
                        <div className="fieldRowHalf">
                            <FilledInput
                                id="filled-arrival-date"
                                type={'text'}
                                value={arrivalDate}
                                style={{ margin: '0', marginLeft: '1.5px' }}
                                disableUnderline={true}
                                inputComponent={DateFieldTemplate}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                            disabled={true}
                                            edge="start"
                                        >
                                            <ArrivalDate />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClearArrivalDate}
                                            edge="end"
                                        >
                                            <CrossIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }

                            />
                        </div>
                    </div>
                    <div className="fieldRow">
                        <SearchButton variant="contained" color="primary">
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
                        <IconButton style={{ padding: '0' }} color="primary" aria-label="add to shopping cart">
                            <ArrowButton />
                        </IconButton>
                    </div>

                </ReflexElement>

                <ReflexSplitter />

                <ReflexElement minSize={36} className="reflex-element-bottom">
                    <ReflexHandle className="handle ">
                        <div className="bottomContent">
                            <h2>History</h2>
                            <HistoryRow />
                            <HistoryRow />
                            <HistoryRow />
                            <HistoryRow />
                            <HistoryRow />
                            <HistoryRow />
                            <HistoryRow />
                            <HistoryRow />
                            <HistoryRow />
                        </div>
                    </ReflexHandle>
                    
                </ReflexElement>

            </ReflexContainer>)
    }
}

export default Flights;