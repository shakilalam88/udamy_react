import React, { useState } from 'react';
import './BirthdayReminder.css';
import List from './List';
import data from './data';

const BirthdayReminder = () => {
    const [people,setPeople] = useState(data);

  return (
    <main>
        <section className="container">
            <h3>{people.length} birthdays today</h3>
            <List people={people}/>
            <button onClick={()=>setPeople('')}>clear all</button>
        </section>
    </main>
  )
}

export default BirthdayReminder