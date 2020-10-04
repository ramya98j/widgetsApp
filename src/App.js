import React,{useState} from 'react';
import Accordian from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items=[
    {
        title: 'What is React?',
        content: 'React is a JS library used to create UI'
    },
    {
        title: 'Why use React?',
        content: 'React is a easily  understood'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
];
 const options=[
     {
         label : "The color is red",
         value: "red"
     },
     {
        label : "The color is pink",
        value: "pink"
    },
    {
        label : "The shade of blue",
        value: "blue"
    }

 ];
 
export default ()=>{
    const [selected,setSelected]=useState(options[0]);
    return (
     
    <div>
        <Header/>
        <Route path="/">
            <Accordian items={items}/>
        </Route>
        <Route path="/search">
            <Search/>
        </Route>
        <Route path="/dropdown">
            <Dropdown label="select a color"
                      options={options}
                      selected={selected}
                      onSelectedChange={setSelected}/>
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
    </div>
    );
};