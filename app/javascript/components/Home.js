import React from "react";
import PropTypes from "prop-types";

// const tweeps = [
//   {
//     name: "Brendan Eich",
//     twitter: "@BrendanEich",
//     about: "Created JavaScript. Co-founded Mozilla and Firefox."
//   },
//   {
//     name: "Dan Abramov",
//     twitter: "@dan_abramov",
//     about: "Working on React. Co-author of Redux and Create React App."
//   },
//   {
//     name: "Addy Osmani",
//     twitter: "@addyosmani",
//     about: "Working on Google Chrome. Creator of TodoMVC and Yeoman."
//   }
// ];

const Person = ({ person }) => {
  const name = person[0];
  const twitter = person[1].match(/\[(.*?)\]/)[1];
  const about = person[2];
  return (
    <div className="person">
      <span className="person__name">{name}</span>
      <a
        className="person__handle"
        target="_blank"
        href={`https://twitter.com/${twitter}`}
      >
        {twitter}
      </a>
      <p className="person__about">{about}</p>
    </div>
  );
};

class Home extends React.Component {
  render() {
    console.log(this.props.result);
    const tweeps = this.props.result;
    window.tweeps = tweeps;
    return (
      <React.Fragment>
        <div className="persons">
          {tweeps.map(person => {
            return (
              <Person key={person[1].match(/\[(.*?)\]/)[1]} person={person} />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  greeting: PropTypes.string
};
export default Home;
