import React, {FC, useState, useEffect} from "react";
import {Attr} from '../types'

const CodeParser: FC<Attr> = (attr) => {
    const [value, setValue] = useState("");
    const [parsedVal, setParsedVal] = useState("");

    const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log((e.target as HTMLTextAreaElement).value);
        
        setParsedVal(eval((e.target as HTMLTextAreaElement).value))
    }

    return (
        <div className="code-parser">
            <form onSubmit={handleSubmit}>
                <textarea value={value} onChange={handleValueChange} />
                <input type="submit" value="Parse" className="btn btn-primary" />
            </form>
            <textarea value={parsedVal} readOnly />
        </div>
    )
}

export default CodeParser;