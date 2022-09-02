import { useState } from 'react';
import './Form.css';

function Form() {
  const [pet_type, setpet_type] = useState('');
  const [pet_breed, setpet_breed] = useState('');
  const [pet_age, setpet_age] = useState('');
  const [gender, setgender] = useState('');
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [postcode, setpostcode] = useState('');
  const [number_of_pets, setnumber_of_pets] = useState('');
  const [databack, setdataback] = useState('Pending Price...');

  // fname: 'fname',
  // lname: 'lname',
  // email: 'email',
  // githubuser: 'ghub',
  // password: 'password',
  // location: 'location',
  // intrests: 'interest',

  async function submitForm(e) {
    e.preventDefault();
    // const duration = Number(timeduration);

    const peetData = {
      pet_type,
      pet_breed,
      pet_age,
      gender,
      name,
      address,
      city,
      postcode,
      number_of_pets,
    };

    console.log(peetData);

    const post = await fetch('http://localhost:5000/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(peetData),
    });
    const data = await post.json();

    console.log(data);
    
    setdataback(data.payload)

  }

  function clearForm(e) {
    // e.preventDefault();
    // setDateTime('');
    // setName('');
    // setDescription('');
    // setPaypalEmail('');
    // setTimeDuration('');
    // setTopic('');
    // setZoom('');
  }

  return (
    <>
    <h1>{databack}</h1>
    <div className="form-container">
    
      <form onSubmit={submitForm} className="form-items-container">
        <h2>Get a quote for your pet!</h2>
        <label>Pet Type</label>
        <input
          type="text"
          placeholder="Dog / Cat"
          required
          value={pet_type}
          onChange={(e) => setpet_type(e.target.value)}
        ></input>
        <label>What is your pet's breed?</label>
        <input
          type="text"
          placeholder="e.g. Pug"
          required
          value={pet_breed}
          onChange={(e) => setpet_breed(e.target.value)}
        ></input>
        <label>What is your pet's age?</label>
        <input
          type="text"
          placeholder="e.g. 1, 2, 3 (in years)"
          required
          value={pet_age}
          onChange={(e) => setpet_age(e.target.value)}
        ></input>
        <label>What's your pet's gender</label>
        <input
          type="text"
          placeholder="e.g. Male or Female"
          required
          value={gender}
          onChange={(e) => setgender(e.target.value)}
        ></input>
        <label>What's your pet's Name?</label>
        <input
          type="text"
          placeholder="e.g. Tom"
          required
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <label>First line of your address</label>
        <input
          type="text"
          placeholder="e.g. 10 City Road"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        ></input>
          <label>What's your City?</label>
        <input
          type="text"
          placeholder="e.g. London , Manchester"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        ></input>
            <label>What's your postcode?</label>
        <input
          type="text"
          placeholder="e.g. W11 1ES"
          value={postcode}
          onChange={(e) => setpostcode(e.target.value)}
        ></input>
             <label>How many identical pet's are you insuring?</label>
        <input
          type="text"
          placeholder="e.g. 1 or 2 "
          value={number_of_pets}
          onChange={(e) => setnumber_of_pets(e.target.value)}
        ></input>

        {/* <label>Choose a date and time for your session</label>
        <input
          required
          type="datetime-local"
          value={datetime}
          min="2022-07-28T00:00"
          max="2023-07-21T00:00"
          onChange={(e) => setDateTime(e.target.value)}
        ></input>
        <label>Meeting Length</label>
        <select
          value={timeduration}
          onChange={(e) => setTimeDuration(e.target.value)}
        >
          <option value="30">30 minutes</option>
          <option value="60">60 minutes</option>
          <option value="90">90 minutes</option>
          <option value="120">more than 90 minutes</option>
        </select> */}
        <button className="submit">Submit</button>
        <button className="clear" onClick={clearForm}>
          Clear
        </button>
      </form>
      {/* <p>{sessionTime}</p>
      <p>{fullName}</p>
      <p>{topic}</p>
      <p>{describe}</p>
      <p>{meetingLink}</p>
      <p>{meetingLength}</p> */}
    </div>
    </>
  );
}
export default Form;
