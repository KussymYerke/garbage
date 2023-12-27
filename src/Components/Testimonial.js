import {React, useRef} from 'react';
import './Test.css';
import bg1 from '../Assets/SG90.png';
import bg2 from '../Assets/ultra.png';
import bg3 from '../Assets/module.png';
import bg4 from '../Assets/wifi.png'

const Testimonial = () => {

    let imageContainerRef = useRef(null);

    const data = [{
        images: bg1,
        text: "SG90"
    }, {
        images: bg2,
        text: "Hc-SR004"
    }, {
        images: bg3,
        text: "IR Sensor"
    }, {
        images: bg4,
        text: 'ESP8266'
    }
    ]

    const prev = () => imageContainerRef.current.scrollLeft -= 250;
    const next = () => imageContainerRef.current.scrollLeft += 250;

    return (
        <div id={"tools"}>
            <div className={"page-container"}>
                <h1 className={"primary-heading text"}>What tools did we use</h1>
                <div className="content">
                    <div className="prev" onClick={prev}></div>
                    <div className="slide-panel" ref={imageContainerRef}>
                        {data.map(data => {
                            return (
                                    <>
                                        <img src={data.images} />
                                        <p className={"textt"}>{data.text}</p>
                                    </>
                            )
                        }
                        )}

                    </div>
                    <div className="next" onClick={next}></div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;