import React from "react";
import { TextField, Button } from "@material-ui/core";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

type Props = {
    value: string
    updateValue: (newValue: string) => void
};
type State = {
    value: string
};

export class InputForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { value: props.value }
    }

    render() {
        return <><TextField id="value" label="value" variant="filled" onChange={
            (event) => this.setState({ value: event.target.value })} />
            <Button id="generate" variant="contained"
                startIcon={<CheckCircleOutline />} onClick={
                    () => this.props.updateValue(this.state.value)}>
                {"GENERATE"}
            </Button>
        </>
    }
}

