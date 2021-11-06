import React from "react";
import QRCode from "react-qr-code";

type Props = {
    value: string;
};

type State = {};

export class CardToPrint extends React.Component<Props, State> {
    render() {
        const value = this.props.value
        return <div>
            <p>{value}</p>
            <QRCode level="L" size={256} value={value} title={value} />
        </div>
    }
}
