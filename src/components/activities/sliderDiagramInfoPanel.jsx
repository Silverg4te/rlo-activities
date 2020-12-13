import React, {Component} from 'react';
import "../../css/styles.css";

const initial = "The correct use of temperature in the storage and preparation of food is one of the best ways to prevent bacteria from multiplying. You must consider the correct use of the refrigerator, how food is prepared, the freezing, defrosting, cooling and reheating of food."

const info = [
    '<h4>-18 °C and Below</h4><p>This temperature kills bacteria so it is a safe temperature at which to store food.</p>',
    '<h4>1-4 °C</h4><p>Bacteria dormant, correct temperature for storing food.</p>',
    '<h4>5-63 °C</h4><p>Bacteria can multiply so it is unsafe to store food at this temperature</p>',
    '<h4>64-72 °C</h4><p>This temperature keeps food hot and bacteria can not multiply so it is safe to store at this temperature.</p>',
    '<h4>73-99 °C</h4><p>Most bacteria die at this cooking/pasturisation temperature so it is safe.</p>',
    '<h4>100 °C</h4><p>Boiling temperature/pressure cooker temperature.</p><p>This temperature kills bacteria in 10 minutes.</p>',
    ' '
]

const instruction = "Move your slider along to find out what happens to bacterial growth at different temperatures."


class SliderDiagramInfoPanel extends Component {
    state = {
        value:0,
        height:515.97
    }

    handleChange = (e) => {
        this.setState({ 
            value: e.target.value
        });
        this.handleThemometer(e.target.value);
    }

    handleThemometer = (val) =>{
        console.log(val)
        var hold = (120 - val) * (516/120);
        this.setState({
            height:hold
        })
        if(val > -1 && val <=2 ){
            document.getElementById('feedback_container').innerHTML = info[0];
        }
        else if(val > 21 && val <=24 ){
            document.getElementById('feedback_container').innerHTML = info[1];
        }
        else if(val > 25 && val <=83 ){
            document.getElementById('feedback_container').innerHTML = info[2];
        }
        else if(val > 84 && val <=92 ){
            document.getElementById('feedback_container').innerHTML = info[3];
        }
        else if(val > 93 && val <=119 ){
            document.getElementById('feedback_container').innerHTML = info[4];
        }
        else if(val == 120 ){
            document.getElementById('feedback_container').innerHTML = info[5];
        }
        else{
            document.getElementById('feedback_container').innerHTML = info[6];
        }
    }

    render() {
        const{height} = this.state;
        return (
            <div>
                <h1>Slider Controlled Diagram and Information Panel</h1>
                <p>{initial}</p>
                <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div id="themometer" width="140px" height="auto" margin="0 auto">
                            <svg data-name="Layer 1" id="Layer_1" viewbox="0 0 295.74 744" height="750" xmlns="http://www.w3.org/2000/svg"> 
                            <defs class="clS-1 clS-2 clS-3"></defs>
                            <title></title>
                                <g id="background"> 
                                    <path class="clS-1" d="M227.7,746.07a72,72,0,0,1-34.81-135l1.81-1v-568a33,33,0,0,1,66,0V610l1.81,1a72,72,0,0,1-34.81,135Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M227.7,12.57a29.5,29.5,0,0,1,29.5,29.5v570l3.61,2a68.5,68.5,0,1,1-66.22,0l3.61-2v-570a29.54,29.54,0,0,1,29.5-29.5m0-7a36.5,36.5,0,0,0-36.5,36.5V608a75.5,75.5,0,1,0,73,0V42.07a36.5,36.5,0,0,0-36.5-36.5Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path class="clS-2" d="M281.7,674.07A54,54,0,1,1,210.2,623v-57.4h35V623A54,54,0,0,1,281.7,674.07Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <rect height="7" width="42" x="124.74" y="556"> </rect> 
                                    <rect height="7" width="21" x="145.74" y="513.17"> </rect> 
                                    <rect height="7" width="42" x="124.74" y="470.33"> </rect> 
                                    <rect height="7" width="21" x="145.74" y="427.5"> </rect> 
                                    <rect height="7" width="42" x="124.74" y="384.67"> </rect> 
                                    <rect height="7" width="21" x="145.74" y="341.83"> </rect> 
                                    <rect height="7" width="42" x="124.74" y="299"> </rect> 
                                    <rect height="7" width="21" x="145.74" y="256.17"> </rect> 
                                    <rect height="7" width="42" x="124.74" y="213.33"> </rect> 
                                    <rect height="7" width="21" x="145.74" y="170.5"> </rect> 
                                    <rect height="7" width="42" x="124.74" y="127.67"> </rect> 
                                    <rect height="7" width="21" x="145.74" y="84.83"> </rect> 
                                    <rect height="7" width="42" x="124.74" y="42"> </rect> 
                                    <path d="M15.38,34.25h-.12L8.48,37.91l-1-4L16,29.33h4.5v39h-5.1Z" transform="translate(-7.46 -5.57)"></path> 
                                    <path d="M60.62,48.41C60.62,61.67,55.7,69,47.06,69c-7.62,0-12.78-7.14-12.9-20,0-13.08,5.64-20.28,13.56-20.28C55.94,28.67,60.62,36,60.62,48.41ZM39.44,49c0,10.14,3.12,15.9,7.92,15.9,5.4,0,8-6.3,8-16.26,0-9.6-2.46-15.9-7.92-15.9C42.8,32.75,39.44,38.39,39.44,49Z" transform="translate(-7.46 -5.57)"></path> 
                                    <path d="M91.4,48.41C91.4,61.67,86.48,69,77.84,69c-7.62,0-12.78-7.14-12.9-20,0-13.08,5.64-20.28,13.56-20.28C86.72,28.67,91.4,36,91.4,48.41ZM70.22,49c0,10.14,3.12,15.9,7.92,15.9,5.4,0,8-6.3,8-16.26,0-9.6-2.46-15.9-7.92-15.9C73.58,32.75,70.22,38.39,70.22,49Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M34.22,145.43c0-4.92,2.94-8.4,7.74-10.44l-.06-.18c-4.32-2-6.18-5.4-6.18-8.76,0-6.18,5.22-10.38,12.06-10.38,7.56,0,11.34,4.74,11.34,9.6,0,3.3-1.62,6.84-6.42,9.12v.18c4.86,1.92,7.86,5.34,7.86,10.08,0,6.78-5.82,11.34-13.26,11.34C39.14,156,34.22,151.13,34.22,145.43Zm21-.24c0-4.74-3.3-7-8.58-8.52-4.56,1.32-7,4.32-7,8-.18,4,2.82,7.44,7.8,7.44C52.16,152.15,55.22,149.21,55.22,145.19ZM40.7,125.69c0,3.9,2.94,6,7.44,7.2,3.36-1.14,5.94-3.54,5.94-7.08,0-3.12-1.86-6.36-6.6-6.36C43.1,119.45,40.7,122.33,40.7,125.69Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M91.4,135.41c0,13.26-4.92,20.58-13.56,20.58-7.62,0-12.78-7.14-12.9-20,0-13.08,5.64-20.28,13.56-20.28C86.72,115.67,91.4,123,91.4,135.41Zm-21.18.6c0,10.14,3.12,15.9,7.92,15.9,5.4,0,8-6.3,8-16.26,0-9.6-2.46-15.9-7.92-15.9C73.58,119.75,70.22,125.39,70.22,136Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M57,205.05a19.07,19.07,0,0,0-4,.24,15.85,15.85,0,0,0-13.56,13.86h.18a11.62,11.62,0,0,1,9.42-4.5c6.9,0,11.76,5,11.76,12.6,0,7.14-4.86,13.74-13,13.74C39.5,241,34,234.51,34,224.37c0-7.68,2.76-13.74,6.6-17.58A21.23,21.23,0,0,1,53.12,201a25.35,25.35,0,0,1,3.84-.3Zm-1.5,22.5c0-5.58-3.18-8.94-8-8.94a8.69,8.69,0,0,0-7.56,4.8,4.49,4.49,0,0,0-.6,2.34c.12,6.42,3.06,11.16,8.58,11.16C52.4,236.91,55.46,233.13,55.46,227.55Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M91.4,220.41c0,13.26-4.92,20.58-13.56,20.58-7.62,0-12.78-7.14-12.9-20,0-13.08,5.64-20.28,13.56-20.28C86.72,200.67,91.4,208,91.4,220.41Zm-21.18.6c0,10.14,3.12,15.9,7.92,15.9,5.4,0,8-6.3,8-16.26,0-9.6-2.46-15.9-7.92-15.9C73.58,204.75,70.22,210.39,70.22,221Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M51,327.33V316.71H32.9v-3.48l17.4-24.9H56v24.24h5.46v4.14H56v10.62Zm0-14.76v-13q0-3.06.18-6.12H51c-1.2,2.28-2.16,4-3.24,5.76l-9.54,13.26v.12Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M91.4,307.41c0,13.26-4.92,20.58-13.56,20.58-7.62,0-12.78-7.14-12.9-20,0-13.08,5.64-20.28,13.56-20.28C86.72,287.67,91.4,295,91.4,307.41Zm-21.18.6c0,10.14,3.12,15.9,7.92,15.9,5.4,0,8-6.3,8-16.26,0-9.6-2.46-15.9-7.92-15.9C73.58,291.75,70.22,297.39,70.22,308Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M34.7,410.33v-3.24l4.14-4c10-9.48,14.46-14.52,14.52-20.4,0-4-1.92-7.62-7.74-7.62a13.28,13.28,0,0,0-8.28,3.3l-1.68-3.72a17.11,17.11,0,0,1,11-4c8.4,0,11.94,5.76,11.94,11.34,0,7.2-5.22,13-13.44,20.94l-3.12,2.88V406H59.6v4.38Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M91.4,390.41c0,13.26-4.92,20.58-13.56,20.58-7.62,0-12.78-7.14-12.9-20,0-13.08,5.64-20.28,13.56-20.28C86.72,370.67,91.4,378,91.4,390.41Zm-21.18.6c0,10.14,3.12,15.9,7.92,15.9,5.4,0,8-6.3,8-16.26,0-9.6-2.46-15.9-7.92-15.9C73.58,374.75,70.22,380.39,70.22,391Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M91.4,477.41c0,13.26-4.92,20.58-13.56,20.58-7.62,0-12.78-7.14-12.9-20,0-13.08,5.64-20.28,13.56-20.28C86.72,457.67,91.4,465,91.4,477.41Zm-21.18.6c0,10.14,3.12,15.9,7.92,15.9,5.4,0,8-6.3,8-16.26,0-9.6-2.46-15.9-7.92-15.9C73.58,461.75,70.22,467.39,70.22,478Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M30.2,566.15v3.9H15.38v-3.9Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M34.7,584.33v-3.24l4.14-4c10-9.48,14.46-14.52,14.52-20.4,0-4-1.92-7.62-7.74-7.62a13.28,13.28,0,0,0-8.28,3.3l-1.68-3.72a17.11,17.11,0,0,1,11-4c8.4,0,11.94,5.76,11.94,11.34,0,7.2-5.22,13-13.44,20.94l-3.12,2.88V580H59.6v4.38Z" transform="translate(-7.46 -5.57)"> </path> 
                                    <path d="M91.4,564.41c0,13.26-4.92,20.58-13.56,20.58-7.62,0-12.78-7.14-12.9-20,0-13.08,5.64-20.28,13.56-20.28C86.72,544.67,91.4,552,91.4,564.41Zm-21.18.6c0,10.14,3.12,15.9,7.92,15.9,5.4,0,8-6.3,8-16.26,0-9.6-2.46-15.9-7.92-15.9C73.58,548.75,70.22,554.39,70.22,565Z" transform="translate(-7.46 -5.57)"> </path> 
                                </g> 
                                <g> 
                                    <rect height="515.57" id="marker_ghost" width="35" x="202.74" y="45.43" fill="#ff4a20"> </rect> 
                                </g> 
                                <g> 
                                    <rect class="clS-3" height={height} id="marker" width="36" x="202.24" y="45.03"> </rect> 
                                </g> 
                            </svg>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h3>Temperature and Bacteria Growth Activity</h3>
                        <div id="feedback_container" class="alert alert-info">
                            <h4>Activity Instructions</h4>
                            <p>{instruction}</p>
                        </div>
                            <div class="row">
                                <div class="col-md-3 text-center"><span>Lower<br />Temperature</span></div>
                                    <div class="col-md-3">
                                        <div id="slider-wrapper">
                                            <input id="temp_slider" max="120" min="0" step="1" width="100%" type="range" value={this.state.value} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-center"><span>Higher<br />Temperature</span></div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SliderDiagramInfoPanel;
