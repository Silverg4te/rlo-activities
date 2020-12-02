import React, {Component} from 'react';
import Receipt from '../../images/RX3img.png';
import "../../css/styles.css";

function handleMouseEnter(e){
    document.getElementById('info-container').innerHTML = e.target.getAttribute("data-info");
}
function handleMouseLeave(){
    document.getElementById('info-container').innerHTML = "Please hover your mouse cursor to the numbered buttons on the prescription to see the importance of each part of the prescription.";
}


class ImageWithUserActivatedInfoPanel extends Component {

    render() {
        return (
            <div>
                <h1>Image with User Activated Information Panels</h1>
                <div className="row">
                            <div className="col-md-5 col-xs-12 col-md-offset-3">
                                <div id="footballer">
                                    <img className="img-responsive" style={{width: '100%'}} src={Receipt}/>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_01"
                                       onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave}
                                       data-info="<p>A diagnosis is written for the pharmacist to confirm the indication of the medication prescribed.</p>">1</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_02"
                                       onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave}
                                       data-info="<p>Patient's details are required to identify the patient for whom the medications are prescribed. <br><br>Essential information includes: name, age, hospital identification number or personal ID, age and gender. <br><br>The patient's information is important for the pharmacist to counter check on the medication safety issues. <br><br>For children under 12 years of age, the weight must be written on the prescription for dosage calculation.  </p>">2</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_03"
                                       onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave}
                                       data-info="<p>The medication prescribed with the name of medication in generic form, route of administration, dose, frequency and duration.</p>">3</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_04"
                                       onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave}
                                       data-info="<p>Signature of the medical practitioner and official stamp are required to ensure that the prescriber is a registered medical practitioner and is authorised to prescribe the medication. <br><br>The prescriber's contact details are necessary should there be a need to clarify the medicine prescribed. <br><br>For example, clarification is needed when the handwriting is illegible, wrong dosage or when a patient is accidentally prescribed with a medication which he/she is allergic to.</p>">4</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_05"
                                       onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave}
                                       data-info="<p>Date is required to ensure the validity of a prescription. The prescription is valid for the duration it is written for.</p>">5</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_06"
                                       onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave}
                                       data-info="<p>Cross through the empty space of a prescription to avoid amendment by others.</p>">6</a>
                                    <br/>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-12">
                                <div id="info-container" className="alert alert-warning" role="alert"></div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default ImageWithUserActivatedInfoPanel;
