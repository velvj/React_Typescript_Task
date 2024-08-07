import React from 'react';
import './App.css';
import Greet from './components/greet';
import Person from './components/person';
import PersonList from './components/personList';
import Status from './components/status';
import Oscar from './components/oscar';
import Header from './components/header';
import Button from './components/Buttons';
import Inputs from './components/inputs';
import StyleProp from './components/styleProps';
import LoggedIn from './components/states/loggedIn';
import UserState from './components/states/userState';
import UserTypeAssertion from './components/states/userTypeAssertion';
import CounterReducer from './components/states/counterReducer';
import StrictReducer from './components/states/strictReducer';
import { ThemeContextProvider } from './components/contextes/ThemeContext';
import { Box } from './components/contextes/Box';
import { UserContext } from './components/contextes/userContext';
import { User } from './components/contextes/users';
import { DomRef } from './components/Ref/DomRef';
import { MutableRef } from './components/Ref/MutableRef';
import { Counter } from './components/classComponent/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Lists } from './components/Generics/Lists';
import { RandomNumber } from './components/RestrictProps/RandomNumber';
import { Toast } from './components/TemplateLiteral/Toast';
import { CustomButtion } from './components/HTML/Button';
import { CustomComponent } from './components/HTML/CustomComponent';

function App() {
  const personData={
    fname:'vj',
    lname:'jack'
  }

  const nameList=[{
    first:'vj1',
    last:'jack1'
  },{
    first:'vj2',
    last:'jack2'
  },{
    first:'vj3',
    last:'jack3'
  }]
  return (
    <div className="App">
    <Greet Uname ="vj"  loggedIn={true}/>
    <Person Username={personData} />
    <PersonList names={nameList}/>
    <Status status='success'/>
    <Header>welcome Header childeren</Header>
    <Oscar>
      <Header>Oscar award goes to vj</Header>
    </Oscar>
    <Button  handleClick={(event,id)=>{
      console.log('button clicked',event,id)
    
      
    }}/>
    <Inputs value='vj' handleChange={(e,id)=>
      console.log('testing onchange event',e,id)
    }/>
    <StyleProp style={ {border:'1px solid black',padding:'1rem',color:'red'}}/>
    <LoggedIn/>
    <UserState/>
    <UserTypeAssertion/>
    <CounterReducer/>
<StrictReducer/>
<ThemeContextProvider>
  <Box/>
</ThemeContextProvider>
<UserContext>
  <User/>
</UserContext>
<DomRef/>
<MutableRef/>
<Counter message='welcome vj'/>
<Private isLoggedIn={true} component={Profile}/>
<Lists items={[{id:1,first:'vj',last:'jack'}]} onClick={(val)=>console.log(val)}/>
<RandomNumber value={20} isNegative />
<Toast position='center'/>
<CustomButtion variant='primary' onClick={()=>console.log('clicked')}>
  Primary button
</CustomButtion>
<CustomComponent Uname='vj' countMsg={20} loggedIn/>

    </div>
  );
}

export default App;
