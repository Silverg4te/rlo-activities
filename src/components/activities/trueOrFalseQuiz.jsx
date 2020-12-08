import React, {Component} from 'react';


const Quiz = [
    {
        id: 0,
        questions: "Healthcare workers are not usually responsible for the transfer of infection from one patient to another in a healthcare setting.",
        answer: "False",
        msg: "Correct! Healthcare workers are a major cause of cross-infection in a healthcare setting, usually by direct hand contact."
    },
    {
        id: 1,
        questions: "Reservoirs of infection include urine, blood, sputum, faeces and wounds.",
        answer: "True",
        msg: "Correct! Pathogens can be found in blood and bodily fluids, on skin, in the air and in water, food and insects."
    },
    {
        id: 2,
        questions: "Infections can spread by droplets, air-borne, direct contact, blood and bodily fluids.",
        answer: "True",
        msg: "Correct! Infections can be spread by droplets, air-bourne, blood and bodily fluids. They can also be spread by ingestion of contaminated food and water."
    },
    {
        id: 3,
        questions: "Handhygiene should be practiced at least every 15 minutes during a shift to prevent cross-infection by direct contact.",
        answer: "False",
        msg: "Correct! Hands should be cleaned whenever it is appropriate. This may be more often or less often than every 15 minutes. The Department of Health Guidelines (2001) state that hands should be cleaned before any direct patient contact/care and after any activity or contact that potentially contaminates the hands."
    }
]

class TrueOrFalseQuiz extends Component {
    constructor(props){
        super(props)
        this.state = {
            userAnswer: null,
            currentIndex: 0,
            quizEnd: false,
            score: 0,
            checkButton: true,
            checkDisabled: true,   
            continueButton: false,  
            nextDisabled: true,
            correct: false,
            wrong: false,
            play:true
        }
    }

    loadQuiz = () =>{
        const{currentIndex} = this.state;
        this.setState( () => {
            return{
                question: Quiz[currentIndex].questions,
                answer: Quiz[currentIndex].answer,
                msg: Quiz[currentIndex].msg,
                play: true
            }            
        });
    }

    componentDidMount(){
        this.loadQuiz();
    }

    nextQuestionHandler = () =>{
        if(this.state.currentIndex === Quiz.length-1){
            this.setState({
                quizEnd: true
            })
        }
        else{
            this.setState( () => {   
            return{
                currentIndex: this.state.currentIndex + 1,
                userAnswer: null
            }
        })}
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            checkDisabled:false,
        })
    }

    showAnswer = () =>{
        const{userAnswer, answer, score} = this.state;

        if(userAnswer === answer){
            this.setState({
                score: score + 1,
                correct:true,
                nextDisabled:false,
                checkButton: false,
                continueButton: true
            })
        }
        else{
            this.setState({
                wrong:true,
                nextDisabled:false,
                checkButton: false,
                continueButton: true
            })
        }
    }

    retryHandler = () =>{
        this.setState({
            quizEnd: false,
            currentIndex: 0,
        })
    }

    playHandler = () => {
        this.setState({
            play: false,
        })
    }

    componentDidUpdate(prevProps, prevState){
        const{currentIndex,disabled, checkDisabled, continueButton, checkButton} =  this.state;
        if(this.state.currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return{
                    question: Quiz[currentIndex].questions,
                    answer: Quiz[currentIndex].answer,
                    msg: Quiz[currentIndex].msg,
                    disabled: !disabled,
                    checkDisabled: !checkDisabled,
                    correct: false,
                    wrong: false,
                    continueButton: !continueButton,
                    checkButton: !checkButton
                }
            });
        }
    }
    render() {
        const{play,msg, question, currentIndex, userAnswer, quizEnd, correct, wrong, checkButton, continueButton} = this.state;
        if(play){
            return(
                <div>
                    <h1>True or False Quiz</h1>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div id="activity_container"> 
                            <h3>Hand Hygiene Quiz</h3><br/> 
                            <p>Please click the <strong>"Start Quiz"</strong> button to continue</p>      
                            <button id="retry" class="btn btn-primary" onClick={this.playHandler}>Start Quiz</button>                   
                            </div>                 
                        </div>
                    </div>
                </div>
            )
        }
        
        if(quizEnd){
            return(
                <div>
                    <h1>True or False Quiz</h1>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div id="activity_container"> 
                            <h3>Hand Hygiene Quiz</h3><br/>
                            <h5>You have completed the quiz</h5>  
                            <p>You correctly answered <strong>{this.state.score}</strong> of the {Quiz.length} questions in this quiz.</p>      
                            <button id="retry" class="btn btn-primary" onClick={this.retryHandler}>Retry the Quiz</button>                   
                            </div>                 
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h1>True or False Quiz</h1>
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div id="activity_container">       
                        <h3>Hand Hygiene Quiz</h3><br/>
                        <p>{question}</p>
                        </div>
                        <input type="radio" name="option" value="True" onClick={() => this.checkAnswer("True")}/><strong>True</strong><br/>
                        <input type="radio" name="option" value="False" onClick={() => this.checkAnswer("False")}/><strong>False</strong><br/>
                        {correct && <div class="alert alert-success text-center" id="feedback_success"><span class="glyphicon glyphicon-tick"></span>{msg}</div>}
                        {wrong && <div class="alert alert-danger text-center" id="feedback_error"><span class="glyphicon glyphicon-remove"></span> Incorrect! Try again.</div>}   

                        {checkButton && <button id="check" class="btn btn-primary" disabled={this.state.checkDisabled} onClick={this.showAnswer}>Check Your Answer</button>}

                        {currentIndex < Quiz.length && continueButton &&
                        <button id="next" class="btn btn-primary"disabled={this.state.NextDisabled} onClick={this.nextQuestionHandler}>Continue</button>}
                    </div>                 
                </div>
            </div>
        )
    }
}

export default TrueOrFalseQuiz;
