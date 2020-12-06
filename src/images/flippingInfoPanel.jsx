import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import Mirror1 from '../../images/topical1.png';
import Mirror2 from '../../images/subc-insulin.png';
import Mirror3 from '../../images/per oral.png';
import Mirror4 from '../../images/per vaginal.png';
import Mirror5 from '../../images/intranasal (2).png';
import Mirror6 from '../../images/mdi.png';
import Mirror7 from '../../images/suspension.png';
import Mirror8 from '../../images/supp.png';
import Mirror9 from '../../images/intrathecal-1.png';
import Mirror10 from '../../images/intramuscular.png';
import Mirror11 from '../../images/intravenous.png';
import Mirror12 from '../../images/transdermal.png';
import "../../css/styles.css";

const alt = "Face in Mirror";

const mirror = [
    {
        src: Mirror1, 
        id: "mirror01",
        frontlabel: "LA",
        backlabel: "Local application/Topical"
    },
    {
        src: Mirror2, 
        id: "mirror02",
        frontlabel: "SC",
        backlabel: "Subcutaneous"
    },
    {
        src: Mirror3, 
        id: "mirror03",
        frontlabel: "PO",
        backlabel: "Per oral"
    },
    {
        src: Mirror4, 
        id: "mirror04",
        frontlabel: "PV",
        backlabel: "Per vaginal"
    },
    {
        src: Mirror5, 
        id: "mirror05",
        frontlabel: "Intranasal",
        backlabel: "Intranasal"
    },
    {
        src: Mirror6, 
        id: "mirror06",
        frontlabel: "MDI",
        backlabel: "Metered dose inhale"
    },
    {
        src: Mirror7, 
        id: "mirror07",
        frontlabel: "Susp",
        backlabel: "Suspension"
    },
    {
        src: Mirror8, 
        id: "mirror08",
        frontlabel: "Supp/PR",
        backlabel: "Suppository/Per rectal"
    },
    {
        src: Mirror9, 
        id: "mirror09",
        frontlabel: "Intrathecal",
        backlabel: "Intrathecal"
    },
    {
        src: Mirror10, 
        id: "mirror10",
        frontlabel: "IM",
        backlabel: "Intramuscular"
    },
    {
        src: Mirror11, 
        id: "mirror11",
        frontlabel: "IV",
        backlabel: "Intravenous"
    },
    {
        src: Mirror12, 
        id: "mirror12",
        frontlabel: "Transdermal",
        backlabel: "Transdermal"
    }
]

class FlippingInfoPanel extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
     
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

    render() {
        return (
            <div>
                <h1>Flipping Information Panels</h1>
                <div class="row">
                <div class="col-md-3 col-xs-6">
                    {mirror.map(({src, id, frontlabel, backlabel}) =>                      
                        <div id={id}>      
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">                
                        <div class="front">
                            <img src={src} onClick={this.handleClick} alt={alt} class="img-responsive image"/>
                            <h2 class="text-center responsive-text">
                                {frontlabel}</h2>
                        </div>
                        
                        <div class="back">
                            <div class="back_container">
                                <img src={src} onClick={this.handleClick} alt="Face in Mirror" class="img-responsive image"/>
                                <ul class="image">
                                    <p class="image">{backlabel}</p>
                                </ul>
                            </div>
                            <h2 class="text-center responsive-text image">
                                {frontlabel}</h2>
                        </div>
                        </ReactCardFlip>
                        </div>)}                    
                    </div>          
                </div>
            </div>
        )
    }
}
export default FlippingInfoPanel;
