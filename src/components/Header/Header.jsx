import PropTypes from 'prop-types';

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
  };

const Header = ({ title, buttonLabel, buttonLink }) => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl md:text-4xl text-yellow-300 tracking-loose">{title}</h1>
        {buttonLabel && buttonLink && (
          <a href={buttonLink} className="text-gray-300 hover:text-white">{buttonLabel}</a>
        )}
      </div>
    </header>
  );
}

export default Header;
