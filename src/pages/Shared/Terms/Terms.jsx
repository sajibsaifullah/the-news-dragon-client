import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minus repellat inventore, qui corporis delectus laboriosam dolorem itaque ullam animi ducimus vero vel id ad non, harum praesentium aliquam minima!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;