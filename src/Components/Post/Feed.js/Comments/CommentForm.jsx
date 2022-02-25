import { useState, useEffect } from 'react'
const Commentform = ({ handleSubmit, submitLabel }) => {

    const [text, setText] = useState("");
    const isTextareaDisabled = text.length === 0;

    const onSubmit = (event) => {
        event.preventDefault()
        handleSubmit(text);
        setText("");
    }

    return (
        <form onSubmit={onSubmit}>
            <textArea className='commentText' value={text} onChange={(e) => setText(e.target.value)} />
            <button className='commentButton' disabed={isTextareaDisabled}>{submitLabel}</button> 
        </form>
    );
}

export default Commentform;
