import React, { useEffect } from 'react';
import './style.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function BacktoTop() {
  // Function to scroll to the top of the page
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", scrollFunction);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  // Function to handle scroll events
  function scrollFunction() {
    const mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  return (
    <div id="myBtn" className='back-to-top' onClick={topFunction}>
      <ArrowCircleUpIcon style={{ color: "var(--color-blue)" }} />
    </div>
  );
}

export default BacktoTop;
