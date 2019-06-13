import React from 'react';
import './Template.css';


const Template = ({palette, form, children}) => {
        return (
            <main className="template">
                <div className='title'>
                    오늘 할 일
                </div>
                <section className="palette-wrapper">
                    {palette}
                </section>
                <section className="form-wrapper">
                    {form}
                </section>
                <section className="todos-wrapper">
                    {children}
                </section>
            </main>
        );
    }

export default Template;