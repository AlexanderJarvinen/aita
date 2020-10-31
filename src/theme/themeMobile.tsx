import { createMuiTheme } from '@material-ui/core/styles';


const themeMobile: any = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                fontFamily: "SFProDisplayBold",
                borderBottom: '0',
                disableUnderline: true,
                margin: '0'

            }
        },
        MuiInputAdornment: {
            root: {
                marginRight: '0'
            },
            positionStart: {
                marginRight: '0'
            }
        },
        MuiFilledInput: {
            root: {
                display: 'flex',
                height: '54px',
                margin: '20px 16px 0',
                background: 'rgba(120, 120, 128, 0.16)',
                borderRadius: '10px',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                padding: '0'
            },
            input: {
                padding: '0'
            },
            adornedStart: {
                paddingLeft: '0'
            },
            adornedEnd: {
                paddingRight: '10px'
            }
        },
        MuiInput: {
            root: {
                position: 'relative',
                display: 'flex',
                height: '180px',
                margin: '20px 16px 0',
            },
            input: {
                padding: '0'
            }
        },
        MuiSvgIcon: {
            root: {
                fill: 'transparent'
            }
        },
        MuiIconButton: {
            root: {
                padding: '9px'
            },
            edgeStart: {
                marginLeft: '0'
            }
        }
    }
});

export default themeMobile;