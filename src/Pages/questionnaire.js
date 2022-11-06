import React from 'react';

// CSS
import './css/questionnaire.css';

export default function Questionnaire() {


    return (
        <section className='main-section'>
            <div className="stepper-wrapper">
                <div className="stepper-item completed">
                    <div className="step-counter">1</div>
                    <div className="step-name">First</div>
                </div>
                <div className="stepper-item completed">
                    <div className="step-counter">2</div>
                    <div className="step-name">Second</div>
                </div>
                <div className="stepper-item active">
                    <div className="step-counter">3</div>
                    <div className="step-name">Third</div>
                </div>
                <div className="stepper-item">
                    <div className="step-counter">4</div>
                    <div className="step-name">Forth</div>
                </div>
                <div className="stepper-item">
                    <div className="step-counter">4</div>
                    <div className="step-name">Forth</div>
                </div>
                <div className="stepper-item">
                    <div className="step-counter">4</div>
                    <div className="step-name">Forth</div>
                </div>
                <div className="stepper-item">
                    <div className="step-counter">4</div>
                    <div className="step-name">Forth</div>
                </div>
            </div>
        </section>
    );
}