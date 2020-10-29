import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                fontFamily: "SFProDisplayBold", 
                borderBottom: '0',
                disableUnderline: true,
                margin: '0'
                
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
            },
            input: {
                padding: '0'
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
                fill: 'rgba(120, 120, 128, 0.16)'
            }
        },
    }
});

export default theme