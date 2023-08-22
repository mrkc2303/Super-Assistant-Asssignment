import React from "react";

function Footer() {
  return (
    <div className="footer">
      {/* Warning message */}
      <span>Never submit passwords through Google Forms.</span>
      {/* Disclaimers */}
      <span>
        This content is neither created nor endorsed by Google. 
        {/* Links with underlines */}
        <span className="underline">Report Abuse</span> - 
        <span className="underline">Terms of Service</span> - 
        <span className="underline">Privacy Policy</span>
      </span>
      {/* Google logo and form label */}
      <div>
        <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg" alt="Google" height="24px" width="74px"/>
        <span>Forms</span>
      </div>
    </div>
  );
}

export default Footer;
