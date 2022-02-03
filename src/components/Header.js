const Header = ({ text }) => {
  return (
    <div className='about bg-green py-5'>
      <div className='container'>
        <div className='col-12'>
          <h1 className='about-title'>{text}</h1>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  text: '... heading ...',
};

export default Header;
