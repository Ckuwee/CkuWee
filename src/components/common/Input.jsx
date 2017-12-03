import React, { Component } from 'react';


export default class Input extends Component {
    render() {
        const { name, type = 'text', value, onChange, label ,htmlFor, className} = this.props;
        return (
            <div className="col-md-3">
                <label className="form-control-label " htmlFor={htmlFor}>{label}</label>
                <input
                    className={className}
                    onChange={onChange}
                    name={name}
                    id={name}
                    type={type}
                    value={value} />
            </div>
        );
    }
}

