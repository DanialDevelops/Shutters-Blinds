import React, { useState } from 'react';
import styles from './Contact.module.css';

const Form = () => {
  // State to store input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(''); // State for response message

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!firstName || !lastName || !phone || !service) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setMessage(''); // Reset message

    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, phone, service }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setMessage(result.message); // Set response message
      // Reset form fields
      setFirstName('');
      setLastName('');
      setPhone('');
      setService('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error submitting form');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.message}>
        <p>Send us a message, and we will contact you to arrange a free consultation:</p>
      </div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        disabled={isSubmitting}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        disabled={isSubmitting}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={isSubmitting}
      />
      <input
        type="text"
        placeholder="Let us know which service(s) you're interested in"
        value={service}
        onChange={(e) => setService(e.target.value)}
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {message && <p className={styles.responseMessage}>{message}</p>} {/* Display response message */}
    </form>
  );
};

export default Form;









































// import React from 'react';
// import styles from './Contact.module.css';
// import { useState } from 'react';

// const Contact = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h1>CONTACT</h1>
//       </div>
//       <div className={styles.content}>
//         <Form />
//         <ImageGallery />
//       </div>
//     </div>
//   );
// }

// const Form = () => {
//   // State to store input values
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [service, setService] = useState('');

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ firstName, lastName, phone, service });
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <div className={styles.message}>
//           <p>Send us a message, and we will contact you to arrange a free consultation:</p>
//         </div>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <input
//         type="tel"
//         placeholder="Phone"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Let us know which service(s) you're interested in"
//         value={service}
//         onChange={(e) => setService(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// const ImageGallery = () => {
//   return (
//     <div className={styles.gallery}>
//       <img src="https://static.wixstatic.com/media/94047a_9bb422cf05e44ef8b868b672ce885f44~mv2.jpg/v1/fill/w_271,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9961.jpg" alt="IMG_9961.jpg" width="271" height="332" style={{width: "271px", height: "332px", objectFit: "cover"}} />
//       <img src="https://static.wixstatic.com/media/94047a_1ebe3a0b28a24eb1933f7b0610b5c3f9~mv2.jpg/v1/fill/w_298,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3394.jpg" alt="IMG_3394.jpg" width="298" height="298" style={{width: "298px", height: "298px", objectFit: "cover"}} />
//       <img src="https://static.wixstatic.com/media/94047a_4afddfb3278040d893cdf2e2762e270e~mv2.jpg/v1/fill/w_273,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9964.jpg" alt="IMG_9964.jpg" width="273" height="140" style={{width: "273px", height: "140px", objectFit: "cover"}} />
//       <img src="https://static.wixstatic.com/media/94047a_265ae2ba63f246dda3d8bcb51a6c636d~mv2.jpg/v1/fill/w_290,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9962.jpg" alt="IMG_9962.jpg" width="290" height="164" style={{width: "290px", height: "164px", objectFit: "cover"}} />
//     </div>
//   );
// }


// export default Contact;