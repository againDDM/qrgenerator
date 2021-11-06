import React from "react";
import Button from "@material-ui/core/Button";
import Print from "@material-ui/icons/Print";
import ReactToPrint from "react-to-print";

type Props = {
    componentToPrint: React.MutableRefObject<null>;
};
type State = {};

export class PrintButton extends React.Component<Props, State> {

    render() {
        return <ReactToPrint content={() => this.props.componentToPrint.current} trigger={
            () => <Button id={"print"} variant="contained" startIcon={<Print />}>
                {"PRINT"}
            </Button>} />
    }
}
