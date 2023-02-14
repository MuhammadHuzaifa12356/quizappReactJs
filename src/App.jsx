import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [arr, setarr] = useState([]);
  // const [text, setText] = useState("");
  // console.log(arr);
  // let add = () => {
  //   arr.push(text);
  //   setarr([...arr]);
  // }

  // let delte = (index) => {
  //   arr.splice(index, 1);
  //   setarr([...arr]);

  // }
  // let edit = (i) => {
  //   let a = prompt("Enter Value", arr[i]);
  //   arr[i] = a;
  //   setarr([...arr]);


  // }
  // let deleteall = () => {
  //   while (arr.length > 0) {
  //     arr.pop(text);
  //     setarr([...arr]);
  //   }
  // quiz app
  const [isOn, setIsOn] = useState(false);
  const [questions, setquestion] = useState(
  [
      {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language",
        ],
      },
      {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet",
        ],
      },
      {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor",
        ],
      },
      {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language",
        ],
      },
      {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language",
        ],
      },
    ]
  );
  const [indexnumber, setindx] = useState(0);
  const[marks,setMarks]=useState(0);
  const[result,setresult]=useState(false);
  const chkans=(userselect,correctans)=>{
    if(userselect==correctans){
      setMarks(marks+1);
      console.log("user selected=====" +userselect);
      console.log("correct ans========="+correctans);
    }
    setindx(indexnumber+1);

    if(indexnumber+1==questions.length){
      setresult(true);
    }
  }
  return (

    // <div>
    //   {/* =============COMPONENTS=============== */}

    //   <Button label="DELETE ALL" />
    //   <Button click={add} label="ADD" />
    //   <Button className="dark-button" click={edit} label="edit" />
    //   <Button click={edit} label="update" />
    //   <Input  label1="edit" />
    // </div>

    // =========================  quiz app      ========
    
      <body>
          <div className='appon'>
          <button className='start' onClick={() => setIsOn(!isOn)} >{isOn ? "STOP" : "START"}</button>
      {isOn ? <div>


        {
        result ? <h1 className='marks'>Your Marks Are {marks}</h1> :( 
          <div>
         <h1 className='ques'>{questions[indexnumber].question}</h1>
        
        <div>
          {questions[indexnumber].options.map((x,i)=>{
            return <button className='ans' onClick={()=>{chkans(x,questions[indexnumber].answer)}}>{x}</button>
          })}
        </div>
          </div>
        )
      }
      </div> : " "}
     
      
          </div>
      </body>
    
   
        
      


    

  );
}

export default App;
