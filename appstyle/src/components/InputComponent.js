import { Input } from 'react-chat-elements'

<Input
    placeholder="Type here..."
    multiline={true}
    rightButtons={
        <Button
            color='white'
            backgroundColor='black'
            text='Send'/>
    }/>

// Clear text, e.g.:
// For pure components, use inputRef instead of this.inputRef

inputRef = React.createRef();
// ...
<Input
    ref={el => (this.inputRef = el)}
    placeholder="Type here..."/>
// ...
this.inputRef.clear();