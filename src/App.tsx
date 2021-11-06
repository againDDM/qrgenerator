import React from 'react';
import { PrintButton } from "./components/PrintButton";
import { CardToPrint } from "./components/Card";
import { InputForm } from "./components/InputForm";
import Divider from '@material-ui/core/Divider';
import './App.css';

type Props = {};
type State = {
  value: string
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { value: window.location.href }
  }


  render() {
    const componentToPrint: React.MutableRefObject<null> = React.createRef()
    return (

      <div className="App">
        <header className="App-header">
          <InputForm updateValue={newValue => this.setState({value: newValue})} value={this.state.value} />
          <div ref={componentToPrint}>
            <CardToPrint value={this.state.value} />
          </div>
          <Divider variant="inset" component="li" />
          <PrintButton componentToPrint={componentToPrint} />
        </header>
      </div>
    );
  }
}

export default App;
