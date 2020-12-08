import React, {Component} from 'react';
import GLove from '../../images/glove-use-glove.png';
import Hand from '../../images/glove-use-hand.png';
import Sterile from '../../images/glove-use-sterile.png';
import "../../css/styles.css";

const drop_area = [
    {
        data_types: "no-gloves",
        src: Hand,
        alt: "No Gloves",
    },
    {
        data_types: "gloves",
        src: GLove,
        alt: "Non-sterile Gloves",
    },
    {
        data_types: "sterile",
        src: Sterile,
        alt: "Sterile Gloves",
    },
]

const Data = [
    {
        act_drag: "act_drag_at",
        data_activity: "all",
        data_label: "Aseptic Technique",
        data_class: "activity_at",
        msg: "Correct! Depending on the procedure, any one of these three options might be appropriate!"
    },
    {
        act_drag: "act_drag_ds",
        data_activity: "no-gloves",
        data_label: "Cleaning a drip stand",
        data_class: "activity_ds",
        msg: "Correct! Gloves are not required for cleaning a drip stand."
    },
    {
        act_drag: "act_drag_mb",
        data_activity: "no-gloves",
        data_label: "Making a bed",
        data_class: "activity_mb",
        msg: "Correct! Gloves are not required when making a bed."
    },
    {
        act_drag: "act_drag_bs",
        data_activity: "gloves",
        data_label: "Cleaning a blood spillage",
        data_class: "activity_bs",
        msg: "Correct! Non-sterile gloves should be worn when cleaning a blood spillage."
    },
    {
        act_drag: "act_drag_cb",
        data_activity: "gloves",
        data_label: "Emptying a catheter bag",
        data_class: "activity_cb",
        msg: "Correct! Non-sterile gloves should be worn when emptying a catheter bag."
    },
    {
        act_drag: "act_drag_pc",
        data_activity: "gloves",
        data_label: "Insertion of a peripheral cannula",
        data_class: "activity_pc",
        msg: "Correct! Non-sterile gloves should be worn when inserting a peripheral cannula."
    },
    {
        act_drag: "act_drag_p",
        data_activity: "gloves",
        data_label: "Phlebotomy",
        data_class: "activity_p",
        msg: "Correct! Non-sterile gloves should be worn during a phlebotomy."
    },
    {
        act_drag: "act_drag_cl",
        data_activity: "sterile",
        data_label: "Inserting a central line",
        data_class: "activity_cl",
        msg: "Correct! Sterile gloves must be worn when inserting a central line."
    },
    {
        act_drag: "act_drag_is",
        data_activity: "sterile",
        data_label: "Invasive surgery",
        data_class: "activity_is",
        msg: "Correct! Sterile gloves must be worn during invasive surgery."
    }
]

class DragAndDropActivity extends Component {
    state = {
        correct: false,
        wrong: false,
        info: null,
        all: false,
        count:0,
    }

    onDragStart = (ev) => {
        ev.dataTransfer.setData("id", ev.target.id);
    }
    
    onDragOver = (ev) => {
        ev.preventDefault();
    }
    
    onDrop = (ev) => {
        const{count} = this.state;
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");
        var id = document.getElementById(data);
        var id2 = document.getElementById(data);
        var id3 = document.getElementById(data);
        const success_message = id.getAttribute('message');
        const wrong_message = "Incorrect! Try Again."
        var data_activity  = id.getAttribute('data-activity');
        var data_type = ev.currentTarget.getAttribute('data-type');

        if(data_activity == data_type)
        {
            id.style.backgroundColor = "#E6FFFF";
            ev.target.appendChild(id);
            this.setState({
                correct: true,
                wrong: false,
                info: success_message,
                count: count+1
            })
        }
        else if(data_activity == "all")
        {
            id.style.display = 'none'
            this.setState({
                correct: true,
                wrong:false,
                info: success_message,
                all:true,
                count: count+1
            })
        }
        else{
            this.setState({
                wrong: true,
                correct:false,
                info: wrong_message
            })
        }

        if(count == Data.length-1){
            alert('You have sucessfully completed this activity')
        }
    }

    render() {
        const{correct, wrong, info, all} = this.state;
        return (
            <div>
                <h1>Drag and Drop Labels</h1>
                <div class="row">
                <div class="col-xs-4">
                {drop_area.map(({data_types, src, alt}) =>
                    <div class="droppable droppable_area drop_target" data-type={data_types} onDragOver={this.onDragOver} onDrop={this.onDrop}>
                        <img src={src} width="540" height="340" alt={alt} class="img-responsive"/>
                        <p class="text-center activity_title"><strong>{alt}</strong></p>
                        <ul class="test">
                            {all && <li>Aseptic Technique</li> }
                        </ul>
                    </div>)}
                </div>
                </div>

                {correct && <div class="alert alert-success text-center" id="feedback_success">{info}</div>}
                {wrong && <div class="alert alert-danger text-center" id="feedback_error">{info}</div>}

                <ul id="act_drag_items">          
                    {Data.map(({act_drag, data_activity, data_label, data_class, msg}) =>  
                        <li id={act_drag} onDragStart ={this.onDragStart} draggable="true" class="draggable" message={msg} data-activity={data_activity} data-class={data_class}>{data_label}</li>            
                    )}
                </ul>
            </div>
        )
    }
}

export default DragAndDropActivity;
