const Footer = ()=>{
  const currentYear = new Date().getFullYear();
  return(
    <div className="footer">
      <div className="elements-div">
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Support</p>
        <p>Legal Team</p>
      </div>
      <div className="copyrights">
        <p>Eatabales &copy; {currentYear}</p>
        <p>All Rights are Reserverd</p>
      </div>
    </div>
  )
}

export default Footer;