import React, {Component} from 'react';
import Receipt from '../../images/RX3img.png';
import "../../css/styles.css";

const defaultInfo = "Please hover your mouse cursor to the numbered buttons on the prescription to see the importance of each part of the prescription.";

const buttons = [
    {
        id: "button_01",
        label: "1",
        info: "A diagnosis is written for the pharmacist to confirm the indication of the medication prescribed."
    },
    {
        id: "button_02",
        label: "2",
        info: "Patient's details are required to identify the patient for whom the medications are prescribed.\n\nEssential information includes: name, age, hospital identification number or personal ID, age and gender. \n\nThe patient's information is important for the pharmacist to counter check on the medication safety issues. \n\nFor children under 12 years of age, the weight must be written on the prescription for dosage calculation."
    },
    {
        id: "button_03",
        label: "3",
        info: "The medication prescribed with the name of medication in generic form, route of administration, dose, frequency and duration."
    },
    {
        id: "button_04",
        label: "4",
        info: "Signature of the medical practitioner and official stamp are required to ensure that the prescriber is a registered medical practitioner and is authorised to prescribe the medication. \n\nThe prescriber's contact details are necessary should there be a need to clarify the medicine prescribed. \n\nFor example, clarification is needed when the handwriting is illegible, wrong dosage or when a patient is accidentally prescribed with a medication which he/she is allergic to."
    },
    {
        id: "button_05",
        label: "5",
        info: "Date is required to ensure the validity of a prescription. The prescription is valid for the duration it is written for."
    },
    {
        id: "button_06",
        label: "6",
        info: "Cross through the empty space of a prescription to avoid amendment by others."
    }
]


class ImageWithUserActivatedInfoPanel extends Component {
    state = {
        info: defaultInfo,
    }

    handleMouseEnter = (info) => {
        this.setState({info});
    }

    handleMouseLeave = () => {
        this.setState({info: defaultInfo});
    }

    render() {
        return (
            <div>
                <h1>Image with User Activated Information Panels</h1>
                <div className="row">
                    <div className="col-md-5 col-xs-12 col-md-offset-3">
                        <div id="image-user-activated">
                            <img className="img-responsive" style={{width: '100%'}} alt="Sample-receipt" src={Receipt}/>
                            {
                                buttons.map(({id, info, label}) =>
                                    <button
                                        className="btn btn-primary image_button"
                                        id={id}
                                        onMouseEnter={() => this.handleMouseEnter(info)}
                                        onMouseLeave={() => this.handleMouseLeave()}
                                    >{label}</button>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="alert alert-warning">{this.state.info}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageWithUserActivatedInfoPanel;
